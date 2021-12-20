import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Categories from '../components/navbar/Categories';
import { ContentElement } from '../components/navbar/ContentElement';
import { Outlet } from 'react-router-dom'

import { connect } from 'react-redux';
import { ProductActions } from '../stores/actions';
import ProductCard from './ProductCard';


const Kitchen = (props) => {
    const { products, getProducts } = props;
    const [productList, setProduct] = useState([]);

    useEffect(
        () => {
            getProducts(3)
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    useEffect(
        () => {
            if (products !== null) setProduct(products)
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [products]
    );

    return (
        <Container>
            <ContentElement sx={{ maxWidth: 300 }}>
                <Outlet />
                <Categories />
                <h3>Kitchen </h3>
                <br />
                <br />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        alignItems: 'baseline',
                        gridGap: '60px 60px',

                    }}>
                    {productList.map((product, index) => (
                        <ProductCard key={index} product={product} />))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);