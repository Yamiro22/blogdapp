<template>
  <div id="app">
    <Navbar />

    <!-- Main content goes here -->
    <div class="main-content">
      <!-- Example usage of ProjectCard -->
      <ProjectCard :project="sampleProject" />
      <!-- You can replicate the above line for multiple projects -->
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
      sampleProject: {
        image: 'path/to/image.jpg',
        title: 'Sample Project',
        description: 'A brief description of the sample project.',
        link: 'https://link-to-project.com'
      }
    };
  }
}
</script>

<style>
/* Global styles can be added here */
.main-content {
  padding: 20px;
}
</style>
