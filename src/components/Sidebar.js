// Sidebar.js
import React from 'react';

const Sidebar = ({ onToggleDashboard }) => {
  return (
    <div className="sidebar">
      <button onClick={onToggleDashboard}>Toggle Dashboard</button>
    </div>
  );
};

export default Sidebar;
