import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../../constant/routes";

const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="hover:shadow-lg transition-shadow p-6 w-96">
        <CardContent>
          <Typography variant="h6" className="font-bold mb-4">
            {country.name.common}
          </Typography>
          <Typography variant="body2" className="text-gray-600 mb-2">
            <strong>Capital:</strong>{" "}
            {country.capital ? country.capital[0] : " "}
          </Typography>
          <Typography variant="body2" className="text-gray-600 mb-2">
            <strong>Region:</strong> {country.region}
          </Typography>
          <Typography variant="body2" className="text-gray-600 mb-2">
            <strong>Population:</strong> {country.population.toLocaleString()}
          </Typography>
          <div className="my-4">
            <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </CardContent>
        <Button
          onClick={() => navigate(HOME_ROUTE)}
          variant="contained"
          color="primary"
          fullWidth
        >
          Back to Home
        </Button>
      </Card>
    </div>
  );
};

export default CountryCard;
