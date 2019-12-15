const Sequelize = require('sequelize')
const DataConfig = require('../config/database')
const Pessoa = require('../models/Pessoa')

const models = [Pessoa]

class Database {
	constructor() {
		this.init()
	}

	init() {
		this.connection = new Sequelize(DataConfig)

		models.map(model => {
			model.init(this.connection)
		})
		models.map(
			model => model.associate && model.associate(this.connection.models)
		)
	}
}
export default new Database()