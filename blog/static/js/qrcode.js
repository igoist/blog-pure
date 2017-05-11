class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Search something...'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    this.props.onChange(event.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e.target.it.value);
  }

  render() {
    return (
      <div id='search-bar'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Cot:
            <input type='text' name='it' value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.op1 = []; // product
    this.op2 = []; // view
    this.lastV = '';
    this.props.items.forEach((item, index) => {
      if (item.v !== this.lastV) {
        this.op2.push(<option key={index.toString()}>{item.v}</option>);
      }
      this.op1.push(<option key={index.toString()}>{item.p}</option>);
      this.lastV = item.v;
    });

    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleProductChange(e) {
    this.props.handleProductChange(e.target.value);
  }

  handleViewChange(e) {
    this.props.handleViewChange(e.target.value);
  }

  handleItemClick(e) {
    this.props.handleItemClick(e);
  }

  render() {
    var rows = [];

    this.props.items.forEach((item, index) => {

      // if(item.done) {
      //   rows.push(<li className='item done' key={index.toString()} id={index} onClick={this.props.handleItemClick}>{item.text}</li>);
      // } else {
      //   rows.push(<li className='item' key={index.toString()} id={index} onClick={this.props.handleItemClick}>{item.text}</li>);
      // }
      rows.push(<li className='item' key={index.toString()}><span>{item.index}</span><span>{item.info}</span><span>{item.p}</span><span>{item.v}</span></li>);
    });
    return (
      <div id='items-wrap'>
        <select value={this.props.v2} onChange={this.handleViewChange}>{this.op2}</select>
        <select value={this.props.v1} onChange={this.handleProductChange}>{this.op1}</select>
        <ul className='items'>
          {rows}
        </ul>
      </div>
    );
  }
}

class ProductAndView extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {text: 'axxxxxx', done: false},
      {text: 'bxxxxxxx', done: true}
    ];
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('get', 'http://127.0.0.1:8000/qrcode/api/', false);
      xhr.send(null);
      var listObj = JSON.parse(xhr.responseText);
      console.log(listObj);
      this.items = listObj;
    } catch(e) {
      console.log(e);
      console.log("It's on Other Page Or by Error ?");
    }

    this.state = {
      // clickFlag: false,
      filterText: '',
      count: this.items.length,
      v1: '产品3', // 产品
      v2: '视图2' // 视图
    };

    this.iHeight = 32 + 1;

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  // handleSubmit(text) {
  //   this.items.push({text: text, done: false});
  //   this.setState({
  //     count: this.items.length
  //   });
  //
  //   // console.log(this.items.length);
  //
  //   const sb = document.getElementById('search-bar');
  //   console.log(sb.offsetHeight);
  //   let tmp = sb.offsetHeight + this.iHeight * this.items.length;
  //   let todo = document.querySelector('.card');
  //   todo.style.height = tmp + 'px';
  //   console.log(this);
  // }

  handleTextInputChange(text) {
    this.setState({
      filterText: text
    });
  }

  handleProductChange(text) {
    this.setState({
      v1: text
    });
    console.log(this.state.v1);
    console.log(text);
  }

  handleViewChange(text) {
    this.setState({
      v2: text
    });
    console.log(this.state.v2);
    console.log(text);
  }

  handleItemClick(e) {
    // console.log(e.target.id);
    this.items[e.target.id].done = !this.items[e.target.id].done;
    this.setState({
      clickFlag: !this.state.clickFlag,
    });
  }

  render() {
    return (
      <div id='todo-wrap'>
        <div className='card'>
          <SearchBar onSubmit={this.handleSubmit} onChange={this.handleTextInputChange} />
          <Items
            items={this.items}
            v1={this.state.v1}
            v2={this.state.v2}
            handleItemClick={this.handleItemClick}
            handleProductChange={this.handleProductChange}
            handleViewChange={this.handleViewChange}
          />
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <ProductAndView />,
  document.getElementById('root')
);

// console.log(document.getElementById('todo-wrap'));
const sb = document.getElementById('search-bar');
const ul = document.getElementById('items-wrap');
console.log(sb.offsetHeight);
const tmp = sb.offsetHeight + ul.offsetHeight;
let todo = document.querySelector('.card');
todo.style.height = tmp + 'px';
todo = null;
