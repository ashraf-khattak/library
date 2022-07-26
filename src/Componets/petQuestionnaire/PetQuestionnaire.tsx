import React from "react";
import "../src/App.scss";
import "../src/dashboard.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
// import HomeImg from "../../../../assests/Home.svg";

// import BasicInformation from "../application-form/BasicInformation/BasicInformation";
// import Contact from "./Contact/Contact";
// import Reference from "./Reference/Reference";
// import ExPartners from "./ExPartners/ExPartners";
// import PlacementReference from "./PlacementReference/PlacementReference";
// import OtherInfo from "./OtherInfo/OtherInfo";
// import Family from "./Family/Family";
// import Employers from "./Employers/Employers";
// import UploadDocument from "./UploadDocument/UploadDocument";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import Navbar from "../../../UI/sub-sections-top-nav/SubSectionTopNav";

const PetQuestionnaire = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="mainPage-application">





{/* 
      <Navbar
        title="Application Form"
        prevComp="Carer Info"
        currComp="Application Form"
        to="/carer-info"
      /> */}
      <Stack className="breadMain">
        <Typography variant="h6" className="application appText">
          Application Form |
        </Typography>
        <Stack className="breadStack">
          <Breadcrumbs aria-label="breadcrumb" className="application">
            <Typography>
              {/* <img src={HomeImg} className='homeIcon'/> */}
            </Typography>
            <Link className="carerInfo">Carer Info</Link>
            <Typography aria-current="page">Application Form</Typography>
          </Breadcrumbs>
        </Stack>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2px",
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", overflowX: "auto" }}
          >
            <TabList
              value={value}
              className="tabsColor"
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#0e918c",
                },
              }}
            >
              <Tab label="Basic Information" value="1" />
              <Tab label="Contact" value="2" />
              <Tab label="Family" value="3" />
              <Tab label="Reference" value="4" />
              <Tab label="Employers" value="5" />
              <Tab label="Other Info" value="6" />
              <Tab label="Ex-Partners" value="7" />
              <Tab label="Placement Preference" value="8" />
              <Tab label="Upload Documents" value="9" />
            </TabList>
          </Box>
          <Box>
            <TabPanel value="1">
              {/* <BasicInformation /> */}
            </TabPanel>
            <TabPanel value="2">
              {/* <Contact myValue={value} setMyValue={setValue} /> */}
            </TabPanel>
            <TabPanel value="3">
              {/* <Family myValue={value} setMyValue={setValue} /> */}
            </TabPanel>
            <TabPanel value="4">
              {/* <Reference myValue={value} setMyValue={setValue} /> */}
            </TabPanel>
            <TabPanel value="5">
              {/* <Employers myValue={value} setMyValue={setValue} /> */}
            </TabPanel>
            <TabPanel value="6">
              {/* <OtherInfo myValue={value} setMyValue={setValue} /> */}
            </TabPanel>
            <TabPanel value="7">
              {/* <ExPartners myValue={value} setMyValue={setValue} /> */}
            </TabPanel>
            <TabPanel value="8">
              {/* <PlacementReference myValue={value} setMyValue={setValue} /> */}
            </TabPanel>
            <TabPanel value="9">
              {/* <UploadDoc /> */}
              {/* <UploadDocument myValue={value} setMyValue={setValue} /> */}
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </div>
  );
}

export default PetQuestionnaire;
