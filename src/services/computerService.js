const baseUrl = 'http://localhost:3001/api/v1/'

const getCompByUser= async (idUser)=>{
   const data = await fetch(baseUrl + 'computer_by_user/' + idUser).then((response) => response.json()).catch(err => err);
   //console.log(JSON.stringify(data))    
   return data
}
export default {getCompByUser};