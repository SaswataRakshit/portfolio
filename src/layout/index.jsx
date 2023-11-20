import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    paper: {
        backgroundColor: "#c9c7c7 !important"
    }
});

export default function Navbar() {
    const classes = useStyles()
    const [state, setState] = React.useState({
        top: false
    });
    const [beat, setBeat] = React.useState(false)

    const toggleDrawer = (anchor, open) => (event) => {
        if (open) {
            setBeat(true)
            setTimeout(() => {
                if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            }, 1000)
        }
        else {
            setBeat(false)
            setState({ ...state, [anchor]: open });
        }

    };

    return (
        <div style={{ position: 'fixed', zIndex: 100 }}>
            <FontAwesomeIcon onClick={toggleDrawer('top', true)} icon="fa-solid fa-bars" beatFade={beat} style={{ marginLeft: '20px', marginTop: '15px' }} />
            <Drawer
                classes={{ paper: classes.paper }}
                anchor={'top'}
                open={state['top']}
                onClose={toggleDrawer('top', false)}
            >
                <h5 style={{ textAlign: 'right', marginRight: '16px', color: '#fafafa' }}>Download Resume</h5>
            </Drawer>
        </div>
    );
}