import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",

    //render list
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  //conditionally render list
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags! </p>; //see screenshot for the && true false

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = product => {
    // console.log("Increment Clicked", this);
    // obj.method();
    //function();
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* render a list of items */}
        {/* <ul>
          {" "}
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}{" "}
        </ul> */}
        {/* conditionally render */}
        {/* {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
