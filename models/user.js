var db = require('../modules/db');

var User = db.define('users', {
    id:           { type: db.INTEGER},
    first_name:   { type: db.VARCHAR, "null": false, limit: 255},
    last_name:    { type: db.VARCHAR, "null": false, limit: 255},
    login:        { type: db.VARCHAR, "null": false, limit: 255},
    password:     { type: db.VARCHAR, "null": false, limit: 255},
    guid:         { type: db.VARCHAR, "null": false, limit: 255},
    image:        { type: db.VARCHAR, "null": false, limit: 511},
    last_login:   { type: db.DATETIME},
    date_modify:  { type: db.DATETIME},
    date_created: { type: db.DATETIME}
}, {
    primaryKeys: ["id"]
});

module.exports = User;