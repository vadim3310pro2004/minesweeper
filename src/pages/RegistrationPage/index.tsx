import { FC } from "react";
import styles from './RegistrationPage.module.scss';
import RegistrationForm from "features/accounts/RegistrationForm";


export interface LoginPageProps {

}


const LoginPage: FC<LoginPageProps> = ({}) => {
    return (
        <RegistrationForm 
            className={styles.form}
        />
    );
}


export default LoginPage;