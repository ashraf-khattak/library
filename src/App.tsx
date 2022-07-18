import React from "react";
import "./App.scss";
import "./dashboard.scss";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Tab,
  Tabs,
} from "@mui/material";
import { Container } from "@mui/system";
import imgTwo from "../src/Assests/images/imgTwo.png";
import Group34210 from "../src/Assests/images/Group34210.png";
import Group34209 from "../src/Assests/images/Group34209.png";
import Group34216 from "../src/Assests/images/Group34216.png";


// TABS Start
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
//TABS Finished

//Array of TOOLS Start
const ArrayOfTools = [
  {
    name: "Active Case Documents",
  },
  {
    name: "Panel Actions/ Comments",
  },
  {
    name: "Panel Agenda",
  },
  {
    name: "Panel Minutes- Administrator",
  },
  {
    name: "Panel Minutes- Chair",
  },
  {
    name: "Panel Checklist",
  },
  {
    name: "Panel Outcome",
  },
]
//Array of TOOLS Finished

//Array of Evaluation Forms Start
const ArrayOfEvaluationForms = [
  {
    name: "Active Case Documents",
  },
  {
    name: "Panel Actions/ Comments",
  },
  {
    name: "Panel Agenda",
  },
  {
    name: "Panel Minutes- Administrator",
  },
  {
    name: "Panel Minutes- Chair",
  },
  {
    name: "Panel Checklist",
  },
  {
    name: "Panel Outcome",
  },
]
//Array of TOOLS Finished


function App() {
  //TABS Start
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  //TABS Finished

  return (
    <div>
      <Container maxWidth="xl">
        <Box color="green" fontWeight={800} mt={2}>
          <h2>Welcome Panel Member!</h2>
        </Box>
        <Grid container spacing={2} direction="row">
          <Grid item md={2} sm={6} xs={12}>
            <Box>
              <Card className="profile">
                <CardContent>
                  <Box alignContent="center" m="0 auto">
                    <Avatar
                      alt="Remy Sharp"
                      src={imgTwo}
                      sx={{ width: 90, height: 90, mx: "auto" }}
                    />
                  </Box>
                  <Typography sx={{ fontSize: 14 }}>
                    <Box
                      className="color-primary"
                      fontWeight={700}
                      textAlign="center"
                      mt={1}
                      sx={{ fontSize: 18 }}
                    >
                      Steven Tyler
                    </Box>
                    <Box textAlign="center" mt={0} sx={{ fontSize: 14 }}>
                      Applicant
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12} >
            <Box mb={1} >
              <Card className="profile" >
                <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>
                    <Box
                      color="dark"
                      fontWeight={800}
                      mt={1}
                      sx={{ fontSize: 16, alignItems: 'start' }}
                    >
                      Case Name
                    </Box>
                    <Box mt={0} sx={{ fontSize: 16 }}>
                      Case 1234
                    </Box>
                  </Typography>
                  <Box>
                    <Avatar
                      alt="Remy Sharp"
                      src={Group34210}
                    // sx={{ width: 90, height: 90, mx: "auto" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box mb={1} >
              <Card className="profile case" >
                <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>
                    <Box
                      color="dark"
                      fontWeight={800}
                      mt={1}
                      sx={{ fontSize: 16, alignItems: 'start' }}
                    >
                      Social Worker
                    </Box>
                    <Box mt={0} sx={{ fontSize: 16 }}>
                      John Doe
                    </Box>
                  </Typography>
                  <Box>
                    <Avatar
                      alt="Remy Sharp"
                      src={Group34209}
                      sx={{ bgcolor: "red" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Box>
              <Card className="profile">
                <CardContent >
                  <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                      color="dark"
                      fontWeight={800}
                      mt={1}
                      sx={{ fontSize: 16, alignItems: 'start' }}
                    >
                      Hearing Date & Time
                    </Box>
                    <Box>
                      <Avatar
                        alt="Remy Sharp"
                        src={Group34210}
                      />
                    </Box>
                  </Typography>

                  <Typography sx={{ fontSize: 14 }}>
                    <Box
                      className="color-primary"
                      fontWeight={700}
                      textAlign="center"
                      mt={1}
                      sx={{ fontSize: 46 }}
                    >
                      03:30 PM
                    </Box>
                    <Box textAlign="center" mt={0} sx={{ fontSize: 20 }}>
                      Monday, 20/11/2021
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box>
              <Card className="profile">
                <CardContent >
                  <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                      color="dark"
                      fontWeight={800}
                      mt={1}
                      sx={{ fontSize: 16, alignItems: 'start' }}
                    >
                      Access Revoke Date
                    </Box>
                    <Box>
                      <Avatar
                        alt="Remy Sharp"
                        src={Group34210}
                      />
                    </Box>
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    <Box
                      className="dark"
                      fontWeight={600}
                      textAlign="center"
                      mt={1}
                      sx={{ fontSize: 32 }}
                    >
                      20/11/2021
                    </Box>
                    <Box textAlign="center" mt={0} sx={{ fontSize: 20 }}>
                      <img
                        alt="Remy Sharp"
                        src={Group34216}
                      />
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>


        {/* TABS PANEL */}


        <Grid container className="profileTabs" spacing={2} direction="row" mt={1}>
          <Grid item md={2} sm={12} xs={12}>
            <Box>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
              >
                <Tab label="Panel Tools" {...a11yProps(0)} />
                <Tab label="Panel Evaluation Forms" {...a11yProps(1)} />
              </Tabs>
            </Box>
          </Grid>


          <Grid item md={10} sm={12} xs={12} >
            <Card className="tool">
              <TabPanel value={value} index={0}>
                <Grid container spacing={2} direction="row">
                  {ArrayOfTools.map((data) => (
                    <Grid item md={3} sm={6} xs={12}>
                      <Card className="tool ash">
                        <Box
                          color="dark"
                          fontWeight={500}
                          sx={{ fontSize: 16, alignItems: 'start', padding: "10px", width: "60%" }}
                        >
                          {data.name}
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
              <Grid container spacing={2} direction="row">
                  {ArrayOfTools.map((data) => (
                    <Grid item md={3} sm={6} xs={12}>
                      <Card className="tool ash">
                        <Box
                          color="dark"
                          fontWeight={500}
                          sx={{ fontSize: 16, alignItems: 'start', padding: "10px", width: "60%" }}
                        >
                          {data.name}
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>


            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;


