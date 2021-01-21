const driver = {}

function updateDriverWithKeyAndValue(driver, car, acura) {
    return {...driver, [car]: acura };
};

function destructivelyUpdateDriverWithKeyAndValue(driver, car, acura) {
    driver[car] = acura
    return driver 
};

function deleteFromDriverByKey(driver, car) {
    const newDriver = {...driver}
    delete newDriver[car];
    return newDriver 
};

function destructivelyDeleteFromDriverByKey(driver, car) {
    delete driver[car]
    return driver 
};