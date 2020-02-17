import "./index.css"

class Task {
    constructor(props) {
        // Stores the argument in this.props
        this.props = props;
        // Creates a new HTML DIV element
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        this.onClick = this.onClick.bind(this);
        checkbox.addEventListener("change",this.onClick);
        

        this.element.appendChild(checkbox);
        let span = document.createElement("span");
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
        this.element.className = "task";

        let deleteButton = document.createElement("button");
        deleteButton.id="delete";
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", this.delete);
        this.element.appendChild(deleteButton);
    }

    onClick(e) {

        if(e.target.checked){
            console.log("INPUT IS TRUE");
            this.props.done = true;
            this.element.setAttribute("style", "text-decoration: line-through;");
        }
        else if(!e.target.checked){
            this.props.done = false;
            this.element.setAttribute("style", "text-decoration: none;");
        }
        console.log(this);
        console.log(this.props.done);
        console.log(e.target);
        console.log(e.target.checked);
    }
    delete(){
        this.parentNode.remove();
    }
    render() {
        return this.element;
    }
}

export default Task;