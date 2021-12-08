import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Typography } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'
import { RegisterButton } from '../components/navbar/Buttons'
import { RegisterButtonLink } from '../components/navbar/Buttons'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/* const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
})); */

function ViewProduct() {
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
                    <Card sx={{ maxWidth: 600 }}>
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
                                    Pan for induction stove, only used twice.
                                </Typography>
                                <RegisterButton >
                                    <RegisterButtonLink to='/cart'>Delete product</RegisterButtonLink>
                                </RegisterButton>
                                <br />
                                <RegisterButton >
                                    <RegisterButtonLink to='/cart'>Change details</RegisterButtonLink>
                                </RegisterButton>
                            </CardContent>
                        </Collapse>
                    </Card>
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

export default ViewProduct