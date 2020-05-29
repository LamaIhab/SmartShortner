const express = require('express')
// create the app
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`server running on ${port}`))
