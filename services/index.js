const express = require("express");

const cors = require('cors');

const fs = require('fs');

const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get("/api/items", (req, res) => {
    const { q: query } = req.query;
    const filePath = path.join(__dirname, "data", "products.json");
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        const jsonData = JSON.parse(data);
        const filteredProducts = jsonData.products.filter(product =>
            product.category.toLowerCase().includes(query.toLowerCase())
        );

        return res.json(filteredProducts);
    });
});

app.get(`/api/items/:id`, (req, res) => {
    const { id } = req.params; 
    const filePath = path.join(__dirname, "data", "products.json");
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }
        const jsonData = JSON.parse(data);
        const product = jsonData.products.find(product => product.id === parseInt(id));

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        return res.json(product);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})