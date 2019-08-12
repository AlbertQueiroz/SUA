export default  class ActivitiesSchema {
    static schema = {
        name: 'ActivitiesSchema',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true  },
            title: 'string',
            date: 'string',
            content: 'string'
        }
    }
}