import { Spinner, Center } from "native-base";

export function Loading() {
  return (
    <Center flex={1} bgColor={"secondary.700"}>
      <Spinner color={"primary.500"} />
    </Center>
  );
}
