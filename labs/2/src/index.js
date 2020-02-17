import Card from "./components/Card/index.js"; // TODO: Replace this with the correct import statement  
// Should this line be here if index.css is imported in the other file?

function runOnLoad(){    // Create a container for us    
    let element = document.createElement("div");    
    element.id = "container";    
    document.body.appendChild(element);    
    var newCard = new Card({content:"Sample value provided"});
    element.appendChild(newCard.render());
    // Store the content of new cards in an array
    
    // I'll leave this here as an example
    // let cards = ["card1","card2","card3","card4","card5"]
    // for of means put each element in the variable on the left (var card)
    // for (var card of cards) {
        // var newCard = new Card({content:card});    
        // element.appendChild(newCard.render());
    // }
}
window.addEventListener("DOMContentLoaded", runOnLoad);