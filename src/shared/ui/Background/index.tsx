import { ComponentPropsWithoutRef, FC } from "react";
import styles from './Background.module.scss';
import clsx from "clsx";
import Image from "./components/Image";
import VawesCanvas from "./components/VawesCanvas";
// import Vawe from "./components/Vawe";


export interface BackgroundProps extends ComponentPropsWithoutRef<'div'> {

}


const Background: FC<BackgroundProps> = ({ className, ...props }) => {
    const classes = clsx(
        styles.root,
        className,
    );
    
    return (
        <div className={classes} {...props}>
            <VawesCanvas className={styles.canvas} />
            <Image className={styles.image} />
        </div>
    );
}


export default Background;




//     return (
//         <div className={classes} {...props}>
//             <canvas>

//                 <Image className={styles.image} />
//                 {/* {[1, 2, 3, 4].map(i => (
//                     <Vawe key={i} className={styles.vawe} />
//                 ))} */}
//             </canvas>
//         </div>
//     );
// }


// export default Background;