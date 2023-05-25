const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
  res.send("This is working");
});

app.post("/post_data", async (req, res) => {
    let {formData} = req.body
    console.log(formData.fullName);
})

app.get("/home", async (req, res) => {
    res.send("This is the data for the home page")
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
