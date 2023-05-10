import { useEffect, useRef, useState } from "react";
import Card from "./Card";

type BoardProps = {
    setMoves: React.Dispatch<React.SetStateAction<number>>
    setScore: React.Dispatch<React.SetStateAction<number>>
    finishGameCallback: () => void
    cardIds: Array<number>
}

function Board(boardProps: BoardProps) {
    const [openCards, setOpenCards] = useState<Array<number>>([])
    const [clearedCards, setClearedCards] = useState<Array<number>>([])
    const [errors, setErrors] = useState<number>(0)
    const timeout = useRef<NodeJS.Timeout>(setTimeout(() => {}))

    const checkGameOver = () => {
        if (clearedCards.length === boardProps.cardIds.length) {
            boardProps.finishGameCallback();
        }
    }

    const evaluate = () => {
        const [firstCard, secondCard] = openCards;

        if ((firstCard % 8 + 1) === (secondCard % 8 + 1)) {
            setClearedCards((prev) => [...prev, firstCard, secondCard]);
            setOpenCards([]);
            boardProps.setScore((score) => score + 10)
            return;
        }

        boardProps.setScore((score) => score - 5)
        setErrors((prevError) => prevError + 1)
        
        //TODO should call another callback or this callback should be different
        // if (errors === 5) {
        //     boardProps.finishGameCallback();
        // }

        timeout.current = setTimeout(() => {
            setOpenCards([]);
        }, 500);
    }

    const handleCardClick = (id: number) => {
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, id]);
            boardProps.setMoves((moves) => moves + 1);
        }
        else {
            clearTimeout(timeout.current);
            setOpenCards([id]);
        }
    }
    
    useEffect(() => {
        checkGameOver();
    }, [clearedCards]);

    useEffect(() => {
        let timeout: NodeJS.Timeout = setTimeout(() => {});
        if (openCards.length === 2) {
            timeout = setTimeout(evaluate, 300);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [openCards]);

    const checkIsFlipped = (id: number) => {
        return clearedCards.includes(id) || openCards.includes(id);
    };

    const checkIsInactive = (id: number) => {
        return clearedCards.includes(id);
    }

    return (
        <div className="board">
            {boardProps.cardIds.map(index => {
                return <Card
                    key={index}
                    id={index}
                    img={`/img/${ index % 8 + 1 }.png`}
                    isInactive={checkIsInactive(index)}
                    isFlipped={checkIsFlipped(index)}
                    onClick={handleCardClick}
                />
            })}
        </div>
    )
}

export default Board