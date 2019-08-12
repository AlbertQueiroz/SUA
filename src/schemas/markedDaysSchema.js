export default  class NotesSchema {
    static schema = {
        name: 'MarkedDaysSchema',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true  },
            date: 'string',
            title: 'string',
            content: 'string',
        }
    }
}