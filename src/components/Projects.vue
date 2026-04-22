<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const projects = computed(() => [
  {
    title: t('projects.travel.title'),
    desc: t('projects.travel.desc'),
    tags: ['React', 'Redux', 'Node.js', 'Express', 'Supabase', 'Vite', 'i18n', 'Vercel', 'Google Maps API', 'OpenWeather API', 'DeepL API'],
    features: [
      { icon: 'fa-regular fa-map', label: t('projects.travel.feature1') },
      { icon: 'fa-regular fa-sun', label: t('projects.travel.feature2') },
      { icon: 'fa-solid fa-globe', label: t('projects.travel.feature3') }
    ],
    links: [
      { label: 'Demo', url: 'https://travel-app-frontend-navy.vercel.app/' },
      { label: 'Frontend', url: 'https://github.com/Chloe905/travel-app-frontend' },
      { label: 'Backend', url: 'https://github.com/Chloe905/travel-app-backend' }
    ]
  },
  {
    title: t('projects.deepl.title'),
    desc: t('projects.deepl.desc'),
    tags: ['Node.js', 'Express', 'Axios', 'DeepL API', 'REST API'],
    features: [
      { icon: 'fa-solid fa-shield-halved', label: t('projects.deepl.feature1') },
      { icon: 'fa-solid fa-language', label: t('projects.deepl.feature2') },
      { icon: 'fa-solid fa-key', label: t('projects.deepl.feature3') }
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/Chloe905/translation-server' }]
  }
]);
</script>

<template>
  <section id="projects" class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">{{ t('projects.title') }}</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="project in projects" :key="project.title" class="text-primary-dark rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
          <h3 class="text-lg font-bold mb-2">{{ project.title }}</h3>
          <p class="text-gray-500 text-sm mb-4">{{ project.desc }}</p>

          <ul class="space-y-1 mb-4">
            <li v-for="f in project.features" :key="f.label" class="text-sm text-gray-600"><i :class="f.icon"></i> {{ f.label }}</li>
          </ul>

          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in project.tags" :key="tag" class="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
              {{ tag }}
            </span>
          </div>

          <div class="flex gap-3">
            <a
              v-for="link in project.links"
              :key="link.label"
              :href="link.url"
              target="_blank"
              class="text-sm border border-primary text-primary px-3 py-1 rounded-lg hover:bg-primary hover:text-white transition"
            >
              {{ link.label }}→</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
