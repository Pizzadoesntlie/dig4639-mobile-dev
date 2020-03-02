import React from 'react';
import "./index.css";

class Card extends React.Component {
    render() {

        return (
            <div className = "card">
           {this.props.content}
           <input type="button" value="delete" className="close" onClick={(e) => this.props.removeCard(this.props.id)} />
           </div>
        )
    }
}
export default Card;