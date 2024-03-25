import { FC } from "react";
import { useAppSelector } from "shared/hooks";
import ProfileCard from "shared/ui/ProfileCard";
import styles from './ProfilePage.module.scss';


export interface ProflePageProps {

}


const ProfilePage: FC<ProflePageProps> = () => {
    const user = useAppSelector(
        state => state.accounts.user
    );
    
    if (user.error) {
        return (
            <h2 className={styles.error}>
                unauthorized
            </h2>
        );
    }

    return (
        <div>
            <ProfileCard
                name='bogdan'
                totalGames={10}
                bestTime={10}
            />
        </div>
    );
};


export default ProfilePage;