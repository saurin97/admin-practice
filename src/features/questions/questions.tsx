import React,{ Component } from 'react';

import Question from '../../shared/component/question/question';
import Result from '../../shared/component/question/result';

export interface QuestionInterface {
    id: number,
    name: string,
    options: string[],
    selectedAns: string,
    correctAns: string
    answered : boolean
}

interface State {
    currentQuestion : number,
    questions : QuestionInterface[],
    displayQuestions : QuestionInterface[],
}

class chat extends Component {
    state:State ={
        currentQuestion: 0,
        questions : [
            {
                id: 0,
                name: 'which of this is not part of javaScript?',
                options: ['reactJs','AngularJs','jQuery','java'],
                selectedAns: '',
                correctAns: 'java',
                answered : false
            },
            {
                id: 1,
                name: 'which of this is inline Element in html?',
                options: ['<div>','<h1>','<span>','<p>'],
                selectedAns: '',
                correctAns: '<span>',
                answered : false
            },
            {
                id: 2,
                name: 'What does CSS stand for?',
                options: ['Creative Style Sheets','Cascading Style Sheets','Computer Style Sheets','Colorful Style Sheets'],
                selectedAns: '',
                correctAns: 'Cascading Style Sheets',
                answered : false
            },
            
        ],
        displayQuestions : [
            {
                id: 0,
                name: 'which of this is not part of javaScript?',
                options: ['Creative Style Sheets','Cascading Style Sheets','Computer Style Sheets','Colorful Style Sheets'],
                selectedAns: '',
                correctAns: 'Cascading Style Sheets',
                answered : false
            },
        ]
    }

    checkAnswer = (answer :string,id:number) => {
        const oldQuestion = this.state.currentQuestion;
        const newCurrentQuestion = oldQuestion + 1;
        
        const questions = [...this.state.questions]
        questions[id].selectedAns = answer
        questions[id].answered = true
        
        this.setState ({
            currentQuestion: newCurrentQuestion,
            questions: questions,
            // displayQuestions : 
        })
    } 

    showResult = (answer :string) => {
        console.log(this.state.questions);
    }

    render () {
        // const question:Question = this.state.questions[this.state.currentQuestion]
        const lastQuestion:number = this.state.questions.length;

        const questionList = this.state.questions;
        return (
            <section className='chat-component'>
                <div className='container'>
                    <h4 className='text-capitalize'>{`Questions & Answers Component`}</h4>
                    {lastQuestion === this.state.currentQuestion && <Result questions= {this.state.questions} />}

                    {lastQuestion !== this.state.currentQuestion && 
                        questionList.map((question:any) => <Question
                            key={question.id}
                            question ={question}
                            checkAnswer= {this.checkAnswer}
                            showResult={this.showResult}
                            lastQuestion = {lastQuestion}
                        />
                    )}
                </div>
            </section>
        )
    }
}

export default chat;