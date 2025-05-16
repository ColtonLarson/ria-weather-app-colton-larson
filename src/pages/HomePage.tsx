import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import HourlyCard from "../components/HourlyCard";
import TabNav from "../components/TabNav";
import FiveDayCard from "../components/FiveDayCard";
import axios from "axios";
import React from "react";

export const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const HomePage = () => {
  const tabs = ["Rio de Janeiro", "Beijing", "Los Angeles"];
  const [data, setData] = React.useState<any[]>();

  const getWeatherByCity = async (city: string) => {
    if (city === "") return;
    try {
      const geo = await axios.get(
        "http://api.openweathermap.org/geo/1.0/direct",
        {
          params: {
            q: city,
            appid: "9170e0e85794088df319259526c55afd",
          },
        }
      );
      const response = await axios.get(
        "http://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            lat: geo.data[0].lat,
            lon: geo.data[0].lon,
            appid: "9170e0e85794088df319259526c55afd",
            units: "imperial",
          },
        }
      );
      setData(response?.data?.list);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("done");
    }
  };

  const getWeatherByIndex = async (index: number) => {
    try {
      const geo = await axios.get(
        "http://api.openweathermap.org/geo/1.0/direct",
        {
          params: {
            q: tabs[index],
            appid: "9170e0e85794088df319259526c55afd",
          },
        }
      );
      const response = await axios.get(
        "http://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            lat: geo.data[0].lat,
            lon: geo.data[0].lon,
            appid: "9170e0e85794088df319259526c55afd",
            units: "imperial",
          },
        }
      );
      setData(response?.data?.list);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("done");
    }
  };

  React.useEffect(() => {
    getWeatherByIndex(0);
  }, []);

  return (
    <>
      <Box sx={{ position: "fixed", width: "100%", backgroundColor: "#FFF" }}>
        <Header getWeatherByCity={getWeatherByCity} />
        <TabNav tabs={tabs} getWeatherByIndex={getWeatherByIndex} />
      </Box>
      <Box
        sx={{
          p: 1,
          pl: 2,
          pr: 2,
          pt: "130px",
          backgroundColor: "#005D8D",
          background:
            "linear-gradient(180deg,rgba(0, 93, 141, 1) 0%, rgba(1, 155, 185, 1) 100%)",
          height: "100vh",
        }}
      >
        <HourlyCard data={data || []} />
        <FiveDayCard data={data || []} />
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#1665c0",
          justifyContent: "flex-end",
        }}
      >
        <Typography sx={{ color: "#fff" }}>
          Last updated on: {months[new Date().getMonth()]}{" "}
          {new Date().getDate()} {new Date().getHours()}:
          {new Date().getMinutes()}
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
