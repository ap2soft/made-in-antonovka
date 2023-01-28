<template>
    <div class="flex flex-col min-h-screen md:mx-auto md:max-w-lg">
        <Navbar />

        <main class="flex-1">
            <NuxtPage />
        </main>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

const websiteTitle = 'Сделано в Антоновке' // TODO: Add i18n

useHead({
    titleTemplate: (pageTitle) => pageTitle ? `${pageTitle} - ${websiteTitle}` : websiteTitle,
    meta: [
        { name: 'description', content: 'Фигурки из дерева, семейные пазлы, подарок.' },
    ],
})
</script>
