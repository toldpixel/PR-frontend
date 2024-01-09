<template>
  <router-link to="/">Home</router-link>
  <div class="container">
    <div class="form-enter">
      <ProjectForm @update-text="handleUpdate"></ProjectForm>
    </div>
    <div class="output">
      <h1>Preview</h1>
      <div class="preview" v-html="text"></div>
    </div>
    
  </div>
</template>

<script>
import ProjectForm from './ProjectForm.vue'
export default {
  name: 'CreateProject',
  components: {
    ProjectForm,
  },
  data() {
    return {
      text: ''
    };
  },
  methods: {
    handleUpdate(newText) {
      this.text = newText;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
}

.form-enter {
  width: 50%;
  margin: 10px;
}

.output {
  width: 50%;
}
.preview {
 
  height: 400px;
  border: 1px solid #ccc;
  margin: auto 5px;
}
</style>
