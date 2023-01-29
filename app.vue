<template>
    <div class="h-full flex flex-col md:mx-auto md:max-w-lg">
        <TheNavbar class="shrink-0" />

        <main class="grow shrink-0 h-0">
            <NuxtPage />
        </main>

        <TheFooter class="shrink-0" />
    </div>
</template>

<script setup lang="ts">
import TheNavbar from "~/components/TheNavbar.vue";
import TheFooter from "~/components/TheFooter.vue";

const websiteTitle = 'Сделано в Антоновке' // TODO: Add i18n

useHead({
    titleTemplate: (pageTitle) => pageTitle ? `${pageTitle} - ${websiteTitle}` : websiteTitle,
    meta: [
        { name: 'description', content: 'фигурки из дерева, семейные пазлы, деревянные фигурки, оригинальный подарок' },
    ],
})
</script>
