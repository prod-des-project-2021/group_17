// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import panpicture from '../images/panpicture.jpg'
// import HoverRating from '../elements/Rateing';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import CategoryClothes from './CategoryClothes';
// import CategoryGames from './CategoryGames';
// import CategoryHome from './CategoryHome';
// import CategoryKitchen from './CategoryKitchen';
// import CategorySport from './CategorySport';
// import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Categories from '../components/navbar/Categories';
import { ContentElement } from '../components/navbar/ContentElement';
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { ProductActions } from '../stores/actions';
import { maxWidth } from '@mui/system';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Homepage = (props) => {
    const { products, getProducts } = props;
    const [pName] = useState();
    const [pPrice] = useState();
    const [pDescription] = useState();
    const [pFiles] = useState([]);
    const [pCategory] = useState('');
    const [productList, setProduct] = useState([]);


    useEffect(
        () => {
            getProducts()
        },
        []
    );

    useEffect(
        () => {
            if (products !== null) setProduct(products)
            
            console.log(products)
        },
        [products]
    );

    const [expanded1, setExpanded1] = React.useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };


    return (
        <Container>
            <ContentElement sx={{maxWidth: 300}}>
                <Outlet />
                <Categories />
                <h3>Take a look at our most wanted products! </h3>
                <br />
                <br />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        height: '90vh',
                    }}
                >
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
                                // onClick=
                                >
                                    Add to cart
                                </Button>
                            </CardContent>
                        </Collapse>
                    </Card>))}
                    
                    {/* product1 */}

                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);