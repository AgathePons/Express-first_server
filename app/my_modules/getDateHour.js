const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);
// set fr
const localFr = require('dayjs/locale/fr');
dayjs.locale('fr');

const capitalCities = require('./capitalCities');

const dayInfos = {
  getDate: (capital) => {
    // check capital
    let timeCapital = '';
    for (i = 0; i < capitalCities.length; i++) {
      if (capital === capitalCities[i].name.toLocaleLowerCase()) {
        timeCapital = dayjs().tz(capitalCities[i].tz).format('dddd D MMMM YYYY');
        console.log('tz:', capitalCities[i].tz);
      }
    }
    return timeCapital;
  },
  getHour: (capital) => {
    // check capital
    let timeCapital = '';
    for (i = 0; i < capitalCities.length; i++) {
      if (capital === capitalCities[i].name.toLocaleLowerCase()) {
        timeCapital = dayjs().tz(capitalCities[i].tz).format('HH:mm');
      }
    }
    return timeCapital;
  },
};

module.exports = dayInfos;