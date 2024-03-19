import React from "react";
import {useState} from "react";
import styles from "./field.module.css";
import Cell from "../cell/cell";
function Field({value}) {
    const [winner, setWinner] = useState(null) //winner
    const [board, setBoard] = useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ])
    const [currentPlayer, setCurrentPlayer] = useState("x")
    const [score, setScore] = useState({ x: 0, y: 0})

    const handleCellClick = (row, cellIndex) => {
        if (board[row][cellIndex] === "") {
            const newBoard = [...board]
            newBoard[row][cellIndex] = currentPlayer
            setBoard(newBoard)
            setCurrentPlayer(currentPlayer === "x" ? "o" : "x")
            isWin()
            
        }
    }
    const isWin = () => {
        if (handleWinner()) {
            if (currentPlayer === "x") {
                setWinner(value.x.nameX)
                keepingScore("x won")
            }
            else {
                setWinner(value.y.nameY)
                keepingScore("y won")

            }
            resetBoard()
        }
    }
    const handleWinner = () => {
        const consecutiveCellsToWin = 5;
        for (let i = 0; i < 5; i++) {
            let countG = 0
            let countV= 0
            for (let j = 0; j < 5; j++) {
                if (board[i][j] === currentPlayer) {
                    countG++
                    if (countG === consecutiveCellsToWin) {

                        return true
                    }
                }
                else {
                    countG = 0
                }
                if (board[j][i] === currentPlayer) {
                    countV++
                    if (countV === consecutiveCellsToWin) {
                        return true
                    }
                }
                else {
                    countV = 0
                }
            }
        }

        for (let i = 0; i < 5 - consecutiveCellsToWin + 1; i++) {
            for (let j = 0; j < 5 - consecutiveCellsToWin + 1; j++) {
                let countDiagonal1 = 0;
                let countDiagonal2 = 0;
                
                for (let k = 0; k < consecutiveCellsToWin; k++) {
                    // Проверяем нисходящую диагональ
                    if (board[i + k][j + k] === currentPlayer) {
                        countDiagonal1++;
                        if (countDiagonal1 === consecutiveCellsToWin) {
                            return true; // есть победитель
                        }
                    } else {
                        countDiagonal1 = 0;
                    }
                    
                    // Проверяем восходящую диагональ
                    if (board[i + k][j + consecutiveCellsToWin - 1 - k] === currentPlayer) {
                        countDiagonal2++;
                        if (countDiagonal2 === consecutiveCellsToWin) {
                            return true; // есть победитель
                        }
                    } else {
                        countDiagonal2 = 0;
                    }
                }
            }
        }
        
        return false; 
        
    }

    const resetBoard = () => {
        setBoard(
        [["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]]
        )

        setCurrentPlayer("x")
        
    }

    const keepingScore = (winner) => {
        if(winner === "x won"){
            setScore(prevScore => ({ ...prevScore, x: prevScore.x + 1 }));
        }else{
            setScore(prevScore => ({ ...prevScore, y: prevScore.y + 1 }));
        }
    }


    return (
        <div>
            <div className={styles.winContainer}>
                {winner ? 
                <div className={styles.cardWin}>
                    <h1 className={styles.winerCard}>{winner} won</h1>
                    <button className={styles.button} onClick={() => { setWinner(null) }}>continue</button>
                </div>
                : 
                <h1></h1>}

            </div>
            <div className={styles.midleContainer}>
                <div className={styles.score}>
                    <div>
                        X
                    </div>
                    {score.x}
                </div>
                <div className={styles.field}>
                    {
                        board.map((row, rowIndex) => (
                            <div key={rowIndex} className={styles.row}>
                                {
                                    row.map((cell, cellIndex) => (
                                        <div  onClick={() => handleCellClick(rowIndex, cellIndex)} key={cellIndex}>
                                            
                                            <Cell value={cell} index={cellIndex} />

                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className={styles.score}>
                    <div>
                        0
                    </div>
                    {score.y}
                </div>
            </div>
                <div className={styles.buttonContainer}>
                    <button onClick={resetBoard} className={styles.button}>start again</button>
                </div>
        </div>
    );
}

export default Field