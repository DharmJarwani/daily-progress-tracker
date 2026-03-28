const STORAGE_KEY = "daily_entries";

export const getEntries = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveEntry = (entry) => {
  const existing = getEntries();
  const updated = [...existing, entry];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};