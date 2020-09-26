import React from 'react';
import Counter from './Counter';
import {render} from 'react-dom';
import './App.css'; 
import {connect} from 'react-redux';

function App(props){
  return (
    <div className="App">
      <Counter />;
    </div>
  );
render(<App />, document.getElementById("root"));
}
const mapStateToProps = (state) =>{
  return{
    initialState: state.Reduce
  }

const mapDispatchToProps = (dispatch) =>{
  return{
    initialState: state.Reduce
  }
}
}

export default connect(mapStateToProps)(App);
