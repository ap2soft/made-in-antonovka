<template>
    <footer class="flex items-center justify-center px-4">
        <div class="border-t border-gray-300 w-full py-6">
            <p class="text-xs text-secondary text-center">
                <a
                        href="https://made-in-antonovka.ru"
                        class="text-secondary text-opacity-75 text-sm hover:underline"
                >made-in-antonovka.ru</a>
                {{ yearsLabel }}
            </p>
        </div>
    </footer>
</template>

<script setup>
const startYear = 2023
const currentYear = new Date().getFullYear()
const yearsLabel = currentYear === startYear ? startYear : `${startYear} - ${currentYear}`
</script>
