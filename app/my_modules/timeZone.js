const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

const capitalCities = require('./capitalCities');

const timeZoneMessage = (capital) => {
    
    const rightTime = getHour(capital);
    let htmlTimeZone = '';

    htmlTimeZone += 'Il est ';
    htmlTimeZone += rightTime;
    htmlTimeZone += ` à ${capital}.`;

    return htmlTimeZone;
};

const getHour = (capital) => {
    // on passe dans le tableau pour trouver la bonne ville
    let timeCapital = '';
    for (i=0; i<capitalCities.length; i++) {
        if (capital === capitalCities[i].name.toLocaleLowerCase()) {
            timeCapital = dayjs().tz(capitalCities[i].tz).format('HH:mm');
            console.log('tz:', capitalCities[i].tz);
        } 
    }
    return timeCapital;
}

module.exports = timeZoneMessage;