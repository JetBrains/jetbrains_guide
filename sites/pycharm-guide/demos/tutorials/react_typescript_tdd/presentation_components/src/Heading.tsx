import React from "react";

type HeadingProps = { name?: string };

export function Heading({ name = "React" }: HeadingProps) {
  return <h1>Hello {name}</h1>;
}
