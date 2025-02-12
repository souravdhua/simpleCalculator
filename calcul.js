 
    let display = document.getElementById("display");
    let keys = document.querySelectorAll("#keypad > button") ;
    let fn = "" ;
    let sn = "" ;
    let op = "" ;
    let isF = true ;
    for(let i = 0 ; i < keys.length ; i++){
        keys[i].addEventListener("click",function(){
            if (isF == true){
                fn += keys[i].innerText ;
                display.innerText = fn ;
            }else{
                sn += keys[i].innerText ;
                display.innerText = sn ;
            }
            clear.innerText = "CE"
            
        })
    }
    let ops = document.querySelectorAll("#ops > button") ;
    for(let j = 0 ; j < ops.length ;j++){
        ops[j].addEventListener("click",function(){
            isF = false ;
            op = ops[j].innerText ;
            display.innerText = op ;
        })
    }
    let equal = document.getElementById("equal") ;
    equal.addEventListener("click",function(){
        display.innerText = calcul(fn,sn,op)
    })


    // let clear = document.getElementById("clear") ;
    // clear.addEventListener("click",function(){
    //     display.innerText = "PUT DATA"
    // })

    let clear = document.getElementById("clr") ;
    clear.addEventListener("click",function(){
        location.reload();
        
    })

    // let sqrt = document.getElementById("root") ;
    // sqrt.addEventListener("click",function(){

    // })
    function calcul(fn,sn,op){
        switch(op){
            case "+":
                return Number(fn) + Number(sn) ;
            case '-' :
                return Number(fn) - Number(sn) ;
            case '*' : 
                return Number(fn) * Number(sn) ;
            case '/' : 
                return Number(fn) / Number(sn) ;
            case 'rem' : 
                return Number(fn) % Number(sn) ;
            case '%ge' :
                return Number(fn) * Number(sn) / 100 ;
            case 'power' :
                return Number(fn) ** Number(sn) ;
            case 'root' :
                return Number(fn) ** (0.5) ;
        }
    } 
