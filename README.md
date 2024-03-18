

# REST API con Node.js y Express


Esta es una REST API simple creada con Node.js y Express que proporciona acceso a datos almacenados en un archivo JSON. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los datos proporcionados.

Instalación
Clona este repositorio en tu máquina local:

```bash
  git@github.com:Danluis/rest-api-Node-JS.git
```
Instala las dependencias del proyecto:
```bash
  npm install
```
Inicia el servidor:
```bash
  npm run dev
```

## Uso

### Endpoints Disponibles

- `GET /api/movies`: Obtiene todos los datos de las películas.

- `POST /api/movies`: Crea una nueva película.

- `GET /api/movies/:id`: Obtiene los datos de una película específica por su ID.

- `PUT /api/movies/:id`: Actualiza los datos de una película existente por su ID.

- `DELETE /api/movies/:id`: Elimina una película existente por su ID.

### Ejemplo de Uso

#### Obtener Todas las Películas


#### Respuesta Exitosa:

```json
[
    {
        "id": 1,
        "title": "Aliens",
        "director": "James Cameron",
        "year": 1985,
        "rating": 8.5
    },
    {
        "id": 2,
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "year": 1994,
        "rating": 9.3
    },
    // Otras películas...
]


