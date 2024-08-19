import Button from "./components/Button"
import React, { useState } from 'react';


// Class :1
function App() {
  
const  [comments,setComments] = useState([]);

const handleCommentClick = ()=>{
  const newComment = prompt("Enter your comment:");
  if(newComment){
    setComments([...comments,{ text: newComment, id: Date.now() }]);
    alert("Comment Added!")
  }
};

const handleEditComment = (id) => {
  const updatedComment = prompt('Edit your comment:');
  if (updatedComment) {
    setComments(comments.map(comment =>
      comment.id === id ? { ...comment, text: updatedComment } : comment
    ));
  }
};

const handleDeleteComment = (id) => {
  if (window.confirm('Are you sure you want to delete this comment?')) {
    setComments(comments.filter(comment => comment.id  !== id));
  }
};




  return (
    
     <div className="flex flex-col items-center space-y-4 p-8 bg-gray-100 min-h-screen">
     <h1 className="text-3xl font-bold mb-8">My React Buttons</h1>
     <Button
      label="Like Btn"  
     text="Btn is Liked" 
     className="bg-blue-500 hover:bg-blue-700 text-white" />

     <Button 
     label="Dislike Btn" 
     text="Btn is Disliked"
     className="bg-red-500 hover:bg-red-700 text-white" />

     <Button
      label="Share Btn"
      text="Btn is Shared" 
      className="bg-green-500 hover:bg-green-700 text-white"/>

     <Button 
     label="Comment Btn" 
     text="Commented on Btn"
     className="bg-gray-500 hover:bg-gray-700 text-white"
     onClick={handleCommentClick} />
    

    <div className="mt-8">
    {/* <h2 className="text-xl font-bold mb-2"</h2> */}
    <ul className="list-disc pl-5">
      {comments.map((comment) =>(
        <li key={comment.id}  className="flex items-center justify-between bg-white p-4 shadow rounded">
          <span>{comment.text}</span>
         <div className="space-x-3">
          <button 
          onClick={() => handleEditComment(comment.id)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 ml-5 rounded">
            Edit
          </button>


          <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                >
            Delete        

            </button>
         </div>
        </li>
      ) )}
    </ul>

    </div>
     </div>
  );
} 

export default App

// function App(){

  
//   const profile = {
//     name:"Khizer Butt",
//     age: 18,
//     skills:[
//       {skill:"Web Developer",key:1},
//       {skill:"UI/UX Designer",key:1},
//       {skill:"E-commerce Expert",key:1},
//     ],
//   }


// return(
// <div>
//   <h1>Full name:{profile.name}</h1>
//   <h1>age:{profile.age}</h1>
//   <h1>skills:-</h1>
//   <ul>
//     {profile.skills.map((data) => (
//       <li key={data.key}>{data.skill}</li>
//     ))}
//   </ul>
// </div>
// )
// }
// export default App