import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ProjectDetails from './projectDetails';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Nodestar',
        technologyUsed: ['React', 'Javascript', 'Micro-frontend', 'Redux', 'Redux-thunk', 'HTML', 'CSS', 'Styled-component', 'Material-UI', 'Jest', 'React-test-library']
    },
    {
        label: 'Sourcing-Insights',
        technologyUsed: ['React', 'Javascript', 'Google-map', 'apache-ECharts', 'Redux', 'Redux-thunk', 'HTML', 'CSS', 'Material-UI', 'Styled-component']
    },
    {
        label: 'Configurator-Dashboard',
        technologyUsed: ['React', 'Javascript', 'React D3 Tree', 'Redux', 'Redux-thunk', 'HTML', 'CSS', 'Material-UI', 'Styled-component']
    },
    {
        label: 'Imports Payment Tool',
        technologyUsed: ['Angular', 'React', 'Javascript', 'HTML', 'CSS', 'Intro JS', 'Java', 'Springboot', 'Rest-API', 'Kafka', 'Mongo-DB', 'Drool-Engine']
    },
    {
        label: 'Insurance Claim Tool',
        technologyUsed: ['Angular 6', 'Tpescript', 'Bootstrap', 'HTML', 'CSS', 'SCSS', 'Jasmine', 'Karma', 'Protractor']
    },
];

function ProjectCards() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: '38.4%', flexGrow: 1, position: 'absolute', zIndex: 100, top: '23.7%', left: '29.4%' }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    paddingLeft: '8px',
                    bgcolor: 'background.default',
                }}
            >
                <h4 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 25 }}>{images[activeStep].label}</h4>
            </Paper>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                sx={{
                                    height: '38.5vh'
                                }}
                            >
                                <ProjectDetails technologyUsed={step.technologyUsed} heading={step.label} index={index} />
                            </Box>
                        ) : null}
                    </div>
                ))}
            </SwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default ProjectCards;