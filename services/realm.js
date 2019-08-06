import Realm from 'realm';

import NotesSchema from '../src/schemas/notesSchema';

export default function getRealm(){
    return Realm.open({
        schema: [NotesSchema]
    })
}