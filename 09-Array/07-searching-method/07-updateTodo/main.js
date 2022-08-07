const task = [
    { id : 1, name :'Fishimg'},
    { id : 1, name :'Fishimg'},
    { id : 1, name :'Fishimg'}
]


function updateTask(id, newName){
    const newTasks = task.slice(0) // clone

    let foundIndex = newTasks.findIndex(item => item.id === id)
    if(foundIndex!==-1){
        newTasks,splice(foundIndex,1,{id:id,name:newName})
    }
    return newTasks
}

const newTodos =updateTask()