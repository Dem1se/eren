import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

export default function FormThirdPort() {
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
            Documentation
          </Typography>

          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} item>
                <TextField
                  label="Aadhar card"
                  placeholder="Enter "
                  variant="outlined"
                  id="Aadhar_card"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  label="PAN card"
                  placeholder="Enter "
                  variant="outlined"
                  id="PAN_card"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  label="Passport card"
                  placeholder="Enter "
                  variant="outlined"
                  id="Passport_card"
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
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
