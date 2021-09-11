function DisplayResults({correct, 
                        incorrect, 
                        status
                    }){
    return (
    <div>
        {status === "finished" && (
            <div className="section">
                <div className="columns">
                    <div className="column has-text-centered">
                        <p className="is-size-5">
                            Words per minute:
                        </p>
                        <p className="is-size-1 has-text-primary">
                            {correct}
                        </p>
                    </div>
                    <div className="column has-text-centered">
                        <p className="is-size-5">
                            Accuracy:
                        </p>
                        <p className="is-size-1 has-text-info">
                            {Math.round(correct / (incorrect + correct) * 100)} %
                        </p>
                    </div>
                </div>
            </div>
        )}
    </div>
    )
   }
   
   export default DisplayResults