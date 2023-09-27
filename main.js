
function varExample(){
    if(true){
        var son="yokshith";
        document.getElementById("v1").textContent=son;
        son="yokshithpaidi";
        document.getElementById("v1").textContent=son;
        son="paidiyokshith";
    }
}
varExample();

function letExample(){
    if(true){
        let dau="Tanvita";
        document.getElementById("l1").textContent=dau;
        dau="paiditanvita";
    }
     letExample();   
}
function constExample(){
const hubby="eswar";
   document.getElementById("c1").textContent=hubby;
    }
constExample();