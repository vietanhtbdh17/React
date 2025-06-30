import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfo from './DisplayInfo';
class MyComponent extends React.Component {

    //JSX
    render() {
        return (
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfo name="Viet Anh 16" age="20" />
            </div>
        );
    }
}
export default MyComponent;