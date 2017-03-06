var Note = React.createClass({
  render: function(){
    return (
      <div className="div-note">
        {this.props.children}
      </div>
    );
  }
});
var list;
function createInputDiv(){
  ReactDOM.render(
    <InputDiv />,
    document.getElementById("div-input")
  )
};

var List = React.createClass({
  getInitialState(){
    return {
      list: this,
      arr: ["Hi", "Hello", "Khanh Toan"]
    };
  },
  render(){
    return (
      <div className="div-list">
      <button onClick={createInputDiv}>Create</button>
      <div id="div-input"></div>
        {
          this.state.arr.map(function(value, index){
            return <Note key={index}>{value}</Note>
          })
        }
      </div>
    );
  }
});

var InputDiv = React.createClass({
  send: function(){
    // list.state.arr = list.state.arr.push(this.refs.txt.value);
    list.state.setState({arr: list.state.arr.push(this.refs.txt.value)});
  },
  render: function(){
    return (
      <div>
        <input type="text" ref="txt" placeholder="Enter your note"/>
        <button onClick={this.send}>Send</button>
      </div>
    );
  }
});

ReactDOM.render(
  <List />,
  document.getElementById("idx")
);
