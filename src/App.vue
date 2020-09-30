<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
          <h2>Blockchain Chat</h2>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/AndreasFurster/blockchain-ts"
        target="_blank"
        text
      >
        <span class="mr-2">Repository</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
        <v-container>
          <v-row>
            <v-col cols="6">
              <Chatbox ref="chatbox" />
            </v-col>
            <v-col cols="6">
              <SendMessageBox @send-message="updateMessages" />
            </v-col>
          </v-row>
        </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Chatbox from './components/Chatbox.vue';
import SendMessageBox from './components/SendMessageBox.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
    Chatbox,
    SendMessageBox,
  },

  data: () => ({
    //
  }),

  methods: {
    updateMessages() {
      let chatbox = this.$refs.chatbox as Chatbox
      chatbox.updateMessages();
    }
  }
});
</script>
