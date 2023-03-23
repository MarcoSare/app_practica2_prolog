const baseUrl = 'http://localhost:3001/api/v1/'

const getUserByArea= async (idArea)=>{
   const data = await fetch(baseUrl + 'user_by_area/' + idArea).then((response) => response.json()).catch(err => err);
   console.log(JSON.stringify(data))    
   return data
}
export default {getUserByArea};