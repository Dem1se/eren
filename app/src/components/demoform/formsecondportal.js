import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

export default function FormSecondPort() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          maxWidth: 420,
          margin: "0px auto",
          boxShadow: "5px 5px 5px 5px #145DA0",
          minHeight: "10vh",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            varient="h1"
            sx={{ fontWeight: "bold", fontSize: 27 }}
          >
            Personally Identifiable Information (PII)
          </Typography>

          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} item>
                <TextField type="date" variant="outlined" id="DOB" fullWidth />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  type="number"
                  label="Phone number"
                  placeholder="Enter Phone name"
                  variant="outlined"
                  id="Phone_number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Address Line 1"
                  placeholder="Enter Address line 1"
                  variant="outlined"
                  id="Address_line1"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Address Line 2"
                  placeholder="Enter Address line 2"
                  variant="outlined"
                  id="Address_line2"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  varient="contained"
                  color="primary"
                  fullWidth
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
