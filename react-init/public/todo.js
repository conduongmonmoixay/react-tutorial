var list;

var Note = React.createClass({
  deleteNote: function(){
    $.post('/deleteNote', {id: this.props.id}, function(data){
      list.setState({
        arr: data
      });
    })
  },
  render: function(){
    return (
      <div className="div-note">
        <p>{this.props.children}</p>
        <button onClick={deleteNote}>Delete</button>
      </div>
    );
  }
});

var List = React.createClass({
  getInitialState(){
    list = this;
    return {
      arr: []
    };
  },
  render: function(){
    return (
      <div className="div-list">
      <div id="div-input"></div>
      <button onClick={addInput}>Add</button>
        {
          this.state.arr.map(function(note, i){
            return <Note key={i} id={i}>{note}</Note>
          })
        }
      </div>
    );
  },
  componentDidMount(){
    var self = this;
    $.post('/getNotes', function(data){
      self.setState({
        arr : data
      });
    });
  }
});
function addInput(){
  ReactDOM.render(
    <InputDiv />,
    document.getElementById("div-input")
  );
};
var InputDiv = React.createClass({
  send: function(){
    $.post('/add',{}, function(data){
      list.setState({
        arr: data
      });
    });
    list.setState({
      arr: list.state.arr.concat(this.refs.txt.value)
    });
    ReactDOM.unmountComponentAtNode(document.getElementById("div-input"));
  },
  render: function(){
    return (
      <div>
        <input type="text" ref="txt"/>
        <button onClick={this.send}>Send</button>
      </div>
    );
  }
});

ReactDOM.render(
  <List />,
  document.getElementById("todo")
);
