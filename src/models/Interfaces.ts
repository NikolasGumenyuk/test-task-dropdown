export interface Data {
  id: number;
  name: string;
  surname: string;
  image: string;
}

export type Country = Pick<Data, 'id' | "name">

export interface User extends Data {}


