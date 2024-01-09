<template>
    <router-link to="/">back</router-link>
    <h1>{{ project.title }}</h1>
    <div class="output">
    <h4>Description</h4>
    <div>{{ project.description }}</div>
    <h4>Categories</h4>
    <div v-for="(projecttag, index) in projectTags" :key="index">
      {{ projecttag.tagname }}
    </div>
    <h4>Difficulty</h4>
    <div>{{ project.levelname }}</div>
    <h4>Programminglanguage</h4>
    <div>{{ project.languagename }}</div>
    <h4>Created at</h4>
    <div>{{ project.createdat }}</div>
    </div>
</template>
  
  <script>
  import { 
      fetchSingleProjectDetails,
      fetchProjectTags
    } from '../../api/fetchprojects'
  export default {
    name: 'ShowProject',
    data() {
        return {
            project: {},
            projectTags: {},
        };
    },
    
    async mounted() {  
      this.project = await fetchSingleProjectDetails(this.$route.params.id);
      this.projectTags = await fetchProjectTags(this.$route.params.id);
    },
    methods: {   
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  