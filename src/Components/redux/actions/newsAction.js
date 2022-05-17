import axios from "axios";
import { options } from "../services/newsOption";

export const newsAction = ({ onSuccess, onError }) => {
  return async () => {
    try {
      const response = await axios.request(options);
      onSuccess(response.data.value);
      console.log(response.data.value);
    } catch (error) {
      onError(error);
    }
  };
};
