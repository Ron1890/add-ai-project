function displayFact(response) {
  new Typewriter("#fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#userInstructions");

  let apiKey = "137tbd11fb6e495a5570dofc60ef610d";

  let prompt = `User instructions or topic: generate a fun fact about ${instructionsInput.value}`;

  let content =
    "You are a very funny AI who likes to tell short fun facts. Generate a fun fact in HTML and separate each line with <br/>. Make sure the fact reflects the user's topic.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${content}&key=${apiKey}`;

  axios.get(apiURL).then(displayFact);
}

let factsFormElement = document.querySelector("#facts-generator-form");
factsFormElement.addEventListener("submit", generateFact);
