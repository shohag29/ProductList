import React from 'react';
import './ProductList.css'

const ProductList = (props) => {
    const { data, deleteProduct } = props;
    console.log(data);
    return (
        <div className='singleCardContaner'>
            {data.map((product) => (
                <div className='singleCardList'>
                    <div className='cardContant'>
                        <div className='imageSection'>
                            <img className='singleImg' src={product.thumbnail} alt="" />
                        </div>
                        <div>
                            <p>{product.title}</p>
                            <p>{product.brand}</p>
                            <p>Price: ${product.price}</p>
                            <button className='delBtn' onClick={() => deleteProduct(product.title)}>Delete</button>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default ProductList;