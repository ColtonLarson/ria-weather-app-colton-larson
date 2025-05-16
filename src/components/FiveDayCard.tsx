import { Box, Card, Divider, Typography } from "@mui/material";
import DayCard from "./DayCard";

const FiveDayCard = ({ data }: { data: any[] }) => {
  return (
    <Card variant="outlined" sx={{ pt: 1, mt: 2 }}>
      <Box sx={{ p: 1, pl: 2 }}>
        <Typography variant="h5">Next 5 days</Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        {data.map((day, i: number) => {
          if (i % 8 === 0) return <DayCard data={day} noBoarder={i === 7} />;
          else return null;
        })}
      </Box>
    </Card>
  );
};

export default FiveDayCard;
