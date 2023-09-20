
   const Input = localStorage.getItem('keyname');

 var username1= document.getElementById('name2');

 username1.value=Input;

 const link2 = document.getElementById('link2');
 const Pass3 =document.getElementById('pass3');

 link2.addEventListener('click', function(event){
   const UserPass= localStorage.getItem('Pass')
   const userPass3 = Pass3.value;

   if(UserPass!=userPass3){
      event.preventDefault();
      alert('Incorrect Password')
   }

 })
  




