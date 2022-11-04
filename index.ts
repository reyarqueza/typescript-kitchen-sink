/*

  Typescript Kitchen Sink - Use as much TypeScript features in this example.

  TODO: More examples with the following TypeScript Features

  Function Type Expression
  Rest Parameter
  Generic Array Type
 */

/* Type Alias */ /* Union Type */ /* Literal Type */
type MetaCoins =
  | "the-sandbox"
  | "vulcan-forged"
  | "decentraland"
  | "axie-infinity"
  | "merit-circle"
  | "my-neighbor-alice"
  | "floki"
  | "mobox";

type MetaCoin = {
  [key: string]: MetaCoins;
};

type Currencies = "USD" | "EUR" | "GBP" | "JPY" | "CHF" | "CNY";

type Currency = {
  [key: string]: Currencies;
};

/* Interface */ /* Optional Parameters */
interface CurrencyList {
  Currency?: number;
}

interface MetaCoinPrice {
  MetaCoin: CurrencyList;
}

/* Parameter Destructuring */ /* notice how destructuring happens before the type annotation*/
/* Parameter Type Annotation */
/* Return Type Annotation */
async function metaverseCryptoList({
  ids,
  currencies,
  title,
}: {
  ids: Array<MetaCoins>;
  currencies: Array<Currencies>;
  title: string;
}): Promise<MetaCoinPrice[]> {
  const url: string = `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join()}&vs_currencies=${currencies.join()}`;
  const response = await fetch(url);
  const json: Array<MetaCoinPrice> = await response.json();
  return json;
}

const coinList: Promise<MetaCoinPrice[]> = metaverseCryptoList({
  ids: [
    "the-sandbox",
    "vulcan-forged",
    "decentraland",
    "axie-infinity",
    "merit-circle",
    "my-neighbor-alice",
    "floki",
    "mobox",
  ],
  currencies: ["USD", "JPY", "CNY"],
  title: "Metaverse Crypto Currencies Coin Values",
});

coinList.then((json) => {
  console.log(json);
});
