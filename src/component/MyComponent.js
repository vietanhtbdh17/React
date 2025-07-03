// import React from 'react'
import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfo from './DisplayInfo';




const MyComponent = (props) => {
    const [listUser, setListUser] = useState(
        [
            { id: 1, name: 'Viet Anh 1', age: 15 },
            { id: 2, name: 'Viet Anh 2', age: 21 },
            { id: 3, name: 'Viet Anh 3', age: 30 }
        ]
    )


    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUser]);

    }
    const handleDeleteUser = (userId) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUser(listUserClone);
    }
    return (
        <>
            <div className='a'>
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br /> <br />
                <DisplayInfo
                    listUser={listUser}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="b">

            </div>
        </>
    );
}
export default MyComponent;