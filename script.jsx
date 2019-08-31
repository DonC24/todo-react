class MyForm extends React.Component {
  constructor() {
    super();

  }
  render() {
    return(
      <div>
        <input onChange={this.props.changeHandler} value={this.props.word} />
        <button onClick={this.props.addItem}>Add Item</button>
      </div>
    );
  }
}


class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
    this.addItem = this.addItem.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  addItem(){
    // debugger;

    if(this.state.word.length >= 1 && this.state.word.length <= 200){
        this.state.list.push({
            task:this.state.word,
            createdate: moment().format('DD MMM YYYY, h:mm a')
        });
        console.log(this.state.list);
        let updatedList = {
            word: "",
            list: this.state.list
        }
        this.setState(updatedList);
        console.log(this.state);
    } else {
        alert("Please have an input that has more than 1 or less than 200 characters");
    }
  }

  changeHandler(event){
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
      let word = this.state.word;
      let list = this.state.list;
      let itemElements = list.map((item, index) => {
                console.log("item" + item.task);
                return (
                    <li>{`${item.task}, created at ${item.createdate}`} <button onClick={(event)=>{this.deleteItem(event, index)}}>Delete</button></li>);
            });

      console.log("rendering");
      return (
        <div className="list">
          <MyForm changeHandler = {this.changeHandler} addItem = {this.addItem} word = {word}></MyForm>

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