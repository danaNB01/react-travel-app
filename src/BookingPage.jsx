import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BookingPage({ onSubmit, travellers }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    payment: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
    navigate("/confirmation");
    handleReset();
  }

  function handleReset() {
    setFormData({ name: "", email: "", phone: "", payment: "" });
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label htmlFor="name">Name</label>
      <input
        required
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        name="email"
        id="email"
        placeholder="example@example.com"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="phone">Phone</label>
      <input
        required
        type="tel"
        name="phone"
        id="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="123-456-7890"
        value={formData.phone}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="visa">Visa</label>
      <input
        required
        type="radio"
        name="payment"
        id="visa"
        value="visa"
        checked={formData.payment === "visa"}
        onChange={handleChange}
      />
      <label htmlFor="credit_card">Credit Card</label>
      <input
        required
        type="radio"
        name="payment"
        id="credit_card"
        value="credit_card"
        checked={formData.payment === "credit_card"}
        onChange={handleChange}
      />
      <br />

      <button type="submit">Confirm Booking for {travellers} travellers</button>
      <button type="reset">Reset</button>
    </form>
  );
}
