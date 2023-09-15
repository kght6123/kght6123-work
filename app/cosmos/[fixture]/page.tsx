import { nextCosmosStaticParams, nextCosmosPage } from "react-cosmos-next";

import * as cosmosImports from "../../../cosmos.imports";

export const runtime = "edge";

export const generateStaticParams = nextCosmosStaticParams(cosmosImports);

export default nextCosmosPage(cosmosImports);
