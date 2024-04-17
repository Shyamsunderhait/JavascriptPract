// left right triangle
let n = 5
for(let i = 1 ;i<=n ;i++){
    let str = "* ";
    console.log(str.repeat(i));
}

//Lower right triangle

for (let i = 1; i <=n; i++) {
    let str = "* ";
    let space = '  ';
    console.log(space.repeat((n-i)) +str.repeat(i));    
}

// Lower right triangle

for(let i = n ; i>= 1;i--){
    let str = "* ";
    let space = '  ';
    console.log(space.repeat(n-i)+str.repeat(i));
}

//lower left triangle

for (let i = n; i >= 1; i--) {
    let str = "* ";
    console.log(str.repeat(i));    
}

// Diamond 

for (let i = 1; i <=n; i++) {
    let str = "*";
    let space = ' ';
    console.log(space.repeat(n-i)+str.repeat(i*2-1));    
}
for (let i = n-1; i >=1; i--) {
    let str = "*";
    let space = ' ';
    console.log(space.repeat(n-i)+str.repeat(i*2-1))    
}

//Hollow diamond star

for (let i = 1; i <=n; i++) {
    let str = '';
    
    for (let j = 1; j <=2*n; ++j) {
        if(i+j==n+1 || (i == j - n + 1)){
            str += '*'
        }else {
            str += ' ';
        }
    }
    console.log(str);
}
for (let i = n - 1; i >=1; i--) {
    let str = '';    
    for (let j = 1; j <=2 * n; ++j) {
        if(i+j== n+1 || i == j -n + 1){
            str += '*';
        }else{
            str += ' ';
        }
    }
    console.log(str);
}
// Inverted Hollow Diamond pattern

for (let i = 1; i <=n; i++) {
        let str =  '';
        for (let j = 1; j < 2 * n; ++j) {
            if(i + j > n + 1 && (i > j - n + 1))
            str += ' ';            
            else
            str+= '*'
        }
        console.log(str);
}
for (let i = n - 1; i >= 1; i--) {
        let str = '';
   for (let j = 1; j < 2 * n; ++j) {
        if(i + j > n + 1 && (i > j - n + 1))
        str += ' ';
        else
        str += '*';    
   }         
   console.log(str);
}