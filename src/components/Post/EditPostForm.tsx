import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import React, { useEffect } from 'react';

import Textarea from '../Common/Textarea';

import Flex from '../Common/Felx';
import Form from '../Common/Form';
import Input from '../Common/Input';
import Title from '../Common/Title';
import Paragraph from '../Common/Paragraph';
import Button from '../Common/Button';

const required = (value: any) => (value ? undefined : 'Required');
export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <Flex direction="column" width="100%">
    <Flex width="100%" height="60px" justify="flex-start">
      <Title width="180px" size="16px" margin="0 10px 0 0" weight="600">
        {label}
      </Title>
      <Flex direction="column" width="70%">
        <Input
          padding="5px"
          width="100%"
          weight="600"
          height="30px"
          {...input}
          placeholder={label}
          type={type}
        />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </Flex>
    </Flex>
  </Flex>
);

export const renderTextAreaField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <Flex direction="column" width="100%">
    <Flex width="100%" justify="flex-start">
      <Paragraph width="180px" align_self="flex-start" margin="0 10px 0 0">
        {label}
      </Paragraph>
      <Flex direction="column" width="70%">
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
  </Flex>
);
type initializeType = {
  title: string;
  body: string;
};
type PropsType = {
  title: string;
  description: string;
  initialize: (arg: initializeType) => any;
  handleSubmit: () => void;
};
const EditPost: React.FC<
  InjectedFormProps<initializeType, PropsType> & PropsType
> = props => {
  useEffect(() => {
    props.initialize({ title: props.title, body: props.description });
  }, []);
  return (
    <Form
      direction="column"
      align="flex-start"
      width="100%"
      onSubmit={props.handleSubmit}
    >
      <Field
        name="title"
        component={renderField}
        validate={required}
        label="Введите заголовок"
      />
      <Field
        name="body"
        label="Введите текст"
        validate={required}
        component={renderTextAreaField}
      />

      <Button
        hover
        width="180px"
        align_self="center"
        padding="10px"
        margin="10px 0 0 0"
        type="submit"
      >
        Отправить форму
      </Button>
    </Form>
  );
};
export const EditPostReduxForm = reduxForm<initializeType, PropsType>({
  form: 'EditPost',
})(EditPost);
