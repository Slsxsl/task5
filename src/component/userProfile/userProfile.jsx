import React, { useState } from 'react';
import "./userProfile.css";
import userpic from "../../assets/user2.png";
import star from "../../assets/star.png";

const UserProfile = () => {
  // تعريف الحالة للاسم والصورة
  const [name, setName] = useState("Mustafa Emad");
  const [image, setImage] = useState(userpic);
  const [isEditing, setIsEditing] = useState(false); // حالة لتحديد إذا كنا في وضع التحرير

  
  const [originalName, setOriginalName] = useState(name);
  const [originalImage, setOriginalImage] = useState(image);

  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };


  const toggleEdit = () => {
    if (isEditing) {
     
      setOriginalName(name);
      setOriginalImage(image);
    }
    setIsEditing(!isEditing);
  };


  const cancelEdit = () => {
    setName(originalName);
    setImage(originalImage);
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
         <div className="pic">
        <img src={image} alt="User" />
      </div>
      {isEditing ? (
        <div className="edit-form">

    <input 
            className="change" 
            type="file" 
            onChange={handleImageChange} 
            accept="image/*" 
          />
         
          <input 
            type="text" 
            value={name} 
            onChange={handleNameChange} 
            placeholder="Enter new name"
          
          />
          
        </div>
      ) : (
        <>
       
          <h3>{name}</h3>
          <div className="rate"> <img src={star} alt="" />5.0 </div>
        </>
      )}
      
      
      <button className={isEditing ? "editing" : "edit"} onClick={toggleEdit}>
        {isEditing ? "Save Changes" : "Edit Profile"}
      </button>

      {isEditing && (
        <button className="cancel" onClick={cancelEdit}>
          Cancel
        </button>
      )}
    </div>
  );
}

export default UserProfile;
