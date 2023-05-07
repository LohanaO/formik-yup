import React from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../Models/levels.enum';
import { tareas } from '../Models/tareas';



const FormikTask = () => {
  
    let task = new tareas();

    const initialsValues={
        name:"",
        description:"",
        completed:false,
        level:LEVELS.NORMAL
    }

    return (
        <div>
            <h3> Task Form</h3>
            <Formik>
                initialsValues={initialsValues}

                onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
        }}
               {/* We obtain props from Formik*/}

            {({ errors, 
                touched,
                values,
                isSubmitting,
                handleChange,
                handleBlur,}) => (
                    <Form>
                        <label htmlFor="name">Name task</label>
                        <Field id="name" type="text" name="name" placeholder="Name Task" />
                    </Form>
                )}
            </Formik>
            
        </div>
    );
}

export default FormikTask;
