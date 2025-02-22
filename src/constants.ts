// Black pieces

import blackPawn from './assets/pieces/bP.png';
import blackKing from './assets/pieces/bK.png';
import blackRook from './assets/pieces/bR.png';
import blackBishop from './assets/pieces/bB.png';
import blackQueen from './assets/pieces/bQ.png';
import blackKnight from './assets/pieces/bN.png';

// White pieces

import whitePawn from './assets/pieces/wP.png';
import whiteKing from './assets/pieces/wK.png';
import whiteRook from './assets/pieces/wR.png';
import whiteBishop from './assets/pieces/wB.png';
import whiteQueen from './assets/pieces/wQ.png';
import whiteKnight from './assets/pieces/wN.png';
export const BOARD: any = {
    A8: ['bR1', blackRook, 'light'],
    B8: ['bK1', blackKnight, 'dark'],
    C8: ['bB1', blackBishop, 'light'],
    D8: ['bQ', blackQueen, 'dark'],
    E8: ['bK', blackKing, 'light'],
    F8: ['bB2', blackBishop, 'dark'],
    G8: ['bK2', blackKnight, 'light'],
    H8: ['bR2', blackRook, 'dark'],
    A7: ['bP1', blackPawn, 'dark'],
    B7: ['bP2', blackPawn, 'light'],
    C7: ['bP3', blackPawn, 'dark'],
    D7: ['bP4', blackPawn, 'light'],
    E7: ['bP5', blackPawn, 'dark'],
    F7: ['bP6', blackPawn, 'light'],
    G7: ['bP7', blackPawn, 'dark'],
    H7: ['bP8', blackPawn, 'light'],
    A6: ['', '', 'light'],
    B6: ['', '', 'dark'],
    C6: ['', '', 'light'],
    D6: ['', '', 'dark'],
    E6: ['', '', 'light'],
    F6: ['', '', 'dark'],
    G6: ['', '', 'light'],
    H6: ['', '', 'dark'],
    A5: ['', '', 'dark'],
    B5: ['', '', 'light'],
    C5: ['', '', 'dark'],
    D5: ['', '', 'light'],
    E5: ['', '', 'dark'],
    F5: ['', '', 'light'],
    G5: ['', '', 'dark'],
    H5: ['', '', 'light'],
    A4: ['', '', 'light'],
    B4: ['', '', 'dark'],
    C4: ['', '', 'light'],
    D4: ['', '', 'dark'],
    E4: ['', '', 'light'],
    F4: ['', '', 'dark'],
    G4: ['', '', 'light'],
    H4: ['', '', 'dark'],
    A3: ['', '', 'dark'],
    B3: ['', '', 'light'],
    C3: ['', '', 'dark'],
    D3: ['', '', 'light'],
    E3: ['', '', 'dark'],
    F3: ['', '', 'light'],
    G3: ['', '', 'dark'],
    H3: ['', '', 'light'],
    A2: ['wP1', whitePawn, 'light'],
    B2: ['wP2', whitePawn, 'dark'],
    C2: ['wP3', whitePawn, 'light'],
    D2: ['wP4', whitePawn, 'dark'],
    E2: ['wP5', whitePawn, 'light'],
    F2: ['wP6', whitePawn, 'dark'],
    G2: ['wP7', whitePawn, 'light'],
    H2: ['wP8', whitePawn, 'dark'],
    A1: ['wR1', whiteRook, 'dark'],
    B1: ['wK1', whiteKnight, 'light'],
    C1: ['wB1', whiteBishop, 'dark'],
    D1: ['wQ', whiteQueen, 'light'],
    E1: ['wK', whiteKing, 'dark'],
    F1: ['wB2', whiteBishop, 'light'],
    G1: ['wK2', whiteKnight, 'dark'],
    H1: ['wR2', whiteRook, 'light'],
};
