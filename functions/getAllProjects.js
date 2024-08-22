import { gql } from "graphql-request";
import { graphcms } from "@/client";

const getAllProjects = async () => {
  const getAllProjectsQuery = gql`
    {
      projects {
        id
        title
        description
        image {
          url
        }
        source
        tags
      }
    }
  `;

  const { projects } = await graphcms.request(getAllProjectsQuery);

  return projects;
};
export default getAllProjects;
