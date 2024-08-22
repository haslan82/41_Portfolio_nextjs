import getAllProjects from "@/functions/getAllProjects";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import ProjectCard from "../ProjectCard";

const ProjectsPage = async () => {
  const projects = await getAllProjects();

  return (
    <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
      <Link
        href={"/"}
        className="flex items-center space-x-4 font-semibold pb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
      >
        <FaArrowLeftLong className="w-6 h-6 fill-current" />
        <span>Back to Home</span>
      </Link>

      {/* projects... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {" "}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
