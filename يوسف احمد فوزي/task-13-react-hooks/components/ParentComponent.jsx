import React, { useState, useEffect } from "react";

function ParentComponent() {
  const [parentData, setParentData] = useState({
    message: "Hello from Parent!",
    counter: 0,
    theme: "light",
    settings: {
      notifications: true,
      autoSave: false,
      language: "en",
    },
  });

  const [childrenData, setChildrenData] = useState([]);

  // Update document title with parent state
  useEffect(() => {
    document.title = `Parent Counter: ${parentData.counter} | Theme: ${parentData.theme}`;
  }, [parentData.counter, parentData.theme]);

  // Handle data from children
  const handleChildData = (childId, data) => {
    setChildrenData((prev) => {
      const existing = prev.find((item) => item.childId === childId);
      if (existing) {
        return prev.map((item) =>
          item.childId === childId
            ? { ...item, ...data, lastUpdated: new Date().toLocaleTimeString() }
            : item
        );
      } else {
        return [
          ...prev,
          { childId, ...data, lastUpdated: new Date().toLocaleTimeString() },
        ];
      }
    });
  };

  const updateParentCounter = (increment) => {
    setParentData((prev) => ({
      ...prev,
      counter: prev.counter + increment,
    }));
  };

  const toggleTheme = () => {
    setParentData((prev) => ({
      ...prev,
      theme: prev.theme === "light" ? "dark" : "light",
    }));
  };

  const updateSettings = (key, value) => {
    setParentData((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        [key]: value,
      },
    }));
  };

  return (
    <div className={`component-card parent-component ${parentData.theme}`}>
      <h3>🏠 Parent Component</h3>

      <div className="parent-controls">
        <div className="parent-info">
          <h4>Parent State:</h4>
          <p>
            <strong>Message:</strong> {parentData.message}
          </p>
          <p>
            <strong>Counter:</strong> {parentData.counter}
          </p>
          <p>
            <strong>Theme:</strong> {parentData.theme}
          </p>
        </div>

        <div className="parent-actions">
          <button
            className="btn btn-primary"
            onClick={() => updateParentCounter(1)}
          >
            Increment Parent
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => updateParentCounter(-1)}
          >
            Decrement Parent
          </button>
          <button className="btn btn-accent" onClick={toggleTheme}>
            Toggle Theme
          </button>
        </div>

        <div className="settings-panel">
          <h4>Settings:</h4>
          <label className="setting-item">
            <input
              type="checkbox"
              checked={parentData.settings.notifications}
              onChange={(e) =>
                updateSettings("notifications", e.target.checked)
              }
            />
            Notifications
          </label>
          <label className="setting-item">
            <input
              type="checkbox"
              checked={parentData.settings.autoSave}
              onChange={(e) => updateSettings("autoSave", e.target.checked)}
            />
            Auto Save
          </label>
          <select
            value={parentData.settings.language}
            onChange={(e) => updateSettings("language", e.target.value)}
            className="language-select"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>

      <div className="children-container">
        <ChildComponent
          id="child-1"
          parentData={parentData}
          initialValue={5}
          onDataChange={handleChildData}
          multiplier={2}
        />
        <ChildComponent
          id="child-2"
          parentData={parentData}
          initialValue={10}
          onDataChange={handleChildData}
          multiplier={3}
        />
        <ChildComponent
          id="child-3"
          parentData={parentData}
          initialValue={1}
          onDataChange={handleChildData}
          multiplier={0.5}
        />
      </div>

      <div className="children-summary">
        <h4>📊 Children Data Summary:</h4>
        {childrenData.length > 0 ? (
          <div className="summary-grid">
            {childrenData.map((child) => (
              <div key={child.childId} className="summary-card">
                <h5>{child.childId}</h5>
                <p>
                  <strong>Value:</strong> {child.value}
                </p>
                <p>
                  <strong>Result:</strong> {child.computedResult}
                </p>
                <p>
                  <strong>Updated:</strong> {child.lastUpdated}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-data">No data from children yet...</p>
        )}
      </div>
    </div>
  );
}

// Child Component that receives props and communicates back to parent
function ChildComponent({
  id,
  parentData,
  initialValue,
  onDataChange,
  multiplier,
}) {
  const [localValue, setLocalValue] = useState(initialValue);
  const [computedResult, setComputedResult] = useState(0);
  const [operationHistory, setOperationHistory] = useState([]);

  // Complex useEffect with multiple dependencies
  useEffect(() => {
    const result = (localValue + parentData.counter) * multiplier;
    setComputedResult(result);

    // Send data back to parent
    onDataChange(id, {
      value: localValue,
      computedResult: result,
      multiplier: multiplier,
    });

    // Track operation history
    setOperationHistory((prev) => [
      ...prev.slice(-4), // Keep only last 5 operations
      {
        operation: `(${localValue} + ${parentData.counter}) × ${multiplier} = ${result}`,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  }, [localValue, parentData.counter, multiplier, id, onDataChange]);

  const handleIncrement = () => {
    setLocalValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setLocalValue((prev) => prev - 1);
  };

  const handleReset = () => {
    setLocalValue(initialValue);
  };

  const handleDoubleValue = () => {
    setLocalValue((prev) => prev * 2);
  };

  const handleHalveValue = () => {
    setLocalValue((prev) => Math.floor(prev / 2));
  };

  return (
    <div className={`child-component ${parentData.theme}`}>
      <div className="child-header">
        <h4>👶 {id}</h4>
        <span className="multiplier-badge">×{multiplier}</span>
      </div>

      <div className="child-info">
        <p>
          <strong>Local Value:</strong> {localValue}
        </p>
        <p>
          <strong>Parent Counter:</strong> {parentData.counter}
        </p>
        <p>
          <strong>Computed Result:</strong>
          <span className="result-value">{computedResult}</span>
        </p>
      </div>

      <div className="child-controls">
        <button className="btn btn-sm btn-success" onClick={handleIncrement}>
          +1
        </button>
        <button className="btn btn-sm btn-danger" onClick={handleDecrement}>
          -1
        </button>
        <button className="btn btn-sm btn-warning" onClick={handleDoubleValue}>
          ×2
        </button>
        <button className="btn btn-sm btn-info" onClick={handleHalveValue}>
          ÷2
        </button>
        <button className="btn btn-sm btn-secondary" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="operation-history">
        <h5>📈 History:</h5>
        {operationHistory.length > 0 ? (
          operationHistory.slice(-3).map((op, index) => (
            <div key={index} className="history-item">
              <span className="operation">{op.operation}</span>
              <span className="timestamp">{op.timestamp}</span>
            </div>
          ))
        ) : (
          <p className="no-history">No operations yet</p>
        )}
      </div>

      <div className="parent-data-display">
        <h5>🔗 Parent Data:</h5>
        <p>
          <strong>Message:</strong> {parentData.message}
        </p>
        <p>
          <strong>Theme:</strong> {parentData.theme}
        </p>
        <p>
          <strong>Notifications:</strong>{" "}
          {parentData.settings.notifications ? "✅" : "❌"}
        </p>
      </div>
    </div>
  );
}

export default ParentComponent;
