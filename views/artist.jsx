var React = require("react");
var Defaultcss = require('./defaultcss');

class Details extends React.Component{
    render(){
        return(
            <div>
                <ul>{this.props.list.id}</ul>
                <ul>{this.props.list.name}</ul>
                <ul><img src={this.props.list.photo_url} alt="broken link" height="270" width="270" /><br/><span>{this.props.list.photo_url}</span></ul>
                <ul>{this.props.list.nationality}</ul>
            </div>
            );
    }
}

class Artist extends React.Component {
  render() {
    const artists = this.props.list.map( artist => {
            return <Details list={artist}></Details>;
        });
    return (
        <Defaultcss>
            {artists}
        </Defaultcss>
    );
  }
}

module.exports = Artist;