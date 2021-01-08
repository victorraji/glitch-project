<template>
  <div class="relative h-screen">
    <div class="grid text-white grid-cols-2">
      <div class="h-screen bg-dark-pink">
        <div class="flex flex-col justify-between h-full items-end">
          <div class="flex mt-12 mr-12">{{ first_name }}</div>
          <div class="flex mb-12 mr-20">
            <div class="cursor-pointer captalize">HOME</div>
            <div class="cursor-pointer captalize ml-20">ABOUT</div>
          </div>
        </div>
      </div>
      <div class="h-screen bg-pink-1">
        <div class="flex flex-col justify-between h-full">
          <div class="flex mt-12 ml-12">{{ last_name }}</div>
          <div class="self-end flex flex-col pr-6">
            <div @click="instagramPage" class="mb-6 cursor-pointer">
              <i class="fab fa-instagram fa-2x"></i>
            </div>
            <div @click="twitterPage" class="mb-6 cursor-pointer">
              <i class="fab fa-twitter-square fa-2x"></i>
            </div>
            <div @click="snapchatPage" class="mb-6 cursor-pointer">
              <i class="fab fa-snapchat-square fa-2x"></i>
            </div>
            <div @click="sendEmail" class="mb-6 cursor-pointer">
              <i class="fas fa-envelope-square fa-2x"></i>
            </div>
          </div>
          <div class="flex mb-12 m-20">
            <div class="cursor-pointer captalize text mr-20">GALLERY</div>
            <div class="cursor-pointer captalize">CONTACT</div>
          </div>
        </div>
      </div>
    </div>
    <div class="inset-0 flex justify-center m-32 items-center absolute">
      <div class="shadow-2xl rounded-lg">
        <img alt="glitch" src="../assets/glitch.png" />
      </div>
    </div>
    <div
      class="flex absolute bg-transparent mx-wide inset-x-0 justify-center bottom-0 h-24"
    >
      <div><img alt="glitch" src="../assets/glitchCircle.png" /></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      first_name: "",
      last_name: "",
      social_media: {},
    };
  },
  mounted() {
    this.getDetailsFromApi();
  },

  methods: {
    async getDetailsFromApi() {
      try {
        const response = await axios.get("https://hirng-x2021.glitch.me/api");
        let name = response.data.name;
        this.first_name = name.substr(0, name.indexOf(" "));
        this.last_name = name.substr(name.indexOf(" ") + 1);
        this.social_media = response.data.social_media;
      } catch (error) {
        console.error(error);
      }
    },
    sendEmail() {
      // window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
      window.open("mailto:"+this.social_media.email, "_blank");
    },
    instagramPage() {
      window.open(
        "http://instagram.com/" + this.social_media.instagram,
        "_blank"
      );
    },
    twitterPage() {
      window.open("http://twitter.com/" + this.social_media.twitter, "_blank");
    },
    snapchatPage() {
      window.open(
        "http://snapchat.com/" + this.social_media.snapchat,
        "_blank"
      );
    },
  },
};
</script>
