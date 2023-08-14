import { Center, Heading } from "native-base";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <Center bg="secondary.600" pb={6} pt={16}>
      <Heading color="secondary.100" fontSize="xl" fontFamily="heading">
        {title}
      </Heading>
    </Center>
  );
}
