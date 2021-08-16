import React from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../App/components/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
export default function Employees() {
  const classes = useStyles();
  return (
    <div>
      <PageHeader
        title="New Employee"
        subtitle="Form Design With Validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="small" />}
      />

      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </div>
  );
}
