if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const app = require('express')()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(require('express').static('public'))
app.use(expressLayouts)  
 
app.use('/', indexRouter)



const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server started on port http://localhost:${port}`))  
require('./config/dbConnection')     