import { useState } from "react";
import { saveEntry } from "../services/localStorageService";


const EntryForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    date: "",
    topic: "",
    project: "",
    testing: "",
    hours: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const handleSubmit = (e) => {
    e.preventDefault();

    saveEntry(formData);

    onSave(); // 🔥 trigger refresh

    setFormData({
      date: "",
      topic: "",
      project: "",
      testing: "",
      hours: "",
      notes: "",
    });
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Add Daily Entry</h2>

      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={formData.date} onChange={handleChange} /><br /><br />

        <input type="text" name="topic" placeholder="Topic" value={formData.topic} onChange={handleChange} /><br /><br />

        <input type="text" name="project" placeholder="Project" value={formData.project} onChange={handleChange} /><br /><br />

        <input type="text" name="testing" placeholder="Testing" value={formData.testing} onChange={handleChange} /><br /><br />

        <input type="number" name="hours" placeholder="Hours" value={formData.hours} onChange={handleChange} /><br /><br />

        <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange}></textarea><br /><br />

        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
};

export default EntryForm;