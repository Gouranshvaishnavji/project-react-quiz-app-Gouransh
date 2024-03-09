import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";
import questions from "./data.json";

export default class QuizComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      questions:questions,
      currentQuestion:{},
      nextQuestion:{},
      prevQuestion:{},
      currentQuestionIndex:0,

      // added new
      score:0,
      correctAnswers:0,
      wrongAnswers:0,
      numberofAnsweredQuestions:0,
      answer:''
    }
  }

  componentDidMount(){
    this.displayQuestion(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.prevQuestion);
  }

  displayQuestion = (questions=this.state.questions, currentQuestion, nextQuestion, prevQuestion)=>{
    let {currentQuestionIndex} = this.state;
    if(this.state.questions.length!==0){
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex+1];
      prevQuestion = questions[currentQuestionIndex-1];

      const answer = currentQuestion.answer;

      this.setState({
        currentQuestion,
        nextQuestion,
        prevQuestion,
        answer
      })

    }
  }

  handleNextButtonClick = ()=>{
    if(this.state.nextQuestion!==undefined){
      this.setState(prevState=>({
        currentQuestionIndex:prevState.currentQuestionIndex+1
      }),()=>{
        this.displayQuestion(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.prevQuestion)
      })
    }
  }

  handlePrevButtonClick = ()=>{
    if(this.state.prevQuestion!==undefined){
      this.setState(prevState=>({
        currentQuestionIndex:prevState.currentQuestionIndex-1
      }),()=>{
        this.displayQuestion(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.prevQuestion)
      })
    }
  }

  handleQuitButtonClick = () => {
    if (window.confirm("Are you sure you want to quit? Don't leave without trying!")) {
      // Replace "/home" with the path you want to navigate to
      window.location.href = "/";
    }
  }
  
  handleOptionClick =(e)=>{
    if(e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
      this.correctAnswer();
    }
    else{
      this.wrongAnswer();
    }
  }

  // added new
  correctAnswer = ()=>{
    this.setState(prevstate => ({ 
      score: prevstate.score + 1, 
      correctAnswers: prevstate.correctAnswers + 1, 
      currentQuestionIndex: prevstate.currentQuestionIndex + 1, 
      numberofAnsweredQuestions: prevstate.numberofAnsweredQuestions+ 1}),()=>{
        this.displayQuestion(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.prevQuestion);
      })

    alert("correct answer")
    
  }

  // added new
  wrongAnswer = ()=>{
    this.setState(prevstate => ({
      wrongAnswers: prevstate.wrongAnswers + 1,
      currentQuestionIndex: prevstate.currentQuestionIndex + 1,
      numberofAnsweredQuestions: prevstate.numberofAnsweredQuestions+1
      }),()=>{
        this.displayQuestion(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.prevQuestion);
      });

    alert("wrong answer")
  }

  render(){
    console.log(this.state.correctAnswers)
    const {currentQuestion} = this.state;
    return(
      <div className="quiz-container">
        <div className="quiz-question">
          <h2 className="question-title">Question</h2>
          <div className="question-info">
            <span>
              {this.state.currentQuestionIndex + 1} of {this.state.questions.length}
            </span>
            <h5 className="question-text">{currentQuestion.question}</h5>
          </div>

          <div className="options">
            <div className="option-container">
              <p onClick={this.handleOptionClick} className="option">
                {currentQuestion.optionB}
              </p>
              <p onClick={this.handleOptionClick} className="option">
                {currentQuestion.optionA}
              </p>
            </div>
            <div className="option-container">
              <p onClick={this.handleOptionClick} className="option">
                {currentQuestion.optionC}
              </p>
              <p onClick={this.handleOptionClick} className="option">
                {currentQuestion.optionD}
              </p>
            </div>
          </div>

          <div className="button-container">
            <button className="button previous" onClick={this.handlePrevButtonClick}>
              Previous
            </button>
            <button className="button next" onClick={this.handleNextButtonClick}>
              Next
            </button>
            <button className="button quit" onClick={this.handleQuitButtonClick}>
              Quit
            </button>
            <Link
              to="/finish-quiz"
              state={{
                answeredQuestions: this.state.numberofAnsweredQuestions,
                score: this.state.score,
                correctAnswer: this.state.correctAnswers,
                totalQuestions: this.state.questions.length,
                wrongAnswer: this.state.wrongAnswers,
              }}
            >
              <button className="button finish">Finish</button>
            </Link>
          </div>
        </div>
      </div>


    )
  }
}

