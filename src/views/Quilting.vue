<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7">
        <h1
          class="font-weight-light text-center"
        >Top 110 Quilting Blogs of 2020</h1>

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
              <h2>Featured Quilting Blogs</h2>
    
              <div class="panel panel-info">
                <div class="panel-heading">Tied With a Ribbon</div>
                <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/tied-with-a-ribbon.jpg" width="125" height="125">Jemima Flendt from Tied with a Ribbon writes all about the quilting and sewing adventures in her sewing room and provides all the latest happenings in the studio with the latest pattern releases and tips to make them. As a quilting teacher, Jemima writes many helpful tutorials and articles to help you improve your quilting skills so that you can quilt better and more confidently.</p>
              <p>Read more at <a href="https://www.tiedwitharibbon.com/">Tied With a Ribbon</a>.</p>
              </div>
              </div>   
                
              <div class="panel panel-info">
                <div class="panel-heading">Freemotion by the River</div>
                <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/freemotion-by-the-river.png" width="125" height="125">Connie has been quilting most of her life and begam sharing quilt tutorials and information online in 2011. Connie creates quilt patterns that have full-color diagrams and easy to follow directions that are great for beginner quilters.</p>
              <p>Read more at <a href="http://conniekresin.com/">Freemotion by the River</a>.</p>
              </div>
              </div>    
                
              <div class="panel panel-info">
                <div class="panel-heading">Happy Quilting</div>
                <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/happy-quilting-melissa2.jpg" width="125" height="125">Melissa started quilting as a hobby in 2005 but since starting her blog, Happy Quilting, in 2010 her hobby has turned into a passion. Her passion for quilting has lead to creating her own designs that she shares as tutorials, published works, a pattern line, and even her own book, Irish Chain Quilts. Melissa loves designing and finds inspiration in just about everything and anything.  Melissa, her husband and their five little children live in Cedar City, Utah. To see more of her daily quilting adventures check out her blog Happy Quilting.</p>
              <p>Read more at <a href="http://www.happyquiltingmelissa.com/">Happy Quilting</a>.</p>
              </div>
              </div>
                
              <div class="panel panel-info">
                <div class="panel-heading">During Quiet Time</div>
                <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/during-quiet-time.jpg" width="125" height="125">Amy Friend is a designer of mainly modern paper pieced quilts and author of <a href="https://amzn.to/35dFO4j">Intentional Piecing</a>, Improv Paper Piecing and Petal and Stem. Her blog follows her creative path, showcases new designs and patterns, offers block of the month programs, and block swaps/sewalongs.</p>
              <p>Read more at <a href="http://duringquiettime.com/">During Quiet Time</a>.</p>
              </div>
              </div>     
                
              <div class="panel panel-info">
                <div class="panel-heading">For the Love of Geese</div>
                <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/for-the-love-of-geese.jpg" width="125" height="125">Denise designs paper pieced quilt patterns with no curved piecing, no Y
          seams, and no partial seams. For the love of geese was created and named after her first commercially available pattern two years ago. She now offers patterns for sale in her Etsy shop and free patterns and tutorials on her blog.</p>
              <p>Read more at <a href="http://fortheloveofgeese.com/">For the Love of Geese</a>.</p>
              </div>
              </div>
                
              <div class="panel panel-info">
                <div class="panel-heading">A Quilting Life</div>
                <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/a-quilting-life.jpg" width="125" height="125">A Quilting Life is a blog dedicated to quilting, fabric, and notions for quilters of all levels. Follow along to find all of the latest information in the quilting world, new patterns, and free tutorials.</p>
              <p>Read more at <a href="http://aquiltinglife.com/">A Quilting Life</a>.</p>
              </div>
              </div>
                
              <div class="panel panel-info">
                <div class="panel-heading">TheYvetteRene</div>
                <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/the-yvette-rene.png" width="125" height="125">Yvette is a YouTube quilter who loves to share her makes through sewalongs and tutorials. She loves to open subscription boxes with the help of her four-legged sidekick, Jellybean. Check her out on YouTube, Instagram, Facebook, Twitter, Pinterest and (of course) her blog.
          </p>
              <p>Read more at <a href="http://theyvetterene.com/">TheYvetteRene</a>.</p>
              </div>
              </div>     
                
              <div class="panel panel-info">
                <div class="panel-heading">Sister's Choice Quilts</div>
                <div class="panel-body"><p>Nicole Reed's passion is quiltmaking, although decorating, cooking, entertaining, reading, and matters of style interest her greatly. In her frequent weekly blog posts, she shares her quilting projects, favorite recipes, book reviews, and current favorites with her readers. She encourages dialog between readers in her comments section and often entertains lively discussions and helpful tips from other readers.</p>
              <p>Read more at <a href="http://sisterschoice.typepad.com/">Sister's Choice Quilts</a>.</p>
              </div>
              </div> 
                
              <div class="panel panel-info">
                <div class="panel-heading">Epida Studio</div>
                <div class="panel-body"><p>Epida Studio is the place for those who make beautiful things with needle and thread. Find tutorials, patterns and project inspiration for quilting, pojagi, embroidery, and sewing.</p>
              <p>Read more at <a href="http://epidastudio.com/">Epida Studio</a>.</p>
              </div>
              </div>   
                
              <div class="panel panel-info">
                <div class="panel-heading">Making Scrap Quilts from Stash</div>
                <div class="panel-body"><p>Mary Johnson has been blogging at Making Scrap Quilts from Stash since 2005 with a focus on donation quilting and shares her love of easy scrap quilts with her readers. She maintains <a href="https://maryquilts.com/">a website</a> with brief instructions for her quilts. Mary also blogs about her knitting, crochet, travels and family life.</p>
              <p>Read more at <a href="http://blog.maryquilts.com/">Making Scrap Quilts from Stash</a>.</p>
              </div>
              </div>   
                
              <div class="panel panel-info">
                <div class="panel-heading">Quilts Etc.</div>
                <div class="panel-body"><p>Quilts Etc. is a daily quilt blog about hand quilting started in 2007. Karen has been hand quilting for over 30 years. Besides quilting this blog is a journal of daily life including other things besides quilting such as knitting, crochet, travel and gardening, cooking and family.</p>
              <p>Read more at <a href="http://karensquilting.com/blog/">Quilts Etc.</a>.</p>
              </div>
              </div>    
                
              <div class="panel panel-info">
                <div class="panel-heading">MooseStash Quilting</div>
                <div class="panel-body"><p>Joan's goal is to inspire and entertain you, down the "crazy" quilting road that so many love to travel. Humor and quilting can sooth a soul and she loves combining the two. You will see her in action in 2020, with her 365 Days of Silly Holidays.</p>
              <p>Read more at <a href="http://moosestashquilting.blogspot.com/">MooseStash Quilting</a>.</p>
              </div>
              </div>  
                
              <div class="panel panel-info">
                <div class="panel-heading">Silly Mama Quilts</div>
                <div class="panel-body"><p>Brooke loves to inspire her readers with Fresh and Fun projects! She designs projects sharing with her readers her creative process. Come be inspired!</p>
              <p>Read more at <a href="http://www.sillymamaquilts.com/">Silly Mama Quilts</a>.</p>
              </div>
              </div>
                
              <div class="panel panel-info">
                <div class="panel-heading">Quilty Love</div>
                <div class="panel-body"><p>Quilty Love by Emily Dennis is a modern quilt blog with loads of quilty inspiration, modern quilt patterns, free quilting tutorials and resources for the modern quilter. </p>
              <p>Read more at <a href="http://www.quiltylove.com/">Quilty Love</a>.</p>
              </div>
              </div>   
                
              <div class="panel panel-info">
                <div class="panel-heading">Wedding Dress Blue</div>
                <div class="panel-body"><p>Deanna shares all kinds of scrap quilting tutorials and ideas, including an occasional quiltalong, on her blog--Wedding Dress Blue. She helps her readers learn to love their fabric again and make beautiful quilts from simple shapes.</p>
              <p>Read more at <a href="https://weddingdressblue.wordpress.com/">Wedding Dress Blue</a>.</p>
              </div>
              </div>
                
              <div class="panel panel-info">
                <div class="panel-heading">Lily Pad Quilting</div>
                <div class="panel-body"><p>Lilypadquilting is all about the fun and merriment of quilting, a hobby that has been described as taking perfectly good fabric and cutting it up into pieces, and then sewing it together again! We provide tutorials and inspiration for rookie quilters and for veterans, too! Hope you will join us!</p>
              <p>Read more at <a href="http://lilypadquilting.blogspot.com/">Lily Pad Quilting</a>.</p>
              </div>
              </div>
                
              <div class="panel panel-info">
                <div class="panel-heading">Lucie the Happy Quilter's Blog</div>
                <div class="panel-body"><p>Lucie the Happy Quilter's blog is the perfect blog to visit for a little slice of enthusiasm. Lucie approaches quilt making and life in general in a positive and refreshing way.</p>
              <p>Read more at <a href="https://luciethehappyquilter.com/">Lucie the Happy Quilter's Blog</a>.</p>
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
        .doc("quilting")
        .collection("quilting")
        .onSnapshot(snapshot => {
          const snapData = [];
          snapshot.forEach( doc => {
            snapData.push({
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
          this.meetings = snapData;
        });
      }
    });
  },
  props: ["user", "meetings"]
};
</script>