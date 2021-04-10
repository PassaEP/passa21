import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "../../css/navigation.css"

const Navigation = () => {
    return(
        <div>
            <AppBar position="static" style={{ backgroundColor: "#C4C4C4" }}>
                <Toolbar>
                    <h1 >Passa 4 Office</h1>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigation;