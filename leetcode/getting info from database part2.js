const employees = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    salary: 95000
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 35,
    salary: 110000
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    age: 40,
    salary: 125000
  },
  {
    firstName: 'kevin',
    lastName: 'espina',
    age: 29,
    salary: 120000,
  },
  // Add more employee objects here
];

const transformedData = employees.map(employee => {
  return {
    [employee.lastName]: employee.salary
  };
});

console.log(transformedData);

// const filteredEmployees = transformedData.map((employee) => {
//   return Object.values(employee)[0]; // Extract the salary value
// }).filter((salary) => {
//   return salary >= 100000 && salary <= 120000;
// });

// console.log(filteredEmployees);

const filteredEmployees = transformedData.filter((employee) => {
  const salary = Object.values(employee)[0]; // Extract the salary value
  // console.log(salary);
  // console.log(Object.keys(employee)[0]); 
  console.log(Object.keys(employee));
  return salary >= 100000 && salary <= 120000;
});

console.log(filteredEmployees);


// const listOfSalaries = []
// const listOfSalaries = transformedData.filter(employee => {
//   return employee.salary >= 100000 && employee.salary <= 200000
// })

// console.log(listOfSalaries)


// const filteredEmployees = transformedData.filter((employee) => {
//   return employee.salary >= 100000 && employee.salary <= 120000
// })

// console.log(filteredEmployees)