# _Desafio - Mostre suas habilidades_
README.md na raiz do projeto com todas as instruções necessárias para baixar, configurar e rodar o projeto fora da sua máquina.

- __CADASTRO DE PESSOAS (CRUD)__
- _Cadastrar informações gerais de uma pessoa_
- * _Cadastrar mais de um contato e tipo de contato por pessoa_
exemplo de tipo de contato: email, telefone, celular, skype, twitter, telegram
- * _Cadastrar mais de um endereço e tipo de endereço por pessoa_
exemplo de tipo de endereço: residencial, comercial, cobrança, entrega

---

- **Validações**
- *NOME*, *GÊNERO* obrigatórios,
- *data de nascimento* data válida, 
- *CEP*, *EMAIL*, *CPF* informações válidas,
- não permitir endereços ou contatos duplicados, 
- não permitir cadastrar a mesma pessoa mais de uma vez.

---
### Funcionalidades
- Cadastrar Pessoa (store, update, delete)
- _Relatórios_: (não são obrigatórios), (index, show) listagem simples de pessoas e um relatório detalhado de pessoa.
- Buscar informações do endereço baseado no CEP informado na API do _VIACEP_
- Cadastrar Contato
- Cadastrar Endereço


---

> Como se candidatar
Por favor envie um Email para rodrigo@adsoft.com.br com seu CV anexado, informe no assunto: Vaga Full Stack JS Developer.

Você também pode entrar em contato pelo Telegram @rodrigo_oliveira.

Ao entrar em contato sobre a vaga, por Email ou Telegram, informe o link para o repositório do projeto no github.

---

### Dependências
- Express
- pg (PostGres)
- yup (Validação)
- sequelize (ORM bancos relacionais)

---

- nodemon (atulizar servidor ao salvar arquivo editado, sem ter que reinicia-lo)
- sucrase (import-export como padrão de importação)

### Camandos usados no desenvolvimento
- `sudo docker run --name crud -e POSTGRES_PASSWORD=crud -p 5532:5432 -d postgres:11.5-alpine`

- `sequelize-cli sequelize -D`

---
