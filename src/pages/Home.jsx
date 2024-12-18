import React, { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import { BASE_URL } from "../constant";
import Loading from "../components/Loading";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <Box className="mt-[25px]">
        <Typography className="text-red-700 text-center font-bold text-lg">
          Error Message : {error}
        </Typography>
      </Box>
    );
  }
  return (
    <Box className="container px-10 md:px-0 mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {countries.map((country) => (
        <CountryList key={country.cca3} country={country} />
      ))}
    </Box>
  );
};

export default Home;
