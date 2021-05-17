import TextBlock from "../src/components/organisms/TextBlock"

export const interleave = <T,>(arr: T[], thing: T) => [].concat(...arr.map(n => [n, thing])).slice(0, -1)