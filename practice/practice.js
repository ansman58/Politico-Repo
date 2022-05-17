// const url = `http://localhost:4000`
// const fetchUsers = async () => {
//     try{
//         let users = await fetch(`http://localhost:4000/users/`)

//         if(!response.ok) {
//             throw new Error (`Failed to fetch user info: ${response.status}`)
//         }
    
//         return await response.json()
//     } catch (error) {
//         console.log(error);
//     }
// }

// const listUsers = (elementFirstName) => {
//     const postElement = elementFirstName;

//     if (! postElement){
//         return;
//     } 

//     fetchUsers()
//         .then(posts => {
//             if(!posts) {
//                 postElement.innerText = `No post`
//             }
//             for(let post of posts) {
//                 postElement.appendChild(postElementName(post))
//             }

//         })
//          .catch(error => {
//             console.log(error)
//         })
    
    
    
// }

// const postElementName = (post) => {
//     const anchorElement = document.createElement('a')
//     anchorElement.setAttribute('href', `${url}/users/${post.name}`)
//     anchorElement.setAttribute('target', '_blank')

//     const postitle = document.createElement('h3')
//     postitle.appendChild(anchorElement)

//     return postitle;
// }

// let result = confirm('Are you sure you want to delete?');

// let message = result ? 'You clicked the OK button' :
//     'You clicked the Cancel button';

// alert(message);

const getItem = document.querySelector('#input')
const parent = document.querySelector('#my-div')
getItem.addEventListener('keydown', (event) => {
    const paragraph = document.createElement('p')
    parent.append(paragraph)

    paragraph.textContent = getItem.value

} )