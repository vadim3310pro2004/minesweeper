import { ComponentPropsWithoutRef, FC } from 'react';
import styles from './PlayersList.module.scss';
import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';
import { fetchPlayers } from 'entities/minesweeper/api/getPlayers.api';
import PlayerCard from './PlayerCard';


export interface PlayersListProps extends ComponentPropsWithoutRef<'div'> {

}


const PlayersList: FC<PlayersListProps> = ({ className, ...props }) => {
    const classes = clsx(
        styles.root,
        className
    );

    const { error, data } = useQuery({
        queryKey: ['PLAYERS_LIST'],
        queryFn: fetchPlayers,
        refetchInterval: false,
        refetchOnWindowFocus: false,
        retry: 0,
    });

    if (error) {
        return (
            <section className={styles.error}>
                <h2>
                    error:
                </h2>
                <p>
                    {error.message}
                </p>
            </section>
        );
    }

    return (
        <div className={classes} {...props}>
            {data?.map(item => (
                <PlayerCard key={item.user} {...item} />
            ))}
        </div>
    );
};


export default PlayersList;