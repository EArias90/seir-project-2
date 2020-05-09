const React = require('react');
const Default = require('./Default');


class Edit extends React.Component {
    render() {
        const { _id,location,recommendation,rating,food, hotel, feedback} = this.props.user;
        return (
            <Default>
            <div>
                <h1 class="text-center">Edit Page</h1>
                <form action={`/user/${_id}?_method=PUT`} method="POST">
                    Country Visted: <input type="text" name="countryLocation" defaultValue={location}/> <br/>
                    Recommended Area: <input type="text" name="recommendation" defaultValue={recommendation}/> <br/>
                    Favorite Food: <input type="text" name="food" defaultValue={food}/> <br/>
                    Hotel/Hostel: <input type="text" name="hotel" defaultValue={hotel}/> <br/>
                    Feedback: <input type="text-area" name="feedback" defaultValue={feedback}/>
                    Visit Rating: <input type="text" name="rating" defaultValue={rating}/> <br/>
                    <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
            </Default>
        )
    }
}

module.exports = Edit;