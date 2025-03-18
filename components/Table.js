"use client";

export default function Table({ columns, data, renderRow, noDataText = "No hay informacion disponible" }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                {renderRow(row)}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">
                {noDataText}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
