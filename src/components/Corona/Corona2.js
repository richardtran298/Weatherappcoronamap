import React from "react";
// import { Cards, Chart, CountryPicker } from "./Corona";
import Cards from "./Cards";
import Chart from "./Chart";
import CountryPicker from "./CountryPicker";
import styles from "./Corona2.module.css";
import { fetchData } from "../../api";

class Corona2 extends React.Component {
  state = {
    data: {},
    country: "",
  };

  // state = {
  //   data: {}
  //   };
  

  async componentDidMount() { 
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    // const data = this.state;
    // const country = this.props.country;
    // const country = this.props.data.country;

      // const { data, country } = this.props.cData;

    return (
      <div className={styles.container}>
        <Cards data={data} country={country}/>
        {/* <Cards data={data} country={country} handleCountryChange={countryOfLocation}/> */}


        {/* This was commented, it calls the function handleCountryChange with the entered 
        country in countrypicker.
        this.handleCountryChange refers to  */}
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default Corona2;
