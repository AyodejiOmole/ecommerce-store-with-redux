import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const [ filteredProducts, setFilteredProducts ] = useState(products);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products])

    const filter = (category) => {
        if (category === "All") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(item => item.category === category));
        }
    }

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
            <div className='ui five column wide container grid center-align'>
                <div className='column'>
                    <button className='ui black button' onClick={() => filter("All")}>
                        All
                    </button>
                </div>

                <div className='column'>
                    <button className='ui black secondary button' onClick={() => filter("men's clothing")}>
                        Men's Clothing
                    </button>
                </div>

                <div className='column'>
                    <button className='ui black secondary button' onClick={() => filter("women's clothing")}>
                        Women's Clothing
                    </button>
                </div>

                <div className='column'>
                    <button className='ui black secondary button' onClick={() => filter("jewelery")}>
                        Jewellery
                    </button>
                </div>

                <div className='column'>
                    <button className='ui black secondary button' onClick={() => filter("electronics")}>
                        Electronics
                    </button>
                </div>
            </div>
            {products.length === 0 ? <Loading/> : 
                (
                    filteredProducts.map((product) => {
                        return (
                            <div className='four column wide' key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <div className='ui link cards'>
                                        <div className='card' style={{height: "400px"}}>
                                            
                                            <div className='image'>
                                                <img src={product.image} alt={product.title} style={{height: "250px"}}/>
                                            </div>
                                            <div className='content'>
                                                <div className='header' style={{margin: "15px 0px 10px 0px"}}>
                                                    {product.title.substring(0, 40)}
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