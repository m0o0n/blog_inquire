// @ts-nocheck
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import Button from '../Common/Button';
import Flex from '../Common/Felx';
import Form from '../Common/Form';
import { renderField, renderTextAreaField } from './EditPostForm.tsx';
import React from 'react';

const required = (value: any) => (value ? undefined : 'Required');
type PropsType = {
  handleSubmit: () => void;
};
type initializeType = {
  title: string;
  body: string;
};
const AddPost: React.FC<
  InjectedFormProps<initializeType, PropsType> & PropsType
> = props => {
  return (
    <Form
      direction="column"
      align="flex-start"
      width="100%"
      onSubmit={props.handleSubmit}
    >
      <Flex width="100%" height="60px" justify="flex-start">
        <Field
          name="title"
          label="Введите заголовок"
          component={renderField}
          validate={required}
        />
      </Flex>
      <Flex width="100%" justify="flex-start">
        <Field
          name="body"
          label="Введите текст"
          component={renderTextAreaField}
          validate={required}
        />
      </Flex>

      <Button
        hover
        width="180px"
        align_self="center"
        padding="10px"
        margin="10px 0 0 0"
        type="submit"
      >
        Добавить пост
      </Button>
    </Form>
  );
};
export const AddPostReduxForm = reduxForm<initializeType, PropsType>({
  form: 'AddPost',
})(AddPost);
