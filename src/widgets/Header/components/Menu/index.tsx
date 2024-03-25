import { FC, 
    // useState
 } from "react";
import { Button } from "shared/ui";
import telephoneIcon from "shared/assets/telephone.svg";
import styles from './Menu.module.scss';
// import { CSSTransition } from 'react-transition-group';
import Nav from "./Nav";
import { ReactSVG } from "react-svg";
import DropMenu from "shared/ui/DropMenu";


export interface MenuProps {

}


const Menu: FC<MenuProps> = ({ }) => {
    // const [active, setActive] = useState(false);

    return (
        <>
            <DropMenu
                icon={
                    <Button
                        className={styles.button}
                    // onClick={() => setActive(prev => !prev)}
                    >
                        <ReactSVG src={telephoneIcon} />
                    </Button>
                }
            >
                <Nav />
            </DropMenu>

            {/* <CSSTransition
                in={active}
                timeout={500}
                classNames={{
                    enterActive: styles.entering,
                    exitActive: styles.exiting,
                }}
                unmountOnExit
            >
                <Nav />
            </CSSTransition> */}
        </>

    );
}


export default Menu;
// const Menu: FC<MenuProps> = ({ }) => {
//     const [active, setActive] = useState(false);

//     return (
//         <>
//             <Button 
//                 className={styles.button} 
//                 onClick={() => setActive(prev => !prev)}
//             >
//                 <ReactSVG src={telephoneIcon} />
//             </Button>
//             <CSSTransition
//                 in={active}
//                 timeout={500}
//                 classNames={{
//                     enterActive: styles.entering,
//                     exitActive: styles.exiting,
//                 }}
//                 unmountOnExit
//             >
//                 <Nav />
//             </CSSTransition>
//         </>

//     );
// }


// export default Menu;