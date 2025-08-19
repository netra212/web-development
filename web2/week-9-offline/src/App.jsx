
import { useState } from "react";
import { PostComponent } from "./Post";

function App() {

  const [posts, setPosts] = useState([]);

  const postComponent = posts.map(post => <PostComponent
    name={posts.name}
    subtitle={posts.subtitle}
    time={posts.title}
    image={posts.image}
    description={posts.description}
  ></PostComponent>)

  function addPost() {
    posts.push({
      name: "netra",
      subtitle: "1000 followers",
      time: "2m ago",
      image: "/Users/user/Desktop/web-development/web2/week-9-offline/src/LinkedIn.png",
      description: "what to know how to win big ? Check out how these folks won $6000 in bounties."
    })
  }

  return (
    <div style={{ background: "#def6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {postComponent}
        </div>
      </div>
    </div>
  )
}