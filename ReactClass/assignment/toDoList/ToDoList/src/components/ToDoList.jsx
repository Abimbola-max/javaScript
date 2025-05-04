import React, {useState} from 'react'
import styles from './toDoList.module.css'

const ToDoList = () => {
    const toDos = [
        "Wash the dishes",
        "Prepare my favourite meal",
        "Write codes"
    ];

    const [toDo, setToDo] = useState(toDos)
    const[newToDo, setNewToDo] = useState()
    const [searchTodo, setSearchTodo] = useState('');
    console.log(toDo)
    console.log(newToDo)

    const handleDelete = (removeToDoS) => {
        setToDo(toDo.filter((book) => book !== removeToDoS))
    }

    const collectToDos = (e) => {
        setNewToDo(e.target.value.trim())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newToDo) {
            setToDo(prevBook => [...prevBook, newToDo])
        }
    }

    const handleFilterToDoS = (e) => {
        let searchToDoS = e.target.value.toLowerCase();
        setSearchTodo(searchToDoS);
    }
    const filteredToDoS = toDo.filter((book) => book.toLowerCase().includes(searchTodo));

    return (
        <div id={styles.wrapper}>
            <header>
                <div id={styles.pageBanner}>
                    <h1 className={styles.title}> ToDo List</h1>
                    <p>ToDos</p>
                    <form id={styles.searchToDoS}>
                        <input type="text" placeholder="Search for todos..." onKeyUp={handleFilterToDoS}/>
                    </form>
                </div>
            </header>
            <div id={styles.toDoList}>
                <h2 className={styles.title}>Things To Do</h2>
                <ul>
                    {
                        filteredToDoS.map((todos, index) => (
                            <li key={index}>
                                <span className={styles.name}>{todos}</span>
                                <span className={styles.delete} onClick={() => handleDelete(todos)}>delete</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <form onSubmit={handleSubmit} id={styles.addToDo}>
                <input type="text" placeholder="Add a todo..." onChange={collectToDos}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default ToDoList;