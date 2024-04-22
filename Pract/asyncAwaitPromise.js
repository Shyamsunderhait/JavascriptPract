function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let walking = true;
            if(walking){
                resolve("dog is walking")
            }else{
                reject("walking rejected")
            }
        }, 1500);  
    })
}
function jogg(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let jog = false;
            if(jog){
                resolve(" is walking")
            }else{
                reject("walking rejected")
            }
        }, 1500);  
    })
}

async function fun() {
    try{const walkingdog = await walkDog();
    console.log(walkingdog);
    const joggin = await jogg();
    console.log(joggin);
    }catch(error){
        console.log(error);
    }
}
fun()