<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Skill from './components/Skill.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import Certifications from './components/Certifications.vue';
import Education from './components/Education.vue';
import Abilities from './components/Abilities.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="font-sans text-gray-800">
    <Navbar />
    <Hero />
    <Abilities />
    <Skill />
    <Projects />
    <Experience />
    <Certifications />
    <Education />
    <Footer />
  </div>
</template>
