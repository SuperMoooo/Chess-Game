import { useState } from 'react';
import { BOARD } from './constants';

export default function Game() {
    const [board, setBoard] = useState<any>(BOARD);
    const [selectedPiece, setSelectedPiece] = useState<string | null>(null);

    const handleDragStartPiece = (e: any) => {
        e.dataTransfer.setData('Text', e.target.id); // Store the piece ID
        setSelectedPiece(e.target.dataset.image);
    };

    const handleDropPiece = (e: any) => {
        try {
            e.preventDefault();
            const piece = e.dataTransfer.getData('Text');
            const newPosition = e.target.dataset.piece;

            if (newPosition && board[newPosition][0] === '') {
                setBoard((prevBoard: any) => {
                    const newBoard: Record<string, any[]> = { ...prevBoard };
                    if (newPosition) {
                        // Remove the piece from the old position
                        for (const [postion, value] of Object.entries(
                            newBoard
                        )) {
                            if (value[0] === piece) {
                                newBoard[postion][0] = '';
                                newBoard[postion][1] = '';
                            }
                        }

                        // Add the piece to the new position
                        newBoard[newPosition][0] = piece;
                        newBoard[newPosition][1] = selectedPiece;
                    }

                    return newBoard;
                });
                e.target.style.border = 'none';
            }
        } catch (err) {
            console.error(err);
        }
    };

    const EnterSquare = (e: any) => {
        try {
            if (board[e.target.dataset.piece][0] == '') {
                e.target.style.border = '2px solid black';
            }
        } catch (err) {
            return;
        }
    };
    const LeaveSquare = (e: any) => {
        e.target.style.border = 'none';
    };
    return (
        <main className=" flex items-center justify-center min-h-[100dvh]">
            <section className="grid grid-cols-8 grid-rows-8">
                {Object.entries(board).map(([position, value]: any, index) => (
                    <div
                        data-piece={position}
                        key={index}
                        onDragOver={(e) => e.preventDefault()}
                        className={`h-16 w-16 flex items-center justify-center *:text-black ${
                            value[2] === 'light'
                                ? 'bg-[#EEEED2]'
                                : 'bg-[#769656]'
                        }`}
                        onDragEnter={EnterSquare}
                        onDragLeave={LeaveSquare}
                        onDrop={handleDropPiece}
                    >
                        <img
                            draggable
                            onDragStart={handleDragStartPiece}
                            id={value[0]}
                            data-image={value[1]}
                            src={value[1]}
                            className=" cursor-pointer"
                        ></img>
                    </div>
                ))}
            </section>
        </main>
    );
}
