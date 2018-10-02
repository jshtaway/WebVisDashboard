var showData = function (dataType){
    var csvData = []
    d3.csv("WeatherInfo.csv", function(error, data) {
        data.forEach(function(d) {
            csvData.city = d['city names'];
            // csvData.cloudiness = parseDate(d['cloudiness']);
            // csvData.geo = parseDate(d['geo']);
            // csvData.windiness = parseDate(d['windiness']);
            // csvData.humidity = parseDate(d['humidity']);
            // csvData.pressure = parseDate(d['pressure']);
        });
        
        d3.select('#data')
    });
};