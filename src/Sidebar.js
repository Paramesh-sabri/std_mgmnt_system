import React from 'react';
import { FaUserFriends, FaMoneyBill, FaClipboardList, FaEnvelope, FaChartBar, FaClinicMedical } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {/* <img src="school-logo.png" alt="Logo" className="logo" /> */}
        <h3>Preset Admin. System</h3>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/" className="nav-item">
          <FaUserFriends /> Student Management
        </NavLink>
        <NavLink to="/financial" className="nav-item">
          <FaMoneyBill /> Financial Management
        </NavLink>
        <NavLink to="/quality" className="nav-item">
          <FaClipboardList /> Quality Control
        </NavLink>
        <NavLink to="/report" className="nav-item">
          <FaEnvelope /> Report Delivery
        </NavLink>
        <NavLink to="/attendance" className="nav-item">
          <FaChartBar /> Attendance
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
