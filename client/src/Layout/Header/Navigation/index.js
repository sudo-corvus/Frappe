import React, { useState } from 'react';

// Components
import Drop from '../Drop';
import MegaMenu from '../MegaMenu';

import { HeaderNav, HeaderLogo, HeaderMenuBtn, HeaderMenu, Logo, MenuLink } from './styles';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [openBurgerMenu, setBurgerMenu] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
    setBurgerMenu(false);
  };
  const handleBurgerMenu = () => {
    setBurgerMenu(!openBurgerMenu);
    setOpen(false);
  };
  return (
    <HeaderNav>
      <HeaderLogo>
        <Logo />
      </HeaderLogo>
      <HeaderMenuBtn open={openBurgerMenu} onClick={handleBurgerMenu} />
      <Drop open={openBurgerMenu} />
      <HeaderMenu open={openBurgerMenu}>
        <MenuLink onClick={handleMenu}>Movies</MenuLink>
        <MenuLink>Series</MenuLink>
        <MenuLink>Top IMDB</MenuLink>
      </HeaderMenu>
      <MegaMenu open={open} />
    </HeaderNav>
  );
};

export default Navigation;
