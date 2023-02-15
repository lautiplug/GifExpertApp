import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [img, setImg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImg(newImages);
    setIsLoading(false)
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    img,
    isLoading,
  };
};

// un hook no es mas que una funcion que retorna algo
