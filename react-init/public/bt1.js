
var BT1 = React.createClass({
  getInitialState(){
    return {
      count: 1
    };
  },
  show: function(){
    this.state.count = this.state.count + 1;
    this.setState(this.state);
  },
  render(){
    return (
      <div className="bt1">
        <button onClick={this.show}>Button {this.state.count}</button>
      </div>
    );
  }
});

ReactDOM.render(
  <BT1 />,
  document.getElementById("bt1"));
