<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import tmuLogo from '../assets/images/tmu_logo.png';
import alphaLogo from '../assets/images/ac_logo.webp';

const { t, tm } = useI18n();

const education = computed(() => [
  {
    logo: tmuLogo,
    school: t('education.tmu.school'),
    degree: t('education.tmu.degree'),
    period: '2015 – 2019'
  },
  {
    logo: alphaLogo,
    school: t('education.alphacamp.school'),
    degree: t('education.alphacamp.degree'),
    period: '2022 – 2023'
  }
]);
</script>

<template>
  <section id="education" class="py-20 px-6 bg-primary">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-white">{{ t('education.title') }}</h2>

      <div class="space-y-6">
        <div v-for="(edu, index) in education" :key="index" class="flex items-center gap-6 p-5 rounded-2xl border border-gray-200 hover:shadow-md transition">
          <img :src="edu.logo" :alt="edu.school" class="w-16 h-16 object-contain shrink-0" />

          <div>
            <h3 class="font-bold text-base text-white">{{ edu.school }}</h3>
            <p class="text-sm text-gray-100 mt-0.5">{{ edu.degree }}</p>
            <p class="text-sm text-gray-200 mt-1">{{ edu.period }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
