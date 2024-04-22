let myPromise = new Promise((res,rej)=>{
    document.getElementById('mybtn').addEventListener('click',()=>[
        res("resolved through button")
    ])
    document.getElementById('rejbtn').addEventListener("click",()=>[
        rej("rejected")
    ])
})

myPromise.then(res => console.log(res)).catch(err=> console.log(err))