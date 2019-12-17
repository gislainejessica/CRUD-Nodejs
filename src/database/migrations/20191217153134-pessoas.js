'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoas', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: Sequelize.DATE,
      },
      cep: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.STRING,
      },
      created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
    });
  },
  down: (queryInterface) => {
      return queryInterface.dropTable('pessoas');
  }
}
