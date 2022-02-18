const db = require('../../data/dbConfig');

const find = async () => {
    const query = await db('tasks');
    const taskMap = query.map(task => {
        if(task.task_completed === 0) {
        
            return {
                ...task,
                task_completed: false
            }
        } else if(task.task_completed === 1) {
            return {
                ...task,
                task_completed: true
            }
        }
    })
return taskMap;
}

async function add(task) {
    const query = await db('tasks')
    .insert(task)
    .then(([task_id]) => {
        return db('tasks')
        .where('task_id', task_id)
        .first()
    })
    console.log(query);
    if(query.task_completed === 0) {
        
        return {
            ...query,
            task_completed: false
        }
    } else {
        return {
            ...query,
            task_completed: true
        }
    }
}

module.exports = {
    find,
    add
}
