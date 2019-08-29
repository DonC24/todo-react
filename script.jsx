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
    let updatedList = {
        word: "",
        list: this.state.list
    }
    //this.setState(this.state.list);
    this.setState(updatedList);
    console.log(this.state);
  }

  changeHandler(){
    // debugger;
    this.setState({word:event.target.value});
    console.log(this.state.word);
  }

  deleteItem(event, index){
    let newArray = this.state.list;
    console.log(newArray);
    console.log(index);
    newArray.splice(index, 1);
    this.setState({list:newArray});
    console.log(this.state.list);
  }


  render() {
      // render the list with a map() here
      let list = this.state.list;
      let itemElements = list.map((task, index) => {
                console.log(task);
                return (
                    <li>{`${task}`} <button onClick={(event)=>{this.deleteItem(event, index)}}>Delete</button></li>);
            });

      console.log("rendering");
      return (
        <div className="list">
          <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.word} />
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