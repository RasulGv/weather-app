import React, { useState } from 'react';
import { useWeather } from '../weathercontext/Weathercontext';
import searchin from '../../components/searchbar/SearchBar.module.css';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {setLocation } = useWeather();
  const handleSearch = () => {
    setLocation(searchTerm);
    setSearchTerm("")
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div className={searchin.bar}>
      <div className={searchin.inputContainer}>
        <CiSearch className={searchin.icon} />
        <input
          type="text"
          placeholder="Search for location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className={searchin.input}
        />
      </div>
      {/* <button onClick={handleSearch} className={searchin.button}></button> */}
    </div>
  );
};
export default SearchBar;