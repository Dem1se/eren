import React from "react";
import "./circle.css";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { fontSize } from "@mui/system";

function Circle() {
  return (
    <Card
      className="card_style"
      style={{
        backgroundColor: "#f0f0f5",
        marginTop: "-31%",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          varient="h1"
          sx={{
            fontWeight: "bold",
            fontSize: 30,
            color: "#484848",
            fontFamily: "koulen",
            textAlign: "center",
          }}
        >
          PortFolio{" "}
        </Typography>
      </CardContent>
      <div className="Add">
        <div className="skill">
          <div className="outer">
            <div className="inner">
              <div id="number">$1000</div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <Card
        style={{
          maxWidth: "300px",
          maxHeight: "70px",
          marginLeft: "20px",
          marginTop: "30px",
          borderRadius: "10px",
          display: "flex",
        }}
        className="Money_card"
      >
        <CardContent>
          <Typography
            gutterButton
            varient="h4"
            style={{ display: "flex", fontSize: "10px" }}
          >
            Money Transfer
            <br />
          </Typography>
          <Typography>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>$1000</div>
          </Typography>
        </CardContent>
      </Card>
      <Card
        style={{
          maxWidth: "300px",
          maxHeight: "70px",
          marginTop: "30px",
          marginLeft: "20px",
          marginBottom: "30px",
          borderRadius: "10px",
          display: "flex",
        }}
        className="Due_card"
      >
        <CardContent>
          <Typography
            gutterButton
            varient="h4"
            style={{ display: "flex", fontSize: "10px", display: "flex" }}
          >
            Due
            <br />
          </Typography>
          <Typography>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>$1500</div>
          </Typography>
        </CardContent>
      </Card>
    </Card>
  );
}

export default Circle;
