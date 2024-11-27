"use client";

import styles from "./page.module.css";
import React, { useState, useEffect } from "react";

interface NasaApod {
  title: string;
  url: string;
  explanation: string;
  date: string;
}

// Function to fetch data from the API
async function getData(count: number): Promise<NasaApod[]> {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?count=${count}&api_key=zdRv9yZGObFyhtPyiCWlzwZ9aLIuayp9UE8gQ468`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from NASA API:", error);
    throw error;
  }
}

// Functional Component
const NasaApp: React.FC = () => {
  const [nasaData, setNasaData] = useState<NasaApod[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(6); // Fetch 6 items
        setNasaData(data);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className={styles.container}>Loading...</div>;
  if (error)
    return <div className={styles.container}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>Astronomy Picture of the Day</div>

      {/* Pictures Grid */}
      <div className={styles.grid}>
        {nasaData.map((item) => (
          <div key={item.date} className={styles.card}>
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
