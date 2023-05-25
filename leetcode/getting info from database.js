const employees = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    salary: 95000,
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 35,
    salary: 110000,
  },
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    age: 40,
    salary: 125000,
  },
  {
    firstName: 'kevin',
    lastName: 'espina',
    age: 29,
    salary: 120000,
  },
  // Add more employee objects here
]

const filteredEmployees = employees.filter((employee) => {
  return employee.salary >= 100000 && employee.salary <= 120000
})

console.log('filteredEmployees:', filteredEmployees)

const result = filteredEmployees.map((employee) => {
  return {
    lastName: employee.lastName,
    salary: employee.salary,
  }
})

console.log('result:', result)

//this is if you dont want to use the filter method and want a brute force method
// const filteredEmployees = [];
// for (let i = 0; i < employees.length; i++) {
//   const employee = employees[i];
//   if (employee.salary >= 100000 && employee.salary <= 120000) {
//     filteredEmployees.push({
//       lastName: employee.lastName,
//       salary: employee.salary
//     });
//   }
// }


// if this was a sql db then we can do this:
// SELECT employee_last_name, employee_salary
// FROM your_table_name
// WHERE employee_salary BETWEEN 100000 AND 120000;
