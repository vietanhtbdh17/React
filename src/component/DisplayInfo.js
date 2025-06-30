import React from 'react';

class DisplayInfo extends React.Component {

    render() {
        // console.log(this.props);
        const { name, age } = this.props;
        return (
            <div>
                <div>My name's {name}</div>
                <div>My age's {age}</div>
            </div>
        );
    }
}

export default DisplayInfo;
