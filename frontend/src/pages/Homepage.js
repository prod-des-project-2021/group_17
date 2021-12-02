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
import React from 'react';
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

function Homepage() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container>
            <ContentElement>
                <Outlet /> 
                    <Categories /> 
                    <h3>Take a look at our most wanted products! </h3>
                    <br/>
                    <br/>
                    <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        height: '90vh'
                    }}
                >
                    <Card sx={{ maxWidth: 600 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            /* action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            } */
                            title="Pan"
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/images/panpicture.jpg"
                        // alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                12$
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    Pan for induction stove, only used twice.
                                </Typography>

                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            /* action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            } */
                            title="Pan"
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/images/panpicture.jpg"
                        // alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                12$
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    Pan for induction stove, only used twice.
                                </Typography>

                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ maxWidth: 600 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            /* action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            } */
                            title="Pan"
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/images/panpicture.jpg"
                        // alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                12$
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    Pan for induction stove, only used twice.
                                </Typography>

                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            /* action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            } */
                            title="Pan"
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/images/panpicture.jpg"
                        // alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                12$
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    Pan for induction stove, only used twice.
                                </Typography>

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
                    <Card sx={{ maxWidth: 600 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            /* action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            } */
                            title="Pan"
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/images/panpicture.jpg"
                        // alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                12$
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    Pan for induction stove, only used twice.
                                </Typography>

                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ maxWidth: 600 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            /* action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            } */
                            title="Pan"
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/images/panpicture.jpg"
                        // alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                12$
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    Pan for induction stove, only used twice.
                                </Typography>

                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            /* action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            } */
                            title="Pan"
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/images/panpicture.jpg"
                        // alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                12$
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    Pan for induction stove, only used twice.
                                </Typography>

                            </CardContent>
                        </Collapse>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    X
                                </Avatar>
                            }
                            /* action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            } */
                            title="Pan"
                            subheader="November 30, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/images/panpicture.jpg"
                        // alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                12$
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Product description:</Typography>
                                <Typography paragraph>
                                    Pan for induction stove, only used twice.
                                </Typography>

                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
                {/* <RowHomepage>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '90vh'
                        }}
                    >

                        <h1>Products</h1>


                    </div>
                </RowHomepage> */}
            </ContentElement>
        </Container>
    )
}

export default Homepage


/* import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
  );
} */
