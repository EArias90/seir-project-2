const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const {location,recommendation,rating,food, hotel, feedback} = this.props;
        return(
            <Default>
            <div>
            <h1 class="text-center"> Entries </h1>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="/user">Back</a>
                </nav>
            <div>
        <p>Location: {location}</p>
        <p>Recommendation: {recommendation}</p>
        <p>Food: {food}</p>
        <p>Hotel: {hotel}</p>
        <p>Feedback: {feedback}</p>
        <p>Rating: {rating}</p>
            </div>
            </div>
            </Default>
        )
    }
}


module.exports = Show;