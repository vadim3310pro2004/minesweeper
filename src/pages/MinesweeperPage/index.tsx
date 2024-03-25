import { FC } from "react";
import styles from './MinesweeperPage.module.scss';
import { Game } from "features/minesweeper/";


export interface MinesweeperPageProps {

}


const MinesweeperPage: FC<MinesweeperPageProps> = () => {
    
    return (
        <>
            <Game className={styles.root} />
        </>
    );
}


export default MinesweeperPage;