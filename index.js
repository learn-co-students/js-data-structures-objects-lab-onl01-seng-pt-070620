var driver = { 
    name: "Sam", 
    address: "111 Broadway"
};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, { [key]: value }); 
}

function deleteFromDriverByKey(driver, key) {
    let newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    let newDriver = Object.assign(driver);
    delete driver[key];
    delete newDriver[key];
    return newDriver
} 