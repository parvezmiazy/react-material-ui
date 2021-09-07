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
import EditOutlinedIcon  from "@material-ui/icons/EditOutlined";
import CloseIcon  from "@material-ui/icons/Close";

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
  {id:'department',label:'Department',disableSorting:true},
  {id:'actions',label:'Actions',disableSorting:true}
]
export default function Employees() {
  const classes = useStyles();
  const [recordForEdit,setRecordForEdit] = useState(null);
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
    if(employee.id ===0)
       employeeService.insertEmployee(employee)
    else
        employeeService.updateEmployee(employee)
       resetForm();
      setRecordForEdit(null) 
      setOpenPopUp(false)
      setRecords(employeeService.getAllEmployees())
  }

  const OpenInPopUp = item=>{
      setRecordForEdit(item)
      setOpenPopUp(true)
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
        onClick={()=>{setOpenPopUp(true); setRecordForEdit(null);} }

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
                    <TableCell>
                     <Controls.ActionButton
                      color="primary"
                      onClick={()=>OpenInPopUp(item)}
                     >
                       <EditOutlinedIcon fontSize="small"/>
                  

                     </Controls.ActionButton>
                     <Controls.ActionButton
                      color="secondary"
                      onClick={()=>setOpenPopUp(item)}
                     >
                       <CloseIcon fontSize="small"/>
       

                     </Controls.ActionButton>
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
      <EmployeeForm 
      addOrEdit={addOrEdit}
      recordForEdit={recordForEdit}
      />
      </PopUp>
    </>
  )
}
