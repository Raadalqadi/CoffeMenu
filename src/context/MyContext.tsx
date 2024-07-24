// MyContext.tsx
import { createContext, Dispatch, SetStateAction } from 'react';

interface MyContextType {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  Coffee:any;
  setCoffee: Dispatch<SetStateAction<number>> | any;
  Refrch : boolean ;
  setRefrch: Dispatch<SetStateAction<number>> | any;

}

const MyContext = createContext<MyContextType | null>(null);

export default MyContext;
