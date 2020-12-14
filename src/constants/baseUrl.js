export const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4"

export const axiosConfig = {
    headers: { auth: window.localStorage.getItem("token") },
  }; 