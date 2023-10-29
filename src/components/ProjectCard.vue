<template>
    <div class="project-card">
      <img :src="project.image" :alt="project.title" class="project-image"/>
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">View Project</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .project-card {
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    overflow: hidden;
    transition: transform 0.3s;
  }
  
  .project-card:hover {
    transform: scale(1.05);
  }
  
  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .project-info {
    padding: 15px;
  }
  
  .project-link {
    display: inline-block;
    margin-top: 10px;
    padding: 5px 15px;
    background-color: #007BFF;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .project-link:hover {
    background-color: #0056b3;
  }
  </style>
  