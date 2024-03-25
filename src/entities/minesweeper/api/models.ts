

export interface sendNewVictoryRequest {
    time: number;
    id: number;
};

export interface sendNewVictoryResponse {
    best_time: number;
    total_games: number;
};


export interface sendNewLoseRequest {
    id: number;
};


export interface sendNewLoseResponse {
    best_time: number;
    total_games: number;
};


export interface getPlayerResponse {
    best_time: number;
    total_games: number;
    user: number;
    user_name: string;
};