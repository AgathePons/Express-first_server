const dayInfos = require('./getDateHour');

const timeZoneMessage = (capital) => {
    const rightDate = dayInfos.getDate(capital);
    const rightTime = dayInfos.getHour(capital);
    let htmlTimeZone = '';
    htmlTimeZone += 'Nous sommes le ';
    htmlTimeZone += rightDate;
    htmlTimeZone += '.<br>';
    htmlTimeZone += 'Il est ';
    htmlTimeZone += rightTime;
    htmlTimeZone += ` à ${capital}.`;

    return htmlTimeZone;
};

module.exports = timeZoneMessage;