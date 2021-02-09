const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

tl.fromTo('.parallax', {opacity: 0}, {opacity: 1, duration: 0.1, delay: 1})
tl.fromTo('.parallax', {opacity: 1}, {opacity: 0, duration: 0.1})
tl.fromTo('.parallax', {opacity: 0}, {opacity: 1, duration: 0.1})
tl.fromTo('.parallax', {opacity: 1}, {opacity: 0, duration: 0.3})
tl.fromTo('.parallax', {opacity: 0}, {opacity: 1, duration: 0.1})
tl.fromTo('.namE', {opacity: 0}, {opacity: 1, duration: 0.1})
tl.fromTo('.tip', {opacity: 0}, {opacity: 1, duration: 0.1})
tl.fromTo('.arrow', {opacity: 0}, {opacity: 1, duration: 0.1})
tl.fromTo('.logo', {backgroundColor: "rgb(170, 170, 170)"}, {backgroundColor: "rgb(3, 154, 255)", duration: 0.00001})
tl.fromTo('.logo', {boxShadow: "0 0px 0px rgb(1, 1, 1)"}, {    boxShadow: "0 0px 7px rgba(3, 154, 255)"})

const card = document.querySelector('.test')
const container = document.querySelector('.container')

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
