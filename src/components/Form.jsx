import React from "react";

import { TextField, Button, Grid, useTheme } from "@mui/material";

const Form = ({
  formData,
  handleInputChange,
  handleSubmit,
  handleClear,
  buttonText,
}) => {
  const theme = useTheme();

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            InputProps={{
              sx: {
                backgroundColor: theme.palette.grey[600],
                color: theme.palette.grey[0],
              },
            }}
            InputLabelProps={{ sx: { color: theme.palette.grey[0] } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleInputChange}
            InputProps={{
              sx: {
                backgroundColor: theme.palette.grey[600],
                color: theme.palette.grey[0],
              },
            }}
            InputLabelProps={{ sx: { color: theme.palette.grey[0] } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            InputProps={{
              sx: {
                backgroundColor: theme.palette.grey[600],
                color: theme.palette.grey[0],
              },
            }}
            InputLabelProps={{ sx: { color: theme.palette.grey[0] } }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ backgroundColor: theme.palette.primary[0], height: 50 }}
          >
            {buttonText}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: theme.palette.primary[0], height: 50 }}
            onClick={handleClear}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
