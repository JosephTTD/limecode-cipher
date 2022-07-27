<template>
  <div class="px-[20px] lg:px-[85px]">
    <Navbar />
    <div class="mt-[73px]">
      <div class="flex space-x-[15px] mb-[40px] justify-center">
        <button @click="showDecode()">
          <LButton :decode="true" :active="activeDecode" value="Decode" />
        </button>
        <button @click="showEncode()">
          <LButton :encode="true" :active="activeEncode" value="Encode" />
        </button>
      </div>
      <component :is="current"></component>
    </div>
  </div>
</template>

<script>
import Decoder from "../components/Decoder.vue";
import Encoder from "../components/Encoder.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      current: "Decoder",
    };
  },
  components: {
    Decoder,
    Encoder,
  },
  computed: {
    activeEncode() {
      let encode = this.current === "Encoder" ? true : false;
      return encode;
    },
    activeDecode() {
      let decode = this.current === "Decoder" ? true : false;
      return decode;
    },
  },
  mounted() {
    if(localStorage.current) {
      this.current = localStorage.current
    }
  },
  watch: {
    current(value) {
      localStorage.current = value
    },
  },
  methods: {
    showEncode() {
      if (this.current !== "Encoder") {
        this.current = "Encoder";
      }
    },
    showDecode() {
      if (this.current !== "Decoder") {
        this.current = "Decoder";
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Sora";
  src: url("../assets/fonts/sora-100.woff2") format("woff2");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Sora";
  src: url("../assets/fonts/sora-300.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Sora";
  src: url("../assets/fonts/sora-800.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: "Sora", sans-serif;
}
</style>
