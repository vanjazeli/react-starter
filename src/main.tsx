import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

window.addEventListener('load', () => {
	document.documentElement.classList.add('loaded');
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
