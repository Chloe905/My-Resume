<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section class="h-screen flex items-center justify-center text-center px-4">
    <div>
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        {{ t('hero.title') }}
      </h1>

      <p class="text-lg text-gray-600 mb-4">
        {{ t('hero.subtitle') }}
      </p>

      <p class="text-gray-500 mb-6">
        {{ t('hero.desc') }}
      </p>

      <div class="space-x-4">
        <button class="bg-black text-white px-6 py-3 rounded-xl">
          {{ t('hero.projects') }}
        </button>

        <button class="border px-6 py-3 rounded-xl">
          {{ t('hero.contact') }}
        </button>
      </div>
    </div>
  </section>
</template>
