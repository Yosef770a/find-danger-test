

export function findBy(arrayObject, paramsObject, disableSensitivity = false) {
    return arrayObject.filter(item => {
        for (const key in paramsObject) {
            const itemValue = disableSensitivity? String(item[key]).toLowerCase() : item[key];
            const paramValue = disableSensitivity? String(paramsObject[key]).toLowerCase() : paramsObject[key];
            
            if (itemValue !== paramValue) {
                return false;
            }
        }
        return true;
    });
};



function calculateAverage(numsArr){
    let total = 0
    numsArr.forEach(num => total +=num)
    return total / numsArr.length
}

// disableSensitivity