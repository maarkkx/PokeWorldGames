import { Router } from 'express';
import * as searchPokemonController from './search_pokemon_other_user/controller';
import * as searchUsersController from './search_users/controller';
import * as getUserTradesController from './get_user_trades/controller';
import * as createTradeController from './create_trade/controller';
import * as acceptTradeController from './accept_trade/controller';
import * as rejectTradeController from './reject_trade/controller';


const router = Router();

//ver pokemons de un usuario
router.post('/user-pokemons', searchPokemonController.getPokemonsFromUser);

//buscar usuarios por nombre (autocompletado)
router.post('/search-users', searchUsersController.searchUsers);

//ver mis trades
router.get('/my-trades', getUserTradesController.getUserTrades);

//crear trade
router.post('/request', createTradeController.createTrade);

//aceptar trade
router.post('/:tradeId/accept', acceptTradeController.acceptTrade);

//reject trade
router.post('/:tradeId/reject', rejectTradeController.rejectTrade);

export default router;