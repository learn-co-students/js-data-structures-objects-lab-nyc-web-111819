// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign({}, driverObject, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
   driver[key] = value;
   return driver;
}

function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver, key);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver
}