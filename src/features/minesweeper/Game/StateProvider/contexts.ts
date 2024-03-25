import { MinesweeperState } from "../utils";
import { createContext } from "react";

export interface GameContext {
    gameState: MinesweeperState;
    openCell: (payload: number) => void;
    toggleMarkerOnCell: (payload: number) => void;
    restart: () => void;
    setStatus: (status: MinesweeperState['status']) => void;
    error?: any;
}


export const gameContext = createContext<GameContext>({} as GameContext);


export interface TimeContext {
    time: number;
    setTime: (fn: number | ((prev: number) => number)) => void;
    gameState: MinesweeperState;
    restart: () => void;
}

export const menuContext = createContext<TimeContext>({} as TimeContext);