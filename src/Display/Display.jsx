import React, { useEffect, useState } from 'react';;
import './Display.css'
import ProductList from './ProductList/ProductList';

const Display = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
    }, []);

    const [selectedProduct, setSelectedProduct] = useState([]);
    const handleProductList = (product) => {
        setSelectedProduct([...selectedProduct, product])
    };

    const deleteProduct = (titelName) => {
        const filterArray = selectedProduct?.filter((product) => product.title !== titelName
        );
        setSelectedProduct(filterArray);
    };
    return (
        <div className='product'>
            <h2 className='productHead'>Product Here</h2 >
            <div className='cardContanerHead'>
                <div className='cardContaner'>
                    {products.map((product) => (
                        <div key={product.id} className='card'>
                            <img className='productImg' src={product.thumbnail} alt="Image" />
                            <div className='cardText'>
                                <h2 className='title'>{product.title}</h2>
                                <div className='discription'>
                                    <div className='left'>
                                        <p>Brand: {product.brand}</p>
                                        <p>Rating: {product.rating}</p>
                                        <p className='oldPrice'>Price: $XXX</p>
                                    </div>
                                    <div className='right'>
                                        <p>Category: {product.category}</p>
                                        <p>Stock: {product.stock}</p>
                                        <p>Price: ${product.price}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleProductList(product)} id='btn' >Add To Card</button>
                            </div>
                        </div>
                    ))}
                </div>
                <ProductList data={selectedProduct} deleteProduct={deleteProduct} />
            </div>
        </div>
    );
};

export default Display;