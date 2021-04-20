import React from 'react';
import BookService from '../services/BookService';

class BookComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            books : []
        }
    }

    componentDidMount(){
        BookService.getBooks().then((response) => {
            this.setState({ books : response.data})

        });
    }

    render (){
        return(
        <div>
            
            <table   className = "table table-dark table-striped table-hover table-bordered responsive  ">
                <thead>
                    <tr>
                        <td>BOOK ID</td>
                        <td>BOOK NAME</td>
                        <td> AUTHOR  </td>  
                        <td> PRICE </td>
                    </tr>
                </thead>

                <tbody>
                    {

                        this.state.books.map(
                            book => 
                            <tr key={book.id}>
                                    <td> {book.id} </td>
                                    <td> {book.bookName} </td>
                                    <td> {book.bookAuthor} </td>
                                    <td> {book.price} </td>
                            </tr>

                        )
                    }
                </tbody>
                    

            </table>

        </div>
        )
    }

}

export default BookComponent;