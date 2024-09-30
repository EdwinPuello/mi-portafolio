import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-8xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
          <img
            src={logotext}
            alt="logo"
            className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.6rem] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.titleKey ? 'text-french' : 'text-eerieBlack'
                } hover:text-taupe text-[21px] font-medium 
              uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.titleKey)}>
              <a href={`#${nav.id}`}>{t(nav.titleKey)}</a>
            </li>
          ))}
          <li>
            <li onClick={() => changeLanguage('es')} className={` '
            hover:text-taupe text-eerieBlack text-[21px] font-medium 
              uppercase tracking-[3px] cursor-pointer nav-links`}>
              <a>Español</a>
            </li>
          </li>
          <li onClick={() => changeLanguage('en')} className={` '
            hover:text-taupe text-eerieBlack text-[21px] font-medium 
              uppercase tracking-[3px] cursor-pointer nav-links`}>
            English
          </li>
          <div>
          </div>
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-center justify-end lg:mt-[10rem] -ml-[8px]">
                {navLinks.map((nav) => (
                  <li
                    style={{ fontSize: '25px', marginLeft: '0px', letterSpacing: '0px' }}
                    id={nav.id}
                    key={nav.id}
                    className={`text-eerieBlack lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[25px] mt-[20px] font-bold   uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{t(nav.titleKey)}</a>
                  </li>
                ))}
                <li>
                  <li onClick={() => changeLanguage('es')} className={`text-eerieBlack lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[25px] mt-[20px] font-bold   uppercase tracking-[1px] cursor-pointer`}>
                    <a>Español</a>
                  </li>
                </li>
                <li onClick={() => changeLanguage('en')} className={`text-eerieBlack lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[25px] mt-[20px] font-bold   uppercase tracking-[1px] cursor-pointer`}>
                  English
                </li>
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
