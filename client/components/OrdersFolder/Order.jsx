import React from "react";
import { connect } from "react-redux";

const Order = ({ data }) => {
  return (
    <div>
      <table>
        <tbody>
          {data.map((row, id) => (
          <tr key={id}>
            <td>{row.id}</td>
            <td>{row.date.slice(0,16)}</td>
            <td>{row.total}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default connect(null,null)(Order);