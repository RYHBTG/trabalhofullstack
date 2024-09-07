const Sequelize = require('sequelize')
const config = require('../config/database')

const Pessoa = require('../Models/Pessoa')

const connection = new Sequelize(config)

Pessoa.init(connection)
Pessoa.associate(connection.models)

module.exports = connection