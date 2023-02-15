// se recomienda primero React, dsp importaciones de 3ros y luego nuestro codigo, y por ultimo funciones que no son componentes o hooks

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { img, isLoading } = useFetchGifs(category);

  console.log({ img, isLoading });

  return (
    <>
      <h3>{category}</h3>
      
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      <ol className="card-grid">
        {img.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </ol>
    </>
  );
};

// se usa la desestructuracion para acceder a todos las props del json

// id url image particular

// nunca debemos colocar la ejecucion de una funcion dentro de un functional component, porque cada vez q el FC se vuelva a renderizar va a volver a ejecutar la funcion, por consecuencia va a volver a ejecutar la peticion http

// El useEffect es un hook de react que sirve para disparar efectos secundarios, procesos que queremos ejecutar cuando un cambio suceda
