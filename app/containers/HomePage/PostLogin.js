import 'isomorphic-fetch';



export function PostLogin(type, patientData){
    let BaseUrl = 'https://localhost/patient/login'

    return new Promise((resolve, reject) =>{
        fecth(BaseUrl+type,{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
            method: "POST",
            body : JSON.stringify(patientData)
        })
        .then((Response)=>Response.json())
        .then((ResponseJson) => {
            resolve(ResponseJson);
        })
        .catch((error)=>{
            reject(error)
        })

    })
}