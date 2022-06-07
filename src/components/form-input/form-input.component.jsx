import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps}></Input>
      {label && (
        <FormInputLabel shrink={otherProps.value.lenght}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
