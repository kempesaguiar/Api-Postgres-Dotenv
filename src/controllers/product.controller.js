const db = require('../config/database');

exports.createProduct = async (req, res) => {
    const { product_name, quantity, price } = req.body;
    const { rows } = await db.query(
        "INSERT INTO products (productName, quantity, price) VALUES ($1, $2, $3)",
        [product_name, quantity, price]
    );

    res.status(200).send({
        message: "Product added successfully",
        body: {
            product: { product_name, quantity, price }
        },
    });
};

exports.listAllProducts = async (req, res) => {
    const response = await db.query('Select * from products ORDER BY productid ASC');
    res.status(200).send(response.rows);
};

exports.listProductById = async (req, res) => {
    const id = req.params.id;
    const response = await db.query('Select * from products where productid = $1', [id]);
    res.status(200).send(response.rows);
}

exports.updateProductById = async (req, res) => {
    const id = req.params.id;
    const { product_name, quantity, price } = req.body;
    const response = db.query('Update products set productName = $1, quantity = $2, price = $3 where productid = $4', [product_name, quantity, price, id]
    );

    res.status(200).send({ message: 'Product updated' });
};

exports.deleteProductById = async (req, res) => {
    const id = req.params.id;
    const response = db.query('Delete from products where productid = $1', [id]);

    res.status(200).send({ message: 'Product deleted', id });
};