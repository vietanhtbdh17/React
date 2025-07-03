import React from 'react';
import './DisplayInfo.scss';


class DisplayInfo extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        // console.log(this.props);
        const { listUser } = this.props;
        // console.table(listUser);
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>

                        {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUser.map((user, index) => {
                            // console.log('>>> Check user: ', user);
                            return (
                                <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}

                    </div>
                }
            </div>
        );
    }
}

export default DisplayInfo;
