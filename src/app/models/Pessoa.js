import Sequelize, { Model } from 'sequelize';


class Pessoa extends Model {
  static init(sequelize){
    super.init(
			{ 
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        genero: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data_nascimento	: {
          type: Sequelize.STRING,
        },
        cep: {
          type: Sequelize.NUMBER,
        },
        email: {
          type: Sequelize.STRING,
        },
        cpf: {
            type: Sequelize.STRING,
            allowNull: false,
        },
			},
			{
				sequelize,
			}
    )
  }
}

export default Pessoa;

