<template>
    <footer class="footer">
      <div class="container">
        <div class="content">
          <p>&copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.</p>
          <div class="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:youremail@example.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    position: relative;
    bottom: 0;
    width: 100%;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .social-links {
    display: flex;
    gap: 15px;
  }
  
  .social-links a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .social-links a:hover {
    color: #ddd;
  }
  </style>
  