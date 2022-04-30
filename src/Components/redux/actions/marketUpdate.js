import axios from "axios";

export const marketUpdateAction = ({ onSuccess, onError }) => {
  return async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false"
      );
      if (response?.status) {
        onSuccess(response?.data);
      }
    } catch (error) {
      onError(error);
    }
  };
};
