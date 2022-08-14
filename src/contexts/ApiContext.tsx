import { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: any;
};

type Context = {
  currPage: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
  shortPokemonsList: any;
  allPokemonsList: any;
  setSpecificPokemon?: (value: any) => void;
  count: number;
  eachPokemon: string;
  setSearch: (value: string) => void;
  search: string;
  filtered: Object[];
  setType: (value: any) => void;
  type: any;
};

const ApiContext = createContext<Context | null>(null);

export const ApiProvider = ({ children }: Props) => {
  const [currPage, setCurrPage] = useState(0);
  const [count, setCount] = useState<number>(0);
  const [eachPokemon, setEachPokemon] = useState("");

  const [shortPokemonsList, setShortPokemonsList] = useState([]);
  const [allPokemonsList, setAllPokemonsList] = useState([] as any);
  const [search, setSearch] = useState("");
  const [type, setType] = useState(0)

  const [currentPokemon, setCurrentPokemon] = useState([] as any);

  const searchByName = search && search.toLowerCase();
  const filtered = !allPokemonsList || !searchByName
    ? allPokemonsList
    : allPokemonsList.filter(({ name }: any) =>
      name.toLowerCase().includes(searchByName)
    );

  const PromiseListPokemons = async () => {
    setAllPokemonsList([]);

    const urlPokemon = (id: string) =>
      `http://localhost:5050/pokemon/${id}`;
    shortPokemonsList.forEach(({ name }: any) => {
      fetch(urlPokemon(name))
        .then((res) => res.json())
        .then((data) => setAllPokemonsList((prev: any) => [...prev, data]))
        .then((each) => setCurrentPokemon(each));
    });
  };

  const PromiseLisTypesPokemon = async (type: any) => {
    setAllPokemonsList([]);

    const urlType = `http://localhost:5050/poketype/${type}`;

    fetch(urlType, { type } as any)
      .then((response) => response.json())
      .then((json) => {
        var sup = [] as any

        json.pokemon.map((item: any) => {
          sup.push(item.pokemon)
        })
        setShortPokemonsList(sup);
        setCount(sup.length);

      })

  }

  const PromiseShortPokemons = async () => {

    if (type === 0) setCurrPage(1)

    const perPage = 10;
    const offset = perPage * (currPage - 1);

    const getPokemons = `http://localhost:5050/pokemons?perPage=${perPage}&offset=${offset}`;

    fetch(getPokemons)
      .then((response) => response.json())
      .then((json) => {
        setShortPokemonsList(json.results);
        setCount(Math.round(json.count / 10));
      });
  };

  useEffect(() => {
    if (!!shortPokemonsList) PromiseListPokemons();
  }, [shortPokemonsList]);

  useEffect(() => {
    if (!!currPage) PromiseShortPokemons();
  }, [currPage]);

  useEffect(() => {
    if (type === 0) PromiseShortPokemons()
    if (type) PromiseLisTypesPokemon(type)
  }, [type])

  return (
    <ApiContext.Provider
      value={{
        shortPokemonsList,
        allPokemonsList,
        currPage,
        setCurrPage,
        count,
        eachPokemon,
        setSearch,
        search,
        filtered,
        setType,
        type
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
