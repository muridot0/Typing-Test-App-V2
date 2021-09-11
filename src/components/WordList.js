
function WordList({words,
                status,
                currChar, 
                currWordIndex, 
                currCharIndex
            }){
 function getCharClass(wordIdx, charIdx, char){
    if(wordIdx === currWordIndex && charIdx === currCharIndex && currChar && status !== "finished"){
        if (char === currChar){
            return 'has-background-success'
        }else {
            return 'has-background-danger'
        }
    } else if (wordIdx === currWordIndex && currCharIndex >= words[currWordIndex].length){
        return 'has-background-danger'
    } else {
        return ''
    }
 }

 return (
    <div>
        {status === "started" && (
            <div className="section">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            {words.map((word, i) => (
                                <span key={i}>
                                    <span>
                                        {word.split('').map((char, idx) => (
                                            <span className={getCharClass(i, idx, char)} key={idx}>{char}</span>
                                        ))}
                                    </span>
                                    <span> </span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
 )
}

export default WordList