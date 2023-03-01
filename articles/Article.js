const Sequelize = require("sequelize")
const connection = require("../database/database.js")
const Category = require("../categories/Category")

const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        alloNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article) //Tem muitos
Article.belongsTo(Category)// Um artigo pertence a uma categoria

module.exports = Article