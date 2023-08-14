import { Button as ButtonBase, IButtonProps, Text } from "native-base";

type ButtonProps = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

export function Button({ title, variant = "solid", ...rest }: ButtonProps) {
  return (
    <ButtonBase
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "primary.500"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="primary.700"
      rounded="sm"
      _pressed={{ bg: variant === "outline" ? "secondary.500" : "primary.500" }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "primary.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonBase>
  );
}
