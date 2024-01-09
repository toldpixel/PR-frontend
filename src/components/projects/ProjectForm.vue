<template>
    <form @submit.prevent="formSubmit">
      <!-- Form fields go here -->
      
      <label for="title">Project Title:</label>
      <div>
        <input type="text" v-model="formData.title" placeholder="Title" id="title">
      </div>
      <label for="description">Project Description:</label>
      <div>
        <textarea @input="updateText" v-model="formData.description" placeholder="Description" id="description" name="description" class="description-textarea"></textarea>
      </div>
      <!-- Add other fields as needed -->
      <label for="difficulty">Difficulty:</label>
      <div>
        <span v-for="(item, index) in difficulty" id="difficulty" :key="index">
            <input 
            type="radio" 
            :value="item.difficultylevelid" 
            v-model="formData.difficultylevelid"
            :id="item.difficultylevelid"
            >
            <label for="difficulty">{{ item.levelname }}</label>
        </span>
      </div>
      <label for="tag">Category:</label>
      <div>
        <div v-for="tag in tags" :key="tag.tagid">
                <input type="checkbox" :id="tag.tagid" :value="tag.tagid" v-model="checkedTags">
                <label for="tag.tagid">{{tag.tagname}}</label>
        </div>
      </div>
      <label for="lang">Programming Language:</label>
      <div>
          <select v-model="formData.programminglanguageid">
          <option disabled value="">Please select a Programming language</option>
          <option v-for="(lang) in programmingLanguages" :key="lang.languageid" :id="lang.languageid" :value="lang.languageid" >
              {{ lang.languagename }}
          </option>
        </select>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </template>
<script>
import { 
    fetchProgrammingLanguage, 
    fetchDifficulty, 
    fetchTag,
    submitForm
} from '../../api/fetchprojects'

export default {
  name: 'ProjectForm',
  data() {
    return {
      difficulty: [],
      tags: [],
      programmingLanguages: [],
      formData: {
        title: '',
        description: '',
        difficultylevelid: '',
        programminglanguageid: '',
      },
      checkedTags: [] // Tag array Web Application ... etc.
    };
  },
  async mounted() {
    this.programmingLanguages = await fetchProgrammingLanguage();
    this.difficulty = await fetchDifficulty();
    this.tags = await fetchTag();
  },
  methods: {
    updateText(event) {
      this.$emit('update-text', event.target.value);
    }, 
    async formSubmit() {
        await submitForm(this.formData.title, this.formData.description, this.formData.difficultylevelid, this.formData.programminglanguageid, this.checkedTags)
    }
  }
}
</script>

<style scoped>
  .description-textarea {
    width: 100%;
    height: 400px;
  }
</style>