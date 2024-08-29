import React from 'react';
import { FaUser, FaBook, FaEnvelope, FaBuilding, FaUserMd, FaChartLine } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="menu">
        <div className="menu-item">
          <FaUser /> Regular Enrollment
        </div>
        <div className="menu-item">
          <FaBook /> Remedial Enrollment
        </div>
        <div className="menu-item">
          <FaBuilding /> Club Management
        </div>
        <div className="menu-item">
          <FaEnvelope /> SMS / EMAIL
        </div>
        <div className="menu-item">
          <FaChartLine /> Attendance
        </div>
        <div className="menu-item">
          <FaUserMd /> Clinic
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
