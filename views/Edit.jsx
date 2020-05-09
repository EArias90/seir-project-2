const React = require('react');
const Default = require('./Default');


class Edit extends React.Component {
    render() {
        const { _id,location,recommendation,rating,food, hotel, feedback} = this.props.user;
        return (
            <Default>
            <div>
                <h1>Edit Page</h1>
                <form action={`/fruits/${_id}?_method=PUT`} method="POST">
                    Country Visted: <input type="text" name="name" defaultValue={location}/> <br/>
                    Recommended Area: <input type="text" name="visit" defaultValue={recommendation}/> <br/>
                    Hotel/Hostel: <input type="text" name="hotel" defaultValue={hotel}/> <br/>
                    Favorite Food: <input type="text" name="food" defaultValue={food}/> <br/>
                    Visit Rating: <input type="text" name="number" defaultValue={rating}/> <br/>
                    Feedback: <input type="text-area" name="comments" defaultValue={feedback}/>
                    <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
            </Default>
        )
    }
}

module.exports = Edit;