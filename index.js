// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(d, k, val) {
    d[k] = val;
}

function destructivelyUpdateDriverWithKeyAndValue(d, k, val) {
    if(d.k){
        d[k] = val
    }
}

function deleteFromDriverByKey(d, k) {
    const newObj = d;
    delete newObj[k]
    return newObj;
}

function destructivelyDeleteFromDriverByKey(d, k) {
    delete d.k;
}