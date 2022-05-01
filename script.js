
document.addEventListener('DOMContentLoaded', () => {
 const eye1 = document.querySelector('#eye1')
 const pass1 = document.querySelector('#pass1')
 var passHidden1 = true

 eye1.onclick = () => {
  if(passHidden1){
   passHidden1 = false
   eye1.setAttribute('src', 'visible.svg')
   pass1.type = 'text'
  } else if (!passHidden1){
   passHidden1 = true
   eye1.setAttribute('src', 'hidden.svg')
   pass1.type = 'password'
  }
 }


}) 