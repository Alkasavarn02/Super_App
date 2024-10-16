const apiKey = "243af92b78afc335854d2df6dc516f66"

const moviesApi = async(genereId)=> {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genereId}`)
    return response
}


export default moviesApi;


