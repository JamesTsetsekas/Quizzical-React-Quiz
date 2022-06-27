export default function Welcome(props) {
  return (
    <div className="welcome">
      <h1>Quizzical</h1>
      <p>Put your trivia skills to the test?</p>
      <button className="btn welcome--btn" onClick={props.startQuiz}>
        Start quiz
      </button>
    </div>
  )
}
