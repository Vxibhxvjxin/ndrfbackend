import React from 'react';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Welcome to the Dashboard</h1>
            </header>
            <div className="dashboard-content">
                <div className="card">
                    <h2>Card 1</h2>
                    <p>Some information or functionality here.</p>
                </div>
                <div className="card">
                    <h2>Card 2</h2>
                    <p>Some information or functionality here.</p>
                </div>
                <div className="card">
                    <h2>Card 3</h2>
                    <p>Some information or functionality here.</p>
                </div>
            </div>
            <footer className="dashboard-footer">
                <p>&copy; 2024 Your Company Name</p>
            </footer>
        </div>
    );
}

export default Dashboard;
