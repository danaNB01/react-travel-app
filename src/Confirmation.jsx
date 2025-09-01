export default function Confirmation({ name, email, phone, destination, date, travellers,totalPrice }) {
  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Thank you for your booking. We look forward to serving you!</p>
      <h3>Flight Details:</h3>
        <ul>
            <li>Name: {name}</li>
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
            <li>Destination: {destination}</li>
            <li>Date of Travel: {date}</li>
            <li>Number of Travellers: {travellers}</li>
            <li>Total Price: ${totalPrice}</li>
        </ul>

    </div>
  );
}
