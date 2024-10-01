import React from "react";

const ProjectsTable = ({ projects }) => {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-xs text-gray-500">
            <th className="pb-2 pt-2 font-semibold">Assigned</th>
            <th className="pb-2 pt-2 font-semibold">Project</th>
            <th className="pb-2 pt-2 font-semibold">Priority</th>
            <th className="pb-2 pt-2 font-semibold">Budget</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {projects.map((project, index) => (
            <tr key={index} className="h-16">
              <td className="py-4 flex items-center space-x-4">
                <img
                  src={project.assignedImage}
                  alt={project.assignedName}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {project.assignedName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {project.assignedRole}
                  </p>
                </div>
              </td>
              <td className="py-4 text-sm text-gray-900">
                {project.projectName}
              </td>
              <td className="py-4 text-sm">
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-lg bg-${project.priorityColor}-100 text-${project.priorityColor}-600`}
                >
                  {project.priorityLabel}
                </span>
              </td>
              <td className="py-4 text-sm text-gray-900">{project.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Default props
ProjectsTable.defaultProps = {
  projects: [
    {
      assignedImage:
        "https://modernize-react.adminmart.com/assets/user-2-8a001bcb.jpg",
      assignedName: "Sunil Joshi",
      assignedRole: "Web Designer",
      projectName: "Elite Admin",
      priorityLabel: "Low",
      priorityColor: "green",
      budget: "$3.9k",
    },
    {
      assignedImage:
        "https://modernize-react.adminmart.com/assets/user-3-94da4ac7.jpg",
      assignedName: "John Deo",
      assignedRole: "Web Developer",
      projectName: "Flexy Admin",
      priorityLabel: "Medium",
      priorityColor: "yellow",
      budget: "$24.5k",
    },
    {
      assignedImage:
        "https://modernize-react.adminmart.com/assets/user-4-a9b2728d.jpg",
      assignedName: "Mathew Anderson",
      assignedRole: "Web Manager",
      projectName: "Material Pro",
      priorityLabel: "High",
      priorityColor: "red",
      budget: "$12.8k",
    },
    {
      assignedImage:
        "https://modernize-react.adminmart.com/assets/user-5-77f60b86.jpg",
      assignedName: "Yuvraj Sheth",
      assignedRole: "Project Manager",
      projectName: "Xtreme Admin",
      priorityLabel: "Very High",
      priorityColor: "blue",
      budget: "$2.4k",
    },
  ],
};

export default ProjectsTable;
