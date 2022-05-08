import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

export default function Sign_in() {
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
            Sign in
          </Typography>
          <Typography gutterBottom varient="h1">
            Not a member? Join Loan
          </Typography>

          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter Email"
                  variant="outlined"
                  id="First_name"
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
          <Typography
            gutterBottom
            varient="h1"
            style={{ margin: "0px 0px 0px 130px", color: "#145DA0" }}
          >
            Forgot Password?
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
