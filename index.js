const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { db } = require("./config/db");
const { router } = require("./routes/user");
const { routerPaciente } = require("./routes/paciente");
const { routerAdmin } = require("./routes/admin");

const app = express();

db.authenticate()
    .then(() => console.log("Base conectada"))
    .catch((e) => console.log(e));

app.listen(process.env.PORT, () => {
    console.log(`Listo en el puerto ${process.env.PORT}`);
});

app.use(cors());

app.use(express.json());

app.use("/user", router);

app.use("/paciente", routerPaciente);

app.use("/admin", routerAdmin);