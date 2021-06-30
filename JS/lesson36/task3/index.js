// input: string
// output: promise

const getPromise = async (userId) => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error("Failed to get the data");
};
// input: arr
// output: arr of promises

const getUsersBlogs = (user) => {
  try {
    return Promise.all(
      user.map((elem) => getPromise(elem).then((response) => response.blog))
    );
  } catch (err) {
    alert(err.message);
  }
};

getUsersBlogs(["google", "facebook", "gaearon"]).then((linksList) =>
  console.log(linksList)
);

// const arr = [];
// getPromise = userId => {
//   let y = fetch(`https://api.github.com/users/${userId}`);

//   for (let user of users) {
//     if (userId === user.id) {
//       arr.push(y);
//     }
//   }
//   return arr;
// };
// console.log(getPromise());
// const result = arr.map(el => el.blog);
// console.log(result);
