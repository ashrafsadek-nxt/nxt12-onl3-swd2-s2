// Main App Component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: 'dashboard',
            user: {
                name: 'Youseif Ahmed',
                avatar: '👨‍💻',
                role: 'Frontend Developer'
            },
            theme: 'light'
        };
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === 'light' ? 'dark' : 'light'
        }));
    }

    switchView = (view) => {
        this.setState({ currentView: view });
    }

    render() {
        const { currentView, user, theme } = this.state;

        return React.createElement('div', 
            { className: `app ${theme}-theme` },
            React.createElement(Header, {
                user: user,
                currentView: currentView,
                onViewChange: this.switchView,
                onThemeToggle: this.toggleTheme,
                theme: theme
            }),
            React.createElement('main', { className: 'main-content' },
                currentView === 'dashboard' && React.createElement(Dashboard, { user: user }),
                currentView === 'components' && React.createElement(ComponentsShowcase, null),
                currentView === 'hooks' && React.createElement(HooksDemo, null),
                currentView === 'counter' && React.createElement(CounterApp, null),
                currentView === 'todo' && React.createElement(TodoApp, null)
            )
        );
    }
}

// Header Component
const Header = ({ user, currentView, onViewChange, onThemeToggle, theme }) => {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊' },
        { id: 'components', label: 'Components', icon: '🧩' },
        { id: 'hooks', label: 'Hooks Demo', icon: '🎣' },
        { id: 'counter', label: 'Counter', icon: '🔢' },
        { id: 'todo', label: 'Todo App', icon: '✅' }
    ];

    return React.createElement('header', { className: 'header' },
        React.createElement('div', { className: 'header-content' },
            React.createElement('div', { className: 'logo' },
                React.createElement('h1', null, 'React Components Hub')
            ),
            React.createElement('nav', { className: 'nav' },
                navItems.map(item =>
                    React.createElement('button', {
                        key: item.id,
                        className: `nav-btn ${currentView === item.id ? 'active' : ''}`,
                        onClick: () => onViewChange(item.id)
                    }, `${item.icon} ${item.label}`)
                )
            ),
            React.createElement('div', { className: 'header-actions' },
                React.createElement('button', {
                    className: 'theme-toggle',
                    onClick: onThemeToggle
                }, theme === 'light' ? '🌙' : '☀️'),
                React.createElement('div', { className: 'user-info' },
                    React.createElement('span', { className: 'user-avatar' }, user.avatar),
                    React.createElement('span', { className: 'user-name' }, user.name)
                )
            )
        )
    );
};

// Dashboard Component
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: {
                components: 15,
                hooks: 8,
                projects: 12,
                experience: 2
            },
            activities: [
                { id: 1, action: 'Created Counter Component', time: '2 hours ago', type: 'create' },
                { id: 2, action: 'Updated Todo App', time: '5 hours ago', type: 'update' },
                { id: 3, action: 'Added Hooks Demo', time: '1 day ago', type: 'create' },
                { id: 4, action: 'Refactored Components', time: '2 days ago', type: 'update' }
            ]
        };
    }

    render() {
        const { user } = this.props;
        const { stats, activities } = this.state;

        return React.createElement('div', { className: 'dashboard' },
            React.createElement('div', { className: 'welcome-section' },
                React.createElement('h2', null, `Welcome back, ${user.name}! 👋`),
                React.createElement('p', null, 'Here\'s what\'s happening with your React components today.')
            ),
            React.createElement('div', { className: 'stats-grid' },
                Object.entries(stats).map(([key, value]) =>
                    React.createElement(StatCard, {
                        key: key,
                        title: key.charAt(0).toUpperCase() + key.slice(1),
                        value: value,
                        icon: this.getStatIcon(key)
                    })
                )
            ),
            React.createElement('div', { className: 'activity-section' },
                React.createElement('h3', null, 'Recent Activity'),
                React.createElement('div', { className: 'activity-list' },
                    activities.map(activity =>
                        React.createElement(ActivityItem, {
                            key: activity.id,
                            activity: activity
                        })
                    )
                )
            )
        );
    }

    getStatIcon(key) {
        const icons = {
            components: '🧩',
            hooks: '🎣',
            projects: '📁',
            experience: '⭐'
        };
        return icons[key] || '📊';
    }
}

// Stat Card Component
const StatCard = ({ title, value, icon }) => {
    return React.createElement('div', { className: 'stat-card' },
        React.createElement('div', { className: 'stat-icon' }, icon),
        React.createElement('div', { className: 'stat-content' },
            React.createElement('h3', { className: 'stat-value' }, value),
            React.createElement('p', { className: 'stat-title' }, title)
        )
    );
};

// Activity Item Component
const ActivityItem = ({ activity }) => {
    const getTypeIcon = (type) => {
        return type === 'create' ? '✨' : '🔄';
    };

    return React.createElement('div', { className: 'activity-item' },
        React.createElement('div', { className: 'activity-icon' }, getTypeIcon(activity.type)),
        React.createElement('div', { className: 'activity-content' },
            React.createElement('p', { className: 'activity-action' }, activity.action),
            React.createElement('span', { className: 'activity-time' }, activity.time)
        )
    );
};

// Components Showcase
class ComponentsShowcase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedComponent: 'button'
        };
    }

    render() {
        return React.createElement('div', { className: 'components-showcase' },
            React.createElement('h2', null, 'Components Library'),
            React.createElement('div', { className: 'showcase-content' },
                React.createElement('div', { className: 'component-nav' },
                    ['button', 'card', 'modal', 'form'].map(comp =>
                        React.createElement('button', {
                            key: comp,
                            className: `comp-nav-btn ${this.state.selectedComponent === comp ? 'active' : ''}`,
                            onClick: () => this.setState({ selectedComponent: comp })
                        }, comp.charAt(0).toUpperCase() + comp.slice(1))
                    )
                ),
                React.createElement('div', { className: 'component-demo' },
                    this.renderSelectedComponent()
                )
            )
        );
    }

    renderSelectedComponent() {
        switch (this.state.selectedComponent) {
            case 'button':
                return React.createElement(ButtonDemo, null);
            case 'card':
                return React.createElement(CardDemo, null);
            case 'modal':
                return React.createElement(ModalDemo, null);
            case 'form':
                return React.createElement(FormDemo, null);
            default:
                return React.createElement('div', null, 'Select a component');
        }
    }
}

// Button Demo Component
const ButtonDemo = () => {
    const [clickCount, setClickCount] = React.useState(0);

    return React.createElement('div', { className: 'button-demo' },
        React.createElement('h3', null, 'Button Components'),
        React.createElement('div', { className: 'button-examples' },
            React.createElement('button', {
                className: 'btn btn-primary',
                onClick: () => setClickCount(prev => prev + 1)
            }, `Primary Button (${clickCount})`),
            React.createElement('button', { className: 'btn btn-secondary' }, 'Secondary Button'),
            React.createElement('button', { className: 'btn btn-success' }, '✅ Success Button'),
            React.createElement('button', { className: 'btn btn-warning' }, '⚠️ Warning Button'),
            React.createElement('button', { className: 'btn btn-danger' }, '❌ Danger Button')
        )
    );
};

// Card Demo Component
const CardDemo = () => {
    const cards = [
        { id: 1, title: 'React Basics', description: 'Learn the fundamentals of React', icon: '⚛️' },
        { id: 2, title: 'State Management', description: 'Master state and props', icon: '🗃️' },
        { id: 3, title: 'Hooks', description: 'Modern React with hooks', icon: '🎣' }
    ];

    return React.createElement('div', { className: 'card-demo' },
        React.createElement('h3', null, 'Card Components'),
        React.createElement('div', { className: 'cards-grid' },
            cards.map(card =>
                React.createElement('div', { key: card.id, className: 'demo-card' },
                    React.createElement('div', { className: 'card-icon' }, card.icon),
                    React.createElement('h4', null, card.title),
                    React.createElement('p', null, card.description),
                    React.createElement('button', { className: 'btn btn-outline' }, 'Learn More')
                )
            )
        )
    );
};

// Hooks Demo Component
const HooksDemo = () => {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('');
    const [todos, setTodos] = React.useState(['Learn React', 'Build Components']);

    React.useEffect(() => {
        document.title = `Count: ${count}`;
        return () => {
            document.title = 'React Components Hub';
        };
    }, [count]);

    const addTodo = () => {
        if (name.trim()) {
            setTodos(prev => [...prev, name]);
            setName('');
        }
    };

    return React.createElement('div', { className: 'hooks-demo' },
        React.createElement('h2', null, 'React Hooks Demo'),
        React.createElement('div', { className: 'hooks-sections' },
            React.createElement('section', { className: 'hook-section' },
                React.createElement('h3', null, 'useState Hook'),
                React.createElement('div', { className: 'counter-demo' },
                    React.createElement('p', null, `Count: ${count}`),
                    React.createElement('button', {
                        className: 'btn btn-primary',
                        onClick: () => setCount(prev => prev + 1)
                    }, 'Increment'),
                    React.createElement('button', {
                        className: 'btn btn-secondary',
                        onClick: () => setCount(0)
                    }, 'Reset')
                )
            ),
            React.createElement('section', { className: 'hook-section' },
                React.createElement('h3', null, 'useEffect Hook'),
                React.createElement('p', null, 'Check the page title - it updates with the count!'),
                React.createElement('p', null, `Current title: "Count: ${count}"`)
            ),
            React.createElement('section', { className: 'hook-section' },
                React.createElement('h3', null, 'Dynamic Todo List'),
                React.createElement('div', { className: 'todo-input' },
                    React.createElement('input', {
                        type: 'text',
                        value: name,
                        onChange: (e) => setName(e.target.value),
                        placeholder: 'Add new todo',
                        onKeyPress: (e) => e.key === 'Enter' && addTodo()
                    }),
                    React.createElement('button', {
                        className: 'btn btn-success',
                        onClick: addTodo
                    }, 'Add')
                ),
                React.createElement('ul', { className: 'todo-list' },
                    todos.map((todo, index) =>
                        React.createElement('li', {
                            key: index,
                            className: 'todo-item'
                        }, `${index + 1}. ${todo}`)
                    )
                )
            )
        )
    );
};

// Counter App Component
const CounterApp = () => {
    const [count, setCount] = React.useState(0);
    const [step, setStep] = React.useState(1);
    const [history, setHistory] = React.useState([0]);

    const increment = () => {
        const newCount = count + step;
        setCount(newCount);
        setHistory(prev => [...prev, newCount]);
    };

    const decrement = () => {
        const newCount = count - step;
        setCount(newCount);
        setHistory(prev => [...prev, newCount]);
    };

    const reset = () => {
        setCount(0);
        setHistory([0]);
    };

    return React.createElement('div', { className: 'counter-app' },
        React.createElement('h2', null, 'Advanced Counter App'),
        React.createElement('div', { className: 'counter-display' },
            React.createElement('div', { className: 'count-value' }, count),
            React.createElement('div', { className: 'count-label' }, 'Current Count')
        ),
        React.createElement('div', { className: 'counter-controls' },
            React.createElement('div', { className: 'step-control' },
                React.createElement('label', null, 'Step: '),
                React.createElement('input', {
                    type: 'number',
                    value: step,
                    onChange: (e) => setStep(parseInt(e.target.value) || 1),
                    min: 1,
                    max: 10
                })
            ),
            React.createElement('div', { className: 'button-group' },
                React.createElement('button', {
                    className: 'btn btn-danger',
                    onClick: decrement
                }, `- ${step}`),
                React.createElement('button', {
                    className: 'btn btn-secondary',
                    onClick: reset
                }, 'Reset'),
                React.createElement('button', {
                    className: 'btn btn-success',
                    onClick: increment
                }, `+ ${step}`)
            )
        ),
        React.createElement('div', { className: 'counter-stats' },
            React.createElement('div', { className: 'stat' },
                React.createElement('span', { className: 'stat-label' }, 'Total Changes:'),
                React.createElement('span', { className: 'stat-value' }, history.length - 1)
            ),
            React.createElement('div', { className: 'stat' },
                React.createElement('span', { className: 'stat-label' }, 'Max Value:'),
                React.createElement('span', { className: 'stat-value' }, Math.max(...history))
            ),
            React.createElement('div', { className: 'stat' },
                React.createElement('span', { className: 'stat-label' }, 'Min Value:'),
                React.createElement('span', { className: 'stat-value' }, Math.min(...history))
            )
        ),
        React.createElement('div', { className: 'history' },
            React.createElement('h4', null, 'History:'),
            React.createElement('div', { className: 'history-items' },
                history.slice(-10).map((value, index) =>
                    React.createElement('span', {
                        key: index,
                        className: `history-item ${value === count ? 'current' : ''}`
                    }, value)
                )
            )
        )
    );
};

// Todo App Component
const TodoApp = () => {
    const [todos, setTodos] = React.useState([
        { id: 1, text: 'Learn React Components', completed: true },
        { id: 2, text: 'Master React Hooks', completed: false },
        { id: 3, text: 'Build Amazing Apps', completed: false }
    ]);
    const [newTodo, setNewTodo] = React.useState('');
    const [filter, setFilter] = React.useState('all');

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos(prev => [...prev, {
                id: Date.now(),
                text: newTodo,
                completed: false
            }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const completedCount = todos.filter(todo => todo.completed).length;

    return React.createElement('div', { className: 'todo-app' },
        React.createElement('h2', null, 'Advanced Todo App'),
        React.createElement('div', { className: 'todo-input-section' },
            React.createElement('div', { className: 'todo-input-group' },
                React.createElement('input', {
                    type: 'text',
                    value: newTodo,
                    onChange: (e) => setNewTodo(e.target.value),
                    placeholder: 'What needs to be done?',
                    onKeyPress: (e) => e.key === 'Enter' && addTodo(),
                    className: 'todo-input'
                }),
                React.createElement('button', {
                    className: 'btn btn-primary',
                    onClick: addTodo,
                    disabled: !newTodo.trim()
                }, 'Add Todo')
            )
        ),
        React.createElement('div', { className: 'todo-filters' },
            ['all', 'active', 'completed'].map(f =>
                React.createElement('button', {
                    key: f,
                    className: `filter-btn ${filter === f ? 'active' : ''}`,
                    onClick: () => setFilter(f)
                }, f.charAt(0).toUpperCase() + f.slice(1))
            )
        ),
        React.createElement('div', { className: 'todo-stats' },
            React.createElement('span', null, `${todos.length} total, ${completedCount} completed, ${todos.length - completedCount} remaining`)
        ),
        React.createElement('div', { className: 'todo-list' },
            filteredTodos.length === 0 ?
                React.createElement('div', { className: 'empty-state' },
                    React.createElement('p', null, filter === 'all' ? 'No todos yet!' : `No ${filter} todos!`)
                ) :
                filteredTodos.map(todo =>
                    React.createElement('div', {
                        key: todo.id,
                        className: `todo-item ${todo.completed ? 'completed' : ''}`
                    },
                        React.createElement('input', {
                            type: 'checkbox',
                            checked: todo.completed,
                            onChange: () => toggleTodo(todo.id),
                            className: 'todo-checkbox'
                        }),
                        React.createElement('span', {
                            className: 'todo-text',
                            onClick: () => toggleTodo(todo.id)
                        }, todo.text),
                        React.createElement('button', {
                            className: 'btn btn-danger btn-sm',
                            onClick: () => deleteTodo(todo.id)
                        }, '🗑️')
                    )
                )
        )
    );
};

// Render the app
ReactDOM.render(React.createElement(App), document.getElementById('root'));