<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section class="h-screen flex items-center justify-center text-center px-4">
    <div>
      <!-- 👇 大頭貼 -->
      <div class="flex justify-center mb-6">
        <img src="../assets/webp.jpeg" alt="avatar" class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg" />
      </div>

      <h1 class="text-xl md:text-4xl font-bold mb-4 text-[#6b8075]">
        {{ t('hero.title') }}
      </h1>

      <p class="text-lg text-gray-600 mb-4">
        {{ t('hero.subtitle') }}
      </p>

      <p class="text-gray-500 mb-6">
        {{ t('hero.desc') }}
      </p>

      <div class="space-x-4">
        <button class="bg-[#6b8075] text-white px-6 py-3 rounded-xl hover:bg-white hover:text-[#6b8075] hover:border-[#6b8075] hover:border">
          <a href="#projects">{{ t('hero.projects') }}</a>
        </button>

        <button class="border border-[#6b8075] text-[#6b8075] px-6 py-3 rounded-xl hover:bg-[#6b8075] hover:text-white">
          <a href="#contact">{{ t('hero.contact') }}</a>
        </button>
      </div>
    </div>
  </section>
</template>
