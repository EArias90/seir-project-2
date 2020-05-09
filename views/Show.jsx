const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const {countryLocation,recommendation,rating,food, hotel, feedback} = this.props.user;
        return(
            <Default>
            <div>
        <h1 class="text-center"> {countryLocation} Entry </h1>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="/user">Back</a>
                </nav>
            <div>
<br/>
            <ul class="list-group">
  <li class="list-group-item">Recommendation: {recommendation}</li>
  <li class="list-group-item">Food: {food}</li>
  <li class="list-group-item">Hotel: {hotel}</li>
  <li class="list-group-item">Feedback: {feedback}</li>
  <li class="list-group-item">Rating: {rating}</li>
            </ul>   
            </div>
            </div>
            </Default>
        )
    }
}


module.exports = Show;