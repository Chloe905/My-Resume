<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

const isOpen = ref(false);

const languages = [
  { code: 'zh', label: '中' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日' }
];

const currentLabel = computed(() => {
  return languages.find((l) => l.code === locale.value)?.label;
});

const selectLang = (lang) => {
  locale.value = lang;
  localStorage.setItem('lang', lang);
  isOpen.value = false;
};
</script>

<template>
  <nav class="fixed w-full bg-white/80 backdrop-blur border-b z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 class="font-bold">Chloe</h1>

      <div class="flex items-center space-x-6">
        <a href="#projects">{{ t('hero.projects') }}</a>
        <a href="#contact">{{ t('hero.contact') }}</a>

        <!-- Dropdown -->
        <div class="relative">
          <!-- Button -->
          <button @click="isOpen = !isOpen" class="border px-3 py-1 rounded-lg text-sm hover:bg-gray-100 transition">
            {{ currentLabel }}
          </button>

          <!-- Dropdown menu -->
          <div v-if="isOpen" class="absolute right-0 mt-2 w-20 bg-white border rounded-lg shadow-md">
            <button v-for="lang in languages" :key="lang.code" @click="selectLang(lang.code)" class="block w-full text-left px-3 py-2 hover:bg-gray-100 text-sm">
              {{ lang.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
