import "../App.css";
import React, { useRef, useState, useContext } from 'react';
import { useNavigate, } from 'react-router-dom';
import { AuthContext } from "../contents/AuthContext.jsx";
import withAuth from '../utils/withAuth';
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';

function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <div className="homeii">
        
            <div className='navBar'>

                <div style={{display: "flex", alignItems: "center"}}>
                    <h2>ECHOvidROOM</h2>
                </div>

                <div style={{display: "flex", alignItems: "center"}}>
                    <IconButton onClick={
                        () => {
                            navigate('/history')
                        }
                    }>
                        <RestoreIcon />
                    </IconButton>
                    <p>History</p>


                    <Button onClick={() => {
                        localStorage.removeItem("token")
                        navigate('/auth')
                    }}>
                        Logout
                    </Button>
                </div>

            </div>

            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Crystal-Clear Video Calls with Unmatched Quality</h2>

                        <div style={{display: 'flex', gap: "10px"}}>

                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

                        </div>
                    </div>
                </div>

                <div className="rightPanel">
                    <img srcSet='/undraw_calling_ieh0.png' alt="" />
                    
                </div>
            </div>
        
        </div>
    )
}

export default withAuth(HomeComponent);