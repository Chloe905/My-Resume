<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <footer id="contact" class="py-10 text-center border-t">
    <div class="flex justify-center gap-5 mb-4 text-2xl">
      <a href="https://github.com/Chloe905" target="_blank" class="hover:text-primary transition-colors duration-200">
        <i class="fa-brands fa-square-github"></i>
      </a>
      <a href="mailto:cchloehsieh@gmail.com" class="hover:text-primary transition-colors duration-200">
        <i class="fa-solid fa-envelope"></i>
      </a>
      <a href="https://linkedin.com/in/ccchloe-hsieh" target="_blank" class="hover:text-primary transition-colors duration-200">
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </div>
    <p class="text-sm text-gray-400 mt-2">{{ t('footer.text') }}</p>
  </footer>
</template>
