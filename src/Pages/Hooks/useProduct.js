import { useEffect, useState } from "react";

const useProsuct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://blooming-peak-90984.herokuapp.com/data")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product, setProduct];
};
export default useProsuct;
