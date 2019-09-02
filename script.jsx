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

class ToDoItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log("in ToDoItem");
        let index=this.props.index;
        let item=this.props.item;
        // console.log("index: " + index);
        // console.log(item);
        return(
            <div>
                {item.task}, created at {item.createdate} <button onClick={(e)=>this.props.deleteItem(e, index)}>Delete Item</button>
            </div>
        );
    }
}

class ItemList extends React.Component {
    constructor() {
        super();
    }

    render() {
        let listItems = this.props.list.map((item, index) => {
            return (
                    <ToDoItem key={index} item={item} index={index} deleteItem={this.props.deleteItem}>
                    </ToDoItem>
                )
        });
        return(
            <div className="list-pending">
                <h3>Pending Tasks</h3>
                <div>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </div>
        );
    }
}

class ToDoApp extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
    this.addItem = this.addItem.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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
      let word = this.state.word;
      let list = this.state.list;

      console.log("rendering");
      return (
        <div className="list">
          <MyForm changeHandler = {this.changeHandler} addItem = {this.addItem} word = {word}></MyForm>
          <ItemList list = {list} deleteItem = {this.deleteItem}></ItemList>

        </div>
      );
  }
}

ReactDOM.render(
    <ToDoApp/>,
    document.getElementById('root')
);