import { Component } from 'react';
import axios from 'axios';
import BlogLists from "../components/BlogLists";


class Home extends Component{
    constructor() {
        super();

        this.state = {
            posts: []
        }

        this.getPosts();
    }

    getPosts(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({data}) => {
                this.setState({
                    posts: data.slice(0, 5)
                })
            })
    }

    deletePost(id, that){
        let posts = that.state.posts.filter(post => post.id !== id)
        that.setState({
            posts: posts
        })
    }

    render(){
        return(
            <div className="container px-14 py-7">
                <h1 className="text-gray-800 text-3xl mb-5">
                    Homepage
                </h1>

                <hr className="mb-7"/>

                <BlogLists lists={ this.state.posts } delete={ this.deletePost } parent={this}/>
            </div>
        )
    }
}

export default Home;