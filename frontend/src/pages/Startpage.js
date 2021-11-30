import { Container } from '@mui/material'
import React from 'react'
import { ContentElement } from '../components/navbar/ContentElement'
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import panpicture from '../images/panpicture.jpg'



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

function Startpage() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Container>
            <ContentElement>
                {/* <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '90vh'
                }}
                > */}
                <h1>Hello!</h1>
                <br />
                <p>Welcome to the official website of PSOAStore. <br />
                    Here students of Oulu University of Applied Sciences (OAMK) can buy second hand goods or sell their own unwanted goods. <br />
                    This is an ideal way to cope with living in the PSOAS dormitories,
                    as you don't have to buy all the new items and can sell everything again at the end of your stay if you want to.
                </p>
                <br />
                <p>Happy shopping!</p>
                <p>PSOAStore Team</p>
                <br />
                <br />
                <h3>Take a look at our most wanted products </h3>
                {/* </div> */}
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
            </ContentElement>
        </Container>

    )
}

export default Startpage


