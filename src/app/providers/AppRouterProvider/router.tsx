import MainLayout from "pages/layouts/mainLayout";
import { createBrowserRouter } from "react-router-dom";
import MinesweeperPage from "pages/MinesweeperPage";
import LoginPage from "pages/LoginPage";
import RegistrationPage from "pages/RegistrationPage";
import PlayersListPage from "pages/PlayersListPage";
import ProfilePage from "pages/ProfilePage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: 'login/',
                element: <LoginPage />,
            },
            {
                path: 'registration/',
                element: <RegistrationPage />,
            },
            {
                path: 'minesweeper/',
                element: <MinesweeperPage />,
            },
            {
                path: 'players_list/',
                element: <PlayersListPage />,
            },
            {
                path: 'profile/',
                element: <ProfilePage />,
            },
        ],
    },
]);


export default router;