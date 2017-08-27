import React from 'react';
import ReactDom from 'react-dom';
import Simple from './component/Simple';

class App extends React.Component {
    //  Component Rendering
    render() {
        return <div>
        <Simple />
        </div>
    }
}

ReactDom.render(
<App/>,
    document.getElementById("app")
);