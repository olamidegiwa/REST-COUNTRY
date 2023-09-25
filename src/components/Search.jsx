import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { BiSearch } from "react-icons/bi";

const Search = ({ filterByRegion, filterBySearch }) => {
  return (
    <div className="px-5 py-3 bg-main-color custom-text-white d-md-flex align-items-md-center justify-content-md-between">
      <form action="" className="position-relative">
        <BiSearch className="fs-2 position-absolute ms-4 search-icon" />
        <input
          onChange={(event) => {
            filterBySearch(event.target.value.trim().toLowerCase());
          }}
          className="w-100 bg-elements border-0 py-3 rounded-2 custom-text-white"
          type="text"
          placeholder="Search for a Country..."
        />
      </form>

      <Dropdown filterByRegion={filterByRegion} />
    </div>
  );
};

export default Search;
