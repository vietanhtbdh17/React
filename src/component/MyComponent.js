import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Viet Anh dz',
        address: 'Thai Binh',
        age: 21
    };

    handleClick(event) {
        console.log('>> Click me');
        // console.log(event);
    }
    handleOnMoverOver(event) {
        console.log(event.pageX);
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMoverOver}>Hover</button>

                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}
export default MyComponent;