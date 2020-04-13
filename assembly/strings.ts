//@ts-ignore
@capitalize
export const hello = `hello`;
//@ts-ignore
@capitalize
export const world = "world";

export function helloWorld(): string {
  return hello + " " + world;
}
