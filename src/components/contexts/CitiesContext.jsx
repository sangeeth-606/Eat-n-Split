/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      setIsLoading(true); // Ensure loading state is set to true before fetching
      try {
        const response = await fetch("http://localhost:5000/cities");
        const data = await response.json();
        setCities(data);
      } catch {
        alert("Error fetching cities:");
      } finally {
        setIsLoading(false); // Ensure loading state is set to false after fetching
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    // setIsLoading(true); 
    try {
      const response = await fetch(`http://localhost:5000/cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
    } catch {
      alert("Error fetching city:");
    } finally {
      // setIsLoading(false); 
    }
  } 
  async function createCity(newCity) {
    try {
      const response = await fetch(`http://localhost:5000/cities/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setCities(cities=>[...cities, data]);
    } catch {
      alert("Error creating city:");
    } finally {
      // Any cleanup code if needed
    }
  }
  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity,createCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("useCities must be used within a CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
