import { useState } from "react";
import data from "./data.json";
import "./App.css";
import HomePage from "./HomePage.jsx";
import Package from "./Package.jsx";
import BookingPage from "./BookingPage.jsx";
import Confirmation from "./Confirmation.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  // submittedSearchData -> destination, *travellers*, date
  // packages -> destination, description, image, price, date

  // mock db/backend
  const [submittedSearchData, setSubmittedSearchData] = useState(null);

  // filtered packages from json file
  const [packages, setPackages] = useState([]);

  const [submittedBookingData, setSubmittedBookingData] = useState(null);

  // --- HANDLE SEARCH FORM ---

  function handleSearchSubmit(data) {
    setSubmittedSearchData(data);

    getPackages(data);
  }

  function getPackages(criteria) {
    // Fetching packages based on searchFormData
    setPackages(
      data.filter(
        (pkg) =>
          pkg.destination === criteria.destination && pkg.date === criteria.date
      )
    );

    return packages;
  }

  // --- HANDLE BOOKING FORM ---

  // calculte total price
  // but the packages could have multiple results, so we need to decide how to handle that
  // for now we will just take the first one

  const totalPrice =
    (packages[0]?.price || 0) * (submittedSearchData?.travellers || 0);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage onSubmit={handleSearchSubmit} />} />
        <Route
          path="/packages"
          element={
            <ul>
              {packages.length > 0 ? (
                packages.map((pkg, index) => (
                  <Package key={index} pkg={pkg} totalPrice={totalPrice} />
                ))
              ) : (
                <p>No packages found</p>
              )}
            </ul>
          }
        />
        <Route
          path="/booking"
          element={
            <BookingPage
              onSubmit={(data) => {
                setSubmittedBookingData(data);
              }}
              travellers={submittedSearchData?.travellers}
            />
          }
        />
        <Route
          path="/confirmation"
          element={
            <Confirmation
              {...submittedBookingData}
              {...submittedSearchData}
              totalPrice={totalPrice}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
