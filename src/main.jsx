import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FilterProvider } from './context';
import { ScrollToTop } from './components/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<FilterProvider>
				<ScrollToTop />
        <App />
        <ToastContainer closeButton={ false } />
			</FilterProvider>
		</Router>
	</React.StrictMode>
);
