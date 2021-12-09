import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Typography } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { RegisterButton, RegisterButtonLink } from '../components/navbar/Buttons';



function ViewProduct() {
    // const { deleteProduct } = props;
    

    /* const handleDeleteProductButton = () => {
        deleteProduct();
    }; */


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

                                >
                                    Change Product
                                </Button>
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