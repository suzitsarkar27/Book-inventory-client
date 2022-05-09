import { useEffect, useState } from "react";

const useProsuct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product, setProduct];
};
export default useProsuct;
