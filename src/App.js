import { useState, useEffect } from "react"
import randomWords from "random-words"
import WordList from "./components/WordList"
import Timer from "./components/Timer"
import Input from "./components/Input"
import StartButton from "./components/StartButton"
import DisplayResults from "./components/DisplayResults"

const seconds = 60;
const numOfWords = 200;

function App() {
  const [words, setWords] = useState([])
  const [countDown, setCountDown] = useState(seconds)
  const [currInput, setCurrInput] = useState("")
  const [currWordIndex, setCurrWordIndex] = useState(0)
  const [currCharIndex, setCurrCharIndex] = useState(-1)
  const [currChar, setCurrChar] = useState('')
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [status, setStatus] = useState("waiting")


  
  function getWords(){
    return new Array(numOfWords).fill(null).map(() => randomWords())
  }
  
  useEffect(() => {
    setWords(getWords())
  }, [])

  return (
    <div className="App">
      <Timer countDown={countDown} />
      <Input currCharIndex={currCharIndex} setCurrChar={setCurrChar} setCurrCharIndex={setCurrCharIndex} status={status} correct={correct} setCorrect={setCorrect} incorrect={incorrect} setIncorrect={setIncorrect} currWordIndex={currWordIndex} setCurrWordIndex={setCurrWordIndex} words={words} currInput={currInput} setCurrInput={setCurrInput} />
      <StartButton setCurrInput={setCurrInput} setCurrCharIndex={setCurrCharIndex} setCurrChar={setCurrChar} setCurrWordIndex={setCurrWordIndex} setCorrect={setCorrect} setIncorrect={setIncorrect} setWords={setWords} getWords={getWords} setStatus={setStatus} status={status} setCountDown={setCountDown} seconds={seconds} />
      <WordList currWordIndex={currWordIndex} currChar={currChar} currCharIndex={currCharIndex} status={status} words={words} />
      <DisplayResults status={status} correct={correct} incorrect={incorrect} />
    </div>
  );
}

export default App;
