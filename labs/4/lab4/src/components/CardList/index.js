import React from 'react';
import cardList from './data.json';
import Card from '../Card';

class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          cardList : cardList.cards.map((v,i) => {
              v.id = i;
              return v;
          } ) 
        }
        this.currentId = 4;
    }
    removeCard(id) {
        console.log(id);
    let cardList = this.state.cardList;
    cardList = cardList.filter((v) => v.id !== id)
    this.setState({cardList})
     }   
render() {
    return(
        <>
    {this.state.cardList
    .map((v) => <Card id={v.id} key={v.id} removeCard={(id) => this.removeCard(id)} content={v.content} title={v.title}//pass attributes
    />)}
        </>
    )
}

}
export default CardList;
