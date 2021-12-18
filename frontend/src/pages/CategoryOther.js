import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Categories from '../components/navbar/Categories';
import { ContentElement } from '../components/navbar/ContentElement';
import { Outlet } from 'react-router-dom'

import { connect } from 'react-redux';
import { ProductActions } from '../stores/actions';
import ProductCard from './ProductCard';


const Other = (props) => {
    const { products, getProducts } = props;
    const [productList, setProduct] = useState([]);

    useEffect(
        () => {
            getProducts(1)
        },
        []
    );

    useEffect(
        () => {
            if (products !== null) setProduct(products)
        },
        [products]
    );

    return (
        <Container>
            <ContentElement sx={{ maxWidth: 300 }}>
                <Outlet />
                <Categories />
                <h3>Other </h3>
                <br />
                <br />
                <div
                    style= {{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        alignItems: 'baseline',
                        gridGap: '60px 60px',

                    }}>
                    {productList.map((product, index) => (
                        <ProductCard product={product}/>))}
                </div>
                <br />
                <br />
                <br />
                <br />
               
            </ContentElement>
        </Container>
    )
}

const mapStateToProps = ({ product }) => ({
    products: product.products,
});

const mapDispatchToProps = {
    getProducts: ProductActions.getProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Other);