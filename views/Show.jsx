const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        return(
            <Default>
            <h1 class="text-center"> Entries </h1>
            </Default>
        )
    }
}


module.exports = Show;