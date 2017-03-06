function getName(){
  alert("Thinh")
};
function getFullName(name){
  alert(name);
};
var ComponentParent  = React.createClass({
    handleClick(){
      alert("123");
    },
    click : function(){
      getFullName(this.props.name);
    },
    getInitialState(){
      return {
        countState : this.props.count
      };
    },
    setCount(){
      this.state.countState = parseInt(this.state.countState) + 1
      this.setState(this.state);
    },
    render: function(){
      return (
        <div>
          <div>{this.props.name}</div>
          <ComponentChildren>MTA</ComponentChildren>
          <div>{this.state.countState}</div>
          <button onClick={this.click}>Click</button>
          <button onClick={getName}>getName</button>
          <button onClick={()=>{getFullName(this.props.name)}}>getFullName</button>
          <button onClick={this.setCount}>SetCount</button>
        </div>
      );
    }
});

var ComponentChildren = React.createClass({
  render: function(){
    return (
      <div>{this.props.children}</div>
    );
  }
});

var InputTag = React.createClass({
  show(){
    var text = this.refs.txtname.value;
    alert(text);
  },
  getCar: function(){
    var car = this.refs.car.value;
    alert(car);
  },
  render: function(){
    return (
      <div>
        <select ref="car">
          <option value="1">Mecedes</option>
          <option value="2">Yamaha</option>
          <option value="3">Suzuki</option>
        </select>
        <input type="text" ref="txtname" />
        <button onClick={this.show}>getText</button>
        <button onClick={this.getCar}>getCar</button>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <InputTag />
    <ComponentParent name="Khanh Toan" count="1"/>
  </div>
  ,
  document.getElementById("root"));
