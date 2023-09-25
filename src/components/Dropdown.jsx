import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Dropdown = ({ filterByRegion }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [options, setOptions] = useState([
    "All",
    "Africa",
    "Asia",
    "Americas",
    "Europe",
    "Oceania",
  ]);
  const [selectedRegion, setSelectedRegion] = useState("filter By Region");

  return (
    <div className="dropdown position-relative d-md-flex justify-content-md-end">
      <div
        onClick={() => {
          setToggleDropdown(!toggleDropdown);
        }}
        className="dropdown-display bg-elements my-3 p-3 rounded-2 justify-content-between w-50 d-flex align-items-center"
      >
        <p className="m-0">{selectedRegion}</p>
        <MdKeyboardArrowDown
          className="fs-4"
          style={{
            transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s ease in out",
          }}
        />
      </div>

      {toggleDropdown && (
        <ul className="dropdown-options bg-elements w-50 rounded-2 py-3 px-0 top-100 mt-2 position-absolute ">
          {options.map((option) => {
            return (
              <li
                onClick={() => {
                  setSelectedRegion(
                    option === "All" ? "Filter by Region" : option
                  );
                  setToggleDropdown(false);
                  filterByRegion(option);
                }}
                className="px-3"
                key={option}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
