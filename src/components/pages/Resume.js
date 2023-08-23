import React from "react";
import { Box, Button, Typography, List, ListItem } from "@mui/material";
import Pedefa from "../../assets/travis_hoffman_resume.pdf";
import { resumeData } from "../resumeData"

export default function Resume() {
    return (
        <Box>
        <div style={{ textAlign: "center", paddingTop: "25px", color: "white" }}>
          <Typography variant="h4" style={{ marginTop: "20px", textDecoration: "underline" }}>
            {resumeData.name}
          </Typography>
          <Typography variant="subtitle1">
          <a href={resumeData.email} target="_blank" rel="noopener noreferrer">{resumeData.email}</a>
          </Typography>
          <Typography variant="subtitle1">
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">
              {resumeData.linkedin}
            </a>
          </Typography>
          <Typography variant="body2" style={{ marginTop: "12px" }}>
            {resumeData.about}
          </Typography>
          <Typography variant="h5" style={{ marginTop: "20px" }}>
            Experience
          </Typography>
          <List style={{ padding: "0" }}>
            {resumeData.experience.map((entry, index) => (
              <ListItem key={index}>
                <Typography variant="subtitle1">
                  <strong>{entry.title}</strong> | {entry.company} | {entry.date}
                </Typography>
                <Typography variant="body1">{entry.description}</Typography>
              </ListItem>
            ))}
          </List>
          <Typography variant="h5" style={{ marginTop: "20px" }}>
            Education
          </Typography>
          <Typography variant="subtitle1">
            {resumeData.education.school} - {resumeData.education.degree} - {resumeData.education.year}
          </Typography>
          <List style={{ padding: "0" }}>
            {resumeData.education.details.map((detail, index) => (
              <ListItem key={index}>
                <Typography variant="body1">{detail}</Typography>
              </ListItem>
            ))}
          </List>
          <Typography variant="h5" style={{ marginTop: "20px" }}>
            Skills
          </Typography>
          <List style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
            {resumeData.skills.map((skill, index) => (
              <ListItem key={index}>{skill}</ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            href={Pedefa}
            download="Travis_Hoffman_Resume.pdf"
            className="pop-on-hover"
          >
            Download My Resume (PDF)
          </Button>
        </div>
      </Box>
    );
}