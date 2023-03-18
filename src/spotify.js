const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "01b2ce0803564613a3165d8fc3c4f978";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;