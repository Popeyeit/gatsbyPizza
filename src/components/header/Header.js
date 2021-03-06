import React from 'react';
import Logo from '../logo/logo'
import Basket from '../basket/Basket'
console.log(Logo);
console.log(Basket);


const Header = ({showBasket}) => {
    return (
      <header>
  <Logo/>
      {showBasket&& <Basket/>}
      </header>
    );
};

export default Header;