// Write your solution in this file!
const driver = {
  name: "Sam",
  address: "11 Broadway"
}

function updateDriverWithKeyAndValue(driver, key, value){
  const drivers = { ...driver }
   drivers[key] = value
   return drivers
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  const newDriver = { ...driver }
  delete newDriver[key]
  return newDriver 
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];

  return driver;
}