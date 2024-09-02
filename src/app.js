import express from "express";
import productsRouter from "./routes/products.js";
import cartsRouter from "./routes/carts.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

const usuario = {
  nombre: "Carlos",
  apellido: "Ruyl",
  edad: 23,
  correo: "CarlosR@gmail.com",
};

const usuarios = [
  { id: 1, nombre: "Roberto", apellido: "Torres", edad: 38 },
  { id: 2, nombre: "Gonzalo", apellido: "Somer", edad: 38 },
  { id: 3, nombre: "Mauricio", apellido: "Jota", edad: 38 },
  { id: 4, nombre: "Verto", apellido: "Sam", edad: 38 },
];

const peliculas = [
  { id: 1, nombre: "The Shawshank Redemption", genero: "drama" },
  { id: 2, nombre: "The Godfather", genero: "crime" },
  { id: 3, nombre: "The Dark Knight", genero: "action" },
  { id: 4, nombre: "Pulp Fiction", genero: "crime" },
  { id: 5, nombre: "Forrest Gump", genero: "drama" },
  { id: 6, nombre: "Inception", genero: "sci-fi" },
  { id: 7, nombre: "Fight Club", genero: "drama" },
  { id: 8, nombre: "The Matrix", genero: "sci-fi" },
  { id: 9, nombre: "Goodfellas", genero: "crime" },
  { id: 10, nombre: "Se7en", genero: "thriller" },
  { id: 11, nombre: "The Silence of the Lambs", genero: "thriller" },
  { id: 12, nombre: "Interstellar", genero: "sci-fi" },
  { id: 13, nombre: "The Green Mile", genero: "drama" },
  { id: 14, nombre: "Gladiator", genero: "action" },
  { id: 15, nombre: "The Lion King", genero: "animation" },
  { id: 16, nombre: "Back to the Future", genero: "adventure" },
  { id: 17, nombre: "Schindler's List", genero: "history" },
  { id: 18, nombre: "Braveheart", genero: "drama" },
  { id: 19, nombre: "The Departed", genero: "crime" },
  { id: 20, nombre: "Django Unchained", genero: "western" },
];

app.get("/peliculas", (req, res) => {
  const { genero } = req.query;
  const peliculasFiltradas = peliculas.filter(
    (pelicula) => pelicula.genero == genero
  );
  if (peliculasFiltradas.length <= 0) {
    res.send(peliculas);
  } else {
    res.send(peliculasFiltradas);
  }
});

app.get("/appQuery", (req, res) => {
  let { nombre, apellido, edad } = req.query;
  res.send(`Bienvenido ${nombre}, ${apellido} con ${edad}`);
});

app.get("/usuarios", (req, res) => {
  res.send(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  const idUser = +req.params.id;
  const user = usuarios.find((element) => element.id === idUser);
  if (!user) {
    res.send(`No existe el usuario con ID -> ${idUser}`);
  } else {
    res.send(user);
  }
});

app.get("/saludo", (req, res) => {
  res.send("Hola a todos!");
});

app.get("/bienvenida", (req, res) => {
  res.send(
    `<h1 style="color:blue";> Bienvenido a mi primer servidor de Express</h1>`
  );
});

app.get("/usuario", (req, res) => {
  res.send(usuario);
});

app.get("/usuario/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Bienvenido ${nombre}`);
});

app.listen(8080, () => {
  console.log("Estoy levantando en el puerto 8080");
});
