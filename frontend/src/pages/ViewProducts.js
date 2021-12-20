import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, CardHeader, CardMedia, Container, Typography } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { ProductActions } from '../stores/actions';




const ViewProduct = (props) => {
    const { products, getOwnProducts, deleteProduct } = props;
    const [productList, setProduct] = useState([]);

    useEffect(
        () => {
            getOwnProducts()
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

    const [expanded1, setExpanded1] = React.useState(false)
    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    return (
        <Container>
            <ContentElement>

                <h3>If you want to delete one of your products for sale, here you go!</h3>
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

                    }}
                >
                    {
                        productList.map((product, index) => (
                            <Card key={index} sx={{ minWidth: 300, maxWidth: 300 }}>
                                <CardHeader
                                    title={product.name}
                                    subheader={product.category}

                                />
                                <CardMedia
                                    component="img"
                                    src={`data:image/png;base64, ${product.picture[0]}`}
                                    height="194"

                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.price + '€'}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        onClick={handleExpandClick1}
                                        aria-expanded={expanded1}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Product description:</Typography>
                                        <Typography paragraph>
                                            {product.description}
                                            <br />
                                            posted on: {product.date_of_posting}
                                        </Typography>
                                        <Button
                                            style={{ backgroundColor: '#006600', color: 'white' }}
                                            variant="contained"
                                            component="label"
                                            onClick={() => deleteProduct(product.id)}
                                        >
                                            Delete product
                                        </Button>
                                    </CardContent>
                                </Collapse>
                            </Card>))
                    }
                </div>
                < br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </ContentElement>
        </Container >
    )
}

const mapStateToProps = ({ product }) => ({
    products: product.products,
});

const mapDispatchToProps = {
    getOwnProducts: ProductActions.getOwnProducts,
    deleteProduct: ProductActions.deleteProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);