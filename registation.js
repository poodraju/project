
const submit = document.getElementById('button');
const inputfield = document.getElementsByClassName('name')

submit.onclick = async() => {
    const name = inputfield[0].value;

    const res=await fatch('https://api.agify.io?name=?${name}',
    {method:'GET', redirect:'follow'})
    .then(response => response.json())
    .then(result =>{
        return result
    })
    .catch(error => console.log('error',error));
    const cardTitele = document.getElementsByClassName('card-title')[0]
    cardTitele.innerHTML=name.toupperCass();
    document.getElementsByClassName('card-text')[0].innerHTML = 'The age of $ {name} is $ {res}'
}