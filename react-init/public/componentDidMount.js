var Demo = React.createClass({
  getInitialState(){
    return {
      count: 1
    };
  },
  changeCount(){
    this.setState({
      count: this.state.count + 1
    });
    this.show();
  },
  show(){
    var text = this.refs.txt;
    text.value = this.state.count;
  },
  render(){
    return (
      <div>
        <input type="text" ref="txt" />
        <button onClick={this.show}>Click</button>
      </div>
    );
  },
  componentDidMount(){
    setInterval(this.changeCount, 1000);
  }
});

ReactDOM.render(
  <Demo />,
  document.getElementById("interval")
);
