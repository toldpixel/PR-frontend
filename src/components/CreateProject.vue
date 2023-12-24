<template>
    <form @submit.prevent="submitForm">
      <!-- Form fields go here -->
      <div>
        <input type="text" v-model="formData.title" placeholder="Title">
      </div>
      <div>
        <textarea v-model="formData.description" placeholder="Description"></textarea>
      </div>
      <!-- Add other fields as needed -->
      <span v-for="(item, index) in items" :key="index">
            <input 
            type="radio" 
            :value="index" 
            v-model="formData.difficultylevelid"
            :id="item"
            >
      <label :for="item">{{ item }}</label>
      </span>
      <div>
        <select v-model="formData.selectedOption">
            <option disabled value="">Please select one</option>
            <option v-for="option in options" :key="option" :value="option">
                {{ option }}
            </option>
        </select>
      </div>
      <div>
        <select v-model="formData.languageid">
            <option disabled value="">Please select a language</option>
            <option v-for="language in languages" :key="language" :value="language">
                {{ language }}
            </option>
        </select>
  </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </template>

<script>
import axios from 'axios';

export default {
  name: 'CreateProject',
  data() {
    return {
        items: ['Beginner', 'Advanced', 'Expert'],
        options: [
        'Web Development',
        'Data Science',
        'Machine Learning',
        'Mobile App',
        'Game Development',
        'Artificial Intelligence',
        'Cloud Computing',
        'Internet of Things',
        'Cybersecurity',
        'Blockchain'
      ],
      languages: [
        'Python',
        'JavaScript',
        'Java',
        'C#',
        'Ruby',
        'PHP',
        'C++',
        'Swift',
        'Kotlin',
        'Go'
        ],
        formData: {
            title: '',
            description: '',
            difficultylevelid: null,
            languageid: '',
        }
      // Other form data properties
    };
  },
  methods: {
    async submitForm() {
            try {
                console.log(this.formData)
                const response = await axios.post('/api/projects', this.formData);
                console.log('Form submitted:', response.data);
                // Handle success
            } catch (error) {
                console.error('Error submitting form:', error);
                // Handle error
            }
        },
  }
}
</script>