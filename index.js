 var display =[];
var clickedNumber = 0
var equal = [];
function add(a, b){
    return a+b
}
function substitute(a,b){
    return a-b
}
function multiply(a,b){
  return a*b
}
function divide(a, b){
    return a/b;
}

function calculator(a,b, operator){
    return operator(a,b);
}
function modulo(a, b){
    return a%b
}
function test(){
   let 
}
for (i=0;i<19; i=i+1){
   document.querySelectorAll("button")[i].addEventListener("click",function(){
    let c = event.srcElement.innerHTML;
    if (c == "AC"){
       
       window.location.reload();
        var r = 0
        document.querySelector("#result").innerHTML = r;
    }
    
    
    else {display.push(c);
    var test = display
    var result = display.join("");
    var reset = result.lastIndexOf();
     
    }
     
     
     if (c == "=" ){
      var addOpera = test.includes("+");
      var subOpera = test.includes("-");
      var divOpera = test.includes("/");
      var multiOpera = test.includes("X");
      var moduloOpera = test.includes("%");

      if( moduloOpera == true){
        var i =  test.indexOf("%")
        let a = test.slice(0, i);
        var ac = a.join("");
        let d =test.slice(i+1, test.length-1)
        let dc = d.join("");
        
        equal = add(Number(ac), Number(dc));
        document.querySelector("#result").innerHTML =equal;
        document.querySelector("#result").style.textalign = "end"

    }
       if( addOpera == true){
        var i =  test.indexOf("+")
        let a = test.slice(0, i);
        var ac = a.join("");
        let d =test.slice(i+1, test.length-1)
        let dc = d.join("");
        
         equal = add(Number(ac), Number(dc));
        document.querySelector("#result").innerHTML =equal;
        document.querySelector("#result").style.textalign = "end"

    }
    if( subOpera == true){
        var i =  test.indexOf("-")
        let a = test.slice(0, i);
        var ac = a.join("");
        let d =test.slice(i+1, test.length-1)
        let dc = d.join("");
        
         equal = substitute(Number(ac), Number(dc));
        document.querySelector("#result").innerHTML =equal;
        document.querySelector("#result").style.textalign = "end"
        document.querySelector("#result").style.fontFamily = "Helvetica Neue"
       }
       if( divOpera == true){
        var i =  test.indexOf("/")
        let a = test.slice(0, i);
        var ac = a.join("");
        let d =test.slice(i+1, test.length-1)
        let dc = d.join("");
        
        equal = divide(Number(ac), Number(dc));
        document.querySelector("#result").innerHTML =equal;
        document.querySelector("#result").style.textalign = "end"
        document.querySelector("#result").style.fontFamily = "Helvetica Neue"
       }
       if( multiOpera == true){
        var i =  test.indexOf("X")
        let a = test.slice(0, i);
        var ac = a.join("");
        let d =test.slice(i+1, test.length-1)
        let dc = d.join("");
        
         equal = multiply(Number(ac), Number(dc));
        document.querySelector("#result").innerHTML =equal;
        document.querySelector("#result").style.textalign = "end"
        document.querySelector("#result").style.fontFamily = "Helvetica Neue"
       }
     }
     
     else{
        document.querySelector("#result").innerHTML = result;
        document.querySelector("#result").style.color = "white"
       document.querySelector("#result").style.fontSize = "60px"
          document.querySelector("#result").style.textalign = "end"
     }
    
    
   
      //  document.querySelector("#result").innerHTML = c;
      
     
  //  console.log(c)
  //  console.log(event);
  

   }
   )
   
   
}
document.addEventListener("keydown", function(){
    var keyPress = event.key
    if(keyPress == "Backspace"){
        equal.pop()
        console.log(equal)
    }
    
})