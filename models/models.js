const sequelize = require('../db')
const {INTEGER, STRING, FLOAT} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: INTEGER, primaryKey:true, autoIncrement:true},
    email: {type: STRING, unique: true},
    password: {type: STRING},
    role: {type: STRING, defaultValue: "USER"},
})

const Preference = sequelize.define('pref', {
    id: {type: INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: STRING, unique: true},
    type: {type: STRING, unique: true},
    value: {type: FLOAT, defaultValue: 0.5}
})

User.hasMany(Preference)
Preference.belongsTo(User)

module.exports = {
    User,
    Preference
}