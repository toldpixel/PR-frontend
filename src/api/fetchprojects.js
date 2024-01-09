import axios from 'axios';

const submitForm = async(formTitle, formDescription, formDif, formLang, checkedTags) => {
          const projectData = {
            title: formTitle,
            description: formDescription,
            difficultylevelid: formDif,
            languageid: formLang,
            projecttags: checkedTags,
          }
          try {
              await axios.post('http://localhost:3000/api/projects', projectData);
          } catch (error) {
              console.error('Error submitting form:', error);
          }
}


const submitEditForm = async(id, projectData, checkedTags) => {
    const projectUpdatedData = {
        id: projectData.id,
        title: projectData.title,
        description: projectData.description,
        difficultylevelid: projectData.difficultylevelid,
        languageid: projectData.languageid,
        projecttags: checkedTags,
    }
    try {
        await axios.put(`http://localhost:3000/api/projects/${id}`, projectUpdatedData);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

const fetchProgrammingLanguage = async() => {
          try {
              const response = await axios.get('http://localhost:3000/api/lang');
              return response.data;
          } catch (error) {
              console.error('There was an error fetching the options:', error);
          }
  }

const fetchDifficulty = async() => {
    try {
              const response = await axios.get('http://localhost:3000/api/lvl');
              return response.data;
          } catch (error) {
              console.error('There was an error fetching the options:', error);
          }
  }

const fetchTag = async() => {
try {
        const response = await axios.get('http://localhost:3000/api/tag');
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the options:', error);
    }
}

const fetchSingleProjectDetails = async(id) => {
    try {
            const response = await axios.get(`http://localhost:3000/api/project-tags/${id}`)
            return response.data;
    } catch (error) {
            console.error('There was an error fetching the options:', error);
    }
}

const fetchSingleProject = async(id) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/projects/${id}`)
        return response.data;
    } catch (error) {
            console.error('There was an error fetching the options:', error);
    }
}


const fetchProjectTags = async(id) => {
    try {
            const response = await axios.get(`http://localhost:3000/api/project-tags/${id}/tags`)
            return response.data;
    } catch (error) {
            console.error('There was an error fetching the options:', error);
    }
}



export {
    submitForm, 
    fetchProgrammingLanguage, 
    fetchDifficulty, 
    fetchTag, 
    fetchSingleProjectDetails,
    fetchProjectTags,
    submitEditForm,
    fetchSingleProject
}