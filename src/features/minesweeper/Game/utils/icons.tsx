import { ReactNode } from "react";
import boombIcon from 'shared/assets/bomb.svg';
import markIcon from 'shared/assets/mark.svg';

export interface Icons extends Record<'boomb' | 'mark', ReactNode> { }


const icons: Icons = {
    boomb: <img src={boombIcon} />,
    mark: <img src={markIcon} />,
}


export default icons;