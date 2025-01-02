import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "./contexts/CitiesContext";

export function convertToEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return ""; // Return empty if invalid
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [lat, lng] = useUrlPosition();
const {createCity} = useCities();
  const [cityName, setCityName] = useState("");
  const [ country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    
    async function fetchCityData() {
      
      try {
        setIsLoadingGeocoding(true);
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        if (!res.ok) throw new Error("Failed to fetch city data");
        const data = await res.json();
        console.log("City Data:", data);
        setCityName(data.city || data.locality || "Unknown city");
        setCountry(data.countryName || "Unknown country");
        setEmoji(data.countryCode || ""); // Default to empty if undefined
      } catch (error) {
        console.error(error);
        setCityName("Error fetching city name");
        setCountry("Error fetching country");
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);


  function handleSubmit(e){
    e.preventDefault();
    
    if (!cityName || !date || !notes) {
      alert("Please fill in all fields");
      return;
    }
    const newCity ={
      cityName,
      country,
      date,
      notes,
      position:{lat, lng}
    }
    createCity(newCity);
    console.log(newCity);
  }
  return (
    
    <form className={styles.form} onSubmit={handleSubmit} >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          placeholder="Enter city name"
        />
        <span className={styles.flag}>
          {emoji ? convertToEmoji(emoji) : "🌍"} 
        </span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          placeholder="Share your experiences here"
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary" disabled={isLoadingGeocoding}>
          {isLoadingGeocoding ? "Loading..." : "Add"}
        </Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;