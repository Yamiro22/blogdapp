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
        image: './assets/images/Screenshot from 2023-10-29 22-09-13.jpg',
        title: 'Dapp blog',
        description: 'A decentralized application (dApp) is a software application that runs on a decentralized network, such as a blockchain. dApps are designed to be more secure, transparent, and resistant to censorship than traditional applications. They are built using smart contracts, which are self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code 1..',
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
