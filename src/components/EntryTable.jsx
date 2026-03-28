const EntryTable = ({ entries }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>All Entries</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>Project</th>
            <th>Testing</th>
            <th>Hours</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {entries.length === 0 ? (
            <tr>
              <td colSpan="6">No data found</td>
            </tr>
          ) : (
            entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.topic}</td>
                <td>{entry.project}</td>
                <td>{entry.testing}</td>
                <td>{entry.hours}</td>
                <td>{entry.notes}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EntryTable;