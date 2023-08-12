const express = require('express');
const app = express();
const port = 8083
app.use(express.static('dist'))
// app.use(express.static('dist/projectA'))
app.listen(port, () => console.log('服务器启动成功：' + port));