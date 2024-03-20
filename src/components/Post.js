import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Post(props) {
/*    
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{ setPost(response.data)})
    }, []);  */

/*     useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          const newData = await response.json();
          setPost(newData);
        };
        fetchData();
      }, [posts]); */

      const [data, setData] = useState([])
      const [loading, setLoading] = useState(true);
  
      const [currentPage, setCurrentPage] = useState(1);
      const [recordsPerPage] = useState(10);
  
  
      useEffect(() => {
          axios.get('https://jsonplaceholder.typicode.com/posts')
              .then(res => {
                      setData(res.data);
                      setLoading(false);
                  })
                  .catch(() => {
                      alert('There was an error while retrieving the data');
                  })
      }, [])
  
      const indexOfLastRecord = currentPage * recordsPerPage;
      const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
      const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
      const nPages = Math.ceil(data.length / recordsPerPage);

      const links=()=>{
        for(let i=0;i<nPages;i++)
             <li>{i}</li>
      }

    return (
        <article className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                    { currentRecords.map((p,i)=>(
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