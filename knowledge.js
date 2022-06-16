let button=document.getElementById("buttor")
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let output = document.getElementById("wen")


let num11=Math.floor(Math.random()*10)
let num22=Math.floor(Math.random()*10)

num1.innerHTML=num11
num2.innerHTML=num22
score= 0

 let know= ()=>{
     let name=document.getElementById("reen").value
  
     let result = document.getElementById("result").value
     result=Number(result)
      
     let ree= num11*num22
     if(ree===result){
         alert(`${name} YOU ARE RIGHT, CLAP FOR YOURSELF`)
         window.location.reload()
         score++
     }else{
        alert(`${name} YOU ARE WRONG, THE ANSWER WAS:  ${ree} TRY AGAIN`)
         window.location.reload()
      
     }
     alert("you scored: "+ score)

    
 }
 button.addEventListener("click",know)
