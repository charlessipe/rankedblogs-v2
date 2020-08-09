<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7">
        <h1
          class="font-weight-light text-center"
        >Top 55 Kindergarten Blogs of 2020</h1>

        <p>Ranked Blogs features our top kindergarten blogs based on statistics and votes by our community.</p>

              <div class="container">       
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Votes</th>
                      <th>Name</th>
                      <th>Page Authority</th>
                      <th>Linking Sites</th>
                      <th>Last Article</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in meetings"
              :key="item.id">
                      <td>{{index+1}}</td>
                      <td><img @click="$emit('upVote', item.id)" src="https://cool-marketing-stuff.s3.amazonaws.com/thumbs-up.png"> {{item.votes}}</td>
                      <td><a v-bind:href="item.mainUrl">{{item.name}}</a></td>
                      <td>{{item.pageAuthority}}</td>
                      <td>{{item.linkingSites}}</td>
                      <td>{{item.articleUrl}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
  
              <br>
              <h2>Featured Kindergarten Blogs</h2>

      <div class="panel panel-info">
      <div class="panel-heading">Time 4 Kindergarten</div>
      <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/time-4-kindergarten.png" width="125" height="125">Time 4 Kindergarten is the sole creation of an alphabet singing, storybook reading kindergarten teacher. Tiffani loves creating resources for her second language students. Teaching literacy and math are her passion along with an occasional mani-pedi and Starbucks.
</p>
    <p>Read more at <a href="https://www.time4kindergarten.com/">Time 4 Kindergarten</a>.</p>
    </div>
    </div>  
      
    <div class="panel panel-info">
      <div class="panel-heading">Kreative in Life</div>
      <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/kreative-in-life.jpg" width="125" height="125">Crystal Radke is an educational leader, speaker, and best selling author. She writes the popular blog, Kreative in Life for parents and early childhood educators to encourage and support children’s learning in and out of the classroom. Kreative in Life will help you teach engaging lessons and create exciting experiences for your young learners.</p>
    <p>Read more at <a href="https://kreativeinlife.com/">Kreative in Life</a>.</p>
    </div>
    </div>   
      
    <div class="panel panel-info">
      <div class="panel-heading">From the Pond</div>
      <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/from-the-pond.jpg" width="125" height="125">A blog From the Pond features bright and happy activities for the early years classroom. Mel Lloyd, an Early Childhood teacher since 2001 shares her passion for early math, literacy and creativity, sharing ideas and resources with teachers. The blog aims to showcase how concept-development can be facilitated with the visual-engagement within the printable activities and resources designed by Mel.</p>
    <p>Read more at <a href="https://www.fromthepond.com/">From the Pond</a>.</p>
    </div>
    </div>





      </div>
    </div>


  </div>
</template>
<script>
//import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
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
  props: ["user", "meetings"]
};
</script>