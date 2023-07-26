// "npm install gray-matter" for reading a md file and splitting meta data and post data

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");
const projectDirectory = path.join(process.cwd(), "projects");

export function getPostFiles() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // data and content property
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();
  // map array of postFiles to an array of PostData objects
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}

export function getProjectFiles() {
  return fs.readdirSync(projectDirectory);
}

export function getProjectData(projectIdentifier) {
  const projectSlug = projectIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(projectDirectory, `${projectSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // data and content property
  const { data, content } = matter(fileContent);

  const projectData = {
    slug: projectSlug,
    ...data,
    content,
  };

  return projectData;
}

export function getAllProjects() {
  const projectFiles = getProjectFiles();
  // map array of projectFiles to an array of ProjectData objects
  const allProjects = projectFiles.map((projectFile) => {
    return getProjectData(projectFile);
  });
  const sortedProjects = allProjects.sort((projectA, projectB) =>
    projectA.date > projectB.date ? -1 : 1
  );

  return sortedProjects;
}
