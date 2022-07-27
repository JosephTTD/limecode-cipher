<template>
  <div>
    <div
      class="flex lg:flex-row flex-col space-y-[10px] lg:space-y-0 lg:space-x-[10px] justify-center items-center lg:px-[45px]"
    >
      <TextBox :editable="true" title="Message" :value.sync="message" />
      <button type="submit" @click="convert()" class="absolute !ml-0 z-10">
        <Convert />
      </button>
      <TextBox title="Encoded message" :parsed="encodedMessage" />
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
      encodedMessage: "",
      message: "",
      error: "",
    };
  },
  computed: {
    feedback() {
      if (this.encodedMessage) {
        return false;
      } else {
        return this.error;
      }
    },
  },
  methods: {
    convert() {
      const url =
        `https://${process.env.encodeKey}.lambda-url.eu-west-2.on.aws/`;
      axios
        .post(`${url}/?message=${this.message}`)
        .then((response) => {
          this.error = "";
          this.encodedMessage = response.data;
        })
        .catch((error) => {
          this.encodedMessage = "";
          this.error = error.response.data;
        });
    },
  },
  mounted() {
    if (localStorage.message) {
      this.message = localStorage.message;
    }
  },
  watch: {
    message(value) {
      localStorage.message = value;
    },
  },
};
</script>
