

const addToDb = (id) => {
    let JobApplyCart = {}
    const get = JSON.parse(localStorage.getItem('job-cart'))
    if (get) {
        JobApplyCart = get
    }
    const value = JobApplyCart[id]

    if (value) {
        let sum = value + 1
        JobApplyCart[id] = sum

    }
    else {
        JobApplyCart[id] = 1 

    }

    localStorage.setItem('job-cart' , JSON.stringify(JobApplyCart ))
}


const getStoredCart =() =>{
    let JobApplyCart = {}

    const cartData = JSON.parse(localStorage.getItem('job-cart'))
    if(cartData){
        JobApplyCart = cartData

    }
    return JobApplyCart
}


const removeFromDb=(id)=>{

    const storeJobApplyCart =JSON.parse(localStorage.getItem('job-cart'))
    if(storeJobApplyCart){
        if(id in storeJobApplyCart){
            delete storeJobApplyCart[id]
            localStorage.setItem('job-cart',JSON.stringify(storeJobApplyCart))
        }
    }

}


const allClear=()=>{
 localStorage.removeItem('job-cart')
}

export {addToDb,getStoredCart,removeFromDb,allClear}