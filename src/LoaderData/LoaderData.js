

const loadData= async () =>{
 const res = await fetch('jobFeatures.json')
const products = await res.json()


 


 return products
}





export {loadData}