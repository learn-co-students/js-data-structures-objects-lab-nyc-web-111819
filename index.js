const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
    const newdriver = { ...driver};
    
    newdriver[key] = value;
    return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const clonedriver = Object.assign({}, driver);

    delete clonedriver[key];
    return clonedriver;
}

function  destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}