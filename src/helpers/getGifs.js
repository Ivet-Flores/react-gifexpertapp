/* los helpers van a ser funciones que realizan un cierto trabajo en específico, lo procesan y hacen algún return */

//Esta función realiza la petición http, trae las imagenes, las procesa y puede retornarlas
export const getGifs = async( category ) => {

    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=2425JFDMselEjcNMMXIkDrRA7rd5wfnn`
    const resp = await fetch (url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }
    })

   return gifs;
}