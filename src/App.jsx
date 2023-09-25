import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryDetail from "./pages/CountryDetail";
import HomePage from "./pages/HomePage";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log(data);
      setAllCountries(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const filterByRegion = (region) => {
    const newCountries = allCountries.filter(
      (eachCountry) => eachCountry.region === region
    );
    console.log(newCountries);
    setFilteredCountries(newCountries);
  };
  const filterBySearch = (search) => {
    const newNations = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(search)
    );
    console.log(newNations);
    setFilteredCountries(newNations);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                allCountries={
                  filteredCountries.length > 0
                    ? filteredCountries
                    : allCountries
                }
                isLoading={isLoading}
                filterByRegion={filterByRegion}
                filterBySearch={filterBySearch}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/:countryName"
            element={<CountryDetail darkMode={darkMode} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
