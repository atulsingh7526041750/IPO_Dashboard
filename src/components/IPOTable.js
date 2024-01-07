import React from 'react';

const IPOTable = ({ ipoData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Offering Date</th>
          <th>Price Range</th>
        </tr>
      </thead>
      <tbody>
        {ipoData.map((ipo, index) => (
          <tr key={index}>
            <td>{ipo.companyName}</td>
            <td>{ipo.offeringDate}</td>
            <td>{ipo.priceRangeLow} - {ipo.priceRangeHigh}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IPOTable;
