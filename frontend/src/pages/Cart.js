import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { ContentElement } from '../components/navbar/ContentElement';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { ProductActions } from '../stores/actions';

const steps = [
    'View your order',
    /*     'Promotion codes',
        'Add personal data',
        'Add payment method',  */
    'Place your order'];

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

function HorizontalLinearStepper(props) {

    let navigation = useNavigate();

    const { cart, removeProductFromCart, checkout } = props;
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = async () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
        if (activeStep === steps.length - 1) {
            checkout(cart);
            navigation("welcome");
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const [expanded1, setExpanded1] = React.useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    return (
        <Container>
            <ContentElement>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={index} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}

                    </Stepper>
                    {cart.map((product, index) => (
                        <React.Fragment key={index}>
                            <br />
                            <br />
                            <Card key={index} sx={{ minWidth: 300, maxWidth: 300 }}>
                                <CardHeader
                                    title={product.name}
                                    subheader={product.category_name} />
                                <CardMedia
                                    component="img"
                                    src={`data:image/png;base64, ${product.picture[0]}`}
                                    height="194" />
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
                                            onClick={() => removeProductFromCart(product)}
                                        >
                                            Remove from Cart
                                        </Button>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </React.Fragment>
                    ))}
                    <br />
                    <br />

                    <React.Fragment>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {cart === null || cart.length === 0 ? (
                                <Button disabled onClick={handleNext} sx={{ color: 'green' }}>
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            ) : (
                                <Button onClick={handleNext} sx={{ color: 'green' }}>
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>)}

                        </Box>
                    </React.Fragment>

                </Box>
            </ContentElement>
        </Container>
    );
}

const mapStateToProps = ({ product }) => ({
    cart: product.cart
});

const mapDispatchToProps = {
    removeProductFromCart: ProductActions.removeProductFromCart,
    checkout: ProductActions.checkout
};

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalLinearStepper);