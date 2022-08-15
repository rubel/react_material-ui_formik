import React, { useState } from "react";
import { Form, Field, Formik } from "formik";
import { TextField,Autocomplete, CheckboxWithLabel, Switch } from "formik-mui";
import { Alert, Box, Button, Collapse, Snackbar } from "@mui/material";
import MuiTextField from "@mui/material/TextField";

function BasicMuiFormWithFormik() {
  const [snackBarOpen, setSnakeBarOpen] = useState(false);
    const [alertShown, setAlertShown] = useState(false);

    const religionList = ["Islam","Christanity","Hinduism"]

    return (
      <div>
        <div className="fullShadow">
          <div className="customerFormBg">
              <Button onClick={()=>{setSnakeBarOpen(true);}}>show snackbar</Button>
              <Button onClick={()=>{setAlertShown(true);}}>show alert</Button>

              <Snackbar
                  open={snackBarOpen}
                  autoHideDuration={3000}
                  onClose={()=>{
                    setSnakeBarOpen(false);
                  }}
                  message="Message Here"
              />

              {/* severity="error"
              severity="warning"
              severity="info"
              severity="success" */}
              <Collapse in={alertShown}>
                  <Alert onClose={() => {setAlertShown(false)}}>This is a success alert — check it out!</Alert>
              </Collapse>

              <Formik
                enableReinitialize
                initialValues={{ name:"",password:"",releaseYear:"", address:"",loveIt:"",switch:"",religion:"" }}
                onSubmit={(values) => {
                  alert(JSON.stringify(values, null, 2));
                }}
                validateOnMount
              >   
                    <Form>
                      <Field
                        component={TextField}
                        type="text"
                        label="Name"
                        name="name"
                      />

                      <Box marginBottom={3} />
                      <Field
                        component={TextField}
                        type="password"
                        label="Password"
                        name="password"
                      />
                      
                      <Box marginBottom={3} />
                      
                      <Field
                        component={TextField}
                        placeholder="Release year"
                        name="releaseYear"
                        variant="outlined"
                        InputProps={{ notched: true }}
                      />
                      <Box marginBottom={3} />

                      <Field id="address"  name="address" style={{ width: "100%",height:"120px" }}  component="textarea" />

                      <Field
                        component={CheckboxWithLabel}
                        type="checkbox"
                        name="loveIt"
                        Label={{ label: 'Love It?' }}
                      />
                      <Field component={Switch} type="checkbox" name="switch" />

                      <Box height={15} />

                      <Field
                        name="religion"
                        component={Autocomplete}
                        options={religionList}
                        style={{ width: "100%" }}
                        renderInput={(params) => (
                          <MuiTextField
                            {...params}
                            name="religion"
                            label="Religion"
                            variant="outlined"
                          />
                        )}
                      />
                      
                      <Box height={30} />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Submit
                      </Button>
                    </Form>

              </Formik>
              </div>
            </div>
        </div>
      );
}

export default BasicMuiFormWithFormik;