const app = require('./app')

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS LISTENING ON PORT ${process.env.PORT}...`)
})
