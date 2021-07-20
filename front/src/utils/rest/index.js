import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const config = {
  getAnimals: async ({
    continent = null,
    weight = null,
    height = null,
    horns = null,
  }) => {
    try {
      const { data } = await api.post(`/list`, {
        continent,
        weight,
        height,
        horns,
      });
      return data;
    } catch (err) {
      console.error(err);
      return [];
    }
  },
};

export default config;
