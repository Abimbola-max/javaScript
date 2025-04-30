import React, {useState} from 'react'
import styles from './bookList.module.css'


const BookList = () => {

    const bookList = [
        "Name of the Wind",
        "The Wise Man's Fear",
        "Kafka on the Shore",
        "The Master and the Margarita"
    ];

    const [books, setBooks] = useState(bookList) //array destructing
    const[newBook, setNewBook] = useState()
    const [searchBook, setSearchbook] = useState('');
    console.log(books)
    console.log(newBook)

    const handleDelete = (removeBook) => {
        setBooks(books.filter((book) => book !== removeBook))
    }

    const collectBookTitle = (e) => {
       setNewBook(e.target.value.trim())
    }

    const handleSubmit = (e) => {  // the default behaviour form has the ability to refresh your browser
       e.preventDefault();
       if (newBook) {
           setBooks(prevBook => [...prevBook, newBook]) //spread operator
       }
    } // in react do not try to manipulate the state directly

    const handleFilterBooks = (e) => {
       // e.preventDefault();
       let searchBooks = e.target.value.toLowerCase();
       // setSearchBookValue((searchBookValue))
        setSearchbook(searchBooks);
    }

    const filterBooks = books.filter((book) => book.toLowerCase().includes(searchBook));


    return (
        <div id={styles.wrapper}>
            <header>
                <div id={styles.pageBanner}>
                    <h1 className={styles.title}> Book Collections</h1>
                    <p>Books</p>
                    <form id={styles.searchBooks}>
                        <input type="text" placeholder="Search books..." onKeyUp={handleFilterBooks}/>
                    </form>
                </div>
            </header>
            <div id={styles.bookList}>
                <h2 className={styles.title}>Books to Read</h2>
                <ul>
                    {
                        filterBooks.map((book, index) => (
                           <li key={index}>
                               <span className={styles.name}>{book}</span>
                               <span className={styles.delete} onClick={() => handleDelete(book)}>delete</span>
                           </li>
                       ))
                    }
                </ul>
            </div>
            <form onSubmit={handleSubmit} id={styles.addBook}>
                <input type="text" placeholder="Add a book..." onChange={collectBookTitle}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default BookList