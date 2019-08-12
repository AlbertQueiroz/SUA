export default  class SubjectsSchema {
    static schema = {
        name: 'SubjectsSchema',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true  },
            subject: 'string',
            professor: 'string'
        }
    }
}