import React, { useState } from 'react';
import { drinks, shots, alcoholFree, others } from './data';
import './menu.css'; 


const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState(drinks);
  const [activeButton, setActiveButton] = useState('drinks');
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const showMenu = (menu, buttonName) => {
    setCurrentMenu(menu);
    setActiveButton(buttonName);
    setMenuVisibility(true);
  }

  return (
    <div>
      <div className="menuContainer">
        <div className="menuButtonContainer">
          <button className={`menuButton ${activeButton === 'drinks' ? 'activeButton' : ''}`} onClick={() => showMenu(drinks, 'drinks')}>
            <h4>Drinks</h4>
            <img src={require("../img/barraco bar -01.jpg")} alt="" className="img-botao" />
          </button>

          <button className={`menuButton ${activeButton === 'shots' ? 'activeButton' : ''}`} onClick={() => showMenu(shots, 'shots')}>
            <h4>Shots</h4>
            <img src={require("../img/barraco bar -14.jpg")} alt="" className="img-botao" />
          </button>

          <button className={`menuButton ${activeButton === 'alcoholFree' ? 'activeButton' : ''}`} onClick={() => showMenu(alcoholFree, 'alcoholFree')}>
            <h4>Sem Álcool</h4>
            <img src={require("../img/barraco bar -22.jpg")} alt="" className="img-botao" />
          </button>

          <button className={`menuButton ${activeButton === 'others' ? 'activeButton' : ''}`} onClick={() => showMenu(others, 'others')}>
            <h4>Outros</h4>
            <img src={require("../img/barraco bar -04.jpg")} alt="" className="img-botao" />
          </button>
        </div>

        {isMenuVisible && (
          <div className="menuContainer">
            {currentMenu.map(item => (
              <div key={item.id} className="menuItem">
                <img src={`caminho/para/${item.name.toLowerCase()}.jpg`} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.ingredients}</p>
                <p className="price">{item.price}</p>
                <p>{item.size}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    
  );
}

export default Menu;
