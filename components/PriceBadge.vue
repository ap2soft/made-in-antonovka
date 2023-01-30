<template>
    <div
            class="absolute left-4 bottom-4 w-24 h-8 bg-gradient-to-r from-primary to-primary/20 text-white shadow-md px-4 py-2 -skew-x-12"
    >
        <div class="absolute inset-0 left-1/2 -translate-x-1/2 top-0.5">
            <span class="text-xl font-bold">{{ price }}</span>
            <span class="text-sm">₽</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    price: Number,
});
</script>

