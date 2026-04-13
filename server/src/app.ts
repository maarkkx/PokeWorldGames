import express from 'express';
import guessRouter from './modules/games/guess_pokemon/router';
import shinyRouter from './modules/games/guess_shiny/router';
import auth from './modules/auth/router';
import lootbox from './modules/lootbox/router';
import ranking from './modules/rankings/router';
import pokedex from './modules/pokedex/router';
import profile from './modules/profile/router'

const app = express();

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

app.use((_req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

export default app;