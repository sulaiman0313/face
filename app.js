

const posted=document.querySelector('.post2')

const inputs=document.querySelector('#postwriting')

const btn=document.querySelector('#post-btn')

btn.addEventListener('click',()=>{
    const value=inputs.value;
    
    const p=document.createElement('p')

    p.innerHTML=value
    posted.appendChild(p)
    inputs.value=""
})

//

const cards = document.querySelectorAll('.cards')
const card = document.querySelectorAll('.card')
const mycard =document.getElementById('mycard')

const cir = document.querySelectorAll('.cir')


const input = document.getElementById('btn')

console.log(card)
input.addEventListener('input',(e)=>{ 
    let index = e.target
    console.log(index)
    mycard.style.backgroundImage = `url(${URL.createObjectURL(input.files[0])})` 

})