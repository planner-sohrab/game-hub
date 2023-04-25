import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6d95cf55ff274acab25ae07e84ed694e",
  },
});
