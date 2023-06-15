function login(name,type){
    if(type==true){
        return "successfully"
    }
    else{
        return "failed"
    }
}
let r1=login("kevika",true)
console.log(r1);

let r2=login("gayi",false)
console.log(r2);