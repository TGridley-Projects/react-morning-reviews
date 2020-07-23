import React, {Component} from "react"
import movies from '../data/movies.json'
import ListItems from './ListItem'
import Form from './Form'

class List extends Component{
    constructor(){
        super()

        this.state = {
            movies: movies
        }
    }

    render(){
        const moviesMap = this.state.movies.map(movie => {return <ListItems key={movie.id} movie={movie} />})
        return <div className='List'><Form/>{moviesMap}</div>
    }
}

export default List