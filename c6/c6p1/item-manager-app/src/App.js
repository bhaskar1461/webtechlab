import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    console.log("Items changed:", items);
  }, [items]);

  const addItem = (event) => {
    event.preventDefault();
    const value = input.trim();
    if (value === "") return;

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = value;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, value]);
    }

    setInput("");
  };

  const editItem = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, itemIndex) => itemIndex !== index));
    if (editIndex === index) {
      setEditIndex(null);
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Segoe UI, sans-serif" }}>
      <h1>Item Manager</h1>
      <form onSubmit={addItem} style={{ marginBottom: "12px" }}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter item"
          style={{ padding: "8px", marginRight: "8px", width: "250px" }}
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      {items.length === 0 && <p>No items yet.</p>}

      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {item}{" "}
            <button type="button" onClick={() => editItem(index)}>
              Edit
            </button>{" "}
            <button type="button" onClick={() => deleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
