const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const recipes = require("./data")

server.use(express.static("public"))
server.use(express.static("IMG"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("index", { items: recipes })
})

server.get("/about", function(req, res) {
    const about = {
        title: ['Sobre o Foodfy', 'Como tudo começou…', 'Nossas receitas'],
        description: ['Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus',
        ' et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros',
        ' sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna',
        ' vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat',
        ' aliquam iaculis massa. Duis vulputate varius justo pharetra maximus',
        ' In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis',
        ' non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.'],

        descriptionSobre: ['Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan',
        ' Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus',
        ' rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis',
        ' eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat',
        ' Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et',
        ' malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.'],

        descriptionReceitas: ['In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis',
        ' non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue',
        ' Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan',
        ' Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus',
        ' rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis',
        ' eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat',
        ' Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et',
        'malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.']
    }

    return res.render("about", { about })
})

server.get("/recipes", function(req, res) {
    return res.render("recipes", { items: recipes })
})

server.get("/recipes/:index", function(req, res) {
    const { index: recipeIndex } = req.params
    const recipe = recipes[recipeIndex]
    
    if(!recipe) {
        return res.send("Recipe not found!")
    }

    return res.render("recipe", { item: recipe })
})

server.listen(5000, function() {
    console.log("server is running")
})