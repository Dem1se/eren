import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import "./mainfeed.css";

function Mainfeed() {
  return (
    <div>
      <Card
        style={{
          maxWidth: 420,
          margin: "0px auto",
          minHeight: "10vh",
          marginTop: "8%",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            varient="h1"
            sx={{
              fontWeight: "bold",
              fontSize: 30,
              color: "#2F4F4F",
              fontFamily: "koulen",
            }}
          >
            New{" "}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography>
            <Card
              style={{
                fontSize: "8px",
                minHeight: "15vh",
                display: "flex",
                flexWrap: "wrap",
                marginTop: "0.1%",
              }}
            >
              <Card
                style={{
                  minHeight: "12vh",
                  minWidth: "7vw",
                  marginTop: "3%",
                  marginLeft: "3%",
                  marginBottom: "3%",
                  fontSize: "30px",
                  textAlign: "center",
                  fontFamily: "koulen",
                  fontWeight: "bold",
                  color: "#555252",
                }}
              >
                <div className="money">200$</div>
                <div className="smaller_info_borrow">6 Months | 5%</div>
              </Card>
              <Card
                style={{
                  minHeight: "12vh",
                  minWidth: "7vw",
                  marginTop: "3%",
                  marginLeft: "3%",
                  marginBottom: "3%",
                  fontSize: "30px",
                  textAlign: "center",
                  fontFamily: "koulen",
                  fontWeight: "bold",
                  color: "#555252",
                }}
              >
                <div className="money">600$</div>
                <div className="smaller_info_borrow">3 Months | 10%</div>
              </Card>
              <Card
                style={{
                  minHeight: "12vh",
                  minWidth: "7vw",
                  marginTop: "3%",
                  marginLeft: "3%",
                  marginBottom: "3%",
                  fontSize: "30px",
                  textAlign: "center",
                  fontFamily: "koulen",
                  fontWeight: "bold",
                  color: "#555252",
                }}
              >
                <div className="money">1100$</div>
                <div className="smaller_info_borrow">10 Months | 8%</div>
              </Card>
            </Card>
          </Typography>
          <Typography>
            <div className="response_style">Response</div>
          </Typography>
          <Card
            style={{
              minHeight: "20vh",
              minWidth: "7vw",
              marginTop: "4%",
              marginLeft: "0.1%",
              marginBottom: "0.1%",
              fontSize: "30px",
              textAlign: "center",
              fontFamily: "koulen",
              fontWeight: "bold",
              color: "#555252",
            }}
          >
            <Card
              style={{
                minHeight: "9vh",
                minWidth: "7vw",
                marginTop: "3%",
                marginRight: "3%",
                marginLeft: "3%",
                marginBottom: "3%",
                fontSize: "30px",
                textAlign: "center",
                fontFamily: "koulen",
                fontWeight: "bold",
                color: "#555252",
              }}
            >
              <i
                class="fa-solid fa-user"
                style={{ marginLeft: "-80%", marginTop: "4%" }}
              ></i>
              <div className="person_id">#142R7TU</div>
              <div className="money_response">8%&#62;6.2%</div>
              <div className="smaller_info_borrow">1000$ | 2 Months</div>
            </Card>
            <Card
              style={{
                minHeight: "9vh",
                minWidth: "7vw",
                marginTop: "3%",
                marginRight: "3%",
                marginLeft: "3%",
                marginBottom: "3%",
                fontSize: "30px",
                textAlign: "center",
                fontFamily: "koulen",
                fontWeight: "bold",
                color: "#555252",
              }}
            >
              <i
                class="fa-solid fa-user"
                style={{ marginLeft: "-80%", marginTop: "4%" }}
              ></i>
              <div className="person_id">#87UZ89</div>
              <div className="money_response">5%&#62;4.7%</div>
              <div className="smaller_info_borrow">200$ | 3 Months</div>
            </Card>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}

export default Mainfeed;
