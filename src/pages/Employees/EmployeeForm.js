import React from "react";
import { Grid } from "@material-ui/core";
import Controls from "../../App/components/controls/Controls";
import { useForm, Form } from "../../App/components/useForm";
import * as employeeService from "../../services/employeeService";
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "othr", title: "Other" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm() {
  const validate = (fieldValues = values) => {
    let temp = {...errors}
    if('fullName' in fieldValues)
    temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if('email' in fieldValues)
    temp.email = /$^|.+@.+..+/.test(fieldValues.email) ? "" : "Email is not valid.";
    if('mobile' in fieldValues)
    temp.mobile =
    fieldValues.mobile.length > 10 ? "" : "Minimum 11 Number is required.";
      if('departmentId' in fieldValues)
    temp.departmentId =
    fieldValues.departmentId.length !== 0 ? "" : "This field is required.";
    setErrors({
      ...temp
    })

    if(fieldValues === values)
        return Object.values(temp).every(x => x === "")
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert('testing...');
      //employeeService.insertEmployee(values)
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            variant="outlined"
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            row
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            row
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />
          <Controls.DatePicker
            row
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            row
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />

          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button color="default" text="Reset" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
