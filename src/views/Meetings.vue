<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7">
        <h1
          class="font-weight-light text-center"
        >Top Kindergarten Blogs</h1>

              <div class="container">       
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Page Authority</th>
                      <th>Linking Sites</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in meetings"
              :key="item.id">
                      <td>{{item.name}}</td>
                      <td>{{item.mainUrl}}</td>
                      <td>{{item.pageAuthority}}</td>
                      <td>{{item.linkingSites}}</td>
                    </tr>
                  </tbody>
                </table>
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