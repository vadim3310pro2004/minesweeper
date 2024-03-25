import { Outlet } from "react-router-dom";
import styles from './MainLayout.module.scss';
import Header from "widgets/Header";
import { Background } from "shared/ui";
import { Suspense } from "react";


const MainLayout = () => {
    return (
        <>
            <Background className={styles.bg} />
            <Header className={styles.header} />
            <main className={styles.main}>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
            <footer className={styles.footer}>
            
            </footer>
        </>
    );
}


export default MainLayout;