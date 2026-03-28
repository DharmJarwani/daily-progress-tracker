import { useState } from "react";
import EntryForm from "./components/EntryForm";
import EntryTable from "./components/EntryTable";
import { getEntries } from "./services/localStorageService";

function App() {
  const [entries, setEntries] = useState(getEntries());

  const refreshEntries = () => {
    setEntries(getEntries());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Daily Progress Tracker</h1>

      <EntryForm onSave={refreshEntries} />
      <EntryTable entries={entries} />
    </div>
  );
}

export default App;