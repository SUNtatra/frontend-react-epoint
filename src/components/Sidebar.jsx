import React from 'react';
import {NavLink} from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut, IoTime } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
        <aside className="menu pl-2 has-shadow">
            <p className="menu-label">General</p>
            <ul className="menu-list">
            <li>
                <NavLink to={"/dashboard"}><IoHome/> Dashboard</NavLink>
            </li>
            <li>
                <NavLink to={"/Employees"}><IoPricetag/> Valider les congés </NavLink>
            </li>
            <li>
                <NavLink to={"/Employees"}><IoPricetag/> Pointage </NavLink>
            </li>
            <li>
                <NavLink to={"/Employees"}><IoTime/> Jour Ferie </NavLink>
            </li>
            <li>
                <NavLink to={"/Employees"}><IoHome/> Unite </NavLink>
            </li>
          </ul>
          <p className="menu-label">Admin</p>
          <ul className="menu-list">
            <li>
                <NavLink to={"/Pointage"}><IoPerson/> Employees</NavLink>
            </li>

            </ul>
            <p className="menu-label">setting</p>
            <ul className="menu-list">
                <li>
                    <button ClassName="button is-white"><IoLogOut/> Log out</button>
                </li>
            </ul>
        </aside>
    </div>
  );
};

export default Sidebar;
