import { useState } from "react";
import EntryForm from "./components/EntryForm";
import EntryTable from "./components/EntryTable";
import { getEntries, deleteEntry } from "./services/localStorageService";

function App() {
  const [entries, setEntries] = useState(getEntries());

  const refreshEntries = () => {
    setEntries(getEntries());
  };

  const handleDelete = (index) => {
    deleteEntry(index);
    refreshEntries();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Daily Progress Tracker</h1>

      <EntryForm onSave={refreshEntries} />
      <EntryTable entries={entries} onDelete={handleDelete} />
    </div>
  );
}

export default App;