import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { ContentElement } from '../components/navbar/ContentElement';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const steps = [
    'View your order',
/*     'Promotion codes',
    'Add personal data',
    'Add payment method',  */
    'Place your order'];

function HorizontalLinearStepper(props) {
    const { cart } = props;
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    /* const isStepOptional = (step) => {
        return step === 1;
    }; */

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    /* const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    }; */

    const handleReset = () => {
        setActiveStep(0);
    };

    

    return (
        <Container>
            <ContentElement>
                <Box sx={{ width: '100%'}}>
                    <Stepper activeStep={activeStep} >
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}> <br />
                            <br />
                            <h1 >Congratulations! We have just received your order. </h1> <br />
                            We will send you a confirmation email as soon as possible and contact you when your order is on its way.
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, color:'green' }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button sx={{color:'green'}} onClick={handleReset} component={Link} to='/home' > Continue with shopping  </Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
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
                                <Button onClick={handleNext} sx={{color:'green'}}>
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
            </ContentElement>
        </Container>
    );
}

const mapStateToProps = ({ product }) => ({
    cart: product.cart,
});

export default connect(mapStateToProps, null)(HorizontalLinearStepper);