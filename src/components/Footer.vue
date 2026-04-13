<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <footer id="contact" class="py-10 text-center border-t">
    <p>{{ t('footer.contact') }}: cchloehsieh@gmail.com</p>
    <p class="text-sm text-gray-400 mt-2">{{ t('footer.text') }}</p>
  </footer>
</template>
