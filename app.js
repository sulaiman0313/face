

const posted=document.querySelector('.post2')

const input=document.querySelector('#postwriting')

const btn=document.querySelector('#post-btn')

btn.addEventListener('click',()=>{
    const value=input.value;
    
    const p=document.createElement('p')

    p.innerHTML=value
    posted.appendChild(p)
})