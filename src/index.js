function displayFact(response) {
  let factElement = document.querySelector("#fact");

  new Typewriter(factElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#userInstructions");
  let factElement = document.querySelector("#fact");
  let apiKey = "137tbd11fb6e495a5570dofc60ef610d";

  let prompt = `Generate a fun fact about ${instructionsInput.value}`;
  let context =
    "You are a funny AI that writes one short fun fact in HTML. Separate lines with <br /> if needed.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt,
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  factElement.innerHTML = "Generating a fun fact...";

  axios.get(apiURL).then(displayFact);
}

let factsFormElement = document.querySelector("#facts-generator-form");
factsFormElement.addEventListener("submit", generateFact);
