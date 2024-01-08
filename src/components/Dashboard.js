import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IPOPieChart from './IPOPieChart';
import IPOLineChart from './IPOLineChart';
import IPOBarChart from './IPOBarChart'; 
import './Dashboard.css'
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [ipoData, setIpoData] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);

  useEffect(() => {
    // Fetch IPO data
    axios.get('https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_6d0cee696bc34b0b97b1763fde47c8aa')
      .then(response => setIpoData(response.data))
      .catch(error => console.error('Error fetching IPO data:', error));

    // Fetch currency data
    axios.get('https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_6d0cee696bc34b0b97b1763fde47c8aa')
      .then(response => setCurrencyData(response.data))
      .catch(error => console.error('Error fetching currency data:', error));
  }, []);

  
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  
  const toggleDashboard = () => {
    setShowDashboard(prevShow => !prevShow);
  };

  return (
    <div className="app-container">
      <Sidebar onToggleDashboard={toggleDashboard} />
      {showDashboard && (
        <div className={`dashboard-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1> IPO DASHBOARD</h1>

      <h1> --------------------</h1>


      {/* Tabular Data */}
      <div className="table-container">
        <h2>Upcoming IPOs</h2>
        <h2>---------------</h2>
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Offering Date</th>
              <th>Price Range</th>
            </tr>
          </thead>
          <tbody>
            {ipoData.map(ipo => (
              <tr key={ipo.symbol}>
                <td>{ipo.companyName}</td>
                <td>{ipo.offeringDate}</td>
                <td>{`${ipo.priceRangeLow} - ${ipo.priceRangeHigh}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Currency Exchange Rates */}
      <div className="table-container">
        
        <h2 style={{color:'black'}}>Currency Exchange Rates</h2>
           <h2>------------------</h2>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Rate</th>
              <th>Time Stamps</th>
            
            </tr>
          </thead>
          <tbody>
            {currencyData.map(currency => (
              <tr key={currency.symbol}>
                <td>{currency.symbol}</td>
                <td>{currency.rate}</td>
                <td>{currency.timestamp}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* IPO Pie Chart */}
      <IPOPieChart ipoData={ipoData} />

      {/* IPO Line Chart */}
      <IPOLineChart ipoData={ipoData} />

      <IPOBarChart ipoData={ipoData} />

      <button className="toggle-button" onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button> 
    </div>
      )}
      </div>
  );
};

export default Dashboard;
