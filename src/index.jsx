import  React from 'react';
import  { render } from 'react-dom';
import { DatePicker } from 'antd';


var myStyle = {
    fontSize: 20,
    color: '#FF0000'
};

var arr=[
    <h1>my</h1>,
    <h2>cc</h2>
];


var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello World！{this.props.name},i am {this.props.age} years old  </h1>;
  }
});

render(
    <div>    
        <h1 style={myStyle}>hello</h1>
        <DatePicker/>
        {arr}
        <HelloMessage  name='cc' age='26' />
    </div>,
    document.getElementById('app')
);