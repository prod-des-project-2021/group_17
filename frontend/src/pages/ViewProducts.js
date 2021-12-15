import React,  {useEffect, useState} from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Typography } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { RegisterButton, RegisterButtonLink } from '../components/navbar/Buttons';
import { connect } from 'react-redux';
import { ProductActions } from '../stores/actions';




const ViewProduct = (props) => {
    const { products, getProducts } = props;
    // const { deleteProduct } = props;
    

    /* const handleDeleteProductButton = () => {
        deleteProduct();
    }; */

    const [productList, setProduct] = useState([]);

    useEffect(
        () => {
            if (products !== null) setProduct(products)
            
            console.log(products)
        },
        [products]
    );

    const [expanded1, setExpanded1] = React.useState(false)
    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    return (
        <Container>
            <ContentElement>
                <div>
                    <h3>If you want to delete or modify one of your products for sale, here you go!</h3>
                    <br />
                    <br />
                    {productList.map((product, index) => (
                    <Card sx={{ minWidth: 300, maxWidth: 300 }}>
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
                                expand={expanded1}
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
                                    <br/>
                                    posted on: {product.date_of_posting}
                                </Typography>
                                <Button
                                    style={{ backgroundColor: '#006600', color: 'white' }}
                                    variant="contained"
                                    component="label"

                                >
                                    Delete product
                                </Button>
                                <br />
                                <br />
                                <Button
                                    style={{ backgroundColor: '#006600', color: 'white' }}
                                    variant="contained"
                                    component="label"

                                // onClick=
                                >
                                    Change Product
                                </Button>
                            </CardContent>
                        </Collapse>
                    </Card>))}
                    <br />
                    <br />
                    <RegisterButton >
                        <RegisterButtonLink to='/welcome'>Done!</RegisterButtonLink>
                    </RegisterButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);