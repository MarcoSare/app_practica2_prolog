const baseUrl = 'https://api-prolog.onrender.com/api/v1/'

const getAllAreas= async ()=>{
   const data = await fetch(baseUrl + 'areas').then((response) => response.json()).catch(err => err);
    return data
}
export default {getAllAreas};