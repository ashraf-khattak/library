// import { Link } from "react-router-dom";
import { Grid, Button, Stack } from "@mui/material";
import { useState } from "react";
import "../BasicInformation/BasicInformation.scss";
import MainForm from "./MainForm/Form";

import { Formik, Form } from "formik";
import { Select } from "./MainForm/Select";
import Grass from "../../../../../assests/Grass.svg";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as Yup from "yup";
import TextArea from "./MainForm/TextArea";
import { Dispatch, SetStateAction } from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface appProps {
  myValue: string;
  setMyValue: Dispatch<SetStateAction<string>>;
}

const Contact: React.FC<appProps> = (props) => {


  const backToContact = () => {
    props.setMyValue("1");
  };
  const country = [
    { key: "Select", value: "" },
    { key: "Option1", value: "Option1" },
    { key: "Option2", value: "Option2" },
    { key: "Option3", value: "Option3" },
  ];
  const selectCountry = [
    { key: "Select", value: "" },
    { key: "Option1", value: "Option1" },
    { key: "Option2", value: "Option2" },
    { key: "Option3", value: "Option3" },
  ];

  const validate = Yup.object({
    city: Yup.string().required("Error"),

    country: Yup.string().required("Required"),
    selectCountry: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
  });

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "start",
  }));
  return (
    <div className="childTabs">
      <Grid container textAlign={"center"}>
        <Grid item md={12}>
          <Grid container md={12}>
            <Grid item md={12} textAlign={"center"}>
              <Formik
                initialValues={{
                  city: "",

                  country: "",
                  selectCountry: "",
                  postalCode: "",
                }}
                validationSchema={validate}
                onSubmit={(values, actions) => {
                  console.log("submitted", { values, actions });
                  actions.setSubmitting(false);
                }}
              >
                {({}) => (
                  <div>
                    <Grid item md={12} sm={12} textAlign={"center"}>
                      <Form>
                        <Grid
                          container
                          spacing={2}
                          textAlign={"start"}
                          justifyContent={"start"}
                        >
                          <Grid
                            xs={12}
                            md={12}
                            textAlign={"start"}
                            justifyContent={"center"}
                          >
                            <Item>
                              <TextArea name="details" label="Address" />
                            </Item>
                          </Grid>
                        </Grid>
                        
                        <Grid
                          container
                          spacing={2}
                          textAlign={"start"}
                          justifyContent={"start"}
                        >
                          <Grid
                            xs={12}
                            md={12}
                            textAlign={"start"}
                            justifyContent={"center"}
                          >
                            <Item>
                              <TextArea name="details" label="Address Line 2" />
                            </Item>
                          </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ marginTop: 2 }}>
                          <Grid
                            xs={12}
                            md={6}
                            textAlign={"start"}
                            justifyContent={"center"}
                          >
                            <Item>
                              <MainForm label="Town/City" name="city" />
                            </Item>
                          </Grid>

                          <Grid
                            xs={12}
                            md={6}
                            textAlign={"start"}
                            className="mt"
                            justifyContent={"center"}
                          >
                            <Item>
                              <MainForm label="Telephone" name="telephone" />
                            </Item>
                          </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                          <Grid
                            xs={12}
                            md={6}
                            textAlign={"start"}
                            justifyContent={"center"}
                          >
                            <Item>
                              <Select
                                control="select"
                                label="Country"
                                name="country"
                                options={country}
                                // onChange={onSelect}
                              />
                            </Item>
                          </Grid>

                          <Grid
                            xs={12}
                            md={6}
                            textAlign={"start"}
                            justifyContent={"center"}
                          >
                            <Item>
                              <Select
                                control="select"
                                label="Select a Country"
                                name="selectCountry"
                                options={selectCountry}
                                // onChange={onSelect}
                              />
                            </Item>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          spacing={2}
                          textAlign={"start"}
                          sx={{ marginTop: "20px" }}
                          justifyContent={"start"}
                        >
                          <Grid
                            xs={12}
                            md={6}
                            textAlign={"start"}
                            justifyContent={"center"}
                          >
                            <Item>
                              <MainForm label="Postal Code" name="postalCode" />
                            </Item>
                          </Grid>
                        </Grid>

                        <Stack
                          spacing={1}
                          direction="row"
                          sx={{ marginTop: "30px" }}
                        >
                          <Button
                            variant="contained"
                            type="submit"
                            className="btn-bg-color-primary"
                          >
                            Submit
                          </Button>
                          <Button variant="contained" className="draft">
                            Save as Draft
                          </Button>
                          <Button
                            variant="contained"
                            color="warning"
                            onClick={backToContact}
                          >
                            Back
                          </Button>
                        </Stack>
                      </Form>
                    </Grid>
                  </div>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;