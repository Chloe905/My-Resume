<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t, tm } = useI18n();

const certifications = computed(() => tm('certifications.list'));
</script>

<template>
  <section id="certifications" class="py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">{{ t('certifications.title') }}</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="(cert, index) in certifications" :key="index" class="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <!-- Certificate Image -->
          <div class="bg-gray-50 flex items-center justify-center p-4 h-52 overflow-hidden">
            <img :src="cert.image" :alt="cert.name" class="h-full object-contain rounded" />
          </div>

          <!-- Info -->
          <div class="p-5">
            <h3 class="font-bold text-base mb-1">{{ cert.name }}</h3>
            <p class="text-sm text-gray-500 mb-1">{{ cert.issuer }}</p>
            <p class="text-sm text-gray-400">{{ cert.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
