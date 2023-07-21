interface Props {
  text: string;
}
export function H1HTML({ text }: Props) {
  return <h1 className="text-4xl lg:text-6xl">{text}</h1>;
}
