import React,{useState} from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../App/components/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { makeStyles, Paper, TableBody, TableCell, TableRow,Toolbar,InputAdornment } from "@material-ui/core";
import useTable from "../../App/components/useTable";
import * as employeeService from "../../services/employeeService";
import Controls from "../../App/components/controls/Controls";
import {Search } from "@material-ui/icons";
import AddIcon  from "@material-ui/icons/Add";
import PopUp from "../../App/components/PopUp";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput:{
     width:'75%',

  },
  newButton :{
    position:'absolute',
    right:'10px'
  }
}));

const headCells = [
  {id:'fullName',label:'Employee Name'},
  {id:'email',label:'Email Address (Personal)'},
  {id:'mobile',label:'Mobile Number'},
  {id:'department',label:'Department',disableSorting:true}
]
export default function Employees() {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeService.getAllEmployees())
  const [filterFn,setFilterFn] =useState({fn:items => {return items;}});
  const [openPopUp,setOpenPopUp] = useState(false);
  const {TblContainer,TblHead,TblPagination,recordsAfterPagingAndSorting} = useTable(records,headCells,filterFn);

  const handleSearch = e =>{
    let target = e.target;
    setFilterFn({
      fn:items =>{
        if(target.value === "")
          return items;
        else 
            return items.filter(x=> x.fullName.toLowerCase().includes(target.value))  
      }
    })
  }

  const addOrEdit = (employee,resetForm) =>{
    // employeeService.insertEmployee(values)
    //   resetForm();
      employeeService.insertEmployee(employee)
      resetForm();
      setOpenPopUp(false)
      setRecords(employeeService.getAllEmployees())
  }
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form Design With Validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="small" />}
      />

      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <Toolbar>
        <Controls.Input
              label="Search Employees"
              className= {classes.searchInput}
              InputProps = {{
                startAdornment:(<InputAdornment position ="start">
                <Search/>
                </InputAdornment>)
              }}

              onChange = {handleSearch}
            
           
        />
        <Controls.Button
        className={classes.newButton} 
        variant="outlined" 
        text="Add New" 
        startIcon={<AddIcon/>}
        onClick={()=>setOpenPopUp(true)}

        />

        </Toolbar>
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
      <PopUp
       title="Employee Form"
       openPopUp={openPopUp}
       setOpenPopUp={setOpenPopUp}
      >
      <EmployeeForm addOrEdit={addOrEdit}/>
      </PopUp>
    </>
  )
}
