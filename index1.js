
const first =document.getElementById('pass1');
const Second =document.getElementById('pass2');
const mylink =document.getElementById('link');
const username =document.getElementById('user1');

  mylink.addEventListener("click", function(event) {
    const password1=first.value;
    const password2=Second.value;
    const Myname = username.value;
    const Pass1=first.value;
  localStorage.setItem('keyname', Myname)
  localStorage.setItem('Pass', Pass1)
  
    if(password1!=password2){
      event.preventDefault();
      alert("password not match")
    }
    
  });










