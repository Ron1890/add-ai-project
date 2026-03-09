function generateFact(event){
    event.preventDefault();
    
new Typewriter("#fact", {
  strings: "The first literal computer bug was a real moth found stuck in a Harvard Mark II computer in 1947 by Grace Hopper's team",
  autoStart: true,
  delay:1,
});
}
let factsFormElement = document.querySelector("facts-generator-form");
factsFormElement.addEventListener("submit",generateFact);