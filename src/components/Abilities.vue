<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t, tm } = useI18n();

const abilities = computed(() => tm('about.abilities'));
</script>

<template>
  <section id="about" class="py-20 px-6 bg-gray-50">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">{{ t('about.title') }}</h2>

      <div class="grid md:grid-cols-2 gap-5">
        <div v-for="(item, index) in abilities" :key="index" class="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition">
          <div class="w-8 shrink-0 pt-0.5">
            <i :class="['fa-fw text-primary text-xl', item.icon]"></i>
          </div>
          <div>
            <h3 class="font-semibold text-sm mb-1">{{ item.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
