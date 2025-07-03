import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfo from './DisplayInfo';
class MyComponent extends React.Component {


    state = {
        listUser: [
            { id: 1, name: 'Viet Anh 1', age: 15 },
            { id: 2, name: 'Viet Anh 2', age: 21 },
            { id: 3, name: 'Viet Anh 3', age: 30 }
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log("Check :", userObj);
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        });
    }
    handleDeleteUser = (userId) => {
        let listUserClone = this.state.listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUser: listUserClone
        });
    }
    //JSX
    render() {

        return (
            <>
                <div className='a'>
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br /> <br />
                    <DisplayInfo
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className="b">

                </div>
            </>

        );
    }
}
export default MyComponent;