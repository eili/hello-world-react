import React from 'react';

class HelloWorldContainer extends React.Component {
    

    componentDidMount() {
        this.setState({ name: "No name"});
    }

    render() {
        return (<div>
            <h3>
                <span>Name is: </span><span>{this.props.name}</span>
                </h3>
        </div>);
    }
}
export default HelloWorldContainer;