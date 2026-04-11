import express from 'express';
import guessRouter from './modules/games/guess_pokemon/router';
import shinyRouter from './modules/games/guess_shiny/router';
import auth from './modules/auth/router';
import lootbox from './modules/lootbox/router';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  res.json({ message: 'working working siuuu' });
});

//Juegos
app.use('/guess-pokemon', guessRouter);
app.use('/guess-shiny', shinyRouter);

//User
app.use('/auth', auth)

//lootbox
app.use('/lootbox', lootbox)

app.use((_req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

export default app;