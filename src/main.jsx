import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter as Router } from 'react-router-dom'

window.addEventListener('error', (event) => {
  document.body.innerHTML += `<div style="color: red; position: fixed; top: 0; left: 0; z-index: 9999; background: white; padding: 20px;">
    <h2>Runtime Error</h2>
    <pre>${event.error ? event.error.stack : event.message}</pre>
  </div>`;
});

window.addEventListener('unhandledrejection', (event) => {
  document.body.innerHTML += `<div style="color: red; position: fixed; top: 0; left: 0; z-index: 9999; background: white; padding: 20px;">
    <h2>Unhandled Promise Rejection</h2>
    <pre>${event.reason}</pre>
  </div>`;
});

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, info) { console.error(error, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', position: 'fixed', top: 0, left: 0, zIndex: 9999, background: 'white', padding: '20px', width: '100vw', height: '100vh', overflow: 'auto' }}>
          <h2>React Render Error</h2>
          <pre>{this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </React.StrictMode>,
)
