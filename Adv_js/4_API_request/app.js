const url = 'https://jsonplaceholder.typicode.com/posts'; // Define the API endpoint for posts

// Function to fetch data and display it
async function fetchAndDisplayPosts() {
  try {
    // Fetch the data from the specified URL
    const response = await fetch(url); 

    // Check if the response was successful (status in the range 200-299)
    if (!response.ok) 
        {
      // If the response indicates an error, throw an error with the status text
         throw new Error('Network response was not ok: ' + response.statusText);
        }

    // Convert the response data to JSON format
    const posts = await response.json(); 

    // Get the HTML element where the posts will be displayed
    const postsList = document.getElementById('posts-list');
    
    // Clear any existing content in the posts list
    postsList.ContentText = '';
    
    // Loop through each post in the fetched data
    posts.forEach(post => {
      // Create a new list item element for each post
      const listItem = document.createElement('li'); 

      // Set the text content of the list item to the post's title and body
      listItem.textContent = `${post.title}: ${post.body}`; 

      // Append the new list item to the unordered list in the HTML
      postsList.appendChild(listItem); 
    });
  } catch (error) {
    // If there's an error during the fetch or processing, log it to the console
    console.error('Error fetching posts:', error); 
  }
}

// Call the function to fetch and display posts when the script runs
fetchAndDisplayPosts();



