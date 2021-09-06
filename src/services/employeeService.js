const KEYS = {
  employees:'employees',
  employeeId:'employeeId'
}
export const getDepartmentCollection = () => ([
  {
    id: "1",
    title: "development",
  },

  {
    id: "2",
    title: "hardware",
  },

  {
    id: "3",
    title: "computer",
  },
]);

export function insertEmployee(data){
  let employees = getAllEmployees();
  data['id'] = generateEmployeeId()
  employees.push(data)
  localStorage.setItem(KEYS.employees,JSON.stringify(employees))

}

export function generateEmployeeId(){
  if(localStorage.getItem(KEYS.employeeId) == null)
     localStorage.setItem(KEYS.employeeId,'0')

  var id = parseInt(localStorage.getItem(KEYS.employeeId))
  localStorage.setItem(KEYS.employeeId,(++id).toString()) 
  return id;  



}

export function getAllEmployees(){
if(localStorage.getItem(KEYS.employees) ==null)
    localStorage.setItem(KEYS.employees,JSON.stringify([]))

  let  employees = JSON.parse(localStorage.getItem(KEYS.employees));

  //map departmentId to dipartment title

  let departments = getDepartmentCollection();

  return employees.map(x=>({
    ...x,
    department : departments[x.departmentId-1].title
  })

  )


}
