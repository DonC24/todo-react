class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
  }

  addItem(){
    // debugger;
    console.log(this.state);
    this.state.list.push(this.state.word);
    this.setState(this.state.list);
    console.log(this.state.list);
  }

  changeHandler(){
    // debugger;
    this.setState({word:event.target.value});
    console.log(this.state.word);
  }


  render() {
      // render the list with a map() here
      let list = this.state.list;
      let itemElements = list.map((task) => {
                console.log(task);
                return <li>{`${task}`}</li>
            });

      console.log("rendering");
      return (
        <div className="list">
          <input onChange={(event)=>{this.changeHandler(event)}} />
          <button onClick={()=>{this.addItem()}}>add item</button>
          <ul>
            {itemElements}
          </ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);