// src/components/SampleGame.js

import React, { useState, useEffect, useCallback } from 'react';

const SampleGame = () => {
    const gameWidth = 400;
    const gameHeight = 400;
    const squareSize = 20;
    const initialPosition = { x: 0, y: 0 };

    // Define generateRandomPosition before its usage
    const generateRandomPosition = () => {
        const randomX = Math.floor(Math.random() * (gameWidth / squareSize)) * squareSize;
        const randomY = Math.floor(Math.random() * (gameHeight / squareSize)) * squareSize;
        return { x: randomX, y: randomY };
    };

    const [position, setPosition] = useState(initialPosition);
    const [direction, setDirection] = useState('right');
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [objectPosition, setObjectPosition] = useState(generateRandomPosition());
    const [bombPosition, setBombPosition] = useState(generateRandomPosition());
    const [gameStarted, setGameStarted] = useState(false);

    const startGame = () => {
        setGameOver(false);
        setScore(0);
        setPosition(initialPosition);
        setObjectPosition(generateRandomPosition());
        setBombPosition(generateRandomPosition());
        setGameStarted(true);
    };

    const endGame = () => {
        setGameStarted(false);
        setGameOver(true);
    };

    const checkCollisions = useCallback(() => {
        if (position.x === objectPosition.x && position.y === objectPosition.y) {
            setScore(score + 10);
            setObjectPosition(generateRandomPosition());
        }

        if (position.x === bombPosition.x && position.y === bombPosition.y) {
            endGame();
        }
    }, [position, objectPosition, bombPosition, score]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            e.preventDefault();
            if (!gameStarted) return;

            switch (e.key) {
                case 'ArrowUp':
                    if (direction !== 'down') setDirection('up');
                    break;
                case 'ArrowDown':
                    if (direction !== 'up') setDirection('down');
                    break;
                case 'ArrowLeft':
                    if (direction !== 'right') setDirection('left');
                    break;
                case 'ArrowRight':
                    if (direction !== 'left') setDirection('right');
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [direction, gameStarted]);

    useEffect(() => {
        if (!gameStarted) return;

        const moveSquare = () => {
            switch (direction) {
                case 'up':
                    setPosition((prevPos) => ({
                        ...prevPos,
                        y: Math.max(prevPos.y - squareSize, 0)
                    }));
                    break;
                case 'down':
                    setPosition((prevPos) => ({
                        ...prevPos,
                        y: Math.min(prevPos.y + squareSize, gameHeight - squareSize)
                    }));
                    break;
                case 'left':
                    setPosition((prevPos) => ({
                        ...prevPos,
                        x: Math.max(prevPos.x - squareSize, 0)
                    }));
                    break;
                case 'right':
                    setPosition((prevPos) => ({
                        ...prevPos,
                        x: Math.min(prevPos.x + squareSize, gameWidth - squareSize)
                    }));
                    break;
                default:
                    break;
            }

            checkCollisions();
        };

        const interval = setInterval(() => {
            moveSquare();
        }, 200);

        return () => clearInterval(interval);
    }, [direction, gameStarted, gameWidth, gameHeight, squareSize, checkCollisions]);

    return (
        <div>
            {!gameStarted && !gameOver && (
                <div style={{ textAlign: 'center' }}>
                    <button onClick={startGame} className="btn-primary">Start Game</button>
                </div>
            )}

            {gameStarted && (
                <div style={{ width: gameWidth, height: gameHeight, border: '1px solid black', position: 'relative', margin: '0 auto' }}>
                    <div
                        style={{
                            width: squareSize,
                            height: squareSize,
                            backgroundColor: 'blue',
                            position: 'absolute',
                            top: position.y,
                            left: position.x
                        }}
                    ></div>

                    <div
                        style={{
                            width: squareSize,
                            height: squareSize,
                            backgroundColor: 'green',
                            position: 'absolute',
                            top: objectPosition.y,
                            left: objectPosition.x
                        }}
                    ></div>

                    <div
                        style={{
                            width: squareSize,
                            height: squareSize,
                            backgroundColor: 'red',
                            position: 'absolute',
                            top: bombPosition.y,
                            left: bombPosition.x
                        }}
                    ></div>

                    <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
                        Score: {score}
                    </div>
                </div>
            )}

            {gameOver && (
                <div style={{ textAlign: 'center' }}>
                    <h2>Game Over!</h2>
                    <p>Your score: {score}</p>
                    <button onClick={startGame} className="btn-primary">Play Again</button>
                </div>
            )}
        </div>
    );
};

export default SampleGame;
