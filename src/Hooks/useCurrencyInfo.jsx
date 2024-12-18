import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://api.currencyapi.com/v3/latest?apikey=cur_live_dJH1ZI1PCbgYg85horRZFaZrSV3SZar2yoOax63e`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
