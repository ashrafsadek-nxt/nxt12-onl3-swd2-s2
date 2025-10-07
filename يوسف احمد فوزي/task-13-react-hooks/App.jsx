import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard.jsx";
import AdvancedCounter from "./components/AdvancedCounter.jsx";
import TaskManager from "./components/TaskManager.jsx";
import DataFetcher from "./components/DataFetcher.jsx";
import InteractiveForm from "./components/InteractiveForm.jsx";
import ParentComponent from "./components/ParentComponent.jsx";
import HooksPlayground from "./components/HooksPlayground.jsx";

// Advanced React Hooks Application
// This app demonstrates complex useState, useEffect, Props, and component communication
// Features: State management, API calls, form handling, parent-child communication

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="container">
          <h1>React Hooks Mastery</h1>
          <p>Advanced useState, useEffect, and Props demonstration</p>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="components-grid">
            <Dashboard />
            <AdvancedCounter />
            <TaskManager />
            <DataFetcher />
            <InteractiveForm />
            <ParentComponent />
            <HooksPlayground />
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2024 React Hooks Demo. Advanced component architecture.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
