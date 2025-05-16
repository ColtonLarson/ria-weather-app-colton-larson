import { Box, Divider, Typography } from "@mui/material";

const HourCard = ({
  data,
  noBoarder = false,
}: {
  data: any;
  noBoarder?: boolean;
}) => {
  return (
    <Box sx={{ display: "flex", height: 125 }}>
      <Box
        sx={{
          pr: 1,
          pl: 1,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography>{data.main.temp.toFixed(0)}°</Typography>
        <Typography sx={{ color: "#2cb3d8" }}>
          {(data.pop || 0) * 100}%
        </Typography>
        <img
          src={`https://openweathermap.org/img/wn/${
            data?.weather?.[0]?.icon || ""
          }@2x.png`}
          width={50}
          height={50}
          alt={data?.weather?.[0]?.description || ""}
        />
        <Typography sx={{ width: 75, color: "#8d8d8d" }}>
          {new Date(data.dt_txt).getHours()}:00
        </Typography>
      </Box>
      {!noBoarder && (
        <Divider orientation="vertical" sx={{ mt: 3, height: 80 }} />
      )}
    </Box>
  );
};

export default HourCard;
