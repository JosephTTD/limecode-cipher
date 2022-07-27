<!-- Please remove this file from your project -->
<template>
  <div class="flex cursor-pointer px-[15px] py-[6px] w-[fit-content] bg-white rounded-[30px] items-center border " :class="active === true ? 'border-blue' : 'border-grey-300'">
    <div>
        <Encode v-if="encode === true" :class="activeIcon"/>
        <Decode v-if="decode === true" :class="activeIcon" />
        <Copy v-if="copy === true" />
    </div>
    <span class="border-l h-[24px] mx-[8px] border-grey-300"></span>
    <p class="text-[19px] font-normal" :class="active === true ? 'text-blue' : ''">{{value}}</p>
  </div>
</template>

<script>
import Encode from "./button-svg/Encode.vue";
import Decode from "./button-svg/Decode.vue";
import Copy from "./button-svg/Copy.vue";
export default {
    props: {
        value: {
            type: String,
            default: "",
        },
        active: {
            type: Boolean,
            default: false,
        },
        encode: {
            type: Boolean,
            default: false,
        },
        decode: {
            type: Boolean,
            default: false,
        },
        copy: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        activeIcon() {
            return this.active === true ? 'text-blue' : ''
        }
    },
    methods: {},
    components: { Encode, Decode, Copy },
};
</script>
