<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7">
        <h1
          class="font-weight-light text-center"
        >Top 100 Baking Blogs of 2020</h1>

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
              <h2>Featured Baking Blogs</h2>

              <div class="panel panel-info">
              <div class="panel-heading">Dani’s Cookings</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/danis-cookings.jpg" width="125" height="125">Daniela has been always passionate about desserts, which made her create Dani’s Cookings in 2012: a baking blog with consideration of healthy eating. Easy and pretty baked goods, diet dessert options and beautiful photography are the main characteristics of this site. Daniela loves experimenting with different ingredients in order to create all kinds of sweet recipes: from classic cakes to diet friendly options. In 2019 she published her first cookbook named "Healthy Desserts" which teaches the readers how to bake with nutritious ingredients.</p>
            <p>Read more at <a href="https://daniscookings.com/">Dani's Cookings</a>.</p>
            </div>
            </div>  
              
            <div class="panel panel-info">
              <div class="panel-heading">Chocolate Covered Katie</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/chocolate-covered-katie.jpg" width="125" height="125">Katie is the face behind Chocolate Covered Katie, one of the Top 25 most influential food blogs in the US, with 3-6 million visitors each month. She has been featured by The Today Show, Time, CNN, The Food Network, Bon Appétit, Cooking Light, People Magazine, MSN, Yahoo, AOL, and the ABC 5 O’Clock News. A true chocoholic, Katie believes in eating chocolate every single day… at least twice!</p>
            <p>Read more at <a href="http://chocolatecoveredkatie.com/">Chocolate Covered Katie</a>.</p>
            </div>
            </div>  
              
            <div class="panel panel-info">
              <div class="panel-heading">SugarThumb</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/sugar-thumb.jpg" width="125" height="125">Trisha Jones started her blog SugarThumb six years ago when she moved from her native London to Berlin. She loves a good German baked good, but missed sponge cakes and crumbles and cupcakes as well as her mum's Sri Lankan cooking. So, she started baking and cooking everything and sharing it with the world. For savoury recipes from homemade gnocchi to Sri Lankan chicken curry and peach and chocolate crumble to creme caramel, follow Trisha for daily inspiration and unique recipes.</p>
            <p>Read more at <a href="http://sugarthumb.co.uk/">SugarThumb</a>.</p>
            </div>
            </div>
              
            <div class="panel panel-info">
              <div class="panel-heading">suzie sweet tooth</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/suzie-sweet-tooth.jpg" width="125" height="125">Suzie writes with the intent on taking the “fear factor” out of baking and making it fun. She likes to provide a lot of description in her recipes for this reason, in hopes people will step out of their comfort zone in trying a recipe. She’s self described as macaron obsessed and has over 21 macaron recipes on her blog, but she enjoys making a lot of mini desserts and treats as well.</p>
            <p>Read more at <a href="http://suziesweettooth.com/">suzie sweet tooth</a>.</p>
            </div>
            </div>  
              
            <div class="panel panel-info">
              <div class="panel-heading">Baking in a Tornado</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/baking-in-a-tornado.jpg" width="125" height="125">Karen is a former Director of Social Service, Retail Buyer, and SAHM to two boys now adjusting to a semi-empty nest. She shares her thoughts, sense of humor, graphics and unique recipes on her blog.</p>
            <p>Read more at <a href="http://www.bakinginatornado.com/">Baking in a Tornado</a>.</p>
            </div>
            </div> 
              
            <div class="panel panel-info">
              <div class="panel-heading">2 Bliss of Baking</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/2-bliss-of-baking.jpg" width="125" height="125">2 Bliss Of Baking is a treasure trove of healthy recipes rooted in secret artisanal flavours. The blog details the quick recipes, developed with love and local ingredients; alongside stunningly beautiful images. The stepwise guidance with tips and tricks make for delicious home baking. The captivating photography, on the blog, will make you want to bake. Each recipe will handhold you to a delicious bake. </p>
            <p>Read more at <a href="https://2blissofbaking.com/">2 Bliss of Baking</a>.</p>
            </div>
            </div>  
              
            <div class="panel panel-info">
              <div class="panel-heading">My Sweet Mission</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/my-sweet-mission.jpg" width="125" height="125">Heather Carter is a longtime baker, wife, mother, and grandmother (MiMi)
        to two sweet girls and one little guy! She’s also the recipe developer and photographer for My Sweet Mission, which she started in 2012. She has a passionate mission to make your kitchen more delicious with tried and true family-style recipes, helpful kitchen tips, beautiful food gift ideas and more!</p>
            <p>Read more at <a href="https://mysweetmission.com/">My Sweet Mission</a>.</p>
            </div>
            </div>    
              
            <div class="panel panel-info">
              <div class="panel-heading">Pastries Like a Pro</div>
              <div class="panel-body"><p><img style="padding:10px;" class="pull-left" src="https://s3.amazonaws.com/ranked-blogs/pastries-like-a-pro.jpg" width="125" height="125">Helen Fletcher owned a wholesale bakery servicing hotels, restaurants and caterers for 23 years and is currently the pastry chef at one of the most esteemed restaurants in her city. She shares her craft through her blog, Pastries Like a Pro, making all things baking and pastry attainable through step by step photos and clear instructions. Helen's blog features not only recipes but a wealth of information including in-depth discussions of ingredients, technique, and equipment with the belief that understanding more about baking and pastry will lead to overall success.</p>
            <p>Read more at <a href="https://pastrieslikeapro.com/">Pastries Like a Pro</a>.</p>
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
        .doc("baking")
        .collection("baking")
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