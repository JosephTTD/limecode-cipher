<template>
  <div
    class="bg-black flex-initial w-full px-[26px] py-[20px] rounded-[26px] h-[332px] relative"
  >
    <button v-if="!editable" @click="copy()" class="absolute right-[30px]">
      <LButton :copy="true" value="copy" />
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
    <p class="text-[18px] text-white">{{ parsed }}</p>
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
    }
  }
};
</script>
