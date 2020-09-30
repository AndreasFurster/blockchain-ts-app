<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>Blockchain Chat</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/AndreasFurster/blockchain-ts"
        target="_blank"
        text
      >
        <span class="mr-2">Server repo</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn
        href="https://github.com/AndreasFurster/blockchain-ts-app"
        target="_blank"
        text
      >
        <span class="mr-2">App repo</span>
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
import Chatbox from './components/Chatbox.vue';
import SendMessageBox from './components/SendMessageBox.vue';

export default Vue.extend({
  name: 'App',

  components: {
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
