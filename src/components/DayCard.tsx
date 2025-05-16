import { Box, Divider, Typography } from "@mui/material";
import { days, months } from "../pages/HomePage";

const DayCard = ({
  data,
  noBoarder = false,
}: {
  data: any;
  noBoarder?: boolean;
}) => {
  return (
    <>
      <Box sx={{ display: "flex", height: 50, alignItems: "center" }}>
        <Box sx={{ flex: 1, maxWidth: 75 }}>
          <Box>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              width={50}
              height={50}
              alt={data?.weather?.[0]?.description || ""}
            />
          </Box>
        </Box>
        <Box
          sx={{
            flex: 2,
            display: "block",
            minWidth: 200,
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            {days[new Date(data.dt).getDay()]},{" "}
            {months[new Date(data.dt).getMonth()]} {new Date(data.dt).getDate()}
          </Typography>
          <Typography
            sx={{ fontSize: 12, whiteSpace: "nowrap", overflowX: "hidden" }}
          >
            {data.weather[0].description}.
          </Typography>
        </Box>
        <Box sx={{ flex: 3, textAlign: "end", maxWidth: 75 }}>
          <Typography sx={{ fontWeight: 500, mr: 1 }}>
            {data.main.temp_max.toFixed(0)}° {data.main.temp_min.toFixed(0)}°
          </Typography>
        </Box>
      </Box>
      {!noBoarder && <Divider sx={{ width: "100%" }} />}
    </>
  );
};

export default DayCard;
