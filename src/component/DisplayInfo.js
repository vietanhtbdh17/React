import React from 'react';
import './DisplayInfo.scss';
import logo from './../logo.svg';

class DisplayInfo extends React.Component {
    constructor(props) {
        console.log('>>> Call constructor: 0');

        super(props);
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log('>>> Call componentDidMount');
        setTimeout(() => {
            document.title = 'Viet Anh - ReactJS';
        }, 3000);
    }

    componentDidUpdate(prevprops, prevstate, snapshot) {
        console.log('>>> Call componentDidUpdate', this.props, prevprops);
        if (this.props.listUser !== prevprops.listUser) {
            if (this.props.listUser.length === 5) {
                alert('List user is reached 5 items');
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log(">>> Call render: 1");
        const { listUser } = this.props;
        // console.table(listUser);
        return (
            <div className="display-info-container">
                {/* <img src={logo} alt="" /> */}
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
                                    <div>
                                        <div>My name's {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfo;
