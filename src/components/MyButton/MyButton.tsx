import React, {FC, ReactNode} from 'react';

export interface MyButtonProps {
  color: string,
  big: boolean,
  children: ReactNode
}
const MyButton: FC<MyButtonProps> = ({children, color, big, ...res}) => {
  return (
      <button {...res} style={{color}}>
        {children}
      </button>
  );
};

export default MyButton;