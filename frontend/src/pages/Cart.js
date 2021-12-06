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

const steps = [
    'View your order',
/*     'Promotion codes',
    'Add personal data',
    'Add payment method',  */
    'Place your order'];

function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

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

    const handleSkip = () => {
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
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    

    return (
        <Container>
            <ContentElement>
{/* color:'green' */}
                <Box sx={{ width: '100%'}}>
                    <Stepper activeStep={activeStep} >
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            /* if (isStepOptional(index)) {
                                labelProps.optional = (
                                    <Typography color="green" variant="caption">Optional</Typography>
                                );
                            } */
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
 {/* the content of the pages from every step has to be done here */}
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
                                {/* {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                        Skip
                                    </Button>
                                )} */}

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

export default HorizontalLinearStepper;


// Alternative Stepper with Icon and without the skipp steps

/* import { Container } from '@mui/material'
import React from 'react'
import { ContentElement } from '../components/navbar/ContentElement'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel'; */


/* const Cart = () => {
    return (
        <Container>
            <ContentElement>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '90vh'
                    }}
                >
                    <h1>Cart</h1>
                </div>
            </ContentElement>
        </Container>
    )
}

export default Cart */


/*
const steps = [
    'View your order',
    'Add personal data',
    'Add payment method',
    'Place your order'
];


function Cart() {
    return (
        <Container>
            <ContentElement>
                <Box sx={{ width: '100%'}}>
                    <Stepper sx={{ color: 'green'}}activeStep={0} alternativeLabel >
                        {steps.map((label) => (
                            <Step key={label} >
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </ContentElement>
        </Container>
    );
}
export default Cart */