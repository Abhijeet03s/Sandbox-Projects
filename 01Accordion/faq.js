const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");;
const faqs = [];


function showFaq() {
  faqs.forEach((e) => {
    accordianBody.appendChild(e)
  })
}

function createFaq() {
  faqData.forEach((e) => {
    let div = document.createElement("div")
    let question = e['question']
    let id = e['id']
    let answer = e['answer']
    div.classList.add("faq")
    div.innerHTML = `
            <div class="faq_header">
              <h3 class="">${question}</h3>
              <button class="show_btn" data-id="${id}">+</button>
           </div>
             <p class="hidden" id="${id}">${answer}       
             </p>
    `
    faqs.push(div)
  })
}

function btnStatusUpdate() {
  let buttons = document.querySelectorAll(".show_btn");
  buttons.forEach((b) => {
    b.addEventListener("click", () => {
      let id = b.getAttribute("data-id");
      let text = document.getElementById(id);
      text.classList.toggle("hidden");
    });
  })
}


createFaq()
showFaq()
btnStatusUpdate();
