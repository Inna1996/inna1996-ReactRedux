import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FilterType } from '../../Redux/users_reducer';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../Redux/redux-store';

const UsersSearchFormValidates = (value: any) => {
    const errors = {}
    return errors
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
type FriendType = 'null' | 'true' | 'false'

type FormType = {
    term: string
    friend: FriendType
}
const UsersSearchForm: React.FC<PropsType> = (props) => {
    const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    const filter = useSelector((state: AppStateType) => state.usersPage.filter)

    return (<div>
        <Formik
            enableReinitialize
            initialValues={{ term: filter.term, friend: String(filter.friend) as FriendType }}
            validate={UsersSearchFormValidates}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="term" />
                    <button type="submit" disabled={isSubmitting}>
                        Find
          </button>
                    <Field name="friend" as="select">
                        <option value="nulld">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Unfollowed</option>
                    </Field>
                </Form>

            )}
        </Formik>
    </div>
    )
};

export default UsersSearchForm;