import { Router } from 'express'
import PessoaController from './app/controllers/PessoaController'
const routes = Router()

/** Rotas */
routes.get('/people', PessoaController.index )
routes.post('/people', PessoaController.store)

export default routes
