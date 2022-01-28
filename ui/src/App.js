import axios from "axios";
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import WeeklySummaryDrawer from './components/WeeklySummaryDrawer'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function App() {
    const classes = useStyles();
    const [weekData, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(async() => {
        axios.get('http://localhost:3000').then((response) => {
            console.log(response.data);
            setData(response.data);
            console.log(weekData);
        }).catch(error => {
            setError(error);
        });

    }, []);

    if (error) return `Error: ${error.message}`;
    if (!weekData) return "No data!"

    const displayWeeks = () => {
        if(weekData){
            return <WeeklySummaryDrawer {...weekData} />
        } else {
            return (
                <div className={classes.root}>
                    <CircularProgress />
                </div>
            );
        }
    }
    return (
        <>
            {displayWeeks()}
        </>
    )
}