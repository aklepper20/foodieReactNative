import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer tKzzyWCgbC2YcXx3Tj464VIDDxmAl7ZzBDoTafDMS13WJjb6CdjFnEunb_hL4szcXDRYsnKqWHyoJS50CwKyzMpf0Jr81sisRfg6_cAh14DCG2BpxYkAq6_39CA1YnYx",
  },
});
