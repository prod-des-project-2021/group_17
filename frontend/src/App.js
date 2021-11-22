import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            userId: null,
            userName: null,
            userEmail: null,
            userPassword: null,
            userPasswordConfirm: null,
        };
    }

    render() {
		const { user } = this.state;
        return (
            <div>
                <h1>Hi <p>{user}</p> and welcome to PSOAStore</h1>
                <p>
                    Please sign in: {user ? user.name : "not logged in"}.
                </p>
            </div>
        );
    }
}

export default App;