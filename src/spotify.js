export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "4b9e02854c3e459e9dd3ba10800c1115";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//hash returns the part of the URL that follows the # symbol and including #
//href returns the entire URL
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1) //get the first part
    .split("&") //when it comes to & split
    .reduce((initial, item) => {
      let parts = item.split("="); //#accessToken = mysupersecretkey
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
