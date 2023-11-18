import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

const app = express();
const port = 8888;
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("www"));

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', '*');
  // res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/", function (req, res) {
  console.log('123')
  res.header('Content-Type', 'application/json')
  res.send({foo: 'bar'});
});

app.post("/", upload.none(), (req, res) => {
  res.header('Content-Type', 'application/json')
  res.send({
    email: req.body.email,
    password: req.body.password
  })
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});


app.listen(port);
