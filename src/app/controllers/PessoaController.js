import * as Yup from 'yup'
import Pessoa from '../models/Pessoa'

// Criar uma classe validators para validar DATA, CEP, CPF, EMAIL
  class PessoaController {
    // Cadastra uma pessoa 
    async store(req, res) {
      // Validação das entradas
      const schema = await Yup.object().shape({
        nome: Yup.string().required(),
        genero: Yup.string().required(),
        dataNascimento: Yup.date(),
        email: Yup.string()
          .email(),
        cep: Yup.string(),
        cpf: Yup.string().min(11).required(),
       })
  
      if (!schema.isValid(req.body)) {
        return res.status(400).json({ message: 'Falha na validação de dados' })
      }
      /** Validar data de nascimento */
      /** Validar cep (criar uma tabela de endereçao associado a essa pessoa)*/
      /** Validar cpf */

      // Verificar se usuario existe (cep, cpf)
      const pessoaExists = await Pessoa.findOne({ where: { email: req.body.email } })
      if (pessoaExists) {
        return res.status(400).json({ error: 'email já está cadastrado' })
      }
    
      const novo = {
        name: req.body.name,
        email: req.body.email,
        genero: req.body.genero,
        cep: req.body.cep,
        cpf:req.body.cpf,
        dataNascimento: req.body.dataNascimento,
      }
  
      await Pessoa.create(novo)
      return res.json(novo)
    }
    
    // Lista todas as pessoas cadastradas
    async index(req, res) {
      const pessoas = await Pessoa.findAll()
      return res.json(pessoas)
    }
  
    async update(req, res) {
      const { name, email } = req.body
      const { id: admim_id } = req.params
  
      // Validação das entradas
      const schema = await Yup.object().shape({
        name: Yup.string(),
        email: Yup.string()
          .email()
          .required(),
        admim: Yup.boolean(),
      })
  
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ message: 'Falha na validação de dados' })
      }
  
      // Validação das mudanças
      const { id } = await Pessoa.findByPk(admim_id)
  
      // Verificar se email passado é diferente(quer trocar)
      if (email !== Pessoa.email) {
        // verificar se email novo já não existe na base de dados
        if (email === Pessoa.findOne({ where: { email } })) {
          return res.status(400).json({ error: 'email já está cadastrado' })
        }
      }
  
      const newPessoa = {
        id,
        name,
        email,
        idade,
        peso,
        altura,
      }
  
      await Pessoa.update(newPessoa, { where: { id } })
  
      return res.json(newPessoa)
    }
  
    async delete(req, res) {
      const { id } = req.params
  
      const pessoa = await Pessoa.destroy({ where: { id } })
  
      return res.json(pessoa)
    }
  }
  
  export default new PessoaController()