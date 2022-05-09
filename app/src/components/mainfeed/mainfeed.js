import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import "./mainfeed.css";

function Mainfeed() {
  return (
    <div>
      <Card
        style={{
          minWidth: "57vw",
          maxWidth: "57vw",
          margin: "0px auto",
          minHeight: "75 vh",
          maxHeight: "75vh",
          marginTop: "8%",
          marginRight: "24.3%",
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
              textAlign: "left",
              marginTop: "-1.2%",
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
                minHeight: "22vh",
                display: "flex",
                marginTop: "-4%",
                overflowX: "auto",
              }}
            >
              <Card
                style={{
                  minHeight: "15vh",
                  minWidth: "10vw",
                  marginTop: "1.8%",
                  marginLeft: "1.8%",

                  marginBottom: "1.8%",
                  fontSize: "32px",
                  textAlign: "center",
                  fontFamily: "koulen",
                  fontWeight: "bold",
                  color: "#555252",
                }}
                className="new_hover"
              >
                <div className="money">$100</div>
                <div className="smaller_info_borrow_new">6 Months | 5%</div>
              </Card>
              <Card
                style={{
                  minHeight: "15vh",
                  minWidth: "10vw",
                  marginTop: "1.8%",
                  marginLeft: "1.8%",

                  marginBottom: "1.8%",
                  fontSize: "30px",
                  textAlign: "center",
                  fontFamily: "koulen",
                  fontWeight: "bold",
                  color: "#555252",
                }}
                className="new_hover"
              >
                <div className="money">$600</div>
                <div className="smaller_info_borrow_new">3 Months | 10%</div>
              </Card>
              <Card
                style={{
                  minHeight: "15vh",
                  minWidth: "10vw",
                  marginTop: "1.8%",
                  marginLeft: "1.8%",

                  marginBottom: "1.8%",
                  fontSize: "30px",
                  textAlign: "center",
                  fontFamily: "koulen",
                  fontWeight: "bold",
                  color: "#555252",
                }}
                className="new_hover"
              >
                <div className="money">$1100</div>
                <div className="smaller_info_borrow_new">10 Months | 8%</div>
              </Card>
              <Card
                style={{
                  minHeight: "15vh",
                  minWidth: "10vw",
                  marginTop: "1.8%",
                  marginLeft: "1.8%",

                  marginBottom: "1.8%",
                  fontSize: "30px",
                  textAlign: "center",
                  fontFamily: "koulen",
                  fontWeight: "bold",
                  color: "#555252",
                }}
                className="new_hover"
              >
                <div className="money">$700</div>
                <div className="smaller_info_borrow_new">8 Months | 23%</div>
              </Card>
              <Card
                style={{
                  minHeight: "15vh",
                  minWidth: "10vw",
                  marginTop: "1.8%",
                  marginLeft: "1.8%",

                  marginBottom: "1.8%",
                  fontSize: "30px",
                  textAlign: "center",
                  fontFamily: "koulen",
                  fontWeight: "bold",
                  color: "#555252",
                }}
                className="new_hover"
              >
                <div className="money">$2000</div>
                <div className="smaller_info_borrow_new">10 Months | 2%</div>
              </Card>
              <Card
                style={{
                  minHeight: "15vh",
                  minWidth: "10vw",
                  marginTop: "1.8%",
                  marginLeft: "1.8%",
                  marginRight: "1.8%",
                  marginBottom: "1.8%",
                  fontSize: "30px",
                  textAlign: "center",
                  fontFamily: "koulen",
                  fontWeight: "bold",
                  color: "#555252",
                }}
                className="new_hover"
              >
                <div className="money">$99</div>
                <div className="smaller_info_borrow_new">1.5 Months | 17%</div>
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
              maxHeight: "33.5vh",
              marginTop: "2%",
              marginLeft: "0.1%",
              marginBottom: "0.1%",
              fontSize: "30px",
              textAlign: "center",
              fontFamily: "koulen",
              fontWeight: "bold",
              color: "#555252",
              overflowY: "auto",
            }}
          >
            <Card
              style={{
                minHeight: "12vh",
                minWidth: "7vw",
                maxHeight: "9vh",
                marginTop: "1.7%",
                marginRight: "1.7%",
                marginLeft: "1.7%",
                marginBottom: "1.7%",
                fontSize: "30px",
                textAlign: "center",
                fontFamily: "koulen",
                fontWeight: "bold",
                color: "#555252",
              }}
              className="response_hover"
            >
              <i
                class="fa-solid fa-user fa-2xs"
                style={{ marginLeft: "-85%", marginTop: "4%" }}
              ></i>
              <div className="person_id">Rohith Khanna</div>
              <div className="money_response">
                8<span className="percentage_font">%</span>
                <span> &#62; </span>
                6.2
                <span className="percentage_font">%</span>
              </div>
              <div className="smaller_info_borrow">$1000 | 2 Months</div>
              <div className="smaller_money_response">Last Updated:30 days</div>
            </Card>
            <Card
              style={{
                minHeight: "12vh",
                minWidth: "7vw",
                maxHeight: "9vh",
                marginTop: "1.7%",
                marginRight: "1.7%",
                marginLeft: "1.7%",
                marginBottom: "1.7%",
                fontSize: "30px",
                textAlign: "center",
                fontFamily: "koulen",
                fontWeight: "bold",
                color: "#555252",
              }}
              className="response_hover"
            >
              <i
                class="fa-solid fa-user fa-2xs"
                style={{ marginLeft: "-85%", marginTop: "4%" }}
              ></i>
              <div className="person_id">Hammilton</div>
              <div className="money_response">
                12<span className="percentage_font">%</span>
                <span> &#62; </span>
                11
                <span className="percentage_font">%</span>
              </div>
              <div className="smaller_info_borrow">$10000 | 10 Months</div>
              <div className="smaller_money_response">Last Updated:2 days</div>
            </Card>
            <Card
              style={{
                minHeight: "12vh",
                minWidth: "7vw",
                maxHeight: "9vh",
                marginTop: "1.7%",
                marginRight: "1.7%",
                marginLeft: "1.7%",
                marginBottom: "1.7%",
                fontSize: "30px",
                textAlign: "center",
                fontFamily: "koulen",
                fontWeight: "bold",
                color: "#555252",
              }}
              className="response_hover"
            >
              <i
                class="fa-solid fa-user fa-2xs"
                style={{ marginLeft: "-84%", marginTop: "4%" }}
              ></i>
              <div className="person_id">Verstappen</div>
              <div className="money_response">
                10<span className="percentage_font">%</span>
                <span> &#62; </span>
                5.2
                <span className="percentage_font">%</span>
              </div>
              <div className="smaller_info_borrow">$100 | 1 Months</div>
              <div className="smaller_money_response">Last Updated:10 days</div>
            </Card>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}

export default Mainfeed;
