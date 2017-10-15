const request = require('request');

let location = (address, callback) => {
    let formattedString = encodeURIComponent(address);

    request({
        //url:'https://maps.googleapis.com/maps/api/geocode/json?address=38%20the%20bawn%20grove%20malahide%20dublin',
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedString}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Cannot connect to google servers');
        } else if (body.status === 'ZERO_RESULTS'){
            callback('Cannot  find any addresses');
        } else if (body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
           }
        //console.log(JSON.stringify(body, undefined, 2)); //pretty prints json
    });
};


    module.exports = {

        location

    };