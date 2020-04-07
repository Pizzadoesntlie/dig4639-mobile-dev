import React from 'react'
import { Button, Text } from 'react-native'

class QuizQuestion extends React.Component {
    render() {
        return(
            <>
            <Text style={{fontSize: 25, color: 'purple', fontFamily:'Courier New'}}>{this.props.question}</Text>
            {this.props.answers.map((v, i) => {
                return <Button
                color = '#4b0082'
                title={v.text}
                key={i}
                onPress={() => this.props.nextQuestion(v.correct)}></Button>
            })}
            </>
        )
    }
}
export default QuizQuestion