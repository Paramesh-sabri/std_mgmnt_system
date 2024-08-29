import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Student Management</h1>
      <div className="student-summary">
        <div className="summary-item red">
          <span>00</span> Regular Students
        </div>
        <div className="summary-item purple">
          <span>00</span> Remedial Students
        </div>
        <div className="summary-item green">
          <span>00</span> In Paid Clubs
        </div>
      </div>
    </header>
  );
};

export default Header;
