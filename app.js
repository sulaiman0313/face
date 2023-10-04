


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

console.log("https")






































const cards = document.querySelector('.cards')
const upload = document.getElementById('upload')
const rightCard = document.getElementsByClassName('right-cards')[0]

let index = 0
function createCard(){

    // creating Element
    const cardDiv = document.createElement('div')
    const input = document.createElement('input')
    const label = document.createElement('label')
    const btndiv = document.createElement('div')
    const cir = document.createElement('div')


    // attribute
    input.type = 'file'
    input.id = `btn-${index}`
    input.className = 'btn'
    input.accept = 'image/*'
    label.htmlFor = `btn-${index}`
    label.innerHTML = 'upload'


    // class & id 
    btndiv.className = 'btndiv'
    cardDiv.className = `card-${index}`
    cardDiv.className = `card`
    cir.className = 'cir'

    console.log(cardDiv)

    // append child
    btndiv.appendChild(label)
    btndiv.appendChild(input)
    cardDiv.appendChild(cir)
    cardDiv.appendChild(btndiv)
    rightCard.appendChild(cardDiv)

    // eveneListener
    input.addEventListener('input',()=>{

        const card = input.parentElement.parentElement;
        console.log(input)
     cardDiv.style.backgroundImage = `url(${URL.createObjectURL(input.files[0])})` 
        index++;
    })
   
}

upload.addEventListener('click',createCard)



