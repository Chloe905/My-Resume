<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const jobs = computed(() => tm('experience.jobs'));
</script>

<template>
  <section id="experience" class="py-20 px-6 bg-primary">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-white">{{ t('experience.title') }}</h2>

      <div class="space-y-10">
        <div v-for="(job, index) in jobs" :key="index" class="relative pl-6 border-l-2 border-white/10">
          <!-- 時間軸圓點 -->
          <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white"></div>

          <!-- Header -->
          <div class="mb-3">
            <h3 class="text-white text-lg font-bold">{{ job.role }}</h3>
            <p class="text-gray-100 text-sm">{{ job.company }}</p>
            <p class="text-gray-200 text-xs mt-1">{{ job.period }}・{{ job.duration }}・{{ job.location }}</p>
          </div>

          <!-- Points -->
          <ul class="space-y-1 mb-4">
            <li v-for="(point, i) in job.points" :key="i" class="text-sm text-gray-300 flex gap-2">
              <span class="text-gray-300 mt-0.5">▸</span>
              <span>{{ point }}</span>
            </li>
          </ul>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in job.tags" :key="tag" class="text-xs px-2 py-1 bg-white/10 text-white rounded-full">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
