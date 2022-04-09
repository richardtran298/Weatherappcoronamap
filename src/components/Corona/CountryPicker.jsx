import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  // New stuff
  const [enteredCountry, setEnteredCountry] = useState('');

  const countryChangeHandler = (event) => {
    // console.log(event.target.value)cl
    setEnteredCountry(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // setFetchedCountries(event.target.value)

    // This sends the entered country to handleCountryChange in Corona2
    handleCountryChange(enteredCountry)

    // const country = {enteredCountry}
    // console.log(country)
  };

  // New stuff end

  // const handleCountryChange = (event) => {
  //   console.log(event);
  // };

  return (
    <div>
      {/* <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value) }
          
          // onChange={handleCountryChange}
        >
          <option value="">Global</option>
          {fetchedCountries.map((country, key) => (
            <option key={key} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl> */}

      {/* New stuff */}
      <form onSubmit={submitHandler}>
        <div className="search">
          <input 
            type="text" 
            // value={""}
            value={enteredCountry}
            // onChange={event => setFetchedCountries(event.target.value)}
            onChange={countryChangeHandler}

            // onKeyPress={handleCountryChange}
            placeholder='Enter Location'
          />
        </div>
        <div className="new-country">
          <button type="submit">Choose Country</button>
        </div>
      </form>

    </div>
  );
};

export default CountryPicker;
