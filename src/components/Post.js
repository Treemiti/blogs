import React,{ useEffect, useState} from 'react';
import axios from 'axios';

function Post(props) {
    const [posts, setPost]=useState([]);
   
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{ setPost(response.data)})
    }, []); 

    return (
        <article className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                    { posts.map((p,i)=>(
                        <div>
                            <h3>{p.title}</h3>
                            <p>{p.body}</p>
                        </div>
                    ))
                    }
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Post;