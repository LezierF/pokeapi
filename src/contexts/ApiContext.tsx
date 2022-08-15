import { createContext, useCallback, useContext, useEffect, useState } from "react";
import api from "../services/api";

type Props = {
  children: any;
};

type Context = {
  currPage: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
  allPokemonsList: any;
  allPokemonsTypeList: any
  setSpecificPokemon?: (value: any) => void;
  count: number;
  setSearch: (value: string) => void;
  search: string;
  setType: (value: any) => void;
  type: any;
  loading: boolean;
};

export const ApiContext = createContext<Context | null>(null);

export const ApiProvider = ({ children }: Props) => {
  const [currPage, setCurrPage] = useState(1);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(true)
  const [allPokemonsList, setAllPokemonsList] = useState([] as any);
  const [allPokemonsTypeList, setAllPokemonsTypeList] = useState([] as any);
  const [search, setSearch] = useState("");
  const [type, setType] = useState(0)


  const PromiseLisTypesPokemon = async (type: any) => {
    setAllPokemonsList([])
    setAllPokemonsTypeList([])
    setLoading(true)

    const response = await api.get(`/poketype/${type}`);
    console.log(response.data.pokemon)
    setAllPokemonsTypeList(response.data.pokemon)
    setLoading(false)

  }

  const PromiseShortPokemons = useCallback(async () => {
    setAllPokemonsList([])
    setAllPokemonsTypeList([])

    setCurrPage(0)
    setLoading(true)

    const perPage = 10;
    const offset = perPage * (currPage - 1);

    const getPokemons = await api.get(`pokemons?perPage=${perPage}&offset=${offset}`)
    setAllPokemonsList(getPokemons.data.results)
    console.log(getPokemons.data.results)
    setCount(Math.floor(getPokemons.data.count / perPage))
    setLoading(false)

  }, [currPage]);


  useEffect(() => {
    if (!!currPage) {
      setLoading(true)
      PromiseShortPokemons()
    };
  }, [currPage]);

  useEffect(() => {
    setAllPokemonsTypeList([])
    if (type) PromiseLisTypesPokemon(type)
  }, [type])

  return (
    <ApiContext.Provider
      value={{
        allPokemonsList,
        currPage,
        setCurrPage,
        count,
        setSearch,
        search,
        setType,
        type,
        loading,
        allPokemonsTypeList
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error("XContext must be called from within the XContextProvider");
  }
  return context;
};
