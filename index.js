const app = require("./app");
require("./config/db");

app.listen(4000, () => console.log("Servidor Levantado en el puerto 4000!!!"));
