import { Router } from 'express';
import * as searchPokemonController from './search_pokemon_other_user/controller';
import * as getUserTradesController from './get_user_trades/controller';

const router = Router();

router.post('/user-pokemons', searchPokemonController.getPokemonsFromUser);
router.get('/my-trades', getUserTradesController.getUserTrades);

export default router;