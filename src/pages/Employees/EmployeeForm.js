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
  City: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm() {
  // const [values, setValues] = useState(initialFValues);

  const validate = () => {
    let temp = {};
    temp.fullName = values.fullName ? "" : "This field is required.";
    temp.email = /$|.+@.+..+/.test(values.email) ? "" : "Email is not valid.";
    temp.mobile =
      values.mobile.length > 10 ? "" : "Minimum 11 Number is required.";
    temp.departmentId = values.departmentId.length = ""
      ? ""
      : "This field is required.";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFValues);

  const handleSubmit = (e) => {
    e.preventDafault();
    if (validate()) window.alert("hello");
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
          />
          <Controls.Input
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
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
            <Controls.Button text="Submit" />
            <Controls.Button color="default" text="Reset" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
