import { push } from 'connected-react-router';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

type NavButtonProps = {
  link: string;
};

const NavButton: FC<NavButtonProps> = ({ link, children }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(push(link));
      }}
    >
      {children}
    </button>
  );
};

export default NavButton;
