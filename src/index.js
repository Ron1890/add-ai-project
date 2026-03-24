function displayFact(response) {
  

  new Typewriter(factElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
 
  let apiKey = "137tbd11fb6e495a5570dofc60ef610d";

  let prompt = `Generate a fun fact about ${instructionsInput.value}`;
  let context =
    "You are a funny AI that writes one short fun fact in HTML. Separate lines with <br /> if needed.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt,
  )}&context=${context}&key=${apiKey}`;

  let factElement= document.querySelector("#fact");
  factElement.classList.remove("hidden");

 factElement.innerHTML = `<div class= generating>Generating a fun fact about ${instructionsInput.value}`;
  axios.get(apiURL).then(displayFact);
}

let factsFormElement = document.querySelector("#facts-generator-form");
factsFormElement.addEventListener("submit", generateFact);
