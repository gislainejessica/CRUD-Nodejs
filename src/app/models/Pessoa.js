import Sequelize, { Model } from 'sequelize';


class Pessoa extends Model {
  static init(sequelize){
    super.init(
			{ 
        name: {
          type: Sequelize.STRING,
        },
        genero: {
          type: Sequelize.STRING,
        },
        dataNascimento: {
          type: Sequelize.DATE,
        },
        cep: {
          type: Sequelize.NUMBER,
        },
        email: {
          type: Sequelize.STRING,
        },
        cpf: {
            type: Sequelize.STRING,
        },
			},
			{
				sequelize,
			}
    )
  }
}

export default Pessoa;

