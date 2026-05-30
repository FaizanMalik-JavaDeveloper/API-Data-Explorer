// ===========================
// RANDOM USER GENERATOR
// ===========================

async function fetchUser() {
  const userContainer = document.getElementById("user");

  userContainer.innerHTML = "<p class='message'>Loading User...</p>";

  try {
    const response = await fetch("https://randomuser.me/api/");

    const data = await response.json();

    const user = data.results[0];

    userContainer.innerHTML = `

            <img src="${user.picture.large}">

            <h3>
                ${user.name.first}
                ${user.name.last}
            </h3>

            <p>
                Email: ${user.email}
            </p>

            <p>
                Country: ${user.location.country}
            </p>

            <p>
                Age: ${user.dob.age}
            </p>

        `;
  } catch (error) {
    userContainer.innerHTML = "<p class='message'>Unable To Fetch User</p>";

    console.log(error);
  }
}

// ===========================
// FETCH API POSTS
// ===========================

let postId = 1;

function getPost() {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())

    .then((data) => {
      document.getElementById("postContainer").innerHTML += `

            <div class="post">

                <h3>${data.title}</h3>

                <p>${data.body}</p>

            </div>

        `;

      postId++;

      if (postId > 100) {
        postId = 1;
      }
    })

    .catch((error) => {
      console.log(error);
    });
}

// ===========================
// CLEAR POSTS
// ===========================

function clearPosts() {
  document.getElementById("postContainer").innerHTML = "";

  postId = 1;
}
