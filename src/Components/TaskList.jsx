import React from 'react'
import { Formik, Field, Form, errors } from 'formik';
import * as Yup from 'yup';
import UseList from '../hooks/UseList';
import UseLocalStorage from '../hooks/UselocalStorage';
import { LEVELS } from '../Models/levels.enum';



const TaskList = () => {
   
    const TaskSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        description: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Required'),
      });
    const DefaultTask ={
        name: 'Default',
        description: 'Formulario Formik',
        level : LEVELS.URGENT,
        completed: false
    }

    const Tasks = UseList([DefaultTask])

  return (
        <div>
            
      <h1>Task List</h1>
      <Formik
        initialValues={{
          name: '',
          description: '',
          level: LEVELS.NORMAL,
          done: false,
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            Tasks.push(values);
            actions.resetForm({});
            actions.setSubmitting(false);
          }, 500);
        }}
         validationSchema={TaskSchema}
      >
        {({ errors }) => (
          <Form>
            <Field name="name" placeholder="Task Name" />
            {errors && errors.name}
            <Field name="description" placeholder="Task Description" />
            {errors && errors.description}

            <Field as="select" name="level">
              <option value={LEVELS.NORMAL}>Normal</option>
              <option value={LEVELS.URGENT}>Urgent</option>
              <option value={LEVELS.BLOckING}>Blocking</option>
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      {Tasks.isEmpty() ? (
        <p>Task List is Empty</p>
      ) : (
        Tasks.value.map((task, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" onClick={() => Tasks.remove(index)} checked={false} />
            <p style={{ fontWeight: 'bold', marginRight: '5px' }}>{task.name}</p>
            <p>{task.description}</p>
          </li>
        ))
      )}
    </div>
  );
};

export default TaskList