import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

import { EventProvider } from './contexts/events.context.jsx';
import { SelectedEventsProvider } from './contexts/selectedEvents.context.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <EventProvider>
                <SelectedEventsProvider>
                    <App />
                </SelectedEventsProvider>
            </EventProvider>
        </BrowserRouter>
    </React.StrictMode>
);
