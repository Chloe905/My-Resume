<template>
  <section id="projects" class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-10">Projects</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="project in projects" :key="project.title" class="p-6 bg-white rounded-2xl shadow">
          <h3 class="text-xl font-semibold mb-2">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 mb-4">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tech in project.tech" :key="tech" class="text-sm bg-gray-100 px-2 py-1 rounded">
              {{ tech }}
            </span>
          </div>

          <div class="space-x-4">
            <a :href="project.demo" target="_blank">Demo</a>
            <a :href="project.github" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Travel App',
    description: 'Travel + Weather + Translation web app',
    tech: ['Vue', 'Node', 'Vercel'],
    demo: '#',
    github: '#'
  }
];
</script>
