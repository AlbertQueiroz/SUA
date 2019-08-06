export default  class NotesSchema {
    static schema = {
        name: 'NotesSchema',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true  },
            title: 'string',
            date: 'string',
            content: 'string'
        }
    }
}