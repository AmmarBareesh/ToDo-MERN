import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllTodos} from '../actions/dataActions';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed textLimit' : 'textLimit'}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed textLimit' : 'textLimit'}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id} >Edit</Link>
        </td>
    </tr>
)

class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        this.props.getAllTodos().then(data=> {
            this.setState({todos: data.todos});
        })  
    }

    todoList() {
        return this.state.todos.map((currentTodo, i) => {
            console.log("todos: ",currentTodo)
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.todos.length ? this.todoList(): <p className = "defaultTextStyle" >No todos added yet</p> }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    getAllTodos: () => dispatch(getAllTodos())
})
export default connect(undefined, mapDispatchToProps)(TodosList)