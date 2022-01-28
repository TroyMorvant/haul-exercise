import * as React from 'react';
import { format, parseISO } from 'date-fns';
import { TextField } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { Timeline } from '@mui/icons-material';
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from '@mui/lab';

import TimerOffIcon from '@mui/icons-material/TimerOff';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import TimerIcon from '@mui/icons-material/Timer';
import LocalShipping from '@mui/icons-material/LocalShipping';
import PaidIcon from '@mui/icons-material/Paid';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import Box from '@mui/material/Box';

export default function DailySummary(props) {
    const day = props;

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EventAvailableIcon sx={{ color: "black", mr: 1, my: 0.5 }} />
                <TextField readOnly id="input-with-sx" label="Start Date" variant="filled" value={parseISO(day.startTime).toDateString()} />
                &nbsp;
                <ScheduleIcon sx={{ color: "black", mr: 1, my: 0.5 }} />
                <TextField readOnly id="input-with-sx2" label="Start Time" variant="filled" value={parseISO(day.startTime).toLocaleTimeString()} />
            </Box>
            <p />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TimerIcon sx={{ color: "black", mr: 1, my: 0.5 }} />
                <TextField readOnly id="onduty" label="On-Duty Hours" variant="filled" value={(day.onDutyDurationMinutes / 60).toFixed(2)} />
                &nbsp;&nbsp;
                <LocalHotelIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                <TextField readOnly id="driving" label="Off-Duty Hours" variant="filled" value={(day.offDutyDurationMinutes / 60).toFixed(2)} />
            </Box>
            <p />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LocalShipping sx={{ color: "black", mr: 1, my: 0.5 }} />
                <TextField readOnly id="driving" label="Driving Hours" variant="filled" value={(day.driveDurationMinutes / 60).toFixed(2)} />
                &nbsp;
                <PaidIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                <TextField readOnly id="driving" label="Earnings (Gross)" variant="filled" value={`$${(day.dailyGross).toFixed(2)} [USD]`} />
            </Box>
        </React.Fragment>
    )
}
