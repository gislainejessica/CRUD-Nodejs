module.exports = {
	dialect: 'postgres',
	host: 'localhost',
	port: 5532,
	username: 'postgres',
	password: 'crud',
	database: 'crud',
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	},
}