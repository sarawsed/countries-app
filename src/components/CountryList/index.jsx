import React from "react";
import { useNavigate } from "react-router";
import { Box, Card, CardContent, Typography } from "@mui/material";

const CountryList = ({ country }) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Card
        onClick={() => navigate(`/country/${country.cca3}`)}
        className="hover:shadow-xl transition-shadow p-4 cursor-pointer border border-gray-300 hover:bg-gray-300 flex mb-4 min-h-[120px]"
      >
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className="w-16 h-16 object-cover rounded-md"
        />
        <CardContent className="px-10">
          <Typography className="text-gray-800 text-sm">
            {country.name.common}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CountryList;
