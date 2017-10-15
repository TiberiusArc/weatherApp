const request = require('request');

    let geocodeAddress = (address) => {
        return new Promise((resolve, reject) => {
            let formattedString = encodeURIComponent(address);

            request({
                //url:'https://maps.googleapis.com/maps/api/geocode/json?address=38%20the%20bawn%20grove%20malahide%20dublin',
                url:`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedString}`,
                json: true
            }, (error, response, body) => {
                if (error) {
                    reject('Cannot connect to google servers');
                } else if (body.status === 'ZERO_RESULTS'){
                    reject('Cannot  find any addresses');
                } else if (body.status === 'OK'){
                    resolve( {
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    });
                }
                //console.log(JSON.stringify(body, undefined, 2)); //pretty prints json
            });
        })
    };

geocodeAddress('90210').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage)
});