import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest, createPostRequest } from './redux/actions';


function App() {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.elements);
  const error = useSelector((state) => state.error);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handlePostElement = () => {
    dispatch(createPostRequest({ payload: { title, body } }));
    setTitle("");
    setBody("");
  };

  const handleFetchElements = () => {
    dispatch(fetchPostsRequest());
  };

  return (
    <div>
      <h1>My Elements</h1>
      {error && <p>{error.message}</p>}
      <ul>
        {elements.map((element) => (
          <li key={element.id}>
            <h2>{element.title}</h2>
            <p>{element.body}</p>
          </li>
        ))}
      </ul>
      <div>
        <h2>Add Element</h2>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea id="body" value={body} onChange={handleBodyChange} />
        </div>
        <button onClick={handlePostElement}>Post Element</button>
      </div>
      <button onClick={handleFetchElements}>Fetch Elements</button>
    </div>
  );
}

export default App;


// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// function App() {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state) => state);

//   useEffect(() => {
//     dispatch(fetchPostsRequest());
//   }, [dispatch]);

//   const handleCreatePost = () => {
//     dispatch(
//       createPostRequest({
//         title: 'New Post',
//         body: 'This is the body of the new post.',
//         userId: 1,
//       })
//     );
//   };

//   console.log(posts,)

//   return (
//     <div>
//       <h1>React Redux Saga Demo</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p>{error.message}</p>}
//       <button onClick={handleCreatePost}>Create Post</button>
//       <ul>
//         {posts?.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;