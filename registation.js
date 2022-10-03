'use strict'
const submit = document.getElementById('submit');
const inputfield = document.getElementsByClassName('raju')

console.log(submit)

submit.onclick = async() => {
    console.log('button clicked')
    console.log(inputfield[0].value)
    const name = inputfield[0].value;

    const res=await fetch(`https://api.agify.io?name=${name}`,//backtic(`)its show in down os esc button//
    {method:'GET', redirect:'follow'})
    .then(response => response.json())
    .then(result =>{
        return result
    })
    .catch(error => console.log('error',error));
    const cardTitele = document.getElementsByClassName('card-title')[0]
    cardTitele.innerHTML=name.toUpperCase();
    document.getElementsByClassName('card-text')[0].innerHTML = `The age of ${name} is ${res.age}`
    console.log(res)
}