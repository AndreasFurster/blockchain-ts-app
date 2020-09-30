<template>
    <v-col class="elevation-3">
      <h3>Messages</h3>
       <v-list three-line>
        <template v-for="(item, index) in messages">

          <v-list-item
            :key="index"
            color="red"
          >
            <v-list-item-avatar>
              <!-- <v-img :src="item.avatar"></v-img> -->
              <v-img :src="require('../assets/avatar.svg')"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.userId"></v-list-item-title>
              <v-list-item-subtitle v-html="item.message"></v-list-item-subtitle>
            </v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-tooltip bottom color="#000">
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon :color="item.valid ? 'green' : 'red'" v-bind="attrs" v-on="on">mdi-information</v-icon>
                    </template>
                    <span>
                      Index: {{ item.index }}<br>
                      Hash: {{ item.hash }}<br>
                      Generated hash: {{ item.generatedHash }}<br>
                      Hash match: {{ item.hashValid }}<br>
                      PreviousHash: {{ item.previousHash }}<br>
                      Next hash match: {{ item.hashChainValid }}<br>
                      Signature: {{ item.signature }}<br>
                    </span>
                  </v-tooltip>
                </v-btn>
              </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </v-col>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import IMessage from '../models/interfaces/IMessage';
  import Message from '../models/message'
  import BlockChainHelper from '../helpers/BlockChainHelper'
  const bc = new BlockChainHelper();

  @Component
  export default class Chatbox extends Vue {
    
    publicKey: string = "";
    messages: IMessage[] = [];

    created() {
      this.updateMessages()
      // Update messages every 1 second
      setInterval(this.updateMessages, 5000)
    }

    updateMessages() {


      fetch(`${process.env.VUE_APP_API_ENDPOINT}/messages`)
        .then(res => res.json())
        .then(messages => {
          this.messages = []
          for (let i = 0; i < messages.length; i++) {
            const messageObject: IMessage = messages[i];
            const { userId, message, index, hash, previousHash, signature } = messageObject
            const generatedHash = bc.getHashForBlock(userId, message, index, previousHash, signature)
            messageObject.hashValid = generatedHash === hash

            // If there is a next block, check it's previousHash
            let nextBlock: IMessage = messages[i + 1]
            if(nextBlock) {
              messageObject.hashChainValid = nextBlock.previousHash === generatedHash
            }
            else{
              messageObject.hashChainValid = true
            }

            messageObject.hash = messageObject.hash.substring(0, 8)
            messageObject.previousHash = messageObject.previousHash.substring(0, 8)
            messageObject.generatedHash = generatedHash.substring(0, 8)
            messageObject.signature = messageObject.signature.substring(0, 8)

            messageObject.valid = messageObject.hashValid && messageObject.hashChainValid

            this.messages.push(messageObject)
          }
        })
    }
  }
</script>