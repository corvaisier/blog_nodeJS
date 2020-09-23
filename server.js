let express = require('express')
let articleRouter = require('./routes/articles')
let app = express()

//Template
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

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
    res.render('index', {articles: articles})
})
app.listen(8081)