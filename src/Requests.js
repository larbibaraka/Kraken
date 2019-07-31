const GET_COLUMNS = `
query {
    columns {
        id
        name
    }
}
`

const GET_TASKS = `
query($columnId: Int! ,$first: Int!) {
    allTasks(first :$first ,columnId: $columnId) {
        id
        content
        column {
          name
        }
    }
}
`
export {
    GET_COLUMNS,
    GET_TASKS,
}
