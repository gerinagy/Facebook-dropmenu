import React from 'react';
import './index.css'
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';


function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />

      <NavItem icon={<MessengerIcon />} >
        <Messenger></Messenger>
      </NavItem>

      <NavItem icon={<CaretIcon />} >
        <DropdownMenu></DropdownMenu>
      </NavItem>


    </Navbar>
  );
}





function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);


  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}

    </li>
  )
}



function Messenger() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }


  function MessengerItem(props) {
    return (
      <a href={props.href} className="menu-item" >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>

      </a>
    )
  }



  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef} >
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">

          <MessengerItem href="https://www.facebook.com/gergo.nagy.545/"
            leftIcon={<BoltIcon />}
            rightIcon={<ChevronIcon />}>
            Gergo</MessengerItem>

          <MessengerItem 
            href="https://www.instagram.com/ngeri6/"
            leftIcon={<BoltIcon />}
            rightIcon={<ChevronIcon />}>
            Geri Insta
          </MessengerItem>




        </div>

      </CSSTransition>

    </div>
  )
}



function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }


  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>

      </a>
    )
  }


  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef} >
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">

          <DropdownItem>My Profile</DropdownItem>

          <DropdownItem
            leftIcon={<BoltIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>

          <DropdownItem
            leftIcon={<BoltIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="help">
            Help & support
          </DropdownItem>

          <DropdownItem
            leftIcon={<BoltIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="display">
            Display preferences
          </DropdownItem>

          <DropdownItem
            leftIcon={<BoltIcon />}
            rightIcon={<ChevronIcon />}
          >
            Log Out
          </DropdownItem>


        </div>

      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}

        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main"
            leftIcon={<ArrowIcon />}
          >Settings & privacy</DropdownItem>

          <DropdownItem>Setting</DropdownItem>
          <DropdownItem>Privacy Checkup</DropdownItem>
          <DropdownItem>Activity log</DropdownItem>
          <DropdownItem>Language</DropdownItem>


        </div>

      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'help'}

        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main"
            leftIcon={<ArrowIcon />}
          >Help Support</DropdownItem>

          <DropdownItem>Help Centre</DropdownItem>
          <DropdownItem>Help community</DropdownItem>
          <DropdownItem>Suppport Inbox</DropdownItem>



        </div>

      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'display'}

        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main"
            leftIcon={<ArrowIcon />}
          >Disp pref</DropdownItem>

          <DropdownItem>Dark mode</DropdownItem>
          <DropdownItem>Compact mode</DropdownItem>


        </div>

      </CSSTransition>


    </div>
  );
}








export default App;
