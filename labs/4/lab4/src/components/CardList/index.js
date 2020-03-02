import React from 'react';
import cardList from './data.json'

class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          cardList
        }
        this.currentId = 4;
    }
    removeCard(id) {
    let cardList = this.state.cardList;
    cardList = cardList.filter((v) => v.id !== id)
    this.setState({cardList})
     }   
render() {
    return(
        <>
        <input type="text" ref="CardContent" />
    {((this.state.hideCompletedItems) ? this.state.CardList
    .filter((v) => !v.completed) : this.state.CardList)
    .map((v) => <CardList id={v.id} removeCard={(id) => this.removeCard(id)} content={v.content} //pass attributes
    priority={v.priority} 
    completed={v.completed}/>)}
        </>
    )
}

}
