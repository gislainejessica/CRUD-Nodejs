# _Desafio - Mostre suas habilidades_
README.md na raiz do projeto com todas as instruções necessárias para baixar, configurar e rodar o projeto fora da sua máquina.

### Funcionalidades e Validações
- **CADASTRO DE PESSOAS (CRUD)**
- [ ] * _Cadastrar mais de um contato e tipo de contato por pessoa_
exemplo de tipo de contato: email, telefone, celular, skype, twitter, telegram
- [ ] * _Cadastrar mais de um endereço e tipo de endereço por pessoa_
exemplo de tipo de endereço: residencial, comercial, cobrança, entrega
- [ ] Cadastrar Pessoa (store, update, delete)
- [ ] _Relatórios_: (não são obrigatórios), (index, show) listagem simples de pessoas e um relatório detalhado de pessoa.
- [x] Buscar informações do endereço baseado no CEP informado na API do _VIACEP_
- [ ] Cadastrar Contato
- [ ] Cadastrar Endereço

- **Validações**
- [x] *NOME*, *GÊNERO* obrigatórios,
- [x] *data de nascimento* data válida, 
- [x] *CEP*, *EMAIL*, *CPF* informações válidas,
- [ ] não permitir endereços ou contatos duplicados, 
- [ ] não permitir cadastrar a mesma pessoa mais de uma vez.

- [x] *_OBS_: __CPF__ como obrigatório, pois vai servir para indentificar a pessoa,
ou seja, para saber se a pessoa já foi cadastrada olhar cpf.

### Dependências

- Express (conexão HTTP)
- pg (PostGres)
- yup (Validação)
- sequelize (ORM bancos relacionais)
- datefns (Manipulação de datas)
- cep-promise (Buscar endereço atraves do cep) 
- gerador-validador-cpf (Validar cpf)

###  Dependências de Desenvolvimento

- nodemon (Atulizar servidor ao salvar arquivo editado, sem ter que reinicia-lo)
- sucrase (Usar `import-export` como padrão)

### Camandos usados no desenvolvimento

- `sudo docker run --name crud -e POSTGRES_PASSWORD=crud -p 5532:5432 -d postgres:11.5-alpine`
- `sudo docker start crud`
- `yarn sequelize db:migrate`
- `yarn sequelize db:migrate:undo`
- `yarn sequelize migration:create --name=pessoas`
- `yarn sequelize migration:create --name=enderecos`
- `yarn sequelize migration:create --name=contatos`
