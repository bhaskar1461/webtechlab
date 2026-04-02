import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setFilterData(result);
      } catch (fetchError) {
        setError(fetchError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearch(query);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilterData(filtered);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Segoe UI, sans-serif" }}>
      <h1>Data Driven ReactJS Application</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
        style={{ padding: "8px", width: "280px", marginBottom: "16px" }}
      />

      {filterData.length > 0 ? (
        <ul>
          {filterData.map((item) => (
            <li key={item.id} style={{ marginBottom: "12px" }}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}
