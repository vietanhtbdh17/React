import React, { useState } from 'react';
import './DisplayInfo.scss';
import logo from './../logo.svg';


const DisplayInfo = (props) => {
    const { listUser } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    // this.state = {
    //     isShowHideListUser: true;
    // }
    const handleShowHideListUser = () => {

        setShowHideListUser(!isShowHideListUser);
    }
    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUser.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}

                </div>
            }
        </div>
    );
}


export default DisplayInfo;
