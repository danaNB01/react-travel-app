import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function HomePage({ onSubmit }) {
  const [formData, setFormData] = useState({
    destination: "",
    travellers: "",
    date: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData); // THE ONLY DIFFERENCE IS TO SEND THE FORMDATA UP TO APP.
    // AFTER THE ONSUBMIT CALLS getPackages AND SETS THE PACKAGES STATE IN APP,
    // WE CAN THEN NAVIGATE TO THE /PACKAGES PAGE TO SEE THE RESULTS.
    navigate("/packages");
    handleReset();
  }

  function handleReset() {
    setFormData({ destination: "", travellers: "", date: "" });
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label htmlFor="destination">Destination</label>
      <input
        required
        type="text"
        name="destination"
        id="destination"
        value={formData.destination}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="travellers">Num of travellers</label>
      <input
        required
        type="number"
        name="travellers"
        id="travellers"
        value={formData.travellers}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="date">Date of travel</label>
      <input
        required
        type="date"
        name="date"
        id="date"
        value={formData.date}
        onChange={handleChange}
      />
      <br />

      <button type="submit">Search</button>
      <button type="reset">Reset</button>
    </form>
  );
}
