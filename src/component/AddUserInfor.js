import React from 'react';

class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: 'Thai Binh',
        age: ''
    }
    handleOnChangeInput = (event) => {
        // console.log(event, event.target.value);
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        // console.log(event, event.target.value);
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        // console.log(this.state)
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label htmlFor="">Your name</label>
                    <input
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeInput(event)} type="text" />
                    <button>Submit</button>
                    <label htmlFor="">Your age</label>
                    <input
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)} type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default AddUserInfor;