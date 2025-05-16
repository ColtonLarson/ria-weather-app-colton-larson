import React, { useEffect } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import useDebounce from "./useDebounce";

const Header = ({
  getWeatherByCity,
}: {
  getWeatherByCity: (city: string) => Promise<void>;
}) => {
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>("");

  const debounceVal = useDebounce(searchValue, 800);

  const handleClick = () => {
    setShowSearch(!showSearch);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  React.useEffect(() => {}, []);

  useEffect(() => {
    getWeatherByCity(debounceVal);
  }, [debounceVal]);

  return (
    <Box
      sx={{
        display: "flex",
        pl: 2,
        pr: 1,
        backgroundColor: "#1665c0",
        color: "#fff",
      }}
    >
      <h2 style={{ flex: 1, minWidth: "200px" }}>Simple Weather</h2>
      <Box sx={{ textAlign: "end", pt: 2, pb: 2 }}>
        {showSearch ? (
          <Box sx={{ display: "flex" }}>
            <TextField
              value={searchValue}
              onChange={handleChange}
              size="small"
              placeholder="enter a city"
              sx={{ width: 130, backgroundColor: "#fff", borderRadius: 1 }}
              variant="outlined"
            ></TextField>
            <IconButton
              aria-label="delete"
              sx={{ flex: 2, color: "#fff" }}
              onClick={handleClick}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        ) : (
          <IconButton
            aria-label="delete"
            sx={{ flex: 2, color: "#fff" }}
            onClick={handleClick}
          >
            <SearchIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Header;
