import {Formik, Form, Field} from 'formik';

function FormikForm() {

    return (
        <div>
            <h2 style={{margin: '20px auto', textAlign: 'center'}}>Form</h2>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Please enter a name';
                    }
                    if (!values.email) {
                        errors.email = 'Please enter a email';
                    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                        errors.email = 'Please enter a valid email address';
                    }
                    if (!values.phone) {
                        errors.phone = 'Please enter a phone';
                    } else if (!/^\d{12}$/.test(values.phone)) {
                        errors.phone = 'Please enter a valid phone';
                    }

                    return errors;
                }}
                onSubmit={(values) => {
                    console.log('New user registered', values);
                }}
            >
                {
                    ({errors, touched}) => (
                        <Form style={
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                width: '400px',
                                alignItems: 'center',
                                margin: '20px auto'
                            }
                        }>
                            <Field name='name' type='text' id='name' placeholder='Name' style={{margin: '2px'}} required/>
                            {errors.name && touched.name && <span style={{color: 'red'}}>{errors.name}</span>}

                            <Field name='email' type='email' id='email' placeholder='Email' style={{margin: '2px'}}
                                   required/>
                            {errors.email && touched.email && <span style={{color: 'red'}}>{errors.email}</span>}

                            <Field name='phone' type='tel' id='phone' placeholder='Phone' style={{margin: '2px'}} required/>
                            {errors.phone && touched.phone && <span style={{color: 'red'}}>{errors.phone}</span>}

                            <button type="submit" style={{margin: '10px'}}>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
        )
    }


export default FormikForm;