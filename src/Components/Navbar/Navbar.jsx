/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <ul className='nav-items'>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            About Us
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Academic <IoIosArrowDown className='arrow-down' />
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Routine <IoIosArrowDown className='arrow-down' />
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Result
            <IoIosArrowDown className='arrow-down' />
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Notice
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Contact
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Admission
            <IoIosArrowDown className='arrow-down' />
          </a>
        </li>
      </ul>
      <button className='btn'>Log in</button>
    </nav>
  );
};

export default Navbar;
