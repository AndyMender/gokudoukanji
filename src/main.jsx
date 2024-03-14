import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Target the 'root' div block of the index.html entrypoint to anchor the content
const root = ReactDOM.createRoot(document.getElementById('root'));

// Define the App entrypoint blocks
const appEntrypoint = 
<React.StrictMode>
<App />
</React.StrictMode>;

// Render App content to screen
root.render(appEntrypoint);
