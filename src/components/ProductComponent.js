import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const Loading = () => {
        return (
            <div className='ui four column grid container'>
                <div className='ui column'>
                    <Skeleton height={400} />
                </div>

                <div className='column'>
                    <Skeleton height={400} />
                </div>

                <div className='column'>
                    <Skeleton height={400} />
                </div>

                <div className='column'>
                    <Skeleton height={400} />
                </div>
            </div>
        )
    }
    return (
        <>
            {products.length === 0 ? <Loading/> : 
                (
                    products.map((product) => {
                        return (
                            <div className='four column wide' key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <div className='ui link cards'>
                                        <div className='card' style={{height: "500px"}}>
                                            <div className='image'>
                                                <img src={product.image} alt={product.title} style={{height: "250px"}}/>
                                            </div>
                                            <div className='content'>
                                                <div className='header' style={{margin: "15px 0px 10px 0px"}}>
                                                    {product.title}
                                                </div>
                                                <div className='meta price' style={{margin: "10px 0px 10px 0px"}}>${product.price}</div>
                                                <div className='meta' style={{margin: "10px 0px 10px 0px"}}>{product.category}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                )
            }
        </>
    );
}

export default ProductComponent;