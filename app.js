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
tl.fromTo('.logo', {boxShadow: "0 0px 0px rgb(1, 1, 1)"}, {boxShadow: "0 0px 7px rgba(3, 154, 255)"})

function lightsOut(){
    document.getElementById("off").style.opacity = "0"
    document.getElementById("off1").style.opacity = "0"
    document.getElementById("off2").style.opacity = "0"
    document.getElementById("off3").style.opacity = "0"
    document.getElementById("off4").style.backgroundImage = "url(black.jpg)"
    document.getElementById("off4").style.opacity = "red"
    document.getElementById("off5").style.backgroundColor = "rgb(170, 170, 170)"
    document.getElementById("off5").style.boxShadow = "0 0px 0px rgb(1, 1, 1)"
    document.getElementById("off6").style.color = "rgb(170, 170, 170)"
    document.getElementById("off7").style.boxShadow = "0 0px 0px rgb(1, 1, 1)"
    document.getElementById("off").style.opacity = "0"
    document.getElementById("off").style.opacity = "0"
    // document.getElementById("parallax").style.opacity = "0"
    // document.getElementById("parallax").style.opacity = "0"


  }