import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router";
import { DETAIL_URL } from "../constant";
import Loading from "../components/Loading";
import CountryCard from "../components/CountryCard";

const CountryDetail = () => {
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        const response = await fetch(`${DETAIL_URL}/${cca3}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetail();
  }, [cca3]);

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

  return <CountryCard country={country} />;
};

export default CountryDetail;
