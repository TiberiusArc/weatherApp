const request = require('request');


let getWeather = (lat,lng,cb) => {
    request({
            url:   `https://api.darksky.net/forecast/6c9eac28c67ae9c85a79b6a2cf139daf/${lat},${lng}`,
            json: true
        }, (error, response, body) => {
            if(!error && response.statusCode === 200) {
                cb(undefined, {
                    summary: body.currently.summary,
                    apparentTemp: body.currently.apparentTemperature
            })} else {
                cb('unable to reach sever')
            }
        }
    );
//    console.log(JSON.stringify(body, undefined, 2));
};

module.exports= {
    getWeather
}