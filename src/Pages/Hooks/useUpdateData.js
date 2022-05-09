import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useUpdateData = () => {
  const { productId } = useParams();

  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/data/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [productId]);
  return [service, setService];
};
export default useUpdateData;
