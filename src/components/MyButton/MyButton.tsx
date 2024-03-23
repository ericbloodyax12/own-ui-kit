import React, {FC, ReactNode} from 'react';
import './MyButton.css'
export interface MyButtonProps {
  color: string,
  big?: boolean,
  children: ReactNode
}
const MyButton: FC<MyButtonProps> = ({children, color, big, ...res}) => {
  const rootClasses = ['my-button']
  if (big) {
    rootClasses.push('big-btn')
  }
  return (
      <button {...res} className={rootClasses.join(' ')} style={{color}}>
        {children}
      </button>
  );
};

export default MyButton;