const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
    .options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'address to fetch weather for',
        string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let formattedString = encodeURIComponent(argv.address);
let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedString}`;


    axios.get(geocodeURL).then((response) => {
        if (response.data.status === 'ZERO_RESULTS'){
            throw new Error('unable to find that address')
        }
        let lat = response.data.results[0].geometry.location.lat;
        let lng = response.data.results[0].geometry.location.lng;
        let weatherURL = `https://api.darksky.net/forecast/6c9eac28c67ae9c85a79b6a2cf139daf/${lat},${lng}`;
        console.log(response.data.results[0].formatted_address);
            return axios.get(weatherURL);
        }).then((response) => {
            let temp = Math.floor((response.data.currently.temperature- 32) * (5/9));
            let appTemp = Math.floor((response.data.currently.apparentTemperature- 32) * (5/9));
            let storm = response.data.currently.nearestStormDistance;
            console.log(`It's currently ${temp}, but it feels like ${appTemp}. the nearest storm is ${storm}`);
        }).catch((magoo) => {
            if (magoo.code === 'ENOTFOUND') {
                console.log('unable to conect to api servers')
            } else {
                console.log(magoo.message)
            }
    });

    //load in more information. default location. no location argument. save data system.