import * as React from "react";
import Tabs from "@mui/material/Tabs";
import {
  Box,
  Card,
  CardContent,
  Grid,
  CardActions,
  Tab,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <h1 className='{margin="0px"}'>Hi Welcome</h1>
      <h2>John David</h2>
      <Grid>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            justifyContent: "left",
          }}
        >
          <Card>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <div className="text-start">
              <Tab
                style={{ color: "yellow" }}
                label="Set Key Info"
                {...a11yProps(0)}
              /></div>
              <Tab label="Manage Job Role" {...a11yProps(1)} />
              <Tab
                label="Staff Settings-----------------------------------"
                {...a11yProps(2)}
              />
              <Tab
                label="Define Bank Holiday---------------------------"
                {...a11yProps(3)}
              />
              <Tab
                label="Neutral Vendors----------------------------"
                {...a11yProps(4)}
              />
              <Tab
                label="Email Notification Settings-----------"
                {...a11yProps(5)}
              />
              <Tab
                label="Staff / Client Terms & Conditions----"
                {...a11yProps(6)}
              />
              <Tab label="Agency Staff Agreement-----" {...a11yProps(7)} />
              <Tab label="Staff Referral System-----" {...a11yProps(8)} />
              <Tab
                label="Reset Primary Email and Phone---------"
                {...a11yProps(9)}
              />
              <Tab
                label="Choose Your Week Start Day----------"
                {...a11yProps(10)}
              />
              <Tab
                label="Admin Document Wallet-----------"
                {...a11yProps(11)}
              />
              <Tab label="Staff Document Wallet---------" {...a11yProps(12)} />
              <Tab
                label="Electronic Attendance Monitoring------"
                {...a11yProps(13)}
              />
              <Tab label="Festival Day Greetings------" {...a11yProps(14)} />
              <Tab
                label="Roles and Rights---------------------------"
                {...a11yProps(15)}
              />
            </Tabs>
          </Card>

          <CardContent
            style={{ borderColor: "red", borderStyle: "solid" }}
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              justifyContent: "left",
            }}
          >
            <TabPanel value={value} index={0}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    error
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                  />
                  <TextField
                    error
                    id="outlined-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                  />
                </div>
                <div>
                  <TextField
                    error
                    id="filled-error"
                    label="Error"
                    defaultValue="Hello World"
                    variant="filled"
                  />
                  <TextField
                    error
                    id="filled-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="filled"
                  />
                </div>
                <div>
                  <TextField
                    error
                    id="standard-error"
                    label="Error"
                    defaultValue="Hello World"
                    variant="standard"
                  />
                  <TextField
                    error
                    id="standard-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="standard"
                  />
                </div>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box> Item Two</Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
              Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
              Item Seven
            </TabPanel>
            <TabPanel value={value} index={7}>
              Item Seven
            </TabPanel>
            <TabPanel value={value} index={8}>
              Item Seven
            </TabPanel>
            <TabPanel value={value} index={9}>
              Item Seven
            </TabPanel>
            <TabPanel value={value} index={10}>
              Item Seven
            </TabPanel>
            <TabPanel value={value} index={11}>
              Item Seven
            </TabPanel>
            <TabPanel value={value} index={12}>
              Item Seven
            </TabPanel>
            <TabPanel value={value} index={13}>
              Item Seven
            </TabPanel>
            <TabPanel value={value} index={14}>
              Item Seven
            </TabPanel>
            <TabPanel value={value} index={15}>
              Item Seven
            </TabPanel>
          </CardContent>
        </Box>

        <Card></Card>
      </Grid>
    </Container>
  );
}






















// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      App
//     </div>
//   );
// }

// export default App;
