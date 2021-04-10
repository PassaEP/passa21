import React from "react";
import "../../css/homepage.css"
import { Grid } from "@material-ui/core";
import PassaFace from "../../assets/passa.jpg";


const HomePage = () => {
    return (
        <Grid container spacing={1}>
            <Grid container spacing={3}>
            <Grid container item xs={12} md = {6} style = {{marginBotton: "0.5rem"}}> 
                <div className = "bigPanel">
                    <h1 className = "Reasons">
                        Why I'm running
                    </h1>
                    <p>
                    I was born and raised in the Central Valley, daughter of two Thai immigrants. 
                    I dreamt of being a scientist, and UCLA has allowed me to learn under the greatest minds with the best peers.
                    However, UCLA must do better--- we have an obligation as a public university to uplift and educate our student body the best we can. 
                    That’s why I’m running for USAC General Representative, but I need your help to do it. 
                    </p>
                
                </div>
                </Grid>
                <Grid container item xs={12} md = {6} style = {{marginBotton: "0.5rem"}}> 
                <div className = "PassaPhoto"> 
                    <img src ={PassaFace} alt = "Passa Profile" />
                </div>
                </Grid>
            </Grid>
            <Grid container item xs={12} md = {4} style = {{marginBotton: "0.5rem"}}>
                <div className = "promise1">
                    <h1 className = "uplifting">
                        Uplifting Underserved Groups
                    </h1>
                    <p>
                    Retention rates for BIPOC and marginalized students are worse across the board. 
                    We need to work to even the playing field by focusing on academic preparation programs and increasing access to academic enrichment opportunities such as undergraduate research. 
                    </p>
                </div>
            </Grid>
            <Grid container item xs={12} md = {4} style = {{marginBotton: "0.5rem"}}>
                <div className = "promise2">
                    <h1 className = "health">
                        Health and Sustainabilty
                    </h1>
                    <p>
                    We're living in a pandemic, so public health is a priority especially as we go back. 
                    With thousands of students on campus, sanitation stations need to be everywhere and plentiful. 
                    Menstrual products should also be available in ALL restrooms across campus. 
                    </p>
                </div>
            </Grid>
            <Grid container item xs={12} md = {4} style = {{marginBotton: "0.5rem"}}> 
                <div className = "promise3">
                    <h1 className = "enroll">
                        Improving Enrollment
                    </h1>
                    <p>
                    Enrollment period is stressful for all undergrads, especially those in impacted courses. 
                    To solve this, we can accommodate more students in impacted courses by expanding BruinCast (so students don’t have to physically be in class) or expanding the learning assistant program. 
                    </p>
                </div>
            
            </Grid>

        </Grid>
    );
};

export default HomePage;