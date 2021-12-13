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
import { RegisterButton, RegisterButtonLink } from '../components/navbar/Buttons';
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

const Homepage = ( props ) => {
    const { products,getProducts } = props;
    const [ pName ] = useState();
    const [ pPrice ] = useState();
    const [ pDescription ] = useState();
    const [ pFiles ] = useState([]);
    const [ pCategory ] = useState('');

    useEffect (
        () => {
            getProducts()
        },
        []
    );

    useEffect (
        () => {
            console.log(products)
        },
        [products]
    );

    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);
    const [expanded5, setExpanded5] = React.useState(false);
    const [expanded6, setExpanded6] = React.useState(false);
    const [expanded7, setExpanded7] = React.useState(false);
    const [expanded8, setExpanded8] = React.useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };
    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };
    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };
    const handleExpandClick4 = () => {
        setExpanded4(!expanded4);
    };
    const handleExpandClick5 = () => {
        setExpanded5(!expanded5);
    };
    const handleExpandClick6 = () => {
        setExpanded6(!expanded6);
    };
    const handleExpandClick7 = () => {
        setExpanded7(!expanded7);
    };
    const handleExpandClick8 = () => {
        setExpanded8(!expanded8);
    };

    return (
        <Container>
            <ContentElement>
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
                        height: '90vh'
                    }}
                >
                    {/* product1 */}
                    <Card sx={{ maxWidth: 600 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            title={pName + " " + pCategory}
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={pFiles[0]}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {pPrice}
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
                                    {pDescription}
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
                    </Card>
                    {/* product2 */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }

                            title={pName + " " + pCategory}
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={pFiles[1]}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {pPrice}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded2}
                                onClick={handleExpandClick2}
                                aria-expanded={expanded2}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded2} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    {pDescription}
                                </Typography>
                                <RegisterButton >
                                    <RegisterButtonLink to='/cart'>Add to Card</RegisterButtonLink>
                                </RegisterButton>
                            </CardContent>
                        </Collapse>
                    </Card>
                    {/* product3 */}
                    <Card sx={{ maxWidth: 600 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            title={pName + " " + pCategory}
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={pFiles[2]}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {pPrice}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded3}
                                onClick={handleExpandClick3}
                                aria-expanded={expanded3}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded3} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    {pDescription}
                                </Typography>
                                <RegisterButton >
                                    <RegisterButtonLink to='/cart'>Add to Card</RegisterButtonLink>
                                </RegisterButton>
                            </CardContent>
                        </Collapse>
                    </Card>
                    {/* product4 */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            title={pName + " " + pCategory}
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={pFiles[3]}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {pPrice}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded4}
                                onClick={handleExpandClick4}
                                aria-expanded={expanded4}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded4} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    {pDescription}
                                </Typography>
                                <RegisterButton >
                                    <RegisterButtonLink to='/cart'>Add to Card</RegisterButtonLink>
                                </RegisterButton>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        height: '90vh'
                    }}
                >
                    {/* product5 */}
                    <Card sx={{ maxWidth: 600 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            title={pName + " " + pCategory}
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={pFiles[4]}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {pPrice}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded5}
                                onClick={handleExpandClick5}
                                aria-expanded={expanded5}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded5} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    {pDescription}
                                </Typography>
                                <RegisterButton >
                                    <RegisterButtonLink to='/cart'>Add to Card</RegisterButtonLink>
                                </RegisterButton>
                            </CardContent>
                        </Collapse>
                    </Card>
                    {/* product6 */}
                    <Card sx={{ maxWidth: 600 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            title={pName + " " + pCategory}
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={pFiles[5]}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {pPrice}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded6}
                                onClick={handleExpandClick6}
                                aria-expanded={expanded6}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded6} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    {pDescription}
                                </Typography>
                                <RegisterButton >
                                    <RegisterButtonLink to='/cart'>Add to Card</RegisterButtonLink>
                                </RegisterButton>
                            </CardContent>
                        </Collapse>
                    </Card>
                    {/* product7 */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            title={pName + " " + pCategory}
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={pFiles[6]}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {pPrice}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded7}
                                onClick={handleExpandClick7}
                                aria-expanded={expanded7}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded7} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    {pDescription}
                                </Typography>
                                <RegisterButton >
                                    <RegisterButtonLink to='/cart'>Add to Card</RegisterButtonLink>
                                </RegisterButton>
                            </CardContent>
                        </Collapse>
                    </Card>
                    {/* product8 */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            title="Pan"
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/images/panpicture.jpg"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                12$
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded8}
                                onClick={handleExpandClick8}
                                aria-expanded={expanded8}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded8} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    Pan for induction stove, only used twice.
                                </Typography>
                                <RegisterButton >
                                    <RegisterButtonLink to='/cart'>Add to Card</RegisterButtonLink>
                                </RegisterButton>
                            </CardContent>
                        </Collapse>
                    </Card>
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