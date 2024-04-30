// this is a global context
this.a  = 5;
console.log(this.a); //return 5
console.log(this); //returns window object

//eg function
//even if we use arrow function here it will target the window object that this.a= 5
function thisKey(){
    console.log(this.a);
}
thisKey() //returns 5

//behavior of this in objects

let user = {
    name :"shyam",
    age: 21,
    childObje:{
        newName :"SHyamsunderhait",
        getDetails(){
            console.log(this.newName,"and",this.name);
        }
  }
    
}
user.childObje.getDetails()// return shyam

//arrow function 


let user2 = {
    name :"shyam",
    age: 21,
    
        getDetails : ()=>{
            console.log(this.name);//returns nothing
            console.log(this);//return window object
        },

        getDetails2(){
            const nestedArrow = ()=>{
                console.log(this.name);//returns shyam
            }
            nestedArrow()
        }
  
    
}
user2.getDetails();
user2.getDetails2()