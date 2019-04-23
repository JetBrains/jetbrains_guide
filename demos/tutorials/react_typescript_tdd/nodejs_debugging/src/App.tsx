import React, { Component } from 'react';

class App extends Component {

    label(name: string) {
        return `Hello ${name.toUpperCase()}`;
    }

    render() {
        return (
            <div>
                <h1>{this.label('React')}</h1>
                <p>Nice TDD</p>
            </div>
        );
    }
}

export default App;
