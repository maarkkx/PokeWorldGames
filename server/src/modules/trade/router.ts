import { Router } from 'express';
import * as controller from './search_pokemon_other_user/controller'

const router = Router();

router.post('/user-pokemons', controller.getPokemonsFromUser)

export default router;