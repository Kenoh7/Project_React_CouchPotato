const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 8000;

// middleware
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}));

require("./config/mongoose.config");
require("./routes/recipe.routes")(app);

app.listen(PORT, () => console.log(`!!!!>>>> server up on port: ${PORT} <<<<!!!!`))