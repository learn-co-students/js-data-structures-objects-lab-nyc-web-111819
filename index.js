let driver = {}
function updateDriverWithKeyAndValue(driver, key, value){
    const newdriver = {...driver}
    newdriver[key] = value
    return newdriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver

}

function deleteFromDriverByKey(driver, key){
    let newestdriver = {...driver}
    delete newestdriver[key]
    return newestdriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}