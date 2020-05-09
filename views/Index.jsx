const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
        const { users } = this.props;
        return (
            <Default>
            <div>
                <h1 class="text-center">Welcome Back!</h1>
                <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="/user/new">Create a New Entry</a>
                </nav>
            
                <ul>
                    {
                        users.map((user, i) => {
                            return (
                                <ul class="list-group">
                                <li class="list-group-item">
                                    View Entries <a href={`/show`}>here</a> 

                                    {/* Deletes the selected data */}

                                    <form action={`/user/${user._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>

                                    {/* link to the edit route*/}
                                    <a href={`/user/${user._id}/edit`}>Edit</a>
                                </li>
                                </ul>
                            )
                        })
                    }
                </ul>
            </div>
            </Default>
        )
    }
}

module.exports = Index;