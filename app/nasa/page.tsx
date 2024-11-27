"use client";

import styles from "./page.module.css";
import React, { useState, useEffect } from "react";

// Function to fetch data from the API
async function getData(count) {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?count=${count}&api_key=zdRv9yZGObFyhtPyiCWlzwZ9aLIuayp9UE8gQ468`
    );
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching NASA data:", error);
    return [];
  }
}

// Functional Component
const NasaApp = () => {
  const [nasaData, setNasaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(6); 
        setNasaData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className={styles.container}>Loading...</div>;
  if (error) return <div className={styles.container}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>Astronomy Picture of the Day</div>
      
      {/* Pictures Grid */}
      <div className={styles.grid}>
        {nasaData.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.date}>{item.date}</p>
            <img src={item.url} alt={item.title} className={styles.image} />
            <p className={styles.explanation}>{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NasaApp;
