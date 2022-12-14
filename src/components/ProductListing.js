import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });

    dispatch(setProducts(response.data));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{marginTop: "50px"}}>
      <div className="ui four column grid stackable container" >
        <ProductComponent />
      </div>
  </div>
  )
}

export default ProductListing;