import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Card } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const validateName = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setName(value);
        if (name === "name") {
          if (value === "") {
            setName("");
            setErrorMessage(`Please enter a name. This field is required.`);
          }
        }
        if (value.length > 0) {
          setErrorMessage(``);
        }
      };
    
    const validateEmail = (e) => {
        e.preventDefault();
        console.log(e);
        const { name, value } = e.target;
        setEmail(value);
        if (name === "email") {
          if (value === "") {
            setEmail("");
            setErrorMessage(
              `Please enter a valid email address. This field is required.`
            );
          }
          const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2}$/;
          console.log(!pattern.test(value));
          if (!pattern.test(value)) {
            setErrorMessage(`Please enter a valid email`);
          } else {
            setErrorMessage("");
          }
        }
      };

      const validateMessage = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setMessage(value);
        if (name === "message") {
          if (value === "") {
            setMessage("");
            setErrorMessage(`Please enter a message. This field is required.`);
          }
        }
        if (value.length > 0) {
          setErrorMessage(``);
        }
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();

        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScwxqbxIxxI2HOc79Ph2iGwU3V0MZ9dt4_MMYdpmFHUGAzoZQ/formResponse";

        window.open(formUrl, "_blank");
      }
  
    return (
    <Box sx={{ width: "80%", alignItems: "center", justifyContent: "center" }}>
    <Card variant="outlined" id="contact-info">
      <form 
      style={{ display: "flex", justifyContent: "center" }}
      action="#"
      method="POST"
      onSubmit={handleFormSubmit}>
        <Stack spacing={2}>
          <MenuItem>
            <TextField
              defaultValue={name}
              onBlur={validateName}
              id="outlined-basic"
              fullWidth
              label="Name"
              name="Name"
              type="text"
              variant="outlined"
              style={{ backgroundColor: "rgb(157, 168, 183)" }}
            />
          </MenuItem>
          <MenuItem>
            {" "}
            <TextField
              defaultValue={email}
              onBlur={validateEmail}
              id="outlined-basic"
              fullWidth
              label="Email Address"
              name="Email"
              type="email"
              variant="outlined"
              style={{ backgroundColor: "rgb(157, 168, 183)" }}
            />
          </MenuItem>
          <MenuItem>
            <textarea
              defaultValue={message}
              onBlur={validateMessage}
              rows="15"
              cols="40"
              id="outlined-basic"
              label="Message"
              name="Message"
              type="text"
              variant="outlined"
              style={{ backgroundColor: "rgb(157, 168, 183)" }}
              placeholder="Type your message here!"
            />
          </MenuItem>
          {errorMessage && (
            <div style={{ display: "flex", justifyContent: "center", color: "red" }}>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <MenuItem style={{ justifyContent: "center" }}>
            <Button
              id="contact-button"
              className="pop-on-hover"
              xs={{ width: "100%" }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </MenuItem>
        </Stack>
      </form>
    </Card>
    </Box>
  );
}
