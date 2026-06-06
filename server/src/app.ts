import express from 'express';
import { corsMiddleware } from './middleware/cors';
import { registerClientApp } from './middleware/serveClient';
import guessRouter from './modules/games/guess_pokemon/router';
import shinyRouter from './modules/games/guess_shiny/router';
import auth from './modules/auth/router';
import lootbox from './modules/lootbox/router';
import ranking from './modules/rankings/router';
import pokedex from './modules/pokedex/router';
import profile from './modules/profile/router'
import trade from './modules/trade/router';
import friends from './modules/friends/router';

const app = express();

app.use(corsMiddleware);
app.use(express.json());

app.get('/', (_req, res) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  res.json({ message: 'working working siuuu' });
});

//Juegos
app.use('/guess-pokemon', guessRouter);
app.use('/guess-shiny', shinyRouter);

//User
app.use('/auth', auth);

//lootbox
app.use('/lootbox', lootbox);

//ranking
app.use('/ranking', ranking);

//pokedex
app.use('/pokedex', pokedex);

//profile
app.use('/profile', profile)

//trade
app.use('/trade', trade)

//friends
app.use('/friends', friends)

registerClientApp(app);

app.use((_req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

export default app;