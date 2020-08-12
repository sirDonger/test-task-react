import React, {useState} from 'react';
import './index.scss';
import NavBar from '../NavBar';

const StartPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNavigation = (e) => {
        e.preventDefault();

        setIsOpen(!isOpen)
    };

    return (
        <div className='start__wrapper'>
            <div className={isOpen ? 'start__flipped' : 'start'}>
                <div className="start__header">
                    <div onClick={openNavigation} className="start__header__hamburger__menu">
                        <input id="menu__toggle" type="checkbox"/>
                        <label className="start__header__hamburger__menu__menu__btn" htmlFor="menu__toggle">
                            <span/>
                        </label>
                    </div>
                    <h2 className="start__header__title">START</h2>
                </div>
            </div>
            {isOpen && (
                <NavBar
                    isOpen
                    openNavigation={openNavigation}
                />
            )}
        </div>
    );
}

export default StartPage;
