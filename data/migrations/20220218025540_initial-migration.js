
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 128).notNullable()
        tbl.string('project_description', 256)
        tbl.boolean('project_completed').default(false)
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name', 128).notNullable().unique()
        tbl.string('resource_description', 256)
})
    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description', 256).notNullable()
        tbl.string('task_notes', 256)
        tbl.boolean('task_completed').default(false)
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
})
    .createTable('project_resources', tbl => {
        tbl.increments('assignment_id')
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
})


};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')    
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
