// Write your solution in this file!
 const employee = {
  name : 'Nick',
  streetAddress : '108 Cooper St.'
 }

 function updateEmployeeWithKeyAndValue(employee, key, value) {
   return Object.assign({}, employee, {[key]: value});
 }

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   return Object.assign(employee, {[key]: value});
 }

 function deleteFromEmployeeByKey(employee, key) {
  const newObj = Object.assign({}, employee)
  delete newObj[key];
  return newObj;
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
  const newObj = Object.assign(employee)
  delete newObj[key];
  return newObj;
 }