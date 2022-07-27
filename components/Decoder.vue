<!-- Please remove this file from your project -->
<template>
  <div>
    <div
      class="flex lg:flex-row flex-col space-y-[10px] lg:space-y-0 lg:space-x-[10px] justify-center items-center lg:px-[45px]"
    >
      <TextBox :editable="true" title="Encoded Message" :value.sync="code" />
      <button type="submit" @click="convert()" class="absolute !ml-0 z-10">
        <Convert />
      </button>
      <TextBox title="Message" :parsed="decodedMessage" />
    </div>
    <p v-if="feedback" class="text-center text-red-500 mt-[30px]">
      {{ feedback }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      decodedMessage: "",
      code: "",
      error: "",
    };
  },
  computed: {
    feedback() {
      if (this.decodedMessage) {
        return false;
      } else {
        return this.error;
      }
    },
  },
  methods: {
    convert() {
      const url =
        `https://${process.env.decodeKey}.lambda-url.eu-west-2.on.aws/`;
      let initial = this.code.split(" ");
      const arrOfNum = initial.map((str) => {
        return Number(str);
      });
      axios
        .post(`${url}/?code=${JSON.stringify(arrOfNum)}`)
        .then((response) => {
          this.error = "";
          this.decodedMessage = response.data;
        })
        .catch((error) => {
          this.decodedMessage = "";
          this.error = error.response.data;
        });
    },
  },
  mounted() {
    if (localStorage.code) {
      this.code = localStorage.code;
    }
  },
  watch: {
    code(value) {
      localStorage.code = value;
    },
  },
};
</script>
