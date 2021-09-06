import React,{useState} from "react";
//import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../App/components/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { makeStyles, Paper, TableBody, TableCell, TableRow } from "@material-ui/core";
import useTable from "../../App/components/useTable";
import * as employeeService from "../../services/employeeService";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  {id:'fullName',label:'Employee Name'},
  {id:'email',label:'Email Address (Personal)'},
  {id:'mobile',label:'Mobile Number'},
  {id:'department',label:'Department'}
]
export default function Employees() {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeService.getAllEmployees())
  const {TblContainer,TblHead,TblPagination,recordsAfterPagingAndSorting} = useTable(records,headCells);
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form Design With Validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="small" />}
      />

      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <TblContainer>
          <TblHead/>
          <TableBody>
            {
             recordsAfterPagingAndSorting().map(
                item=>(
                  (
                    <TableRow key={item.id}>
                    <TableCell>
                      {
                        item.fullName
                      }
                    </TableCell>
                    <TableCell>
                      {
                        item.email
                      }
                    </TableCell>
                    <TableCell>
                      {
                        item.mobile
                      }
                    </TableCell>
                    <TableCell>
                      {
                        item.department
                      }
                    </TableCell>
                  </TableRow>
                  )
                )
              )
            }
          </TableBody>
        </TblContainer>
        <TblPagination/>
      </Paper>
    </>
  );
}
