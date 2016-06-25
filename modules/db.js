var caminte = require('caminte'),
    Schema = caminte.Schema,
    config = {
        driver     : "mysql",
        host       : "localhost",
        port       : "3306",
        username   : "root",
        password   : "123456",
        database   : "boilerplate",
        pool       : true
    };

var schema = new Schema(config.driver, config);

module.exports = schema;