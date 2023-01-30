<template>
    <div class="h-full">
        <h1 class="text-center font-semibold uppercase text-xl text-secondary">
            Фигурки-пазлы из дерева
        </h1>

        <div class="px-2">
            <p class="mt-2 text-secondary/70 text-center">
                Ручная работа. Символизируют семью.
                <br class="md:hidden">
                Количество детишек зависит от вас.
                <br class="md:hidden">
                Эскизы &mdash; как мои, так и ваши.
                <br>
                Оригинальный подарок к любому празднику.
            </p>
        </div>
        <div class="mt-4 h-72 md:h-96 relative">
            <Splide
                    :options="sliderOptions"
                    tag="section"
                    :has-track="false"
                    class="h-full"
                    aria-label="Образцы готовых фигурок"
            >
                <SplideTrack class="h-full">
                    <SplideSlide v-for="item in items">
                        <div class="h-full bg-center bg-no-repeat bg-cover backdrop-blur-sm" :style="{
                            'background-image': `url(/images/${item.filename})`
                        }">
                            <div class="relative h-full backdrop-blur-lg">
                                <img
                                        class="object-contain w-full h-full"
                                        :src="`/images/${item.filename}`"
                                        :alt="item.description_ru"
                                >

                                <PriceBadge :price="item.price" />

                                <div
                                        class="absolute right-4 bottom-4 bg-white text-primary text-sm font-bold opacity-80 rounded-full shadow-md px-3 py-4"
                                >
                                    №{{ item.id }}
                                </div>

                                <div class="absolute top-4 right-0 flex flex-col items-end gap-2">
                                    <BestsellerBadge v-if="item.bestseller" />
                                    <NewBadge v-if="item.new" />
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </SplideTrack>

                <div class="splide__arrows">
                    <button class="splide__arrow splide__arrow--prev absolute left-0 top-1/2 translate-x-2 -translate-y-1/2 text-primary text-opacity-50 backdrop-blur rounded-full shadow p-2 transition hover:text-opacity-100 hover:backdrop-blur-sm md:-translate-x-2/3">
                        <ChevronLeftIcon class="h-10 w-10" />
                    </button>
                    <button class="splide__arrow splide__arrow--next absolute right-0 top-1/2 -translate-x-2 -translate-y-1/2 text-primary text-opacity-50 backdrop-blur rounded-full shadow p-2 transition hover:text-opacity-100 hover:backdrop-blur-sm md:translate-x-2/3">
                        <ChevronRightIcon class="h-10 w-10" />
                    </button>
                </div>
            </Splide>
        </div>
        <div class="mt-4 px-4">
            <p class="text-sm text-center">
                Чтобы сделать заказ, отправьте номер фигурки мне в WhatsApp или Telegram.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import '@splidejs/vue-splide/css/core';
import items from 'assets/data/examples.json';

useHead({
    title: 'Фигурки из дерева',
})

const sliderOptions: Options = ref({
    type: 'loop',
    autoplay: true,
    pauseOnHover: true,
    paginationKeyboard: true,
})
</script>
