import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import questions from './questions.json';
import QuizQuestion from './components/QuizQuestion';

const TITLE_STATE = 0
const QUESTION_STATE = 1
const TIME_LIMIT = 10 //starting interval for quiz


class TitlePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {titleText: "Welcome to the Quiz!",
    currentState: TITLE_STATE,
    score: 0,
    counter: 0,
    currentQuestion: 0}
    this.counter = 0
    this.timeLimit = TIME_LIMIT
    console.log(this.state);
  }
  nextQuestion(correct) {
    console.log(this.state.score)
    console.log(correct)
    if(correct) {
      this.setState({score: this.state.score+1})
    }
    clearInterval(this.timer)
    console.log(5 > 2)
    console.log(questions.length)
    console.log(this.state.currentQuestion)
    if(this.state.currentQuestion < questions.length - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      })
    } else {
      this.setState({
        currentState: TITLE_STATE,
        titleText: "You've finished the quiz!" 
      })
    }
  }

  start() {
    console.log("Starting!")
    this.setState({counter:0, 
                   currentState: QUESTION_STATE,
                   currentQuestion: 0,
                   score:0
                  })
    /*this.timer = setInterval(() => {
      console.log("INTERVAL")
      this.setState({counter: this.state.counter+1})
      if(this.state.counter < this.timeLimit) {
        this.setState({titleText:"Begin the quiz!" + this.state.counter})
      } else {
        this.setState({titleText: "Time's up!"}) //update title
        clearInterval(this.timer)
      }
    }, 1000); //every 1000 milliseconds it will call the function*/
  }
  restart() {
    this.setState({
      //currentState: TITLE_STATE,
      currentQuestion:0,
      titleText: "Welcome to the Quiz!",
      //score:0
    })
  }
  
  render(props) {
    console.log('RENDER CALLED')
    return (
      <View title='App'>
        <View>{this.timeLimit - this.state.counter}</View>
        {(this.state.currentState === QUESTION_STATE)
         ? <QuizQuestion 
          answers={questions[this.state.currentQuestion].possibleAnswers}
          question={questions[this.state.currentQuestion].question}
          nextQuestion={(a) => this.nextQuestion(a)} />
          : <>
          <Text style={{color: 'purple', fontSize: 35, fontFamily:'Courier New'}} title='title'>{this.state.titleText}</Text>
          {(this.state.currentQuestion !== questions.length -1 ? 
          <Button title="start" color="#4b0082" onPress={() => this.start()}/> :
          <Button title="restart" color="#4b0082" onPress={() => this.restart()}/>)}
          </>
        }
        <Text style={{color: 'purple', fontSize:18, fontFamily:'Courier New'}}>Score: {this.state.score}/5</Text>
      </View>
    )
  }
}
export default function App() {
  return (
    <View style={styles.container}>
      <TitlePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6fa',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'purple',
    borderWidth: 5,
  },
});
