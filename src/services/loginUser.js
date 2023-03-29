const baseUrl = 'https://api-prolog.onrender.com/api/v1/'


const veriUser = async (email, password) =>{
    const body={
        "email": `${email}`,
        "password":`${password}`
    }
    const data =  await fetch(baseUrl + 'login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response)
    .catch(console);

    return data;
}

export default {veriUser};