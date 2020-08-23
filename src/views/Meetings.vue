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
              <h2>Featured Kindergarten Blogs</h2>

              <div class="panel panel-info">
              <div class="panel-heading">Mrs. Richardson's Class</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/mrs-richardsons-class.jpg" width="125" height="125">Mrs. Richardson's Class loves all things literacy. Amanda is a K-1 teacher and professional development provider who is passionate about making lessons your students will love and that are easy to implement. Teaching you to navigate your way through balanced literacy brings her great joy. Her desire is to give you the tools you need to move your students forward.</p>
            <p>Read more at <a href="https://www.mrsrichardsonsclass.com/">Mrs. Richardson's Class</a>.</p>
            </div>
            </div>        
              
            <div class="panel panel-info">
              <div class="panel-heading">Kindergarten's 3 R's</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/kindergartens-3-rs.jpg" width="125" height="125">Michaele Sommerville shares respect, resources and the occasional rant from the world of kindergarten as she advocates for developmentally appropriate practice, reflective self-assessment and effective pedagogy via her blog. A fan of the perspective of kindergarteners themselves, she also loves to share stories and humor from her classroom. Mrs. Sommerville is appreciative of all that her "Super Star" students and their families have taught her over the past twenty-four years, and looks forward to continuing her adventures in education for many years to come.</p>
            <p>Read more at <a href="http://kidney-garden.blogspot.com/">Kindergarten's 3 R's</a>.</p>
            </div>
            </div>
              
            <div class="panel panel-info">
              <div class="panel-heading">Mrs. Wills Kindergarten</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/mrs-wills-kindergarten.jpg" width="125" height="125">Deedee Wills writes about all things kindergarten and first grade. She enjoys mentoring teachers as she helps them find practical ways to improve their teaching practices while still bringing joy into the classroom. Additionally, Deedee provides on-going professional development to teachers around the world through webinars and online training.</p>
            <p>Read more at <a href="https://mrswillskindergarten.com/">Mrs. Wills Kindergarten</a>.</p>
            </div>
            </div>    
              
            <div class="panel panel-info">
              <div class="panel-heading">Sharing Kindergarten</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/sharing-kindergarten.jpg" width="125" height="125">Mary is an enthusiastic and passionate kindergarten teacher from Georgia with 15 years of experience. Mary loves to sharing engaging ideas, hands-on activities, and rigorous content that have worked with her own kindergartners through her website, Sharing Kindergarten. Mary is committed to instilling passion in teachers because she believes that passion is truly the secret to increasing learning and achievement.</p>
            <p>Read more at <a href="https://sharingkindergarten.com/blog/">Sharing Kindergarten</a>.</p>
            </div>
            </div>   
              
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
              
            <div class="panel panel-info">
              <div class="panel-heading">Kindergarten Korner</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/kindergarten-korner.jpg" width="125" height="125">Casey has been teaching kindergarten and loving it since 2006. She has turned her passion for teaching into a successful blogging business focused on inspiring fellow educators. Kindergarten Korner is a blog dedicated to providing teachers and homeschooling parents with helpful resources, classroom decor and organization ideas, product recommendations, and much more.</p>
            <p>Read more at <a href="http://www.kindergartenkorner.com/">Kindergarten Korner</a>.</p>
            </div>
            </div>  
              
            <div class="panel panel-info">
              <div class="panel-heading">Mrs. Myers' Kindergarten</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://ranked-blogs.s3.amazonaws.com/mrs-meyers-kindergarten.jpg" width="125" height="125">In this blog, Darla Myers shares how both the academic standards and 21st century learning skills can be taught and learned through a project/inquiry and play-based learning environment. See how she use the environment of the classroom and the student’s interests to keep them excited and engaged in learning as they use the skills they learn in authentic ways.</p>
            <p>Read more at <a href="http://mrsmyerskindergarten.blogspot.com/">Mrs. Myers' Kindergarten</a>.</p>
            </div>
            </div>      
              
            <div class="panel panel-info">
              <div class="panel-heading">Kindermomma</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/kindermomma.jpg" width="125" height="125">Kindermomma offers free worksheets and printables that are easy to download. Teachers and parents will love the entertaining blogs and free resources.</p>
            <p>Read more at <a href="https://kindermomma.com/blog/">Kindermomma</a>.</p>
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
  },
  props: ["user", "meetings"]
};
</script>