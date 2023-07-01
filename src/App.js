import React from "react/index";
import { useState } from 'react';
export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [counter, setCounter] = useState(true);
    function ShowSquares(){
        console.log(squares);
    }
    function handleOnClick(i, counter){
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        console.log(nextSquares[i], counter);
        if(counter){
            nextSquares[i] = 'X';

        }else{
            nextSquares[i] = 'O';
        }
        setCounter(!counter);
        setSquares(nextSquares);
    }
    return (
        <div onClick={ShowSquares}>
            <div className='board-row'>
                <Square value={squares[0]} click = {() => handleOnClick(0, counter)}/>
                <Square value={squares[1]} click = {() => handleOnClick(1, counter)}/>
                <Square value={squares[2]} click = {() => handleOnClick(2, counter)}/>
            </div>
            <div className='board-row'>
                <Square value={squares[3]} click = {() => handleOnClick(3, counter)}/>
                <Square value={squares[4]} click = {() => handleOnClick(4, counter)}/>
                <Square value={squares[5]} click = {() => handleOnClick(5, counter)}/>
            </div>
            <div className='board-row'>
                <Square value={squares[6]} click = {() => handleOnClick(6, counter)}/>
                <Square value={squares[7]} click = {() => handleOnClick(7, counter)}/>
                <Square value={squares[8]} click = {() => handleOnClick(8, counter)}/>
            </div>
        </div>
    );
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            console.log("You win!");
            return squares[a];
        }
    }
    return null;
}
function Square({value, click}) {
    return <button className="square" onClick={click}>{value}</button>;
}