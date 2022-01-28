import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WeeklySummary from './WeeklySummary';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const drawerWidth = 300;

export default function ClippedDrawer(props) {
    const [selectedWeek, setSelectedWeek] = React.useState(props[Object.keys(props)[0]]);

    const showSummaryBlock = () => {
        return ( <Box sx={{ width: "100%" }}>
                <WeeklySummary { ...selectedWeek }/>
        </Box>
        )
    }

    const getComplianceBadge = (idx) => {
        if(idx >= 70){
            return (  <VerifiedUserIcon sx={{ color: "red" }} />  )
        }

        if(idx >= 56){
            return (  <VerifiedUserIcon sx={{ color: "orange" }} />  )
        }

        if(idx < 56){
            return (  <VerifiedUserIcon sx={{ color: "green" }} />  )
        }
    }

    const handleClick = (e, item) => {
        setSelectedWeek(props[e.target.outerText]);
        console.log(e.target.outerText);
    }
    return (
        <React.Fragment>
            <CssBaseline enableColorScheme />
            <Box sx={{ display: 'flex'}}>
                <AppBar  position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar sx={{ backgroundColor: "black"}}>
                        <Typography variant="h6" noWrap component="div">
                            <a href="https://haulwith.us" target="blank"><img src="https://haulwith.us/_next/image?url=%2Fimages%2Flogo.svg&w=256&q=100" width="120" alt="Haul Challenge" /></a>
                        </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Box sx={{ overflow: 'auto' }}>
                    <Toolbar />
                    <List>
                        {Object.keys(props).map((week, index) => (
                            <ListItem button key={week} onClick={handleClick}>
                                <ListItemIcon>
                                    {getComplianceBadge(props[week].complianceIndex)}
                                </ListItemIcon>
                                <ListItemText primary={week} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {showSummaryBlock()}
            </Box>
        </Box>

        </React.Fragment>
    );
}