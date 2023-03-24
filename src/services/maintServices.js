const baseUrl = 'http://localhost:3001/api/v1/'



const addMaint = async (id_area, id_computer,date, support, maint ) =>{
    const body={
        "id_area": `${id_area}`,
        "id_computer":`${id_computer}`,
        "date" : `${date}`,
        "support" : `${support}`,
        "type" : `${maint}`,
        "is_completed" : false
    }
    const data =  await fetch(baseUrl + 'maintenance', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response)
    .catch(console);
    return data;
}


const getMaintBySupport= async (idSupp)=>{
    const data = await fetch(baseUrl + 'maintenance_by_support/' + idSupp).then((response) => response.json()).catch(err => err);
    //console.log(JSON.stringify(data))    
    return data
 }

export default {addMaint, getMaintBySupport};