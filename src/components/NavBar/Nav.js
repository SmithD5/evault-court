import React from 'react';
import './Nav.css';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const Nav = () => {
    let location = useLocation();

    const resetCookie = () => {
        Cookies.remove('username');
        Cookies.remove('role');
    };

    const judgeLinks = location.pathname.includes('/judge');
    const fileAccessLinks = location.pathname.includes('/file-access');
    const fileCheckLinks = location.pathname.includes('/file-check');

    return (
        <div>
            <li className='list'>
                <ul className='brand_section'>
                    <a href={judgeLinks ? "/dashboard/judge" : fileAccessLinks ? "/dashboard/file-access/main" : "/dashboard/file-check/main"} className='nav__images'>
                        <img src='/list.png' alt='List' className='list_img' style={{ marginLeft: '15px' }} />
                        <img src='/emblem.png' alt='' className='emblem_img' />
                        <b>e-Vault - Court</b>
                    </a>
                </ul>
                <ul className='options_section'>

                    <div className='nav__options'>

                        {judgeLinks && (
                            <a href='/dashboard/judge/' className='dashboard'>
                                <img src={location.pathname.includes('/dashboard') ? `/e-payment-blue.png` : `/e-payment.png`} alt='' />
                                <p>Dashboard</p>
                            </a>
                        )}

                        {fileAccessLinks && (
                            <>
                                <a href='/dashboard/file-access/assigning' className='case__filing'>
                                    <img
                                        src={location.pathname.includes('/assigning') ? `/case-filing-blue.png` : `/case-filing.png`}
                                        alt=''
                                    />
                                    <p>Update Info</p>
                                </a>

                                <a href='/dashboard/file-access/main' className='dashboard'>
                                    <img src={location.pathname.includes('/dashboard/file-access/main') ? `/e-payment-blue.png` : `/e-payment.png`} alt='' />
                                    <p>Dashboard</p>
                                </a>
                                <a href='/dashboard/file-access/queries' className='queries'>
                                    <img src={location.pathname.includes('/queries') ? `/queries-blue.png` : `/queries.png`} alt='' />
                                    <p>Queries</p>
                                </a>
                            </>
                        )}

                        {fileCheckLinks && (
                            <>
                                <a href='/dashboard/file-check/update' className='case__filing'>
                                    <img
                                        src={location.pathname.includes('/file-check/update') ? `/case-filing-blue.png` : `/case-filing.png`}
                                        alt=''
                                    />
                                    <p>Update</p>
                                </a>

                                <a href='/dashboard/file-check/main' className='dashboard'>
                                    <img src={location.pathname.includes('/dashboard/file-check/main') ? `/e-payment-blue.png` : `/e-payment.png`} alt='' />
                                    <p>Dashboard</p>
                                </a>
                                <a href='/dashboard/file-check/queries' className='queries'>
                                    <img src={location.pathname.includes('/file-check/queries') ? `/queries-blue.png` : `/queries.png`} alt='' />
                                    <p>Queries</p>
                                </a>
                            </>
                        )}



                        {/*                         
                        {notJudgeLinks && (
                            <a href='/dashboard/file-access/judge-assigning' className='case__filing'>
                                <img
                                    src={location.pathname.includes('/case-filing') ? `/case-filing-blue.png` : `/case-filing.png`}
                                    alt=''
                                />
                                <p>Judge Assigning</p>
                            </a>
                        )}
                        <a href='/dashboard/file-acc/' className='dashboard'>
                            <img src={location.pathname.includes('/dashboard') ? `/e-payment-blue.png` : `/e-payment.png`} alt='' />
                            <p>Dashboard</p>
                        </a>
                        {notJudgeLinks && (
                            <a href='/queries/' className='queries'>
                                <img src={location.pathname.includes('/queries') ? `/queries-blue.png` : `/queries.png`} alt='' />
                                <p>File Access</p>
                            </a>
                        )} */}
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
