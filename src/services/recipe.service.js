import axios from "axios";

export const FetchRecipe = {
  async getData(id) {
    try {
      const data = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      return data;
    } catch (error) {
      console.log("ERROR!", error.message);
      throw error;
    }
  },
};
