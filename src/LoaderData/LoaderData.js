

const loadData= async () =>{
 const res = await fetch('jobCategory.json')
const products = await res.json()

console.log(products)
 


 return products
}





export {loadData}