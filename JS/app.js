gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".contenedor",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".contenedor").offsetWidth,
  },
});

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: "#sobre-mi",
//       start: () => "+=0%",
//       end: () => "+=70%",
//       markers: true,
//       scrub: 2,
//     },
//   })
//   .from("#sobre-mi", { y: innerHeight * 1.2 });

const textoAnimar = document.querySelectorAll(".animation");

textoAnimar.forEach((elemento) => {
  console.log(elemento);
  elemento.innerHTML = elemento.innerHTML
    .split("")
    .map(
      (letra, i) =>
        `<span style="transition-delay:${i * 40}ms;">${letra}</span>`
    )
    .join("");
});


const options = {
  "outerStyle": "disable",
  "hoverEffect": "pointer-blur",
  "hoverItemMove": false,
  "defaultCursor": false,
  "outerWidth": 30,
  "outerHeight": 30
}
magicMouse(options);
            
