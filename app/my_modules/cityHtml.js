const timeZoneMessage = require('./timeZone');

const htmlServices = {

  buildHtmlHead: (capital) => {
    const headOpen = '<head>';
    const headClose = '</head>';
    const headMeta = '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge">';
    const headTitle = `<title>${capital}</title>`;
    const headLink = '<link rel="stylesheet" href="style.css">';
    const headContent = headOpen + headMeta + headTitle + headLink + headClose;
    return headContent;
  },

  buildHtmlBody: (capital) => {

    let htmlBody = '';

    htmlBody += '<body>';

    htmlBody += `<h1>${capital}</h1>`;
    htmlBody += '<p>';
    htmlBody += timeZoneMessage(capital);
    htmlBody += '</p>'
    htmlBody += '</body>';

    return htmlBody;
  },

  buildHtmlTotal: (capital) => {
    const htmlHead = htmlServices.buildHtmlHead(capital);
    const htmlBody = htmlServices.buildHtmlBody(capital);
    const htmlTotal = htmlHead + htmlBody;

    return htmlTotal;
  },
};

module.exports = htmlServices;