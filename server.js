let express = require('express')
let mongoose = require('mongoose')
let articleRouter = require('./routes/articles')
let app = express()

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
})

//Template
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))

//Root
app.get('/', (req, res) => {
    let articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'test description'
    }
]
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter)

app.listen(8081)