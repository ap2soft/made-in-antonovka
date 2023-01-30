<template>
    <footer class="flex items-center justify-between gap-4 text-sm px-4 py-4">
        <div class="text-gray-500">
            <span>&copy; {{ yearsLabel }}.</span>
            <a href="#" class="ml-2 underline">made-in-antonovka.ru</a>
        </div>
        <div class="flex gap-4">
            <a href="https://wa.me/79051763311" class="" target="_blank">
                <WhatsAppIcon class="h-8" />
            </a>
            <a href="https://t.me/andreich1980/" class="" target="_blank">
                <TelegramIcon class="h-8" />
            </a>
        </div>
    </footer>
</template>

<script setup lang="ts">
import WhatsAppIcon from "~/components/icons/WhatsAppIcon.vue";
import TelegramIcon from "~/components/icons/TelegramIcon.vue";

const startYear: number = 2023
const currentYear: number = new Date().getFullYear()
const yearsLabel: string = currentYear === startYear ? String(startYear) : `${startYear} - ${currentYear}`
</script>
