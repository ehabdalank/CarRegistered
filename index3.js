const Input =localStorage.getItem('type');
const Input2 =localStorage.getItem('colo');
const model1 =localStorage.getItem('Model');
const maker1 =localStorage.getItem('Maker');

 var nam1=document.getElementById('output');

//  nam1.innerHTML= "car name " + Input ;
//  nam1.innerHTML= "car name " + Input2 ;
// nam1.innerHTML= "car name " + model1 ;
// nam1.innerHTML= "car name " + maker1 ;

const ObjectArray =[{
    RegistrationNumber:Input,
    Color:Input2,
    Model:model1,
    Make:maker1,
}];

let result = '';

for (let i = 0; i < ObjectArray.length; i++) {
  result += ` RegistrationNumber: ${ObjectArray[i].RegistrationNumber}
              Color : ${ObjectArray[i].Color},
              Model: ${ObjectArray[i].Model},
              Make:${ObjectArray[i].Make}`;
}

nam1.innerHTML=result;
