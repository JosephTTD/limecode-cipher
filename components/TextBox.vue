<template>
  <div
    class="bg-black flex-initial w-full px-[26px] py-[20px] rounded-[26px] h-[332px] relative"
  >
    <button
      v-if="!editable && parsed"
      @click="copy()"
      class="absolute right-[20px] z-10 flex flex-col items-end"
    >
      <LButton :copy="true" value="copy" />

      <span
        v-if="copied"
        class="px-[13px] mt-[10px] relative top-[-120px] text-white transition ease-in-out duration-1000 block mr-0 py-[8px] bg-opacity-40 bg-black rounded-[30px]"
        >Copied to clipboard</span
      >
    </button>
    <p class="text-white text-[19px] mb-[40px]">{{ title }}</p>
    <textarea
      v-if="editable === true"
      type="text"
      style="resize: none"
      v-model="valueData"
      placeholder="Type here"
      class="h-[70%] text-[19px] font-thin w-full bg-transparent outline-none text-white"
    >
    </textarea>
    <p class="text-[18px] font-thin relative text-white">{{ parsed }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    editable: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    parsed: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      copied: false,
    };
  },
  computed: {
    valueData: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      },
    },
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.parsed);
      this.copied = true;
    },
  },
  watch: {
    copied() {
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },
  },
};
</script>
