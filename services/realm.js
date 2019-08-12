import Realm from 'realm';

import NotesSchema from '../src/schemas/notesSchema';
import MarkedDaysSchema from '../src/schemas/markedDaysSchema';
import ActivitiesSchema from '../src/schemas/activitiesSchema';
import SubjectsSchema from '../src/schemas/subjectsSchema';


export default function getRealm(){
    return Realm.open({
        schema: [NotesSchema, MarkedDaysSchema, ActivitiesSchema, SubjectsSchema]
    })
}
