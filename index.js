import express from "express";
import { exec } from "child_process";



const app = express();


app.use(express.json());

app.use(express.static('views', /*{
   maxAge: "1d"
}*/));

app.get("/", (req, res) => {
   res.send("Hello World");
});

app.listen(3000, () => {
   console.log("Server is running on port 3000");
   console.log('opening The Browser');
   exec('start http://localhost:3000')
})