const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file);

app.use(require('koa-static')(resolve('./dist')))

app.listen(2001)
  .on('listening', () => console.log('server running~2001'))
  .on('error', err => console.log(err))