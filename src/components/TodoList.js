import React, { Component } from 'react'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = (e) => {
        this.setState({value: e.target.value});
    }

    onClickButton = () => {
        //this.props.addTodo(this.state.value);
        this.setState({value: ''});
    }


    render() {
        return (
            <div>
                {/* <p>This is Todo app</p> */}
                {/* <button>Add Todo</button> */}
                <span>
                    <input value={this.state.value} onChange={this.onChange} type='text'></input>
                    <button onClick={this.onClickButton}>Submit</button>
                </span>
                <ol>{this.props.list.map(item => <li>{item}</li>)} </ol>
            </div>
        )
    }
}

export default TodoList
