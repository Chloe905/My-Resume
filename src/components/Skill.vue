<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const skills = ['Vue.js', 'Vite', 'Node.js', 'JavaScript', 'Pinia', 'Express'];

const familiar = ['TypeScript', 'React', 'Tailwind CSS', 'Bootstrap', 'MongoDB', 'MySQL'];

const others = ['Git', 'GitHub', 'n8n', 'Vercel', 'RESTful API'];

const languages = computed(() => [
  { name: t('skill.en'), level: 70 },
  { name: t('skill.zh'), level: 100 },
  { name: t('skill.ja'), level: 40 }
]);
</script>

<template>
  <section class="py-20 px-6 bg-primary text-white">
    <div class="max-w-6xl mx-auto">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">{{ t('skill.title') }}</h2>

      <div class="grid md:grid-cols-3 gap-10">
        <!-- Core Skills -->
        <div>
          <h3 class="text-xl font-semibold mb-4 border-b border-white/40 pb-2">{{ t('skill.core') }}</h3>

          <div class="flex flex-wrap gap-3 mt-6">
            <span v-for="item in skills" :key="item" class="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition">
              {{ item }}
            </span>
          </div>
        </div>

        <!-- Familiar -->
        <div>
          <h3 class="text-xl font-semibold mb-4 border-b border-white/40 pb-2">{{ t('skill.familiar') }}</h3>

          <div class="flex flex-wrap gap-3 mt-6">
            <span v-for="item in familiar" :key="item" class="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition">
              {{ item }}
            </span>
          </div>
        </div>

        <!-- Others -->
        <div>
          <h3 class="text-xl font-semibold mb-4 border-b border-white/40 pb-2">{{ t('skill.others') }}</h3>

          <div class="flex flex-wrap gap-3 mt-6">
            <span v-for="item in others" :key="item" class="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition">
              {{ item }}
            </span>
          </div>
        </div>
      </div>

      <!-- Language -->
      <div class="mt-16 max-w-xl mx-auto">
        <h3 class="text-xl font-semibold mb-6 border-b border-white/40 pb-2 text-center">{{ t('skill.language') }}</h3>

        <div class="space-y-6 mt-6">
          <div v-for="lang in languages" :key="lang.name">
            <div class="flex justify-between mb-1">
              <span>{{ lang.name }}</span>
              <span class="text-sm text-white/70">{{ lang.level }}%</span>
            </div>

            <div class="w-full bg-white/20 h-2 rounded">
              <div class="bg-white h-2 rounded transition-all duration-500" :style="{ width: lang.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
