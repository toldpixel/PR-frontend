<template>
    <router-link to="/new-project">Create New</router-link>
    <div v-for="project in projects" :key="project.projectid" >
        {{ project.title }}
        <div>
            [<router-link :to="`/show-project/${project.projectid}`">view</router-link>]
            <button @click="deleteProjectData(project.projectid)">delete</button>
            [<router-link :to="`/edit-project/${project.projectid}`">edit</router-link>]
        </div>
    </div>
</template>
  
  <script>
  import {fetchProjects, deleteProject}  from '../api/fetchdashboard';
  export default {
        name: 'AdminDashboard',
        data() {
            return {
                projects: [],
            };
        },
        async mounted() {
            this.projects = await fetchProjects();
        },
        methods: {
            async deleteProjectData(id) {
                this.projects = await deleteProject(id)
            }
        },
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  