import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurant = async (id) => {
    setResult({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const res = await yelp.get(`/${id}`);
      setResult({
        data: res.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResult({
        data: null,
        loading: false,
        error: "Something went wrong...",
      });
    }
  };
  return [result, searchRestaurant];
};
