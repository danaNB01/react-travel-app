import { useNavigate } from "react-router-dom";

export default function Package({ pkg, totalPrice }) {
  const navigate = useNavigate();
  return (
    <li>
      <img src={pkg.image} alt={pkg.destination} width="200" />
      <h2>{pkg.destination}</h2>
      <p>Available Dates: {pkg.date}</p>
      <p>Price: ${totalPrice}</p>
      <p>Description: {pkg.description}</p>

      <button onClick={() => navigate("/booking")}>Book flight now</button>
    </li>
  );
}
