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

let arr = Array.map((item) => {
  return `   
  <div class="card">
  <div class="qus-card">
  <h2>${item.question}</h2>
  <button class="btn">
  <img src="assets/images/plus.svg" class="plus">
  <img src="assets/images/minu.svg" class="hide minus"></button>
  </div> 
  <div class="answer-card hide">
  <p>${item.answer}</p>
  </div>
  </div>`
});
let div = document.querySelector('.small')
let arrjoin = arr.join('')
div.innerHTML = arrjoin

let btn = document.querySelectorAll('.btn')
btn.forEach((item) => {
  item.addEventListener('click', (e) => {
    let ans = e.target.closest('.qus-card').nextElementSibling
    let plusBtn = e.target.querySelector('.plus');
    let minusBtn = e.target.querySelector('.minus');

    ans.classList.toggle('hide')
    plusBtn.classList.toggle('hide');
    minusBtn.classList.toggle('hide');
    console.log(e.target.nextElementSibling)
  });
});