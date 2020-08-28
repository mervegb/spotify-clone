import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Player from "./pages/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi(); //create instance of spotify

function App() {
  const [{ user, token }, dispatch] = useStateValue(); //dispatch sends actions to context

  //use effect run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcOR4hCMhCBwq").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []); //if you want to run it once then empty bracket

  // console.log("person", user);
  // console.log("token", token);

  return (
    <div className="App">
      {/*if there is a token then render the first one if not then render login page */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
