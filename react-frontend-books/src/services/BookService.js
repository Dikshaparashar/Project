import axios from 'axios'

const BOOKS_REST_API_URL ='http://localhost:8081/api/books';

class BookService{

    getBooks(){
       return axios.get(BOOKS_REST_API_URL);
    }
}

export default new BookService();