function generatePoem(event) {
    event.preventDefault();

let poemElement = document.querySelector("#poem");

new Typewriter('#poem', {
    strings: "Words Here",
    autoStart: true,
  });


}


let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);