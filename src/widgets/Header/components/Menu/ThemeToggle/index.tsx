import { setTheme } from "entities/accounts/store/account.slice";
import { useEffect } from "react";
import { useAppDispath, useAppSelector } from "shared/hooks";
import { setColorScheme } from "shared/services/theme.services";
import { Button } from "shared/ui";
import styles from './ThemeToggle.module.scss';
import sun from 'shared/assets/sun.svg';
import night from 'shared/assets/night.svg';


const ThemeToggle = () => {
    const theme = useAppSelector(state => state.accounts.colorScheme);
    const dispatch = useAppDispath();
    setColorScheme(theme || '');
    
    useEffect(() => {
        if (!theme) {
            dispatch(
                setTheme(
                    window.matchMedia('(prefers-color-scheme: dark)').matches ?
                        'dark' : 'light'
                )
            );
        }
    }, []);

    const handleClick = () => {
        switch (theme) {
            case 'dark':
                dispatch(setTheme('light'));
                break;
            case 'light':
                dispatch(setTheme('dark'));
                break;
        }
    };

    return (
        <Button 
            className={styles.root}
            onClick={handleClick}
        >
            <img 
                src={theme === 'dark'? sun : night} 
                alt="swich theme icon"
            />
        </Button>
    );
};


export default ThemeToggle;