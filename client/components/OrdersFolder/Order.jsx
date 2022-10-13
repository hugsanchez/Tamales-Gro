import React from "react";
import { connect } from "react-redux";

const Order = ({ data = null, columns, hover = true, striped=true }) => {
  const getCaps = (str) => {
    if(str) return str.toUpperCase();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((head, i) => ( 
              <th key={i}>{getCaps(head.field)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.map((row, id) => (
          <tr key={id} className={`${hover&& 'hover'} ${striped&& 'striped'}`}>
            {columns.map((col, i) => ( 
              <td key={i}>{row[col.field]}</td>
            ))}
          </tr>
          ))}
        </tbody>
      </table>
      {data.length ? null : <p>NO ROW TO SHOW!</p>}
    </div>
  )
};

export default connect(null,null)(Order);