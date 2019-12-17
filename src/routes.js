import { Router } from 'express'
import PessoaController from './app/controllers/PessoaController'
const routes = Router()

/** Rotas */
routes.get('/people', PessoaController.index )

export default routes
