import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useUpdateData = () => {
  const { productId } = useParams();
  console.log(productId);

  const [service, setService] = useState({});
  console.log(service);
  useEffect(() => {
    const url = `https://blooming-peak-90984.herokuapp.com/data/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [productId]);
  return [service, setService];
};
export default useUpdateData;
