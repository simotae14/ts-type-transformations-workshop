import { Equal, Expect } from "../helpers/type-utils";
import { S } from "ts-toolbelt";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type SplitString<String extends string> = S.Split<String, "/">;

type ExtractPathParams<Path extends string> = {
	[Key in S.Split<Path, "/">[number] as Key extends `:${infer FinalKey}`? 
		FinalKey : never
	]: string
}

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
