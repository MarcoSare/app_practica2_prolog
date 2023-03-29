const baseUrl = 'https://api-prolog.onrender.com/api/v1/'

const getUserByArea= async (idArea)=>{
   const data = await fetch(baseUrl + 'user_by_area/' + idArea).then((response) => response.json()).catch(err => err);
   console.log(JSON.stringify(data))    
   return data
}


const getUserByType= async (type)=>{
   const data = await fetch(baseUrl + 'user_by_type/' + type).then((response) => response.json()).catch(err => err);
   
   return data
}

const getAllUsers= async ()=>{
   const data = await fetch(baseUrl + 'user').then((response) => response.json()).catch(err => err);
   return data
}


export default {getUserByArea, getUserByType, getAllUsers};