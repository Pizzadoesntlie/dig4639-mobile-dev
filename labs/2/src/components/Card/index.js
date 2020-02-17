// This uses the style-loader and css-loader webpack plugins to 
// import the text into a style element in the Head element of the document.
import "./index.css" 

// This creates the class definition, which is a set of methods & properties
class Card {

    /** 
     * This is the method called when new Card() is invoked.
     * @param {Object} props contains the properties passed in.
     * E.g. {content:"String"}
    */ 
    constructor(props) {
        // This saves the argument to the property "props"
        this.props = props;
        // This uses the document (the HTML object that the browser gives us)
        // to create a Div tag. It doesn't attach it to the DOM though
        this.element = document.createElement("div");
        // It is assigned to the "element" property by way of "this.element ="
        // This makes a Span element, but also doesn't attach it to DOM
        let span = document.createElement("span");
        // It isn't saved to the object (no this.span)
        // This next line adds the span as a child element of the Div element
        this.element.appendChild(span);
        // This sets the text inside the span to the "content" property of the "props" property.
        span.innerHTML = this.props.content;
        // This assigns the class attribute with the value "card"
        this.element.className = "card";
    }
    // This is a method, as it is defined at the top level of the class (e.g. not inside another method)
    render() {
        // This returns the element that was saved with the class
        // It relies on the calling code to attach it to the DOM.
        return this.element;
    }
}
// This makes the class available for others to import
export default Card;