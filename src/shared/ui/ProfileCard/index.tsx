
import { ComponentPropsWithoutRef, FC } from 'react';
import profileIcon from 'shared/assets/profile.svg';
import styles from './ProfileCard.module.scss';
import clsx from 'clsx';


export interface ProfileProps extends ComponentPropsWithoutRef<'div'> {
    name?: string;
    totalGames?: number;
    bestTime?: number;
}


const Profile: FC<ProfileProps> = ({ className, ...props }) => {
    const classes = clsx(
        className,
        styles.root
    );

    return (
        <div className={classes}>
            <img src={profileIcon} alt="profile image" />
                        
            <div className={styles.profile__grid}>
                <span>
                    name
                </span>
                <span>
                    {props.name}
                </span>
                <span>
                    total games
                </span>
                <span>
                    {props.totalGames}
                </span>
                <span>
                    best time
                </span>
                <span>
                    {props.bestTime}
                </span>
            </div>
        </div>
    );
};


export default Profile;