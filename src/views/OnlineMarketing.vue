<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7">
        <h1
          class="font-weight-light text-center"
        >Top Online Marketing Blogs of 2020</h1>

              <div class="container">       
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Votes</th>
                      <th>Name</th>
                      <th>Page Authority</th>
                      <th>Domain Authority</th>
                      <th>Linking Sites</th>
                      <th>Twitter Name</th>
                      <th>Twitter Followers</th>
                      <th>Featured Article</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in meetings"
              :key="item.id">
                      <td>{{index+1}}</td>
                      <td><img @click="$emit('upVote', item.id)" src="https://cool-marketing-stuff.s3.amazonaws.com/thumbs-up.png"> {{item.votes}}</td>
                      <td><a v-bind:href="item.mainUrl">{{item.name}}</a></td>
                      <td>{{item.pageAuthority}}</td>
                      <td>{{item.domainAuthority}}</td>
                      <td>{{item.linkingSites}}</td>
                      <td>{{item.twitterName}}</td>
                      <td>{{item.twitterFollowers}}</td>
                      <td><a v-bind:href="item.articleUrl">{{item.articleName}}</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
  
              <br>
              <h2>Featured Online Marketing Blogs</h2>

              <div class="panel panel-info">
              <div class="panel-heading">Marie Haynes Consulting</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/marie-haynes-consulting.jpg" width="125" height="125">Dr. Mary Haynes was a veterinarian who started doing SEO as a hobby. Over time she developed her skills and knowledge and is now the owner of a growing SEO agency that specializes in helping companies audit their links and recover from penalties. Her blog shares in depth analysis and explanations of important topics from mobile-first indexing to link penalty recovery.  
        </p>
            <p>Read more at <a href="https://www.mariehaynes.com/">Marie Haynes Consulting</a>.</p>
            </div>
            </div> 
              
            <div class="panel panel-info">
              <div class="panel-heading">Matthew Woodward</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/matthew-woodward.png" width="125" height="125">Matthew Woodward shares actionable SEO tips and resources for growing traffic to your blog. He also publishes tutorials on how to implement specific SEO tactics and how to get the most out of the top SEO tools.</p>
            <p>Read more at <a href="https://www.matthewwoodward.co.uk/">Matthew Woodward</a>.</p>
            </div>
            </div>   





      </div>
    </div>


  </div>
</template>

<script>
//import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import Firebase from "firebase";
import db from "../db.js";  // eslint-disable-line
export default {
  name: "meetings",
  data: function() {
    return{
      meetingName: null
    };
  }, 
  components: {
    //FontAwesomeIcon
  },
  methods: {
    handleAdd: function() {
      this.$emit("addMeeting", this.meetingName);
      this.meetingName = null;
      this.$refs.meetingName.focus();
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;

        db.collection("topic")
        .doc("online-marketing")
        .collection("online-marketing")
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
  },
  props: ["user", "meetings"]
};
</script>