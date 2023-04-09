
const loadData=async()=>{
 const res = await fetch('jobCategory.json')
 const data = await res.json()


 return data 
}



export {loadData}