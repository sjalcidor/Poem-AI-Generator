function displayPoem(response){
console.log("poem generated");
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generatePoem(event) {
    event.preventDefault();

let poemElement = document.querySelector("#poem");

let instructionsInput = document.querySelector("#instructions");


let apiKey= "20811777afcctfb386aebf0oe8a480fb";
let context = "You are a Poem expert. Your mission is to generate a romantic 4 line poem in basic HTML. Make sure to follow the user instructions.";
let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}
`;
console.log("Generating Poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiUrl).then(displayPoem);



}


let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);