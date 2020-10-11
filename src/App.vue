<template>
  <div id="app">
    <Navigation 
      :user="user" 
      @logout="logout"
    />
    <router-view 
      class="container" 
      :user="user" 
      :meetings="meetings"
      @logout="logout"
      @addMeeting="addMeeting"
      @upVote = "upVote"
    />
  </div>
</template>


<script>
import Navigation from "@/components/Navigation.vue";
import Firebase from "firebase";
import db from "./db.js";  // eslint-disable-line

export default {
  name: "App",
  data: function() {
    return {
      user: null,
      meetings: []
    }
  },
  methods: {
    logout: function() {
      Firebase.auth()
      .signOut()
      .then( () => {
        this.user = null;
        this.$router.push("login");
      });
    },
    addMeeting: function(payload) {
      db.collection("users")
      .doc(this.user.uid)
      .collection("meetings")
      .add({
        name: payload,
        createdAt: Firebase.firestore.FieldValue.serverTimestamp()
      })
    },
    upVote: function(payload) {
      db.collection("topic")
      .doc("baking")
      .collection("baking")
      .doc(payload)
      .update({
        votes: Firebase.firestore.FieldValue.increment(1)  // increment vote number by 1
      })
    } 
  },
  /* mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;

        db.collection("topic")
        .doc("kindergarten")
        .collection("kindergarten")
        .onSnapshot(snapshot => {
          snapshot.forEach( doc => {
            this.meetings.push({
              id: doc.id,
              name: doc.data().name,
              mainUrl: doc.data().mainUrl,
              pageAuthority: doc.data().pageAuthority,
              linkingSites: doc.data().linkingSites,
              votes: doc.data().votes,
              articleUrl: doc.data().articleUrl,
              articleName: doc.data().articleName,
              twitterName: doc.data().twitterName,
              domainAuthority: doc.data().domainAuthority,
              twitterFollowers: doc.data().twitterFollowers
            });
          });
        });
      }
    });
  }, */

  components: {
    Navigation
  }
};
</script>


<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
</style>
