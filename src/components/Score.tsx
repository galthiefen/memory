type ScoreProps = {
    moves: number
    bestScore: number
}

function Score(props: ScoreProps) {
    return (
        <div className="score-container">
            <div className="score">
                <div>
                    <span>Mosse: </span> {props.moves}
                </div>
                {localStorage.getItem('bestScore') && (
                    <div>
                        <span>Record: </span> {props.bestScore}
                    </div>
                )}
            </div>
            <div>
                <button className="button" onClick={() => {window.location.reload()}}>RESTART</button>
            </div>
        </div>
    )
}

export default Score