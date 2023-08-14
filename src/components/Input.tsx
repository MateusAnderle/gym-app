import { Input as InputBase, IInputProps, FormControl } from "native-base";

type Props = IInputProps & {
  errorMessage?: string | null;
};

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <InputBase
        bgColor="secondary.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        fontFamily="body"
        placeholderTextColor="secondary.300"
        _focus={{
          bg: "secondary.700",
          borderWidth: 1,
          borderColor: "primary.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
