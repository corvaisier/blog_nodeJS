let express = require('express')
let mongoose = require('mongoose')
let Article = require('./models/article')
let articleRouter = require('./routes/articles')
let app = express()

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
})

//Template
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))

//Root
app.get('/', async (req, res) => {
    let articles = await Article.find().sort({ createdAt: 'desc'})
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter)

app.listen(8081)