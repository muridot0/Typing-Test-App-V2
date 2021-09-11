

function StartButton({setCountDown, 
                    seconds, 
                    status, 
                    setStatus,
                    setCorrect,
                    setIncorrect,
                    setWords,
                    getWords,
                    setCurrWordIndex,
                    setCurrChar,
                    setCurrCharIndex,
                    setCurrInput
                }){
    const start = () => {
        if (status === "finished"){
            setCurrWordIndex(0)
            setCorrect(0)
            setIncorrect(0)
            setWords(getWords())
            setCurrChar("")
            setCurrCharIndex(-1)
        }
        if (status !== "started"){
            setStatus("started")
            let interval = setInterval(() => {
                setCountDown((prevCount) => {
                    if (prevCount === 0){
                        clearInterval(interval)
                        setStatus("finished")
                        setCurrInput("")
                        return seconds
                    } else {
                        return prevCount - 1
                    }
                })
            }, 1000)
        }
    }

    return (
        <div className="section">
            <button onClick={start} className="button is-info is-fullwidth">
                Start
            </button>
        </div>
    )
   }
   
   export default StartButton