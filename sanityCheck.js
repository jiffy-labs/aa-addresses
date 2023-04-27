const addressMapping = require('./addressMapping.json');

// This check makes sure the JSON file is readable and there are no null/empty addresses
const checkOne = (addressInfo) => {
    let addressMap = {}
    let success = true;
    for (let company in addressInfo) {
        for(let entryPoint in addressInfo[company]) {
            for(let type in addressInfo[company][entryPoint]){
                for(let addressIdx in addressInfo[company][entryPoint][type]) {
                    let address = addressInfo[company][entryPoint][type][addressIdx].toLowerCase();
                    addressMap[address] = {company, type}
                    if ('entryPoints' in addressMap[address]) {
                        addressMap[address].entryPoints.push(entryPoint);
                    } else {
                        addressMap[address].entryPoints = []
                        addressMap[address].entryPoints.push(entryPoint);
                    }
                }
            }
        }
    }
    for (let address in addressMap) {
        if (address == null || address == "") {
            console.log('Null address found - ', address);
            success = false;
        }
    }
    return success;
}

const main = () => {
    let passesSanityCheck = true;
    
    try{
        passesSanityCheck = checkOne(addressMapping);
    } catch (err) {
        console.log('Error reading addressMapping.json');
    }

    if (passesSanityCheck) {
        console.log('Looks good !');
    } else {
        console.log('Looks like there is an issue with addressMapping.json');
    }
}

main();