import React from 'react';


class HelloWorldContainer extends React.Component {
    constructor(props){
        super(props);
        //The only place where you can assign this.state is the constructor.
        this.state={date: new Date()};
    }

    render() {
        return (<div>
            <h3>
                <span>Name is: </span><span>{this.props.name}</span>
            </h3>
                
            <p>Today is {this.state.date.toDateString()}</p>
            <a href="https://en.wikipedia.org/wiki/Wikipedia:On_this_day/Today" onClick={this.handleClick}>
            What happened on this date</a>
        </div>);
    }
    handleClick(e) {
        e.preventDefault();
        console.log("Prevent you from navigating to this page!");
    }
}
export default HelloWorldContainer;