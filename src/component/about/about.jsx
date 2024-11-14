import React, { useState } from "react";
import "./about.css";
import edit from "../../assets/edit.png";
import Container from "../container/contianer";

const About = () => {
  // استخدام useState لتخزين النص
  const [text, setText] = useState(
    "GreenTech Solutions Inc.\nRenewable Energy & Technology\nSan Francisco, California, with operations in North America and Europe"
  );
  const [isEditing, setIsEditing] = useState(false); // حالة لتحديد إذا ما كان النص قابل للتعديل

  // دالة لتغيير النص
  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  // دالة للتبديل بين وضع العرض و وضع التعديل
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="about-page">
      <Container>
        <div className="head">
          <h4>About</h4>
          <img src={edit} alt="Edit" onClick={toggleEdit} />
        </div>
        {isEditing ? (
          <textarea
            value={text}
            onChange={handleChangeText}
            rows="5"
            cols="50"
          />
        ) : (
         
          <p>{text}</p>
        )}
           <button onClick={toggleEdit} className={isEditing=== false ? "no" :"yes"}>save</button>
      </Container>
    </div>
  );
};

export default About;
