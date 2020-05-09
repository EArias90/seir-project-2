const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div class="shadow p-3 mb-5 bg-white rounded">
                    <h1 class="text-center">New Entry</h1>
                    <form action="/user" method="POST">
                            Country Visited: <input type="text" name="name"/>
                  <br/>
                  <br/>
                            Recommended Areas <input type="text" name="visit"/>
                  <br/>
                  <br/>
                            Favorite Food: <input type="text" name="food"/> <br/>
                            Hotel/Hostel: <input type="text" name="hotel"/> Visit Rating: <input type="text" name="number" />
                  <br/>
                  <br/>
                            Feedback <br/>
                            <textarea>  </textarea>
                  <br/>
                            <input type="submit" name="" value="Submit Entry"/>
               </form>
                </div>

            </Default>
        );
    }
}

module.exports = New;