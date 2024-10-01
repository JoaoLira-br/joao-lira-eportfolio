let isModalOpen = false;
let contrastToggle = false;
const landing = document.querySelector("#landing-page");
// this: to avoid scaling by a magic number on moveBackground()
const scaleFactor = 1 / 20;

function toggleContrast() {
  console.log("working");

  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");

  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  console.log(x, y);

  for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    const isOdd = i % 2 !== 0;
    // this: to add variation of movement to shapes
    const boolInt = isOdd ? -1 : 1;
    shape.style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }

}

// async function loading(event){
//     // to avoid auto-refresh from form submission
//     event.preventDefault();
//     // await emailjs.sendForm('service_isr57fo',
//     //     'template_3xrpp8d',
//     //     event.target,
//     //     'rWmXWvrRF7XFHokY4'
//     // );

//     loading.classList.add("modal__overlay--visible")
//     setTimeout(() => {
//         loading.classList.remove("modal__overlay--visible");
//         success.classList.add("modal__overlay--visible")
//         console.log('it worked');

//     }, 1000)
//     console.log('this worked');
//     console.log("it worked!");

// }

async function contact(event) {
  // to avoid auto-refresh from form submission
  event.preventDefault();
  loading.classList.add("modal__overlay--visible");
  try {
    await emailjs.sendForm(
      "service_isr57fo",
      "template_3xrpp8d",
      event.target,
      "rWmXWvrRF7XFHokY4"
    );
    success.classList.add("modal__overlay--visible");
  } catch (error) {
    loading.classList.remove("modal__overlay--visible");
    alert(
      "The email service is temporarily unavailable. Please contact me directly through joao.lirajvl@outlook.com "
    );
  }
}

function toggleModal() {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  //toggle modal
  document.body.classList.add("modal--open");
}
