<template>
    <v-col class="elevation-3">
      <h3>Send message</h3>

      <v-alert 
        v-model="errorVisible"
        dense
        type="error"
        dismissible>
        {{ error }}
      </v-alert>

      <v-textarea 
        v-model="privateKey"
        label="Private key (not send to server)"
        outlined
      ></v-textarea>

      <!-- <v-textarea 
        v-model="publicKey"
        label="Public key (send to server)"
        outlined
      ></v-textarea> -->
      
      <v-text-field 
        v-model="signature" 
        label="Signature"
        outlined />

      <v-text-field 
        v-model="userId" 
        label="User ID"
        outlined />

      <v-text-field 
        v-model="message" 
        label="Message"
        outlined />

      <v-btn
        @click="sendMessage"
        color="primary">
          Send message
        </v-btn>

      <v-btn
        @click="generateSignature">
          Generate Signature
      </v-btn>

    </v-col>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import BlockChainHelper from '../helpers/BlockChainHelper'
  const bc = new BlockChainHelper();

  @Component
  export default class SendMessageBox extends Vue {
    
    privateKey: string = "";
    publicKey: string = "";
    userId: string = "";
    signature: string = "";
    message: string = "";

    errorVisible: boolean = false
    error: string = ""

    generateSignature() {
      this.errorVisible = false
      this.error = ""

      try {
        this.signature = bc.generateSignature(this.privateKey, this.message);
      } catch (error) {
        this.errorVisible = true
        this.error = error
      }
    }

    sendMessage() {
      var headers = new Headers()
      headers.append("Content-Type", "application/json")

      if(!this.signature) {
        this.errorVisible = true
        this.error = "Signature is required!"
      }

      if(!this.userId) {
        this.errorVisible = true
        this.error = "User ID is required!"
      }

      var raw = JSON.stringify({
        "message": this.message,
        "signature": this.signature,
        "userId": this.userId,
      })

      var requestOptions = {
        method: 'POST',
        headers: headers,
        body: raw
      }

      fetch(`${process.env.VUE_APP_API_ENDPOINT}/messages`, requestOptions)
        .then(response => {
          if(response.status == 401) {
            this.errorVisible = true
            this.error = "Invalid signature! (Checked on server)"
            throw new Error(response.status.toString());
          }

          if(response.status !== 200) {
            throw new Error(response.status.toString());
          }

          return response.json()
        })
        .then(result => {
          this.message = ""
          this.$emit('send-message')
        })
        .catch(error => {
          console.log(`Unknown error: ${error}`)
        })
    }
  }
</script>
