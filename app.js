const yargs = require('yargs');
const geoCode = require('./weather');
const weather = require('./weather/forecast');
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
    console.log(argv);

    geoCode.location(argv.a, (errorMessage, results) => {

        if(errorMessage){
            console.log(errorMessage);
        }else {
           /* console.log(JSON.stringify(results, undefined, 2));*/
           console.log(results.address);
            weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) =>{
                if(errorMessage) {
                    console.log(errorMessage)
                }else {
                    console.log(`It is quite ${weatherResults.summary} and it feels about ${weatherResults.apparentTemp}`);
                }
            });
        }

    });
//lat lng
/*weather.getWeather(53.44241090000001,-6.1542797, (errorMessage, weatherResults) =>{
    if(errorMessage) {
        console.log(errorMessage)
    }else {
        console.log(JSON.stringify(weatherResults, undefined, 2))
    }
});*/
// 6c9eac28c67ae9c85a79b6a2cf139daf




