const cds = require('@sap/cds');

module.exports = cds.service.impl(async function(srv) {
    srv.on('printHelloWorld', (req) => {
        console.log(req.data.input)
        return `${req.data.input}, Akash this side!`
    });
});