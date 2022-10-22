import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import Button from '../Common/Button';
import Flex from '../Common/Felx';
import Form from '../Common/Form';
import Textarea from '../Common/Textarea';
const required = (value: any) => (value ? undefined : 'Required');
const renderTextAreaField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <Flex direction="column" width="100%">
    <label>{label}</label>
    <Flex direction="column" width="100%">
      <Textarea
        size="16px"
        padding="5px"
        ft_style="italic"
        width="100%"
        height="130px"
        {...input}
        placeholder={label}
        type={type}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </Flex>
  </Flex>
);
type PropsType = {
  handleSubmit: () => void;
};
type initializeType = {
  body: string;
};
const AddComment: React.FC<
  InjectedFormProps<initializeType, PropsType> & PropsType
> = props => {
  return (
    <Form
      direction="column"
      width="100%"
      margin="60px 0 0 0"
      onSubmit={props.handleSubmit}
    >
      <Field
        margin="0"
        name="body"
        component={renderTextAreaField}
        validate={required}
      />
      <Button
        hover
        width="180px"
        align_self="center"
        padding="10px"
        margin="10px 0 0 0"
        type="submit"
      >
        Отправить Коментарий
      </Button>
    </Form>
  );
};
export const AddCommentReduxForm = reduxForm<initializeType, PropsType>({
  form: 'AddComment',
})(AddComment);
