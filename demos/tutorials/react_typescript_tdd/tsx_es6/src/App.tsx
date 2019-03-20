import React, {Component} from 'react';

class App extends Component {
    label = 'Hello React';

    handleClick = () => {
        alert(this.label);
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>{this.label}</h1>
            </div>
        );
    }
}

export default App;
