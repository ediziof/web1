function mudarCorBox() {
    var bx = document.querySelector("#bx1");
    bx.style.backgroundColor = "blue";
    bx.style.borderRadius = "100px";
    
}

function escopoVar(){
    const z = 7;
    var x = 10;
    {
        let x = 5;
        if (x%2==0){
            x=x*2;
        }else{
            x=x*3;
        }
        console.log("Dentro do bloco: " + x);
    }
    console.log("Fora do bloco: "+x);
    console.log("Fora do bloco, valor de z: " + z);
}