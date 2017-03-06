var Note = React.createClass({
  render: function(){
    return (
      <div>
        <h1>{this.props.children}</h1>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
});

var List = React.createClass({
  getInitialState(){
    return {
      count: 0,
      array: [
        {id: 1, name : "khanh toan"}
      ]
    };
  },
  getNote(){
    this.state.count = this.state.count + 1;
    this.state.array.push({id: this.state.count, name: "khanhtoan_" + this.state.count});
    this.setState(this.state);
  },
  render(){
    return (
      <div>
        {
          this.state.array.map(function(data, index){
            return <Note key={index} name={data.name}>{data.id}</Note>
          })
        }
        <button onClick={this.getNote}>Click</button>
      </div>
    );
  }
  // componentDidMount(){
  //   setInterval(this.getNote, 1000);
  // }
});

ReactDOM.render(
  <List />,
  document.getElementById("arr")
);
