import React from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faHome, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Outlet } from 'react-router-dom';
import styles from '../custom.module.css';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink to={'/'} className={`navbar-brand fw-bold ${styles.navHover} text-info p-2 rounded border border-info `}  > Habbit Tracker <FontAwesomeIcon icon={faListCheck} /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" d-flex justify-content-end">
                <NavLink className={'btn btn-outline-info fw-bold me-4'}  to="/"> Home <FontAwesomeIcon icon={faHome} /></NavLink>
                <NavLink className={'btn btn-outline-info fw-bold me-4'} to="/create">Create <FontAwesomeIcon icon={faCirclePlus} /> </NavLink>
            </div>
        </div>
    </nav>
    < Outlet/>
    </>
  )
}

export default Navbar