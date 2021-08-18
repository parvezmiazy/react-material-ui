import React, { useState, useEffect } from "react";
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
  Email: "",
  mobile: "",
  City: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm() {
  // const [values, setValues] = useState(initialFValues);

  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <Controls.Input
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={values.mobile}
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
          />
          <Controls.Checkbox
            row
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
