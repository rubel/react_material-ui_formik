import React from "react";
import { Form, Field, Formik } from "formik";
import { Autocomplete } from "formik-mui";
import { TextField } from "formik-mui";
import MuiTextField from "@mui/material/TextField";
import { Box } from "@mui/material";

function BasicMuiFormWithFormik() {
    return (
        <Formik
          enableReinitialize
          initialValues={{ movie: "", year: null }}
          onSubmit={(values) => console.log(values)}
          validateOnMount
        >   
          {({ isValid, values, setFieldValue }) => {
            return (
              <Form>
                <Field
                  name="name"
                  component={Autocomplete}
                  options={[
                    { title: "Java", year: 1973 },
                    { title: "PHP", year: 1974 },
                    { title: "Python", year: 2008 },
                    { title: "ActionScript", year: 1957 },
                  ]}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 300 }}
                  onChange={(event, value) => {
                    setFieldValue("year", value ? value : "");
                    setFieldValue("releaseYear", value ? value.year : "");
                  }}
                  renderInput={(params) => (
                    <MuiTextField
                      {...params}
                      name="autocomplete"
                      label="Movie"
                      variant="outlined"
                    />
                  )}
                />
    
                <Box marginBottom={3} />
                <Field
                  name="year"
                  component={Autocomplete}
                  options={[
                    { title: "The Godfather", year: 1972 },
                    { title: "The Godfather: Part II", year: 1974 },
                    { title: "The Dark Knight", year: 2008 },
                    { title: "12 Angry Men", year: 1957 },
                    { title: "Schindler's List", year: 1993 },
                    { title: "The Shawshank Redemption", year: 1994 }
                  ]}
                  getOptionLabel={(option) => option.year}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <MuiTextField
                      {...params}
                      name="autocomplete"
                      label="Release Year"
                      variant="outlined"
                    />
                  )}
                />
                <Box marginBottom={3} />
                <Field
                  component={TextField}
                  placeholder="Release year"
                  name="releaseYear"
                  variant="outlined"
                  InputProps={{ notched: true }}
                />
              </Form>
            );
          }}
        </Formik>
      );
}

export default BasicMuiFormWithFormik;