import * as Yup from 'yup';
import Pessoa from '../models/Pessoa';
import { isBefore, startOfHour, parseISO } from 'date-fns';

//import buscaCep from 'busca-cep';
import cep from 'cep-promise'


import { validate as validateCPF } from 'gerador-validador-cpf'


// Criar uma classe validators para validar DATA, CEP, CPF, EMAIL
  class PessoaController {
    // Cadastra uma pessoa 
    async store(req, res) {

      // Validação das entradas
      const schema = await Yup.object().shape({
        name: Yup.string().required(),
        genero: Yup.string().required(),
        data: Yup.string(),
        email: Yup.string().email(),
        cep: Yup.string(),
        cpf: Yup.string().required(),
       })

      // Identificar o que está errado ....
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ message: `Falha na validação de dados` })
      }

      /** Validar cep (criar uma tabela de endereço associado a essa pessoa)*/
      if (req.body.cep){
        try {
          const resposta = await cep(req.body.cep)
          console.log(resposta)  
        }catch(erros){
          return res.status(400).json({ message: 'Cep Inválido' })
        }
      }

      /** Validar cpf */
      if (req.body.cpf){
        const valido = validateCPF(req.body.cpf)
        if (!valido){
          return res.status(400).json({ error: 'CPF inválido' })
        }  
      }
      // Verificar se usuario existe (cpf)
      const pessoaExists = await Pessoa.findOne({ where: { cpf: req.body.cpf } })
      if (pessoaExists) {
        return res.status(400).json({ error: 'Pessoa já tem um cpf cadastrado' })
      }

      // Data no formato ISO 
      /** Validar data de nascimento */
      if (req.body.data){
        const hora = startOfHour(parseISO(req.body.data))
        const dataValida = isBefore(hora, new Date())
  
        if (!dataValida){
          return res.status(400).json({ error: 'Informe uma data válida' })
        }  
      }

      const pessoa = {
        name: req.body.name,
        email: req.body.email,
        genero: req.body.genero,
        cep: req.body.cep,
        cpf:req.body.cpf,
        data_nascimento: req.body.data,
      }
  
      await Pessoa.create(pessoa)

      return res.json(pessoa)
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
        nome: Yup.string(),
        email: Yup.string()
          .email()
          .required(),
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