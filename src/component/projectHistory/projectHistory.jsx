import React, { useState } from "react";
import Container from "../container/contianer";
import "./projectHistory.css";
import edit from "../../assets/edit.png";
import plus from "../../assets/plus.png";

const ProjectHistory = () => {
  const initialProjects = [
    {
      id: 1,
      name: "Project One",
      date: "2023 June - 2023 September",
      description: "Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently.",
    },
    {
      id: 2,
      name: "Project Two",
      date: "2023 April - 2023 June",
      description: "Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently.",
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [newProject, setNewProject] = useState({
    name: "",
    date: "",
    description: "",
  });

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // التعامل مع إضافة مشروع جديد
  const handleAddProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveNewProject = () => {
    setProjects([
      ...projects,
      { ...newProject, id: projects.length + 1 }, // إعطاء المشروع الجديد معرّفًا فريدًا
    ]);
    setNewProject({ name: "", date: "", description: "" });
    setIsAdding(false);
  };

  // التعامل مع تعديل جميع المشاريع
  const handleEditChange = (e, projectId) => {
    const { name, value } = e.target;
    setProjects(
      projects.map((project) =>
        project.id === projectId ? { ...project, [name]: value } : project
      )
    );
  };

  // إغلاق وضع التعديل لجميع المشاريع
  const handleSaveEdit = () => {
    setIsEditing(false); // حفظ التعديلات وإغلاق وضع التعديل
  };

  // إلغاء التعديلات لجميع المشاريع
  const handleCancelEdit = () => {
    setProjects(initialProjects); // إعادة المشاريع إلى حالتها الأصلية
    setIsEditing(false); // إغلاق وضع التعديل
  };

  return (
    <div className="pHistory">
      <Container>
        <div className="head">
          <h4>Project History</h4>
          <div className="pics">
            <img
              src={plus}
              alt="Add Project"
              onClick={() => setIsAdding(true)}
            />
            <img
              src={edit}
              alt="Edit Projects"
              onClick={() => setIsEditing((prev) => !prev)} // تبديل وضع التعديل لجميع المشاريع
            />
          </div>
        </div>

        <div className="project-cards">
          {projects.map((project) => (
            <div className="p-card" key={project.id}>
              <div className="scroll">
                <div className="dot"></div>
                <div className="line"></div>
              </div>

              <div className="p-details">
                {isEditing ? (
                  // عند التعديل، نعرض الحقول القابلة للتحرير لجميع المشاريع
                  <div className="edit">
                    <input
                      type="text"
                      name="name"
                      value={project.name}
                      onChange={(e) => handleEditChange(e, project.id)}
                    />
                    <input
                      type="text"
                      name="date"
                      value={project.date}
                      onChange={(e) => handleEditChange(e, project.id)}
                    />
                    <textarea
                      name="description"
                      value={project.description}
                      onChange={(e) => handleEditChange(e, project.id)}
                    />
                  </div>
                ) : (
                  // إذا لم يكن في وضع التعديل، نعرض البيانات بشكل نصي
                  <div>
                    <h4 className="name">{project.name}</h4>
                    <p className="date">{project.date}</p>
                    <p className="description">{project.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* أزرار الحفظ والإلغاء تظهر فقط إذا كان وضع التعديل مفعل */}
        {isEditing && (
          <div className="edit-buttons">
            <button onClick={handleSaveEdit}>Save Changes</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        )}

        {isAdding && (
          <div className="add-project-form">
            <h4>Add New Project</h4>
            <input
              type="text"
              name="name"
              placeholder="Project Name"
              value={newProject.name}
              onChange={handleAddProjectChange}
            />
            <input
              type="text"
              name="date"
              placeholder="Date"
              value={newProject.date}
              onChange={handleAddProjectChange}
            />
            <textarea
              name="description"
              placeholder="Project Description"
              value={newProject.description}
              onChange={handleAddProjectChange}
            />
            <button onClick={handleSaveNewProject}>Save Project</button>
            <button onClick={() => setIsAdding(false)}>Cancel</button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProjectHistory;























// import React from "react";
// import Container from "../container/contianer";
// import "./projectHistory.css";
// import edit from "../../assets/edit.png";
// import plus from "../../assets/plus.png";
// const projectHistory = () => {
//   return (
//     <div className="pHistory">
//       <Container>
//         <div className="head">
//           <h4>Project History</h4>
//           <div className="pics">
//             <img src={plus} alt="" />
//             <img src={edit} alt="" />
//           </div>
//         </div>

//         <div className="project-cards"> 

//           <div className="p-card">
//             <div className="scroll">
//               <div className="dot"></div>
//               <div className="line"></div>
//             </div>
//             <div className="p-details">
//               <h4 className="name">project name</h4>
//               <p className="date">2023 june - 2023sep</p>
//               <p className="description">Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently. </p>
//             </div>
//           </div>

//           <div className="p-card">
//             <div className="scroll">
//               <div className="dot"></div>
//               <div className="line"></div>
//             </div>
//             <div className="p-details">
//               <h4 className="name">project name</h4>
//               <p className="date">2023 june - 2023sep</p>
//               <p className="description">Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently. </p>
//             </div>
//           </div>

          
//         </div>


//       </Container>
//     </div>
//   );
// };

// export default projectHistory;



