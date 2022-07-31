/* eslint-disable array-callback-return */
import React from "react";
import "./Table.css";
import data from "../../data";

const Table = () => {
  const trStyle = {
    backgroundColor: "rgba(237, 249, 248, 1)",
  };
  return (
    <table className='table-container'>
      {data.map((item, i) => {
        return (
          <tr key={i} style={i % 2 !== 0 ? trStyle : null}>
            <td className='table-data'>{item.title}</td>
            <td className='table-data center date'>{item.date}</td>
            <td className='table-data center'>
              <button className='table-button'>{item.link}</button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
