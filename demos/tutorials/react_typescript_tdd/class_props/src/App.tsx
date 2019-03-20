import React, {Component} from 'react';
import Heading from "./Heading";
import Counter from "./Counter";


class App extends Component {

    render() {
        return (
            <div>
                <Heading/>
                <Counter label={`Current`}/>
            </div>
        );
    }
}

export default App;
