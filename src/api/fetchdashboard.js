import axios from 'axios';

let projectData = [];

const fetchProjects = async() => {
    try {
            const response = await axios.get('http://localhost:3000/api/projects');
            projectData = response.data;
            return projectData 
        } 
    catch (error) {
            console.error('There was an error fetching the options:', error);
        }
}

const deleteProject = async(id) => {
    try {
        await axios.delete(`http://localhost:3000/api/projects/${id}`)
        .then(() => {
            projectData = projectData.filter(project => project.projectid !== id);
        }).catch(error => {
            console.log('Error deleting project', error);
        });
        return projectData;
    } catch {
        console.log('Error deleting project');
    }
}

export {fetchProjects, deleteProject} 