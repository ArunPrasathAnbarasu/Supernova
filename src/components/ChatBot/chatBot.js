import React from "react";
import ChatBot from 'react-simple-chatbot';
import classes from './chatbot.module.css';
import { ThemeProvider } from 'styled-components';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

const Chatbot = ({ setShowChat }) => {

    const chatHandler = () => {
        setShowChat(false)
    }

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#1976d2',
        // headerFontColor: '#fff',
        // headerFontSize: '15px',
        // botBubbleColor: '#EF6C00',
        // botFontColor: '#fff',
        // userBubbleColor: '#fff',
        // userFontColor: '#4a4a4a',
      };
    return (
        <React.Fragment>
            <div className={classes['container']}>
                <div className={classes['closeIcon']}>
                    <CloseTwoToneIcon onClick={chatHandler}>close</CloseTwoToneIcon>
                </div>
                <ThemeProvider theme={theme}>
                <ChatBot
                    steps={[
                        {
                            id: '1',
                            message: 'What is your name?',
                            trigger: '2',
                        },
                        {
                            id: '2',
                            user: true,
                            trigger: '3',
                        },
                        {
                            id: '3',
                            message: 'Hi {previousValue}! What is your number?',
                            trigger: '4',
                        },
                        {
                            id: '4',
                            user: true,
                            trigger: '5',
                        },
                        {
                            id: '5',
                            message: 'Where are you from?',
                            trigger: '6',
                        },
                        {
                            id: '6',
                            user: true,
                            trigger: '7',
                        },
                        {
                            id: '7',
                            message: 'Where service do you need?',
                            trigger: '8',
                        },
                        {
                            id: '8',
                            options: [
                                { value: 'Electrician', label: 'Electrician', trigger: '9' },
                                { value: 'Plumber', label: 'Plumber', trigger: '9' },
                                { value: 'Mechanic', label: 'Mechanic', trigger: '9' }
                            ],
                        },
                        {
                            id: '9',
                            message: 'Thanks for your data we will contact you in a moment',
                            end: true,
                        },
                    ]}
                />
                </ThemeProvider>
            </div>
        </React.Fragment>
    )
}

export default Chatbot;