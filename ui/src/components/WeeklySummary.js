import * as React from "react";
import { format, parseISO } from 'date-fns';
import DailySummary from './DailySummary';
import { Box, Step, Stepper, StepContent, StepButton } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function WeeklySummary(props) {
    const days = props.days;

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
        border: "0px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));

    const [activeStep, setActiveStep] = React.useState(0);

    const getCurrentDay = () => {
        return days[activeStep];
    }

    const getDayLabel = (day) => {
        return format(parseISO(day.startTime), 'EEEE');;
    }

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return(
        <React.Fragment>
        <Box sx={{ width: "100%" }}>
            <Stepper id={`stepper-`} sx={{height: "100%"}} nonLinear orientation="vertical" activeStep={activeStep} >
                {days.map((day, index) => {
                    const stepProps = {};
                    return (
                        <Step key={`step_${index}`} {...stepProps}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {getDayLabel(day)}
                            </StepButton>
                            <StepContent>
                                <DailySummary {...getCurrentDay()} />
                            </StepContent>
                        </Step>
                    );
                })}
            </Stepper>
            <Masonry columns={3} spacing={5}>
                <Item key='hours_worked'>
                    <TextField
                        id="outlined-required"
                        label="Weekly On-Duty Hours"
                        fullWidth
                        defaultValue={(props.weeklyOnDutyDurationMinutes / 60).toFixed(2)}
                        readOnly
                    />

                </Item>
                <Item key="weekly_gross">
                    <TextField
                        id="outlined-required"
                        fullWidth
                        label="Weekly Gross Pay"
                        defaultValue={`$${props.weeklyGross.toFixed(2)} (USD)`}
                        readOnly
                    />
                </Item>
                <Item key="weekly_ot">
                    <TextField
                        id="outlined-required"
                        fullWidth
                        label="Weekly Overtime Hours"
                        defaultValue={(props.weeklyOvertimeMinutes / 60).toFixed(2)}
                        readOnly
                    />
                </Item>
            </Masonry>
        </Box>
        </React.Fragment>
    )
}