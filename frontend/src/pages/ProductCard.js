import React from 'react'
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
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { ProductActions } from '../stores/actions';

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

function ProductCard(props){
    const {product,addProductToCart} = props;

    const [expanded1, setExpanded1] = React.useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    return(<Card sx={{ minWidth: 300, maxWidth: 300 }}>
        <CardHeader
            title={product.name}
            subheader={product.category_name}

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
                    <br />
                    posted on: {product.date_of_posting}
                </Typography>
                <Button
                    style={{ backgroundColor: '#006600', color: 'white' }}
                    variant="contained"
                    component="label"
                    onClick={() => addProductToCart(product)}
                >
                    Add to cart
                </Button>
            </CardContent>
        </Collapse>
    </Card>);
}

const mapDispatchToProps = {
    addProductToCart: ProductActions.addProductToCart
};

export default connect(null, mapDispatchToProps)(ProductCard);