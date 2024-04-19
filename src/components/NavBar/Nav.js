import React from 'react';
import './Nav.css';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const Nav = () => {
    let location = useLocation();

    const resetCookie = () => {
        Cookies.remove('username');
    };

    const shouldShowLinks = !location.pathname.includes('/judge');

    return (
        <div>
            <li className='list'>
                <ul className='brand_section'>
                    <a href='/' className='nav__images'>
                        <img src='/list.png' alt='List' className='list_img' style={{ marginLeft: '15px' }} />
                        <img src='/emblem.png' alt='' className='emblem_img' />
                        <b>e-Vault - Court</b>
                    </a>
                </ul>
                <ul className='options_section'>

                    <div className='nav__options'>
                        {shouldShowLinks && (
                            <a href='/case-filing/case-details' className='case__filing'>
                                <img
                                    src={location.pathname.includes('/case-filing') ? `/case-filing-blue.png` : `/case-filing.png`}
                                    alt=''
                                />
                                <p>Case filing</p>
                            </a>
                        )}
                        <a href='/dashboard/' className='dashboard'>
                            <img src={location.pathname.includes('/dashboard') ? `/e-payment-blue.png` : `/e-payment.png`} alt='' />
                            <p>Dashboard</p>
                        </a>
                        {shouldShowLinks && (
                            <a href='/queries/' className='queries'>
                                <img src={location.pathname.includes('/queries') ? `/queries-blue.png` : `/queries.png`} alt='' />
                                <p>Queries</p>
                            </a>
                        )}
                    </div>

                </ul>
                <ul className='profile_section'>
                    <div className='profile'>
                        <div className='profile-content'>
                            <p>{Cookies.get('username')}</p>
                            <img src='/down.png' alt='' />
                        </div>
                        <div className='logout-section'>
                            <a href='/' onClick={resetCookie} className='logout-text'>
                                Logout
                            </a>
                        </div>
                    </div>
                </ul>
            </li>
        </div>
    );
};

export default Nav;
