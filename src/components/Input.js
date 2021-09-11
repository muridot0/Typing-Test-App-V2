import {useRef, useEffect} from "react"

function Input({currInput,
                setCurrInput, 
                words,
                currWordIndex, 
                setCurrWordIndex, 
                correct, 
                setCorrect, 
                incorrect, 
                setIncorrect,
                status,
                setCurrChar,
                setCurrCharIndex,
                currCharIndex
            }){

    const textInput = useRef(null)

    useEffect(() => {
        textInput.current.focus()
    }, [status])

    function checkMatch(){
        const wordsToCompare = words[currWordIndex]
        const doesItMatch = wordsToCompare === currInput.trim()
        if (doesItMatch){
            setCorrect(correct + 1)
        } else {
            setIncorrect(incorrect + 1)
        }
    }

    function handleKeyDown({keyCode, key}){
        if (keyCode === 32){
            checkMatch()
            setCurrWordIndex(currWordIndex + 1)
            setCurrCharIndex(-1)
            setCurrInput("")
        } else if (keyCode === 8){
            setCurrCharIndex(currCharIndex - 1)
            setCurrChar("")
        } else {
            setCurrCharIndex(currCharIndex + 1)
            setCurrChar(key)
        }
    }


    return (
        <div className="section control is-expanded">
            <input ref={textInput} disabled={status !== "started"} value={currInput} type="text" className="input" onChange={(e) => setCurrInput(e.target.value)} onKeyDown={handleKeyDown} />
        </div>
    )
   }
   
   export default Input