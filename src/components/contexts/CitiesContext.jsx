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
      try {
        const response = await fetch("http://localhost:5000/cities");
        const data = await response.json();
        setCities(data);
        setIsLoading(true);
      } catch {
        alert("Error fetching cities:");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    // async function fetchCities() {
    try {
      const response = await fetch(`http://localhost:5000/cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
      setIsLoading(true);
    } catch {
      alert("Error fetching cities:");
    } finally {
      setIsLoading(false);
      // }
    }
  } 
  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
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
