const Text=document.getElementById('text1');
const Text2=document.getElementById('text2');
const CarMaker=document.getElementById('First');
const CarModel=document.getElementById('Second');
const Link=document.getElementById('linkIn');

Link.addEventListener('click', ()=>{
   const Name = Text.value;
   const carmaker = CarMaker.value;
   const carmodel = CarModel.value;
   const text2 = Text2.value;
  localStorage.setItem('type', Name)
  localStorage.setItem('Maker', carmaker)
  localStorage.setItem('Model', carmodel)
  localStorage.setItem('colo', text2)

 }) 