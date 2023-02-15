export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=25WulLqGcg0Dqe8fkwSjuh8Se5eAHMcZ&q=${category}&limit=20`
  
    const resp = await fetch(url)
    const {data } = await resp.json()
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    return gifs;
  }

  // con reactStrictMode nos muestra 2 veces "gifs", pero solo es algo de desarrollo, no va a ser asi a la hora de subirlo a producción
  