const express = require('express')
const app = express()

app.set("view engine", "ejs") //função express para renderizar ejs em html

app.get("/", function (req, res) { // o barra seria o dominio normal
    const items = [
        {title: "D",
        message: "aniel"
    },
    {title: "E",
        message: "stá"
    },
    {title: "M",
        message: "uito"
    },
    {title: "A",
        message: "paixonado"
    },
    {title: "I",
        message: "numeravelmente"
    },
    {title: "S",
        message: "eduzido"
    }
    ]

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"

    res.render("pages/index", {
        qualities: items,
        subtitle: subtitle
    }) //não precisa identificar o ejs pois ja setei
})

app.get("/sobre", function (req, res) { // barra sobre seria uma nova pagina
    res.render("pages/about") //diretório
})

app.listen(8081)
console.log("Rodando")

// TODAS AS ALTERAÇÕES FEITAS EM ARQUIVOS .EJS NÃO PRECISAM PARAR PARA ATUALIZAR
// JA AS NO SERVER (NODE) SIM