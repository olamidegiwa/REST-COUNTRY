import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ allCountries }) => {
  return (
    <div className="bg-main-color py-5 custom-text-white text-start px-5 all-countries">
      {allCountries.map((country) => {
        const { name, population, region, capital, flags } = country;
        // console.log(country);

        return (
          <div key={name.common} className="bg-elements">
            <Link
              to={`/${name.common}`}
              className="bg-elements rounded-2 text-decoration-none custom-text-white"
              key={name.common}
            >
              <img
                className="w-100 rounded-top"
                src={flags.png}
                alt={flags.alt}
              />
              <div className="d-flex flex-column gap-1 p-5">
                <h2 className="mb-3">{name.common}</h2>
                <p className="m-0">
                  <strong>Population:</strong> {population.toLocaleString()}
                </p>
                <p className="m-0">
                  <strong> Region:</strong> {region}
                </p>
                <p className="m-0">
                  <strong> Capital:</strong>{" "}
                  {capital ? capital[0] : name.common}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
