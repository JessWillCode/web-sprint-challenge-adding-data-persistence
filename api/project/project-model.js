const db = require('../../data/dbConfig');

const find = async () => {
    const query = await db('projects');
    const projectMap = query.map(project => {
        if(project.project_completed === 0) {
        
            return {
                ...project,
                project_completed: false
            }
        } else if(project.project_completed === 1) {
            return {
                ...project,
                project_completed: true
            }
        }
    })
return projectMap;
}

async function add(project) {
    const query = await db('projects')
    .insert(project)
    .then(([project_id]) => {
        return db('projects')
        .where('project_id', project_id)
        .first()
    })
    console.log(query);
    if(query.project_completed === 0) {
        
        return {
            ...query,
            project_completed: false
        }
    } else {
        return {
            ...query,
            project_completed: true
        }
    }
}

module.exports = {
    find,
    add
}