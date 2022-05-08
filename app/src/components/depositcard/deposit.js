import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

export default function DepositCard() {
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
            Join{" "}
          </Typography>
          <Typography gutterBottom varient="h1">
            Already a member? Sign in
          </Typography>

          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Name"
                  placeholder="Enter name"
                  variant="outlined"
                  id="First_name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="outlined"
                  id="Last_Name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter Email"
                  variant="outlined"
                  id="Email"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  label="Phone"
                  placeholder="Enter Phone number"
                  variant="outlined"
                  id="Phone_No"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Password"
                  placeholder="Enter Password"
                  variant="outlined"
                  id="Password"
                  fullWidth
                  required
                />
              </Grid>{" "}
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Confirm Password"
                  placeholder="Enter Password again"
                  variant="outlined"
                  id="Confirm_Password"
                  fullWidth
                  required
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
