import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

import { ThemeProvider } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

import Form from "@components/Form";
import EntryList from "@components/EntryList";

import theme from "./theme";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    address: "",
  });

  useEffect(() => {
    const storedEntries = Cookies.get("entries");
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    } else {
      Cookies.set("entries", JSON.stringify([]));
    }
  }, []); // Get existing cookies if available

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addEntry = (e) => {
    e.preventDefault();
    const newEntry = { ...formData, id: uuidv4() }; //Adding Unique Identifier for ID
    setEntries([...entries, newEntry]);
    Cookies.set("entries", JSON.stringify([...entries, newEntry]));
    setFormData({ id: "", name: "", age: "", address: "" });
  };

  const updateEntry = (id) => {
    const updatedEntries = entries.map((entry) =>
      entry.id == id ? { ...entry, ...formData } : entry
    );
    setEntries(updatedEntries);
    Cookies.set("entries", JSON.stringify(updatedEntries));
    setFormData({ id: "", name: "", age: "", address: "" });
  };

  const deleteEntry = (id) => {
    const filteredEntries = entries.filter((entry) => entry.id != id);
    setEntries(filteredEntries);
    Cookies.set("entries", JSON.stringify(filteredEntries));
  };

  const handleSubmit = formData.id ? () => updateEntry(formData.id) : addEntry;

  const handleEdit = (entry) => {
    const { id, name, age, address } = entry;
    setFormData({ id, name, age, address });
  };

  const handleClear = () => {
    setFormData({ id: "", name: "", age: "", address: "" });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Typography variant="h1" gutterBottom>
          Users
        </Typography>
        <Form
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          buttonText={formData.id ? "Update" : "Add"}
          handleClear={handleClear}
        />
        <Typography variant="h3" gutterBottom mt="2rem">
          List of Users
        </Typography>
        <EntryList
          entries={entries}
          handleEdit={handleEdit}
          handleDelete={deleteEntry}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
