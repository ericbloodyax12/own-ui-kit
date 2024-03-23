import { FC, ReactNode } from 'react';
import './MyButton.css';
export interface MyButtonProps {
    color: string;
    big?: boolean;
    children: ReactNode;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
