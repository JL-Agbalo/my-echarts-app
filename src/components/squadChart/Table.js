import React from "react";

const Table = ({ data }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Item</th>
          <th className="py-2">Sold</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.sold}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
