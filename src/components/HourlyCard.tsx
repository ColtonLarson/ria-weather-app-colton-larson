import { Box, Card, Divider, Typography } from "@mui/material";
import HourCard from "./HourCard";

const HourlyCard = ({ data }: { data: any[] }) => {
  return (
    <Card variant="outlined" sx={{ pt: 1 }}>
      <Box sx={{ p: 1, pl: 2 }}>
        <Typography variant="h5">Next Hours</Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          p: 2,
          display: "flex",
          overflowX: "scroll",
          overflowY: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {data.map((hour, i: number) => {
          if (i < 8) return <HourCard data={hour} noBoarder={i === 7} />;
          else return null;
        })}
      </Box>
    </Card>
  );
};

export default HourlyCard;
