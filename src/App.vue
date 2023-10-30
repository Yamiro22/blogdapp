<template>
  <div id="app">
    <Navbar />

    <!-- Main content goes here -->
    <div class="main-content">
      <!-- Example usage of ProjectCard -->
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
      <!-- Now you can easily add multiple projects by extending the projects array -->
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          image: 'https://www.codingfont.com/blog/media/posts/13/best2023Cover-12.png',
          title: 'portfolio website',
          description: 'A portfolio website is a platform that showcases your work and lets others know about you. It’s like an evergreen platform for your projects, case studies, and information about you.',
          link: 'https://github.com/Yamiro22/my_portfoilo'
        },
        // ... Add more projects as needed
      ]
    };
  }
}
</script>

<style scoped>
/* Scoped styles can be added here, which will only apply to this component */
.main-content {
  padding: 20px;
}
</style>

