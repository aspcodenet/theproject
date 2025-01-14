import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

// export async function loadPlayers() {
//     const response = await fetch(url);
//     const players = await response.json();

//     return players
//   }

// https://jsonplaceholder.typicode.com/guide/
// Important: resource will not be really updated on the server but it will be faked as if.

export async function loadPosts() {
  const response = await axios.get(url);
  const players = response.data;
  return players;
}

export async function loadPost(id) {
  const response = await axios.get(`${url}/${id}`);
  const players = response.data;
  return players;
}

export async function addPost(post) {
  console.log(JSON.stringify(post));
  const response = await axios.post(url, post, {
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  //  console.log(response)
}

export async function updatePost(post) {
  const response = await axios.put(`${url}/${post.id}`, post, {
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
}
