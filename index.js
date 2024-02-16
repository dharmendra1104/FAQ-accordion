
const Array = [
    {
      id: 1,
      question: "  What is Frontend Mentor, and how will it help me?.",
      answer: "  Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      id: 2,
      question: "  Is Frontend Mentor free?.",
      answer: "  Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.."
    },
    {
      id: 3,
      question: "  Can I use Frontend Mentor projects in my portfolio?",
      answer: "  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!."
    },
    {
        id: 4,
        question: "  How can I get help if I'm stuck on a Frontend Mentor challenge? ",
        answer: "   The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
      },  
  
  ];

  let arr=Array.map((item)=>{
    return`   
    <div class="card">
    <div class="qus-card">
    <h2>${item.question}</h2>
    <button class="btn"><span>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
    <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
    </svg>
    </span></button>
    </div> 
    <div class="answer-card hide">
    <p>${item.answer}</p>
    </div>
    </div>`
});
let div=document.querySelector('.small')
let arrjoin=arr.join('')
div.innerHTML=arrjoin

let btn = document.querySelectorAll('.btn')
btn.forEach((item) =>{
  item.addEventListener('click',(e) => {
    let ans = e.target.closest('.qus-card').nextElementSibling
    let svg=e.target.querySelector('span')

    ans.classList.toggle('hide')
    if(ans.classList.contains('hide')){
      svg.innerHTML='<path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>'
    }else{
      svg.innerHTML='<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>'
    }
  
  })
})











  

