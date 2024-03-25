import { FC, memo } from "react";


export interface PlayerCardProps {
    total_games?: number;
    best_time?: number;
    user?: number;
    user_name?: string
};


const PlayerCard: FC<PlayerCardProps> = memo(
    ({ total_games, best_time, user_name }) => {
        return (
            <div style={{padding: 10, margin: 10, border: '5px solid black'}}>
                <div>
                    otal_games <strong style={{color: 'red'}}>{total_games}</strong>
                </div>
                <div>
                    best_time <strong style={{color: 'red'}}>{best_time}</strong>
                </div>
                <div>
                    user <strong style={{color: 'red'}}>{user_name}</strong>
                </div>
            </div>
        );
    }
);


export default PlayerCard;