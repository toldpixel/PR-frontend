<template>
    <router-link to="/">back</router-link>
    <form @submit.prevent="formSubmit">
        <h1>{{ project.title }}</h1>
        <div>
            <input type="text" v-model="project.title" placeholder="Title" id="title">
        </div>
        <h4>Description</h4>
        <div>
            <textarea v-model="project.description" placeholder="Description" id="description" name="description"
                class="description-textarea"></textarea>
        </div>
        <h4>Categories</h4>
        <div v-if="tags.length > 0">
            <div v-for="(tag) in tags" :key="tag.tagid">
            <input type="checkbox" :id="tag.tagid" :value="tag.tagid" v-model="checkBox">
            <label for="tag.tagid">{{ tag.tagname }}</label>
            </div>
        </div>
        <label for="difficulty">Difficulty:</label>
        <div>
            <span v-for="(item, index) in difficulty" id="difficulty" :key="index">
                <input type="radio" :value="item.difficultylevelid" v-model="project.difficultylevelid"
                    :id="item.difficultylevelid">
                <label for="difficulty">{{ item.levelname }}</label>
            </span>
        </div>
        <label for="lang">Programming Language:</label>
        <div>
            <select v-model="project.languageid">
                <option disabled value="">Programming language</option>
                <option v-for="(lang) in programmingLanguages" :key="lang.languageid" :id="lang.languageid"
                    :value="lang.languageid">
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
    fetchSingleProject,
    fetchProjectTags,
    fetchTag,
    submitEditForm
} from '../../api/fetchprojects'
export default {
    name: 'EditProject',
    data() {
        return {
            project: {},
            tags: [],
            checkedTags: [],
            checkBox: [],
            programmingLanguages: [],
            difficulty: [],
        };
    },

    async created() {
        this.programmingLanguages = await fetchProgrammingLanguage();
        this.difficulty = await fetchDifficulty();
        this.tags = await fetchTag();
        this.project = await fetchSingleProject(this.$route.params.id);
        this.checkedTags = await fetchProjectTags(this.$route.params.id);
        this.prepareProjectCheckBox(this.checkedTags);
    },
    methods: {
        async formSubmit() {
            await submitEditForm(this.$route.params.id, this.project, this.checkBox) //checkBox are the checkedTags
        },
        getProjectTagId(index) {
            if (index < this.checkedTags.length) {
                return this.checkedTags[index].tagid;
            }
            return null; 
        },

        //Fill in the received data only tagid from checkedTags into checkBox array
        prepareProjectCheckBox(tags) {
            for(let tag in tags) {
                this.checkBox.push(tags[tag].tagid);
            }
            return this.checkBox;
        },
    }
}
</script>
<style scoped></style>
  