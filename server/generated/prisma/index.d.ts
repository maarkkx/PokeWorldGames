
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pokemon
 * 
 */
export type Pokemon = $Result.DefaultSelection<Prisma.$PokemonPayload>
/**
 * Model Type
 * 
 */
export type Type = $Result.DefaultSelection<Prisma.$TypePayload>
/**
 * Model UserPokemon
 * 
 */
export type UserPokemon = $Result.DefaultSelection<Prisma.$UserPokemonPayload>
/**
 * Model PokemonType
 * 
 */
export type PokemonType = $Result.DefaultSelection<Prisma.$PokemonTypePayload>
/**
 * Model EvolutiveChain
 * 
 */
export type EvolutiveChain = $Result.DefaultSelection<Prisma.$EvolutiveChainPayload>
/**
 * Model GuessPokemonGame
 * 
 */
export type GuessPokemonGame = $Result.DefaultSelection<Prisma.$GuessPokemonGamePayload>
/**
 * Model GuessShinyGame
 * 
 */
export type GuessShinyGame = $Result.DefaultSelection<Prisma.$GuessShinyGamePayload>
/**
 * Model PokedokuGame
 * 
 */
export type PokedokuGame = $Result.DefaultSelection<Prisma.$PokedokuGamePayload>
/**
 * Model PokedokuGameCell
 * 
 */
export type PokedokuGameCell = $Result.DefaultSelection<Prisma.$PokedokuGameCellPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GameStatus: {
  ACTIVE: 'ACTIVE',
  WON: 'WON',
  LOST: 'LOST',
  ABANDONED: 'ABANDONED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]

}

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemon`: Exposes CRUD operations for the **Pokemon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pokemon
    * const pokemon = await prisma.pokemon.findMany()
    * ```
    */
  get pokemon(): Prisma.PokemonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPokemon`: Exposes CRUD operations for the **UserPokemon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPokemon
    * const userPokemon = await prisma.userPokemon.findMany()
    * ```
    */
  get userPokemon(): Prisma.UserPokemonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemonType`: Exposes CRUD operations for the **PokemonType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokemonTypes
    * const pokemonTypes = await prisma.pokemonType.findMany()
    * ```
    */
  get pokemonType(): Prisma.PokemonTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evolutiveChain`: Exposes CRUD operations for the **EvolutiveChain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvolutiveChains
    * const evolutiveChains = await prisma.evolutiveChain.findMany()
    * ```
    */
  get evolutiveChain(): Prisma.EvolutiveChainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guessPokemonGame`: Exposes CRUD operations for the **GuessPokemonGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuessPokemonGames
    * const guessPokemonGames = await prisma.guessPokemonGame.findMany()
    * ```
    */
  get guessPokemonGame(): Prisma.GuessPokemonGameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guessShinyGame`: Exposes CRUD operations for the **GuessShinyGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuessShinyGames
    * const guessShinyGames = await prisma.guessShinyGame.findMany()
    * ```
    */
  get guessShinyGame(): Prisma.GuessShinyGameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokedokuGame`: Exposes CRUD operations for the **PokedokuGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokedokuGames
    * const pokedokuGames = await prisma.pokedokuGame.findMany()
    * ```
    */
  get pokedokuGame(): Prisma.PokedokuGameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokedokuGameCell`: Exposes CRUD operations for the **PokedokuGameCell** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokedokuGameCells
    * const pokedokuGameCells = await prisma.pokedokuGameCell.findMany()
    * ```
    */
  get pokedokuGameCell(): Prisma.PokedokuGameCellDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Pokemon: 'Pokemon',
    Type: 'Type',
    UserPokemon: 'UserPokemon',
    PokemonType: 'PokemonType',
    EvolutiveChain: 'EvolutiveChain',
    GuessPokemonGame: 'GuessPokemonGame',
    GuessShinyGame: 'GuessShinyGame',
    PokedokuGame: 'PokedokuGame',
    PokedokuGameCell: 'PokedokuGameCell',
    PasswordResetToken: 'PasswordResetToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pokemon" | "type" | "userPokemon" | "pokemonType" | "evolutiveChain" | "guessPokemonGame" | "guessShinyGame" | "pokedokuGame" | "pokedokuGameCell" | "passwordResetToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pokemon: {
        payload: Prisma.$PokemonPayload<ExtArgs>
        fields: Prisma.PokemonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findFirst: {
            args: Prisma.PokemonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findMany: {
            args: Prisma.PokemonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          create: {
            args: Prisma.PokemonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          createMany: {
            args: Prisma.PokemonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          delete: {
            args: Prisma.PokemonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          update: {
            args: Prisma.PokemonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          deleteMany: {
            args: Prisma.PokemonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          upsert: {
            args: Prisma.PokemonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          aggregate: {
            args: Prisma.PokemonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemon>
          }
          groupBy: {
            args: Prisma.PokemonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonCountAggregateOutputType> | number
          }
        }
      }
      Type: {
        payload: Prisma.$TypePayload<ExtArgs>
        fields: Prisma.TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
      UserPokemon: {
        payload: Prisma.$UserPokemonPayload<ExtArgs>
        fields: Prisma.UserPokemonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPokemonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPokemonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPokemonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPokemonPayload>
          }
          findFirst: {
            args: Prisma.UserPokemonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPokemonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPokemonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPokemonPayload>
          }
          findMany: {
            args: Prisma.UserPokemonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPokemonPayload>[]
          }
          create: {
            args: Prisma.UserPokemonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPokemonPayload>
          }
          createMany: {
            args: Prisma.UserPokemonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPokemonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPokemonPayload>[]
          }
          delete: {
            args: Prisma.UserPokemonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPokemonPayload>
          }
          update: {
            args: Prisma.UserPokemonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPokemonPayload>
          }
          deleteMany: {
            args: Prisma.UserPokemonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPokemonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPokemonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPokemonPayload>[]
          }
          upsert: {
            args: Prisma.UserPokemonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPokemonPayload>
          }
          aggregate: {
            args: Prisma.UserPokemonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPokemon>
          }
          groupBy: {
            args: Prisma.UserPokemonGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPokemonGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPokemonCountArgs<ExtArgs>
            result: $Utils.Optional<UserPokemonCountAggregateOutputType> | number
          }
        }
      }
      PokemonType: {
        payload: Prisma.$PokemonTypePayload<ExtArgs>
        fields: Prisma.PokemonTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          findFirst: {
            args: Prisma.PokemonTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          findMany: {
            args: Prisma.PokemonTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>[]
          }
          create: {
            args: Prisma.PokemonTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          createMany: {
            args: Prisma.PokemonTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>[]
          }
          delete: {
            args: Prisma.PokemonTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          update: {
            args: Prisma.PokemonTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          deleteMany: {
            args: Prisma.PokemonTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>[]
          }
          upsert: {
            args: Prisma.PokemonTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          aggregate: {
            args: Prisma.PokemonTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemonType>
          }
          groupBy: {
            args: Prisma.PokemonTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonTypeCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonTypeCountAggregateOutputType> | number
          }
        }
      }
      EvolutiveChain: {
        payload: Prisma.$EvolutiveChainPayload<ExtArgs>
        fields: Prisma.EvolutiveChainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvolutiveChainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutiveChainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvolutiveChainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutiveChainPayload>
          }
          findFirst: {
            args: Prisma.EvolutiveChainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutiveChainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvolutiveChainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutiveChainPayload>
          }
          findMany: {
            args: Prisma.EvolutiveChainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutiveChainPayload>[]
          }
          create: {
            args: Prisma.EvolutiveChainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutiveChainPayload>
          }
          createMany: {
            args: Prisma.EvolutiveChainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvolutiveChainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutiveChainPayload>[]
          }
          delete: {
            args: Prisma.EvolutiveChainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutiveChainPayload>
          }
          update: {
            args: Prisma.EvolutiveChainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutiveChainPayload>
          }
          deleteMany: {
            args: Prisma.EvolutiveChainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvolutiveChainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvolutiveChainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutiveChainPayload>[]
          }
          upsert: {
            args: Prisma.EvolutiveChainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutiveChainPayload>
          }
          aggregate: {
            args: Prisma.EvolutiveChainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvolutiveChain>
          }
          groupBy: {
            args: Prisma.EvolutiveChainGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvolutiveChainGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvolutiveChainCountArgs<ExtArgs>
            result: $Utils.Optional<EvolutiveChainCountAggregateOutputType> | number
          }
        }
      }
      GuessPokemonGame: {
        payload: Prisma.$GuessPokemonGamePayload<ExtArgs>
        fields: Prisma.GuessPokemonGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuessPokemonGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessPokemonGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuessPokemonGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessPokemonGamePayload>
          }
          findFirst: {
            args: Prisma.GuessPokemonGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessPokemonGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuessPokemonGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessPokemonGamePayload>
          }
          findMany: {
            args: Prisma.GuessPokemonGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessPokemonGamePayload>[]
          }
          create: {
            args: Prisma.GuessPokemonGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessPokemonGamePayload>
          }
          createMany: {
            args: Prisma.GuessPokemonGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuessPokemonGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessPokemonGamePayload>[]
          }
          delete: {
            args: Prisma.GuessPokemonGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessPokemonGamePayload>
          }
          update: {
            args: Prisma.GuessPokemonGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessPokemonGamePayload>
          }
          deleteMany: {
            args: Prisma.GuessPokemonGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuessPokemonGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuessPokemonGameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessPokemonGamePayload>[]
          }
          upsert: {
            args: Prisma.GuessPokemonGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessPokemonGamePayload>
          }
          aggregate: {
            args: Prisma.GuessPokemonGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuessPokemonGame>
          }
          groupBy: {
            args: Prisma.GuessPokemonGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuessPokemonGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuessPokemonGameCountArgs<ExtArgs>
            result: $Utils.Optional<GuessPokemonGameCountAggregateOutputType> | number
          }
        }
      }
      GuessShinyGame: {
        payload: Prisma.$GuessShinyGamePayload<ExtArgs>
        fields: Prisma.GuessShinyGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuessShinyGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessShinyGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuessShinyGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessShinyGamePayload>
          }
          findFirst: {
            args: Prisma.GuessShinyGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessShinyGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuessShinyGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessShinyGamePayload>
          }
          findMany: {
            args: Prisma.GuessShinyGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessShinyGamePayload>[]
          }
          create: {
            args: Prisma.GuessShinyGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessShinyGamePayload>
          }
          createMany: {
            args: Prisma.GuessShinyGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuessShinyGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessShinyGamePayload>[]
          }
          delete: {
            args: Prisma.GuessShinyGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessShinyGamePayload>
          }
          update: {
            args: Prisma.GuessShinyGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessShinyGamePayload>
          }
          deleteMany: {
            args: Prisma.GuessShinyGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuessShinyGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuessShinyGameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessShinyGamePayload>[]
          }
          upsert: {
            args: Prisma.GuessShinyGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuessShinyGamePayload>
          }
          aggregate: {
            args: Prisma.GuessShinyGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuessShinyGame>
          }
          groupBy: {
            args: Prisma.GuessShinyGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuessShinyGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuessShinyGameCountArgs<ExtArgs>
            result: $Utils.Optional<GuessShinyGameCountAggregateOutputType> | number
          }
        }
      }
      PokedokuGame: {
        payload: Prisma.$PokedokuGamePayload<ExtArgs>
        fields: Prisma.PokedokuGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokedokuGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokedokuGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGamePayload>
          }
          findFirst: {
            args: Prisma.PokedokuGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokedokuGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGamePayload>
          }
          findMany: {
            args: Prisma.PokedokuGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGamePayload>[]
          }
          create: {
            args: Prisma.PokedokuGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGamePayload>
          }
          createMany: {
            args: Prisma.PokedokuGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokedokuGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGamePayload>[]
          }
          delete: {
            args: Prisma.PokedokuGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGamePayload>
          }
          update: {
            args: Prisma.PokedokuGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGamePayload>
          }
          deleteMany: {
            args: Prisma.PokedokuGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokedokuGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokedokuGameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGamePayload>[]
          }
          upsert: {
            args: Prisma.PokedokuGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGamePayload>
          }
          aggregate: {
            args: Prisma.PokedokuGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokedokuGame>
          }
          groupBy: {
            args: Prisma.PokedokuGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokedokuGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokedokuGameCountArgs<ExtArgs>
            result: $Utils.Optional<PokedokuGameCountAggregateOutputType> | number
          }
        }
      }
      PokedokuGameCell: {
        payload: Prisma.$PokedokuGameCellPayload<ExtArgs>
        fields: Prisma.PokedokuGameCellFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokedokuGameCellFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGameCellPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokedokuGameCellFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGameCellPayload>
          }
          findFirst: {
            args: Prisma.PokedokuGameCellFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGameCellPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokedokuGameCellFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGameCellPayload>
          }
          findMany: {
            args: Prisma.PokedokuGameCellFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGameCellPayload>[]
          }
          create: {
            args: Prisma.PokedokuGameCellCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGameCellPayload>
          }
          createMany: {
            args: Prisma.PokedokuGameCellCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokedokuGameCellCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGameCellPayload>[]
          }
          delete: {
            args: Prisma.PokedokuGameCellDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGameCellPayload>
          }
          update: {
            args: Prisma.PokedokuGameCellUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGameCellPayload>
          }
          deleteMany: {
            args: Prisma.PokedokuGameCellDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokedokuGameCellUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokedokuGameCellUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGameCellPayload>[]
          }
          upsert: {
            args: Prisma.PokedokuGameCellUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokedokuGameCellPayload>
          }
          aggregate: {
            args: Prisma.PokedokuGameCellAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokedokuGameCell>
          }
          groupBy: {
            args: Prisma.PokedokuGameCellGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokedokuGameCellGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokedokuGameCellCountArgs<ExtArgs>
            result: $Utils.Optional<PokedokuGameCellCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pokemon?: PokemonOmit
    type?: TypeOmit
    userPokemon?: UserPokemonOmit
    pokemonType?: PokemonTypeOmit
    evolutiveChain?: EvolutiveChainOmit
    guessPokemonGame?: GuessPokemonGameOmit
    guessShinyGame?: GuessShinyGameOmit
    pokedokuGame?: PokedokuGameOmit
    pokedokuGameCell?: PokedokuGameCellOmit
    passwordResetToken?: PasswordResetTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pokemons: number
    guessPokemonGames: number
    guessShinyGames: number
    pokedokuGames: number
    passwordResetTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons?: boolean | UserCountOutputTypeCountPokemonsArgs
    guessPokemonGames?: boolean | UserCountOutputTypeCountGuessPokemonGamesArgs
    guessShinyGames?: boolean | UserCountOutputTypeCountGuessShinyGamesArgs
    pokedokuGames?: boolean | UserCountOutputTypeCountPokedokuGamesArgs
    passwordResetTokens?: boolean | UserCountOutputTypeCountPasswordResetTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPokemonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGuessPokemonGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuessPokemonGameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGuessShinyGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuessShinyGameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPokedokuGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokedokuGameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
  }


  /**
   * Count Type PokemonCountOutputType
   */

  export type PokemonCountOutputType = {
    owners: number
    types: number
    evolutionsFrom: number
    evolutionsTo: number
    guessPokemonGames: number
    guessShinyGames: number
    pokedokuAnswerCells: number
  }

  export type PokemonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | PokemonCountOutputTypeCountOwnersArgs
    types?: boolean | PokemonCountOutputTypeCountTypesArgs
    evolutionsFrom?: boolean | PokemonCountOutputTypeCountEvolutionsFromArgs
    evolutionsTo?: boolean | PokemonCountOutputTypeCountEvolutionsToArgs
    guessPokemonGames?: boolean | PokemonCountOutputTypeCountGuessPokemonGamesArgs
    guessShinyGames?: boolean | PokemonCountOutputTypeCountGuessShinyGamesArgs
    pokedokuAnswerCells?: boolean | PokemonCountOutputTypeCountPokedokuAnswerCellsArgs
  }

  // Custom InputTypes
  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCountOutputType
     */
    select?: PokemonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPokemonWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonTypeWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountEvolutionsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvolutiveChainWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountEvolutionsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvolutiveChainWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountGuessPokemonGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuessPokemonGameWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountGuessShinyGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuessShinyGameWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountPokedokuAnswerCellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokedokuGameCellWhereInput
  }


  /**
   * Count Type TypeCountOutputType
   */

  export type TypeCountOutputType = {
    Pokemon: number
  }

  export type TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pokemon?: boolean | TypeCountOutputTypeCountPokemonArgs
  }

  // Custom InputTypes
  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountPokemonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonTypeWhereInput
  }


  /**
   * Count Type PokedokuGameCountOutputType
   */

  export type PokedokuGameCountOutputType = {
    cells: number
  }

  export type PokedokuGameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cells?: boolean | PokedokuGameCountOutputTypeCountCellsArgs
  }

  // Custom InputTypes
  /**
   * PokedokuGameCountOutputType without action
   */
  export type PokedokuGameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCountOutputType
     */
    select?: PokedokuGameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PokedokuGameCountOutputType without action
   */
  export type PokedokuGameCountOutputTypeCountCellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokedokuGameCellWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    level: number | null
    xp: number | null
    lootboxes: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    level: number | null
    xp: number | null
    lootboxes: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    level: number | null
    xp: number | null
    lootboxes: number | null
    admin: boolean | null
    refreshToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    level: number | null
    xp: number | null
    lootboxes: number | null
    admin: boolean | null
    refreshToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    level: number
    xp: number
    lootboxes: number
    admin: number
    refreshToken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    lootboxes?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    lootboxes?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    level?: true
    xp?: true
    lootboxes?: true
    admin?: true
    refreshToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    level?: true
    xp?: true
    lootboxes?: true
    admin?: true
    refreshToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    level?: true
    xp?: true
    lootboxes?: true
    admin?: true
    refreshToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    level: number
    xp: number
    lootboxes: number
    admin: boolean
    refreshToken: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    level?: boolean
    xp?: boolean
    lootboxes?: boolean
    admin?: boolean
    refreshToken?: boolean
    pokemons?: boolean | User$pokemonsArgs<ExtArgs>
    guessPokemonGames?: boolean | User$guessPokemonGamesArgs<ExtArgs>
    guessShinyGames?: boolean | User$guessShinyGamesArgs<ExtArgs>
    pokedokuGames?: boolean | User$pokedokuGamesArgs<ExtArgs>
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    level?: boolean
    xp?: boolean
    lootboxes?: boolean
    admin?: boolean
    refreshToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    level?: boolean
    xp?: boolean
    lootboxes?: boolean
    admin?: boolean
    refreshToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    level?: boolean
    xp?: boolean
    lootboxes?: boolean
    admin?: boolean
    refreshToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "level" | "xp" | "lootboxes" | "admin" | "refreshToken", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons?: boolean | User$pokemonsArgs<ExtArgs>
    guessPokemonGames?: boolean | User$guessPokemonGamesArgs<ExtArgs>
    guessShinyGames?: boolean | User$guessShinyGamesArgs<ExtArgs>
    pokedokuGames?: boolean | User$pokedokuGamesArgs<ExtArgs>
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pokemons: Prisma.$UserPokemonPayload<ExtArgs>[]
      guessPokemonGames: Prisma.$GuessPokemonGamePayload<ExtArgs>[]
      guessShinyGames: Prisma.$GuessShinyGamePayload<ExtArgs>[]
      pokedokuGames: Prisma.$PokedokuGamePayload<ExtArgs>[]
      passwordResetTokens: Prisma.$PasswordResetTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      level: number
      xp: number
      lootboxes: number
      admin: boolean
      refreshToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemons<T extends User$pokemonsArgs<ExtArgs> = {}>(args?: Subset<T, User$pokemonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guessPokemonGames<T extends User$guessPokemonGamesArgs<ExtArgs> = {}>(args?: Subset<T, User$guessPokemonGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guessShinyGames<T extends User$guessShinyGamesArgs<ExtArgs> = {}>(args?: Subset<T, User$guessShinyGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pokedokuGames<T extends User$pokedokuGamesArgs<ExtArgs> = {}>(args?: Subset<T, User$pokedokuGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResetTokens<T extends User$passwordResetTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly level: FieldRef<"User", 'Int'>
    readonly xp: FieldRef<"User", 'Int'>
    readonly lootboxes: FieldRef<"User", 'Int'>
    readonly admin: FieldRef<"User", 'Boolean'>
    readonly refreshToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pokemons
   */
  export type User$pokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonInclude<ExtArgs> | null
    where?: UserPokemonWhereInput
    orderBy?: UserPokemonOrderByWithRelationInput | UserPokemonOrderByWithRelationInput[]
    cursor?: UserPokemonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPokemonScalarFieldEnum | UserPokemonScalarFieldEnum[]
  }

  /**
   * User.guessPokemonGames
   */
  export type User$guessPokemonGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameInclude<ExtArgs> | null
    where?: GuessPokemonGameWhereInput
    orderBy?: GuessPokemonGameOrderByWithRelationInput | GuessPokemonGameOrderByWithRelationInput[]
    cursor?: GuessPokemonGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuessPokemonGameScalarFieldEnum | GuessPokemonGameScalarFieldEnum[]
  }

  /**
   * User.guessShinyGames
   */
  export type User$guessShinyGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameInclude<ExtArgs> | null
    where?: GuessShinyGameWhereInput
    orderBy?: GuessShinyGameOrderByWithRelationInput | GuessShinyGameOrderByWithRelationInput[]
    cursor?: GuessShinyGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuessShinyGameScalarFieldEnum | GuessShinyGameScalarFieldEnum[]
  }

  /**
   * User.pokedokuGames
   */
  export type User$pokedokuGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameInclude<ExtArgs> | null
    where?: PokedokuGameWhereInput
    orderBy?: PokedokuGameOrderByWithRelationInput | PokedokuGameOrderByWithRelationInput[]
    cursor?: PokedokuGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokedokuGameScalarFieldEnum | PokedokuGameScalarFieldEnum[]
  }

  /**
   * User.passwordResetTokens
   */
  export type User$passwordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    cursor?: PasswordResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pokemon
   */

  export type AggregatePokemon = {
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  export type PokemonAvgAggregateOutputType = {
    id: number | null
    generation: number | null
    hp: number | null
    atk: number | null
    def: number | null
    spAtk: number | null
    spDef: number | null
    speed: number | null
  }

  export type PokemonSumAggregateOutputType = {
    id: number | null
    generation: number | null
    hp: number | null
    atk: number | null
    def: number | null
    spAtk: number | null
    spDef: number | null
    speed: number | null
  }

  export type PokemonMinAggregateOutputType = {
    id: number | null
    name: string | null
    generation: number | null
    urlImage: string | null
    urlShinyImage: string | null
    legendary: boolean | null
    myth: boolean | null
    hp: number | null
    atk: number | null
    def: number | null
    spAtk: number | null
    spDef: number | null
    speed: number | null
  }

  export type PokemonMaxAggregateOutputType = {
    id: number | null
    name: string | null
    generation: number | null
    urlImage: string | null
    urlShinyImage: string | null
    legendary: boolean | null
    myth: boolean | null
    hp: number | null
    atk: number | null
    def: number | null
    spAtk: number | null
    spDef: number | null
    speed: number | null
  }

  export type PokemonCountAggregateOutputType = {
    id: number
    name: number
    generation: number
    urlImage: number
    urlShinyImage: number
    legendary: number
    myth: number
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    _all: number
  }


  export type PokemonAvgAggregateInputType = {
    id?: true
    generation?: true
    hp?: true
    atk?: true
    def?: true
    spAtk?: true
    spDef?: true
    speed?: true
  }

  export type PokemonSumAggregateInputType = {
    id?: true
    generation?: true
    hp?: true
    atk?: true
    def?: true
    spAtk?: true
    spDef?: true
    speed?: true
  }

  export type PokemonMinAggregateInputType = {
    id?: true
    name?: true
    generation?: true
    urlImage?: true
    urlShinyImage?: true
    legendary?: true
    myth?: true
    hp?: true
    atk?: true
    def?: true
    spAtk?: true
    spDef?: true
    speed?: true
  }

  export type PokemonMaxAggregateInputType = {
    id?: true
    name?: true
    generation?: true
    urlImage?: true
    urlShinyImage?: true
    legendary?: true
    myth?: true
    hp?: true
    atk?: true
    def?: true
    spAtk?: true
    spDef?: true
    speed?: true
  }

  export type PokemonCountAggregateInputType = {
    id?: true
    name?: true
    generation?: true
    urlImage?: true
    urlShinyImage?: true
    legendary?: true
    myth?: true
    hp?: true
    atk?: true
    def?: true
    spAtk?: true
    spDef?: true
    speed?: true
    _all?: true
  }

  export type PokemonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to aggregate.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pokemon
    **/
    _count?: true | PokemonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonMaxAggregateInputType
  }

  export type GetPokemonAggregateType<T extends PokemonAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemon[P]>
      : GetScalarType<T[P], AggregatePokemon[P]>
  }




  export type PokemonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonWhereInput
    orderBy?: PokemonOrderByWithAggregationInput | PokemonOrderByWithAggregationInput[]
    by: PokemonScalarFieldEnum[] | PokemonScalarFieldEnum
    having?: PokemonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonCountAggregateInputType | true
    _avg?: PokemonAvgAggregateInputType
    _sum?: PokemonSumAggregateInputType
    _min?: PokemonMinAggregateInputType
    _max?: PokemonMaxAggregateInputType
  }

  export type PokemonGroupByOutputType = {
    id: number
    name: string
    generation: number
    urlImage: string | null
    urlShinyImage: string | null
    legendary: boolean
    myth: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  type GetPokemonGroupByPayload<T extends PokemonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonGroupByOutputType[P]>
        }
      >
    >


  export type PokemonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    generation?: boolean
    urlImage?: boolean
    urlShinyImage?: boolean
    legendary?: boolean
    myth?: boolean
    hp?: boolean
    atk?: boolean
    def?: boolean
    spAtk?: boolean
    spDef?: boolean
    speed?: boolean
    owners?: boolean | Pokemon$ownersArgs<ExtArgs>
    types?: boolean | Pokemon$typesArgs<ExtArgs>
    evolutionsFrom?: boolean | Pokemon$evolutionsFromArgs<ExtArgs>
    evolutionsTo?: boolean | Pokemon$evolutionsToArgs<ExtArgs>
    guessPokemonGames?: boolean | Pokemon$guessPokemonGamesArgs<ExtArgs>
    guessShinyGames?: boolean | Pokemon$guessShinyGamesArgs<ExtArgs>
    pokedokuAnswerCells?: boolean | Pokemon$pokedokuAnswerCellsArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    generation?: boolean
    urlImage?: boolean
    urlShinyImage?: boolean
    legendary?: boolean
    myth?: boolean
    hp?: boolean
    atk?: boolean
    def?: boolean
    spAtk?: boolean
    spDef?: boolean
    speed?: boolean
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    generation?: boolean
    urlImage?: boolean
    urlShinyImage?: boolean
    legendary?: boolean
    myth?: boolean
    hp?: boolean
    atk?: boolean
    def?: boolean
    spAtk?: boolean
    spDef?: boolean
    speed?: boolean
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectScalar = {
    id?: boolean
    name?: boolean
    generation?: boolean
    urlImage?: boolean
    urlShinyImage?: boolean
    legendary?: boolean
    myth?: boolean
    hp?: boolean
    atk?: boolean
    def?: boolean
    spAtk?: boolean
    spDef?: boolean
    speed?: boolean
  }

  export type PokemonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "generation" | "urlImage" | "urlShinyImage" | "legendary" | "myth" | "hp" | "atk" | "def" | "spAtk" | "spDef" | "speed", ExtArgs["result"]["pokemon"]>
  export type PokemonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | Pokemon$ownersArgs<ExtArgs>
    types?: boolean | Pokemon$typesArgs<ExtArgs>
    evolutionsFrom?: boolean | Pokemon$evolutionsFromArgs<ExtArgs>
    evolutionsTo?: boolean | Pokemon$evolutionsToArgs<ExtArgs>
    guessPokemonGames?: boolean | Pokemon$guessPokemonGamesArgs<ExtArgs>
    guessShinyGames?: boolean | Pokemon$guessShinyGamesArgs<ExtArgs>
    pokedokuAnswerCells?: boolean | Pokemon$pokedokuAnswerCellsArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PokemonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PokemonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PokemonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pokemon"
    objects: {
      owners: Prisma.$UserPokemonPayload<ExtArgs>[]
      types: Prisma.$PokemonTypePayload<ExtArgs>[]
      evolutionsFrom: Prisma.$EvolutiveChainPayload<ExtArgs>[]
      evolutionsTo: Prisma.$EvolutiveChainPayload<ExtArgs>[]
      guessPokemonGames: Prisma.$GuessPokemonGamePayload<ExtArgs>[]
      guessShinyGames: Prisma.$GuessShinyGamePayload<ExtArgs>[]
      pokedokuAnswerCells: Prisma.$PokedokuGameCellPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      generation: number
      urlImage: string | null
      urlShinyImage: string | null
      legendary: boolean
      myth: boolean
      hp: number
      atk: number
      def: number
      spAtk: number
      spDef: number
      speed: number
    }, ExtArgs["result"]["pokemon"]>
    composites: {}
  }

  type PokemonGetPayload<S extends boolean | null | undefined | PokemonDefaultArgs> = $Result.GetResult<Prisma.$PokemonPayload, S>

  type PokemonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonCountAggregateInputType | true
    }

  export interface PokemonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pokemon'], meta: { name: 'Pokemon' } }
    /**
     * Find zero or one Pokemon that matches the filter.
     * @param {PokemonFindUniqueArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonFindUniqueArgs>(args: SelectSubset<T, PokemonFindUniqueArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pokemon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonFindUniqueOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonFindFirstArgs>(args?: SelectSubset<T, PokemonFindFirstArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pokemon
     * const pokemon = await prisma.pokemon.findMany()
     * 
     * // Get first 10 Pokemon
     * const pokemon = await prisma.pokemon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonFindManyArgs>(args?: SelectSubset<T, PokemonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pokemon.
     * @param {PokemonCreateArgs} args - Arguments to create a Pokemon.
     * @example
     * // Create one Pokemon
     * const Pokemon = await prisma.pokemon.create({
     *   data: {
     *     // ... data to create a Pokemon
     *   }
     * })
     * 
     */
    create<T extends PokemonCreateArgs>(args: SelectSubset<T, PokemonCreateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pokemon.
     * @param {PokemonCreateManyArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonCreateManyArgs>(args?: SelectSubset<T, PokemonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pokemon and returns the data saved in the database.
     * @param {PokemonCreateManyAndReturnArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pokemon.
     * @param {PokemonDeleteArgs} args - Arguments to delete one Pokemon.
     * @example
     * // Delete one Pokemon
     * const Pokemon = await prisma.pokemon.delete({
     *   where: {
     *     // ... filter to delete one Pokemon
     *   }
     * })
     * 
     */
    delete<T extends PokemonDeleteArgs>(args: SelectSubset<T, PokemonDeleteArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pokemon.
     * @param {PokemonUpdateArgs} args - Arguments to update one Pokemon.
     * @example
     * // Update one Pokemon
     * const pokemon = await prisma.pokemon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonUpdateArgs>(args: SelectSubset<T, PokemonUpdateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pokemon.
     * @param {PokemonDeleteManyArgs} args - Arguments to filter Pokemon to delete.
     * @example
     * // Delete a few Pokemon
     * const { count } = await prisma.pokemon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonDeleteManyArgs>(args?: SelectSubset<T, PokemonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonUpdateManyArgs>(args: SelectSubset<T, PokemonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon and returns the data updated in the database.
     * @param {PokemonUpdateManyAndReturnArgs} args - Arguments to update many Pokemon.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pokemon.
     * @param {PokemonUpsertArgs} args - Arguments to update or create a Pokemon.
     * @example
     * // Update or create a Pokemon
     * const pokemon = await prisma.pokemon.upsert({
     *   create: {
     *     // ... data to create a Pokemon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pokemon we want to update
     *   }
     * })
     */
    upsert<T extends PokemonUpsertArgs>(args: SelectSubset<T, PokemonUpsertArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCountArgs} args - Arguments to filter Pokemon to count.
     * @example
     * // Count the number of Pokemon
     * const count = await prisma.pokemon.count({
     *   where: {
     *     // ... the filter for the Pokemon we want to count
     *   }
     * })
    **/
    count<T extends PokemonCountArgs>(
      args?: Subset<T, PokemonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokemonAggregateArgs>(args: Subset<T, PokemonAggregateArgs>): Prisma.PrismaPromise<GetPokemonAggregateType<T>>

    /**
     * Group by Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokemonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonGroupByArgs['orderBy'] }
        : { orderBy?: PokemonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokemonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pokemon model
   */
  readonly fields: PokemonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pokemon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owners<T extends Pokemon$ownersArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    types<T extends Pokemon$typesArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evolutionsFrom<T extends Pokemon$evolutionsFromArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$evolutionsFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evolutionsTo<T extends Pokemon$evolutionsToArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$evolutionsToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guessPokemonGames<T extends Pokemon$guessPokemonGamesArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$guessPokemonGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guessShinyGames<T extends Pokemon$guessShinyGamesArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$guessShinyGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pokedokuAnswerCells<T extends Pokemon$pokedokuAnswerCellsArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$pokedokuAnswerCellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pokemon model
   */
  interface PokemonFieldRefs {
    readonly id: FieldRef<"Pokemon", 'Int'>
    readonly name: FieldRef<"Pokemon", 'String'>
    readonly generation: FieldRef<"Pokemon", 'Int'>
    readonly urlImage: FieldRef<"Pokemon", 'String'>
    readonly urlShinyImage: FieldRef<"Pokemon", 'String'>
    readonly legendary: FieldRef<"Pokemon", 'Boolean'>
    readonly myth: FieldRef<"Pokemon", 'Boolean'>
    readonly hp: FieldRef<"Pokemon", 'Int'>
    readonly atk: FieldRef<"Pokemon", 'Int'>
    readonly def: FieldRef<"Pokemon", 'Int'>
    readonly spAtk: FieldRef<"Pokemon", 'Int'>
    readonly spDef: FieldRef<"Pokemon", 'Int'>
    readonly speed: FieldRef<"Pokemon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pokemon findUnique
   */
  export type PokemonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findUniqueOrThrow
   */
  export type PokemonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findFirst
   */
  export type PokemonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findFirstOrThrow
   */
  export type PokemonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findMany
   */
  export type PokemonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon create
   */
  export type PokemonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to create a Pokemon.
     */
    data: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
  }

  /**
   * Pokemon createMany
   */
  export type PokemonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pokemon createManyAndReturn
   */
  export type PokemonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pokemon update
   */
  export type PokemonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to update a Pokemon.
     */
    data: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
    /**
     * Choose, which Pokemon to update.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon updateMany
   */
  export type PokemonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number
  }

  /**
   * Pokemon updateManyAndReturn
   */
  export type PokemonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number
  }

  /**
   * Pokemon upsert
   */
  export type PokemonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The filter to search for the Pokemon to update in case it exists.
     */
    where: PokemonWhereUniqueInput
    /**
     * In case the Pokemon found by the `where` argument doesn't exist, create a new Pokemon with this data.
     */
    create: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
    /**
     * In case the Pokemon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
  }

  /**
   * Pokemon delete
   */
  export type PokemonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter which Pokemon to delete.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon deleteMany
   */
  export type PokemonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to delete
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to delete.
     */
    limit?: number
  }

  /**
   * Pokemon.owners
   */
  export type Pokemon$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonInclude<ExtArgs> | null
    where?: UserPokemonWhereInput
    orderBy?: UserPokemonOrderByWithRelationInput | UserPokemonOrderByWithRelationInput[]
    cursor?: UserPokemonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPokemonScalarFieldEnum | UserPokemonScalarFieldEnum[]
  }

  /**
   * Pokemon.types
   */
  export type Pokemon$typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    where?: PokemonTypeWhereInput
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    cursor?: PokemonTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * Pokemon.evolutionsFrom
   */
  export type Pokemon$evolutionsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainInclude<ExtArgs> | null
    where?: EvolutiveChainWhereInput
    orderBy?: EvolutiveChainOrderByWithRelationInput | EvolutiveChainOrderByWithRelationInput[]
    cursor?: EvolutiveChainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvolutiveChainScalarFieldEnum | EvolutiveChainScalarFieldEnum[]
  }

  /**
   * Pokemon.evolutionsTo
   */
  export type Pokemon$evolutionsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainInclude<ExtArgs> | null
    where?: EvolutiveChainWhereInput
    orderBy?: EvolutiveChainOrderByWithRelationInput | EvolutiveChainOrderByWithRelationInput[]
    cursor?: EvolutiveChainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvolutiveChainScalarFieldEnum | EvolutiveChainScalarFieldEnum[]
  }

  /**
   * Pokemon.guessPokemonGames
   */
  export type Pokemon$guessPokemonGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameInclude<ExtArgs> | null
    where?: GuessPokemonGameWhereInput
    orderBy?: GuessPokemonGameOrderByWithRelationInput | GuessPokemonGameOrderByWithRelationInput[]
    cursor?: GuessPokemonGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuessPokemonGameScalarFieldEnum | GuessPokemonGameScalarFieldEnum[]
  }

  /**
   * Pokemon.guessShinyGames
   */
  export type Pokemon$guessShinyGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameInclude<ExtArgs> | null
    where?: GuessShinyGameWhereInput
    orderBy?: GuessShinyGameOrderByWithRelationInput | GuessShinyGameOrderByWithRelationInput[]
    cursor?: GuessShinyGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuessShinyGameScalarFieldEnum | GuessShinyGameScalarFieldEnum[]
  }

  /**
   * Pokemon.pokedokuAnswerCells
   */
  export type Pokemon$pokedokuAnswerCellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellInclude<ExtArgs> | null
    where?: PokedokuGameCellWhereInput
    orderBy?: PokedokuGameCellOrderByWithRelationInput | PokedokuGameCellOrderByWithRelationInput[]
    cursor?: PokedokuGameCellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokedokuGameCellScalarFieldEnum | PokedokuGameCellScalarFieldEnum[]
  }

  /**
   * Pokemon without action
   */
  export type PokemonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
  }


  /**
   * Model Type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeSumAggregateOutputType = {
    id: number | null
  }

  export type TypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TypeAvgAggregateInputType = {
    id?: true
  }

  export type TypeSumAggregateInputType = {
    id?: true
  }

  export type TypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithAggregationInput | TypeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _avg?: TypeAvgAggregateInputType
    _sum?: TypeSumAggregateInputType
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    id: number
    name: string
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Pokemon?: boolean | Type$PokemonArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>

  export type TypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["type"]>
  export type TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pokemon?: boolean | Type$PokemonArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type"
    objects: {
      Pokemon: Prisma.$PokemonTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["type"]>
    composites: {}
  }

  type TypeGetPayload<S extends boolean | null | undefined | TypeDefaultArgs> = $Result.GetResult<Prisma.$TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeFindUniqueArgs>(args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeFindFirstArgs>(args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeFindManyArgs>(args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
     */
    create<T extends TypeCreateArgs>(args: SelectSubset<T, TypeCreateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types.
     * @param {TypeCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeCreateManyArgs>(args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Types and returns the data saved in the database.
     * @param {TypeCreateManyAndReturnArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Types and only return the `id`
     * const typeWithIdOnly = await prisma.type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
     */
    delete<T extends TypeDeleteArgs>(args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeUpdateArgs>(args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeDeleteManyArgs>(args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeUpdateManyArgs>(args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types and returns the data updated in the database.
     * @param {TypeUpdateManyAndReturnArgs} args - Arguments to update many Types.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Types and only return the `id`
     * const typeWithIdOnly = await prisma.type.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
     */
    upsert<T extends TypeUpsertArgs>(args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type model
   */
  readonly fields: TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pokemon<T extends Type$PokemonArgs<ExtArgs> = {}>(args?: Subset<T, Type$PokemonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Type model
   */
  interface TypeFieldRefs {
    readonly id: FieldRef<"Type", 'Int'>
    readonly name: FieldRef<"Type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Type findUnique
   */
  export type TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findFirst
   */
  export type TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }

  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Type createManyAndReturn
   */
  export type TypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type updateManyAndReturn
   */
  export type TypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }

  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to delete.
     */
    limit?: number
  }

  /**
   * Type.Pokemon
   */
  export type Type$PokemonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    where?: PokemonTypeWhereInput
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    cursor?: PokemonTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * Type without action
   */
  export type TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
  }


  /**
   * Model UserPokemon
   */

  export type AggregateUserPokemon = {
    _count: UserPokemonCountAggregateOutputType | null
    _avg: UserPokemonAvgAggregateOutputType | null
    _sum: UserPokemonSumAggregateOutputType | null
    _min: UserPokemonMinAggregateOutputType | null
    _max: UserPokemonMaxAggregateOutputType | null
  }

  export type UserPokemonAvgAggregateOutputType = {
    userId: number | null
    pokemonId: number | null
    quantity: number | null
  }

  export type UserPokemonSumAggregateOutputType = {
    userId: number | null
    pokemonId: number | null
    quantity: number | null
  }

  export type UserPokemonMinAggregateOutputType = {
    userId: number | null
    pokemonId: number | null
    quantity: number | null
  }

  export type UserPokemonMaxAggregateOutputType = {
    userId: number | null
    pokemonId: number | null
    quantity: number | null
  }

  export type UserPokemonCountAggregateOutputType = {
    userId: number
    pokemonId: number
    quantity: number
    _all: number
  }


  export type UserPokemonAvgAggregateInputType = {
    userId?: true
    pokemonId?: true
    quantity?: true
  }

  export type UserPokemonSumAggregateInputType = {
    userId?: true
    pokemonId?: true
    quantity?: true
  }

  export type UserPokemonMinAggregateInputType = {
    userId?: true
    pokemonId?: true
    quantity?: true
  }

  export type UserPokemonMaxAggregateInputType = {
    userId?: true
    pokemonId?: true
    quantity?: true
  }

  export type UserPokemonCountAggregateInputType = {
    userId?: true
    pokemonId?: true
    quantity?: true
    _all?: true
  }

  export type UserPokemonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPokemon to aggregate.
     */
    where?: UserPokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPokemon to fetch.
     */
    orderBy?: UserPokemonOrderByWithRelationInput | UserPokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPokemon
    **/
    _count?: true | UserPokemonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPokemonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPokemonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPokemonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPokemonMaxAggregateInputType
  }

  export type GetUserPokemonAggregateType<T extends UserPokemonAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPokemon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPokemon[P]>
      : GetScalarType<T[P], AggregateUserPokemon[P]>
  }




  export type UserPokemonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPokemonWhereInput
    orderBy?: UserPokemonOrderByWithAggregationInput | UserPokemonOrderByWithAggregationInput[]
    by: UserPokemonScalarFieldEnum[] | UserPokemonScalarFieldEnum
    having?: UserPokemonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPokemonCountAggregateInputType | true
    _avg?: UserPokemonAvgAggregateInputType
    _sum?: UserPokemonSumAggregateInputType
    _min?: UserPokemonMinAggregateInputType
    _max?: UserPokemonMaxAggregateInputType
  }

  export type UserPokemonGroupByOutputType = {
    userId: number
    pokemonId: number
    quantity: number
    _count: UserPokemonCountAggregateOutputType | null
    _avg: UserPokemonAvgAggregateOutputType | null
    _sum: UserPokemonSumAggregateOutputType | null
    _min: UserPokemonMinAggregateOutputType | null
    _max: UserPokemonMaxAggregateOutputType | null
  }

  type GetUserPokemonGroupByPayload<T extends UserPokemonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPokemonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPokemonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPokemonGroupByOutputType[P]>
            : GetScalarType<T[P], UserPokemonGroupByOutputType[P]>
        }
      >
    >


  export type UserPokemonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    pokemonId?: boolean
    quantity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPokemon"]>

  export type UserPokemonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    pokemonId?: boolean
    quantity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPokemon"]>

  export type UserPokemonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    pokemonId?: boolean
    quantity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPokemon"]>

  export type UserPokemonSelectScalar = {
    userId?: boolean
    pokemonId?: boolean
    quantity?: boolean
  }

  export type UserPokemonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "pokemonId" | "quantity", ExtArgs["result"]["userPokemon"]>
  export type UserPokemonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type UserPokemonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type UserPokemonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }

  export type $UserPokemonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPokemon"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pokemon: Prisma.$PokemonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      pokemonId: number
      quantity: number
    }, ExtArgs["result"]["userPokemon"]>
    composites: {}
  }

  type UserPokemonGetPayload<S extends boolean | null | undefined | UserPokemonDefaultArgs> = $Result.GetResult<Prisma.$UserPokemonPayload, S>

  type UserPokemonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPokemonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPokemonCountAggregateInputType | true
    }

  export interface UserPokemonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPokemon'], meta: { name: 'UserPokemon' } }
    /**
     * Find zero or one UserPokemon that matches the filter.
     * @param {UserPokemonFindUniqueArgs} args - Arguments to find a UserPokemon
     * @example
     * // Get one UserPokemon
     * const userPokemon = await prisma.userPokemon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPokemonFindUniqueArgs>(args: SelectSubset<T, UserPokemonFindUniqueArgs<ExtArgs>>): Prisma__UserPokemonClient<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPokemon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPokemonFindUniqueOrThrowArgs} args - Arguments to find a UserPokemon
     * @example
     * // Get one UserPokemon
     * const userPokemon = await prisma.userPokemon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPokemonFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPokemonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPokemonClient<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPokemonFindFirstArgs} args - Arguments to find a UserPokemon
     * @example
     * // Get one UserPokemon
     * const userPokemon = await prisma.userPokemon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPokemonFindFirstArgs>(args?: SelectSubset<T, UserPokemonFindFirstArgs<ExtArgs>>): Prisma__UserPokemonClient<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPokemon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPokemonFindFirstOrThrowArgs} args - Arguments to find a UserPokemon
     * @example
     * // Get one UserPokemon
     * const userPokemon = await prisma.userPokemon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPokemonFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPokemonFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPokemonClient<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPokemonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPokemon
     * const userPokemon = await prisma.userPokemon.findMany()
     * 
     * // Get first 10 UserPokemon
     * const userPokemon = await prisma.userPokemon.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userPokemonWithUserIdOnly = await prisma.userPokemon.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserPokemonFindManyArgs>(args?: SelectSubset<T, UserPokemonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPokemon.
     * @param {UserPokemonCreateArgs} args - Arguments to create a UserPokemon.
     * @example
     * // Create one UserPokemon
     * const UserPokemon = await prisma.userPokemon.create({
     *   data: {
     *     // ... data to create a UserPokemon
     *   }
     * })
     * 
     */
    create<T extends UserPokemonCreateArgs>(args: SelectSubset<T, UserPokemonCreateArgs<ExtArgs>>): Prisma__UserPokemonClient<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPokemon.
     * @param {UserPokemonCreateManyArgs} args - Arguments to create many UserPokemon.
     * @example
     * // Create many UserPokemon
     * const userPokemon = await prisma.userPokemon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPokemonCreateManyArgs>(args?: SelectSubset<T, UserPokemonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPokemon and returns the data saved in the database.
     * @param {UserPokemonCreateManyAndReturnArgs} args - Arguments to create many UserPokemon.
     * @example
     * // Create many UserPokemon
     * const userPokemon = await prisma.userPokemon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPokemon and only return the `userId`
     * const userPokemonWithUserIdOnly = await prisma.userPokemon.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPokemonCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPokemonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPokemon.
     * @param {UserPokemonDeleteArgs} args - Arguments to delete one UserPokemon.
     * @example
     * // Delete one UserPokemon
     * const UserPokemon = await prisma.userPokemon.delete({
     *   where: {
     *     // ... filter to delete one UserPokemon
     *   }
     * })
     * 
     */
    delete<T extends UserPokemonDeleteArgs>(args: SelectSubset<T, UserPokemonDeleteArgs<ExtArgs>>): Prisma__UserPokemonClient<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPokemon.
     * @param {UserPokemonUpdateArgs} args - Arguments to update one UserPokemon.
     * @example
     * // Update one UserPokemon
     * const userPokemon = await prisma.userPokemon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPokemonUpdateArgs>(args: SelectSubset<T, UserPokemonUpdateArgs<ExtArgs>>): Prisma__UserPokemonClient<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPokemon.
     * @param {UserPokemonDeleteManyArgs} args - Arguments to filter UserPokemon to delete.
     * @example
     * // Delete a few UserPokemon
     * const { count } = await prisma.userPokemon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPokemonDeleteManyArgs>(args?: SelectSubset<T, UserPokemonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPokemonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPokemon
     * const userPokemon = await prisma.userPokemon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPokemonUpdateManyArgs>(args: SelectSubset<T, UserPokemonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPokemon and returns the data updated in the database.
     * @param {UserPokemonUpdateManyAndReturnArgs} args - Arguments to update many UserPokemon.
     * @example
     * // Update many UserPokemon
     * const userPokemon = await prisma.userPokemon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPokemon and only return the `userId`
     * const userPokemonWithUserIdOnly = await prisma.userPokemon.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPokemonUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPokemonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPokemon.
     * @param {UserPokemonUpsertArgs} args - Arguments to update or create a UserPokemon.
     * @example
     * // Update or create a UserPokemon
     * const userPokemon = await prisma.userPokemon.upsert({
     *   create: {
     *     // ... data to create a UserPokemon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPokemon we want to update
     *   }
     * })
     */
    upsert<T extends UserPokemonUpsertArgs>(args: SelectSubset<T, UserPokemonUpsertArgs<ExtArgs>>): Prisma__UserPokemonClient<$Result.GetResult<Prisma.$UserPokemonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPokemonCountArgs} args - Arguments to filter UserPokemon to count.
     * @example
     * // Count the number of UserPokemon
     * const count = await prisma.userPokemon.count({
     *   where: {
     *     // ... the filter for the UserPokemon we want to count
     *   }
     * })
    **/
    count<T extends UserPokemonCountArgs>(
      args?: Subset<T, UserPokemonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPokemonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPokemonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPokemonAggregateArgs>(args: Subset<T, UserPokemonAggregateArgs>): Prisma.PrismaPromise<GetUserPokemonAggregateType<T>>

    /**
     * Group by UserPokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPokemonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPokemonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPokemonGroupByArgs['orderBy'] }
        : { orderBy?: UserPokemonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPokemonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPokemonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPokemon model
   */
  readonly fields: UserPokemonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPokemon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPokemonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPokemon model
   */
  interface UserPokemonFieldRefs {
    readonly userId: FieldRef<"UserPokemon", 'Int'>
    readonly pokemonId: FieldRef<"UserPokemon", 'Int'>
    readonly quantity: FieldRef<"UserPokemon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserPokemon findUnique
   */
  export type UserPokemonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonInclude<ExtArgs> | null
    /**
     * Filter, which UserPokemon to fetch.
     */
    where: UserPokemonWhereUniqueInput
  }

  /**
   * UserPokemon findUniqueOrThrow
   */
  export type UserPokemonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonInclude<ExtArgs> | null
    /**
     * Filter, which UserPokemon to fetch.
     */
    where: UserPokemonWhereUniqueInput
  }

  /**
   * UserPokemon findFirst
   */
  export type UserPokemonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonInclude<ExtArgs> | null
    /**
     * Filter, which UserPokemon to fetch.
     */
    where?: UserPokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPokemon to fetch.
     */
    orderBy?: UserPokemonOrderByWithRelationInput | UserPokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPokemon.
     */
    cursor?: UserPokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPokemon.
     */
    distinct?: UserPokemonScalarFieldEnum | UserPokemonScalarFieldEnum[]
  }

  /**
   * UserPokemon findFirstOrThrow
   */
  export type UserPokemonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonInclude<ExtArgs> | null
    /**
     * Filter, which UserPokemon to fetch.
     */
    where?: UserPokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPokemon to fetch.
     */
    orderBy?: UserPokemonOrderByWithRelationInput | UserPokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPokemon.
     */
    cursor?: UserPokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPokemon.
     */
    distinct?: UserPokemonScalarFieldEnum | UserPokemonScalarFieldEnum[]
  }

  /**
   * UserPokemon findMany
   */
  export type UserPokemonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonInclude<ExtArgs> | null
    /**
     * Filter, which UserPokemon to fetch.
     */
    where?: UserPokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPokemon to fetch.
     */
    orderBy?: UserPokemonOrderByWithRelationInput | UserPokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPokemon.
     */
    cursor?: UserPokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPokemon.
     */
    distinct?: UserPokemonScalarFieldEnum | UserPokemonScalarFieldEnum[]
  }

  /**
   * UserPokemon create
   */
  export type UserPokemonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPokemon.
     */
    data: XOR<UserPokemonCreateInput, UserPokemonUncheckedCreateInput>
  }

  /**
   * UserPokemon createMany
   */
  export type UserPokemonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPokemon.
     */
    data: UserPokemonCreateManyInput | UserPokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPokemon createManyAndReturn
   */
  export type UserPokemonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * The data used to create many UserPokemon.
     */
    data: UserPokemonCreateManyInput | UserPokemonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPokemon update
   */
  export type UserPokemonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPokemon.
     */
    data: XOR<UserPokemonUpdateInput, UserPokemonUncheckedUpdateInput>
    /**
     * Choose, which UserPokemon to update.
     */
    where: UserPokemonWhereUniqueInput
  }

  /**
   * UserPokemon updateMany
   */
  export type UserPokemonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPokemon.
     */
    data: XOR<UserPokemonUpdateManyMutationInput, UserPokemonUncheckedUpdateManyInput>
    /**
     * Filter which UserPokemon to update
     */
    where?: UserPokemonWhereInput
    /**
     * Limit how many UserPokemon to update.
     */
    limit?: number
  }

  /**
   * UserPokemon updateManyAndReturn
   */
  export type UserPokemonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * The data used to update UserPokemon.
     */
    data: XOR<UserPokemonUpdateManyMutationInput, UserPokemonUncheckedUpdateManyInput>
    /**
     * Filter which UserPokemon to update
     */
    where?: UserPokemonWhereInput
    /**
     * Limit how many UserPokemon to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPokemon upsert
   */
  export type UserPokemonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPokemon to update in case it exists.
     */
    where: UserPokemonWhereUniqueInput
    /**
     * In case the UserPokemon found by the `where` argument doesn't exist, create a new UserPokemon with this data.
     */
    create: XOR<UserPokemonCreateInput, UserPokemonUncheckedCreateInput>
    /**
     * In case the UserPokemon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPokemonUpdateInput, UserPokemonUncheckedUpdateInput>
  }

  /**
   * UserPokemon delete
   */
  export type UserPokemonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonInclude<ExtArgs> | null
    /**
     * Filter which UserPokemon to delete.
     */
    where: UserPokemonWhereUniqueInput
  }

  /**
   * UserPokemon deleteMany
   */
  export type UserPokemonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPokemon to delete
     */
    where?: UserPokemonWhereInput
    /**
     * Limit how many UserPokemon to delete.
     */
    limit?: number
  }

  /**
   * UserPokemon without action
   */
  export type UserPokemonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPokemon
     */
    select?: UserPokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPokemon
     */
    omit?: UserPokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPokemonInclude<ExtArgs> | null
  }


  /**
   * Model PokemonType
   */

  export type AggregatePokemonType = {
    _count: PokemonTypeCountAggregateOutputType | null
    _avg: PokemonTypeAvgAggregateOutputType | null
    _sum: PokemonTypeSumAggregateOutputType | null
    _min: PokemonTypeMinAggregateOutputType | null
    _max: PokemonTypeMaxAggregateOutputType | null
  }

  export type PokemonTypeAvgAggregateOutputType = {
    pokemonId: number | null
    typeId: number | null
  }

  export type PokemonTypeSumAggregateOutputType = {
    pokemonId: number | null
    typeId: number | null
  }

  export type PokemonTypeMinAggregateOutputType = {
    pokemonId: number | null
    typeId: number | null
  }

  export type PokemonTypeMaxAggregateOutputType = {
    pokemonId: number | null
    typeId: number | null
  }

  export type PokemonTypeCountAggregateOutputType = {
    pokemonId: number
    typeId: number
    _all: number
  }


  export type PokemonTypeAvgAggregateInputType = {
    pokemonId?: true
    typeId?: true
  }

  export type PokemonTypeSumAggregateInputType = {
    pokemonId?: true
    typeId?: true
  }

  export type PokemonTypeMinAggregateInputType = {
    pokemonId?: true
    typeId?: true
  }

  export type PokemonTypeMaxAggregateInputType = {
    pokemonId?: true
    typeId?: true
  }

  export type PokemonTypeCountAggregateInputType = {
    pokemonId?: true
    typeId?: true
    _all?: true
  }

  export type PokemonTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonType to aggregate.
     */
    where?: PokemonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonTypes to fetch.
     */
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokemonTypes
    **/
    _count?: true | PokemonTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonTypeMaxAggregateInputType
  }

  export type GetPokemonTypeAggregateType<T extends PokemonTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemonType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemonType[P]>
      : GetScalarType<T[P], AggregatePokemonType[P]>
  }




  export type PokemonTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonTypeWhereInput
    orderBy?: PokemonTypeOrderByWithAggregationInput | PokemonTypeOrderByWithAggregationInput[]
    by: PokemonTypeScalarFieldEnum[] | PokemonTypeScalarFieldEnum
    having?: PokemonTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonTypeCountAggregateInputType | true
    _avg?: PokemonTypeAvgAggregateInputType
    _sum?: PokemonTypeSumAggregateInputType
    _min?: PokemonTypeMinAggregateInputType
    _max?: PokemonTypeMaxAggregateInputType
  }

  export type PokemonTypeGroupByOutputType = {
    pokemonId: number
    typeId: number
    _count: PokemonTypeCountAggregateOutputType | null
    _avg: PokemonTypeAvgAggregateOutputType | null
    _sum: PokemonTypeSumAggregateOutputType | null
    _min: PokemonTypeMinAggregateOutputType | null
    _max: PokemonTypeMaxAggregateOutputType | null
  }

  type GetPokemonTypeGroupByPayload<T extends PokemonTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonTypeGroupByOutputType[P]>
        }
      >
    >


  export type PokemonTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pokemonId?: boolean
    typeId?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonType"]>

  export type PokemonTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pokemonId?: boolean
    typeId?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonType"]>

  export type PokemonTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pokemonId?: boolean
    typeId?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonType"]>

  export type PokemonTypeSelectScalar = {
    pokemonId?: boolean
    typeId?: boolean
  }

  export type PokemonTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pokemonId" | "typeId", ExtArgs["result"]["pokemonType"]>
  export type PokemonTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }
  export type PokemonTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }
  export type PokemonTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }

  export type $PokemonTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokemonType"
    objects: {
      pokemon: Prisma.$PokemonPayload<ExtArgs>
      type: Prisma.$TypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pokemonId: number
      typeId: number
    }, ExtArgs["result"]["pokemonType"]>
    composites: {}
  }

  type PokemonTypeGetPayload<S extends boolean | null | undefined | PokemonTypeDefaultArgs> = $Result.GetResult<Prisma.$PokemonTypePayload, S>

  type PokemonTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonTypeCountAggregateInputType | true
    }

  export interface PokemonTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokemonType'], meta: { name: 'PokemonType' } }
    /**
     * Find zero or one PokemonType that matches the filter.
     * @param {PokemonTypeFindUniqueArgs} args - Arguments to find a PokemonType
     * @example
     * // Get one PokemonType
     * const pokemonType = await prisma.pokemonType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonTypeFindUniqueArgs>(args: SelectSubset<T, PokemonTypeFindUniqueArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PokemonType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonTypeFindUniqueOrThrowArgs} args - Arguments to find a PokemonType
     * @example
     * // Get one PokemonType
     * const pokemonType = await prisma.pokemonType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeFindFirstArgs} args - Arguments to find a PokemonType
     * @example
     * // Get one PokemonType
     * const pokemonType = await prisma.pokemonType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonTypeFindFirstArgs>(args?: SelectSubset<T, PokemonTypeFindFirstArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeFindFirstOrThrowArgs} args - Arguments to find a PokemonType
     * @example
     * // Get one PokemonType
     * const pokemonType = await prisma.pokemonType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PokemonTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonTypes
     * const pokemonTypes = await prisma.pokemonType.findMany()
     * 
     * // Get first 10 PokemonTypes
     * const pokemonTypes = await prisma.pokemonType.findMany({ take: 10 })
     * 
     * // Only select the `pokemonId`
     * const pokemonTypeWithPokemonIdOnly = await prisma.pokemonType.findMany({ select: { pokemonId: true } })
     * 
     */
    findMany<T extends PokemonTypeFindManyArgs>(args?: SelectSubset<T, PokemonTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PokemonType.
     * @param {PokemonTypeCreateArgs} args - Arguments to create a PokemonType.
     * @example
     * // Create one PokemonType
     * const PokemonType = await prisma.pokemonType.create({
     *   data: {
     *     // ... data to create a PokemonType
     *   }
     * })
     * 
     */
    create<T extends PokemonTypeCreateArgs>(args: SelectSubset<T, PokemonTypeCreateArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PokemonTypes.
     * @param {PokemonTypeCreateManyArgs} args - Arguments to create many PokemonTypes.
     * @example
     * // Create many PokemonTypes
     * const pokemonType = await prisma.pokemonType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonTypeCreateManyArgs>(args?: SelectSubset<T, PokemonTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokemonTypes and returns the data saved in the database.
     * @param {PokemonTypeCreateManyAndReturnArgs} args - Arguments to create many PokemonTypes.
     * @example
     * // Create many PokemonTypes
     * const pokemonType = await prisma.pokemonType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokemonTypes and only return the `pokemonId`
     * const pokemonTypeWithPokemonIdOnly = await prisma.pokemonType.createManyAndReturn({
     *   select: { pokemonId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PokemonType.
     * @param {PokemonTypeDeleteArgs} args - Arguments to delete one PokemonType.
     * @example
     * // Delete one PokemonType
     * const PokemonType = await prisma.pokemonType.delete({
     *   where: {
     *     // ... filter to delete one PokemonType
     *   }
     * })
     * 
     */
    delete<T extends PokemonTypeDeleteArgs>(args: SelectSubset<T, PokemonTypeDeleteArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PokemonType.
     * @param {PokemonTypeUpdateArgs} args - Arguments to update one PokemonType.
     * @example
     * // Update one PokemonType
     * const pokemonType = await prisma.pokemonType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonTypeUpdateArgs>(args: SelectSubset<T, PokemonTypeUpdateArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PokemonTypes.
     * @param {PokemonTypeDeleteManyArgs} args - Arguments to filter PokemonTypes to delete.
     * @example
     * // Delete a few PokemonTypes
     * const { count } = await prisma.pokemonType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonTypeDeleteManyArgs>(args?: SelectSubset<T, PokemonTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonTypes
     * const pokemonType = await prisma.pokemonType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonTypeUpdateManyArgs>(args: SelectSubset<T, PokemonTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonTypes and returns the data updated in the database.
     * @param {PokemonTypeUpdateManyAndReturnArgs} args - Arguments to update many PokemonTypes.
     * @example
     * // Update many PokemonTypes
     * const pokemonType = await prisma.pokemonType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PokemonTypes and only return the `pokemonId`
     * const pokemonTypeWithPokemonIdOnly = await prisma.pokemonType.updateManyAndReturn({
     *   select: { pokemonId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PokemonType.
     * @param {PokemonTypeUpsertArgs} args - Arguments to update or create a PokemonType.
     * @example
     * // Update or create a PokemonType
     * const pokemonType = await prisma.pokemonType.upsert({
     *   create: {
     *     // ... data to create a PokemonType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonType we want to update
     *   }
     * })
     */
    upsert<T extends PokemonTypeUpsertArgs>(args: SelectSubset<T, PokemonTypeUpsertArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PokemonTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeCountArgs} args - Arguments to filter PokemonTypes to count.
     * @example
     * // Count the number of PokemonTypes
     * const count = await prisma.pokemonType.count({
     *   where: {
     *     // ... the filter for the PokemonTypes we want to count
     *   }
     * })
    **/
    count<T extends PokemonTypeCountArgs>(
      args?: Subset<T, PokemonTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokemonType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokemonTypeAggregateArgs>(args: Subset<T, PokemonTypeAggregateArgs>): Prisma.PrismaPromise<GetPokemonTypeAggregateType<T>>

    /**
     * Group by PokemonType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokemonTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonTypeGroupByArgs['orderBy'] }
        : { orderBy?: PokemonTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokemonTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokemonType model
   */
  readonly fields: PokemonTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokemonType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends TypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeDefaultArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PokemonType model
   */
  interface PokemonTypeFieldRefs {
    readonly pokemonId: FieldRef<"PokemonType", 'Int'>
    readonly typeId: FieldRef<"PokemonType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PokemonType findUnique
   */
  export type PokemonTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonType to fetch.
     */
    where: PokemonTypeWhereUniqueInput
  }

  /**
   * PokemonType findUniqueOrThrow
   */
  export type PokemonTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonType to fetch.
     */
    where: PokemonTypeWhereUniqueInput
  }

  /**
   * PokemonType findFirst
   */
  export type PokemonTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonType to fetch.
     */
    where?: PokemonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonTypes to fetch.
     */
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonTypes.
     */
    cursor?: PokemonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonTypes.
     */
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * PokemonType findFirstOrThrow
   */
  export type PokemonTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonType to fetch.
     */
    where?: PokemonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonTypes to fetch.
     */
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonTypes.
     */
    cursor?: PokemonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonTypes.
     */
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * PokemonType findMany
   */
  export type PokemonTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonTypes to fetch.
     */
    where?: PokemonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonTypes to fetch.
     */
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokemonTypes.
     */
    cursor?: PokemonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonTypes.
     */
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * PokemonType create
   */
  export type PokemonTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a PokemonType.
     */
    data: XOR<PokemonTypeCreateInput, PokemonTypeUncheckedCreateInput>
  }

  /**
   * PokemonType createMany
   */
  export type PokemonTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonTypes.
     */
    data: PokemonTypeCreateManyInput | PokemonTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonType createManyAndReturn
   */
  export type PokemonTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * The data used to create many PokemonTypes.
     */
    data: PokemonTypeCreateManyInput | PokemonTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokemonType update
   */
  export type PokemonTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a PokemonType.
     */
    data: XOR<PokemonTypeUpdateInput, PokemonTypeUncheckedUpdateInput>
    /**
     * Choose, which PokemonType to update.
     */
    where: PokemonTypeWhereUniqueInput
  }

  /**
   * PokemonType updateMany
   */
  export type PokemonTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonTypes.
     */
    data: XOR<PokemonTypeUpdateManyMutationInput, PokemonTypeUncheckedUpdateManyInput>
    /**
     * Filter which PokemonTypes to update
     */
    where?: PokemonTypeWhereInput
    /**
     * Limit how many PokemonTypes to update.
     */
    limit?: number
  }

  /**
   * PokemonType updateManyAndReturn
   */
  export type PokemonTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * The data used to update PokemonTypes.
     */
    data: XOR<PokemonTypeUpdateManyMutationInput, PokemonTypeUncheckedUpdateManyInput>
    /**
     * Filter which PokemonTypes to update
     */
    where?: PokemonTypeWhereInput
    /**
     * Limit how many PokemonTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokemonType upsert
   */
  export type PokemonTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the PokemonType to update in case it exists.
     */
    where: PokemonTypeWhereUniqueInput
    /**
     * In case the PokemonType found by the `where` argument doesn't exist, create a new PokemonType with this data.
     */
    create: XOR<PokemonTypeCreateInput, PokemonTypeUncheckedCreateInput>
    /**
     * In case the PokemonType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonTypeUpdateInput, PokemonTypeUncheckedUpdateInput>
  }

  /**
   * PokemonType delete
   */
  export type PokemonTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter which PokemonType to delete.
     */
    where: PokemonTypeWhereUniqueInput
  }

  /**
   * PokemonType deleteMany
   */
  export type PokemonTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonTypes to delete
     */
    where?: PokemonTypeWhereInput
    /**
     * Limit how many PokemonTypes to delete.
     */
    limit?: number
  }

  /**
   * PokemonType without action
   */
  export type PokemonTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
  }


  /**
   * Model EvolutiveChain
   */

  export type AggregateEvolutiveChain = {
    _count: EvolutiveChainCountAggregateOutputType | null
    _avg: EvolutiveChainAvgAggregateOutputType | null
    _sum: EvolutiveChainSumAggregateOutputType | null
    _min: EvolutiveChainMinAggregateOutputType | null
    _max: EvolutiveChainMaxAggregateOutputType | null
  }

  export type EvolutiveChainAvgAggregateOutputType = {
    evolutionChainId: number | null
    fromPokemonId: number | null
    toPokemonId: number | null
  }

  export type EvolutiveChainSumAggregateOutputType = {
    evolutionChainId: number | null
    fromPokemonId: number | null
    toPokemonId: number | null
  }

  export type EvolutiveChainMinAggregateOutputType = {
    evolutionChainId: number | null
    fromPokemonId: number | null
    toPokemonId: number | null
    method: string | null
    condition: string | null
  }

  export type EvolutiveChainMaxAggregateOutputType = {
    evolutionChainId: number | null
    fromPokemonId: number | null
    toPokemonId: number | null
    method: string | null
    condition: string | null
  }

  export type EvolutiveChainCountAggregateOutputType = {
    evolutionChainId: number
    fromPokemonId: number
    toPokemonId: number
    method: number
    condition: number
    _all: number
  }


  export type EvolutiveChainAvgAggregateInputType = {
    evolutionChainId?: true
    fromPokemonId?: true
    toPokemonId?: true
  }

  export type EvolutiveChainSumAggregateInputType = {
    evolutionChainId?: true
    fromPokemonId?: true
    toPokemonId?: true
  }

  export type EvolutiveChainMinAggregateInputType = {
    evolutionChainId?: true
    fromPokemonId?: true
    toPokemonId?: true
    method?: true
    condition?: true
  }

  export type EvolutiveChainMaxAggregateInputType = {
    evolutionChainId?: true
    fromPokemonId?: true
    toPokemonId?: true
    method?: true
    condition?: true
  }

  export type EvolutiveChainCountAggregateInputType = {
    evolutionChainId?: true
    fromPokemonId?: true
    toPokemonId?: true
    method?: true
    condition?: true
    _all?: true
  }

  export type EvolutiveChainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvolutiveChain to aggregate.
     */
    where?: EvolutiveChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvolutiveChains to fetch.
     */
    orderBy?: EvolutiveChainOrderByWithRelationInput | EvolutiveChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvolutiveChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvolutiveChains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvolutiveChains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvolutiveChains
    **/
    _count?: true | EvolutiveChainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvolutiveChainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvolutiveChainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvolutiveChainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvolutiveChainMaxAggregateInputType
  }

  export type GetEvolutiveChainAggregateType<T extends EvolutiveChainAggregateArgs> = {
        [P in keyof T & keyof AggregateEvolutiveChain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvolutiveChain[P]>
      : GetScalarType<T[P], AggregateEvolutiveChain[P]>
  }




  export type EvolutiveChainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvolutiveChainWhereInput
    orderBy?: EvolutiveChainOrderByWithAggregationInput | EvolutiveChainOrderByWithAggregationInput[]
    by: EvolutiveChainScalarFieldEnum[] | EvolutiveChainScalarFieldEnum
    having?: EvolutiveChainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvolutiveChainCountAggregateInputType | true
    _avg?: EvolutiveChainAvgAggregateInputType
    _sum?: EvolutiveChainSumAggregateInputType
    _min?: EvolutiveChainMinAggregateInputType
    _max?: EvolutiveChainMaxAggregateInputType
  }

  export type EvolutiveChainGroupByOutputType = {
    evolutionChainId: number
    fromPokemonId: number
    toPokemonId: number
    method: string | null
    condition: string | null
    _count: EvolutiveChainCountAggregateOutputType | null
    _avg: EvolutiveChainAvgAggregateOutputType | null
    _sum: EvolutiveChainSumAggregateOutputType | null
    _min: EvolutiveChainMinAggregateOutputType | null
    _max: EvolutiveChainMaxAggregateOutputType | null
  }

  type GetEvolutiveChainGroupByPayload<T extends EvolutiveChainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvolutiveChainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvolutiveChainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvolutiveChainGroupByOutputType[P]>
            : GetScalarType<T[P], EvolutiveChainGroupByOutputType[P]>
        }
      >
    >


  export type EvolutiveChainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    evolutionChainId?: boolean
    fromPokemonId?: boolean
    toPokemonId?: boolean
    method?: boolean
    condition?: boolean
    fromPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    toPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evolutiveChain"]>

  export type EvolutiveChainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    evolutionChainId?: boolean
    fromPokemonId?: boolean
    toPokemonId?: boolean
    method?: boolean
    condition?: boolean
    fromPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    toPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evolutiveChain"]>

  export type EvolutiveChainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    evolutionChainId?: boolean
    fromPokemonId?: boolean
    toPokemonId?: boolean
    method?: boolean
    condition?: boolean
    fromPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    toPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evolutiveChain"]>

  export type EvolutiveChainSelectScalar = {
    evolutionChainId?: boolean
    fromPokemonId?: boolean
    toPokemonId?: boolean
    method?: boolean
    condition?: boolean
  }

  export type EvolutiveChainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"evolutionChainId" | "fromPokemonId" | "toPokemonId" | "method" | "condition", ExtArgs["result"]["evolutiveChain"]>
  export type EvolutiveChainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    toPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type EvolutiveChainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    toPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type EvolutiveChainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    toPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }

  export type $EvolutiveChainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EvolutiveChain"
    objects: {
      fromPokemon: Prisma.$PokemonPayload<ExtArgs>
      toPokemon: Prisma.$PokemonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      evolutionChainId: number
      fromPokemonId: number
      toPokemonId: number
      method: string | null
      condition: string | null
    }, ExtArgs["result"]["evolutiveChain"]>
    composites: {}
  }

  type EvolutiveChainGetPayload<S extends boolean | null | undefined | EvolutiveChainDefaultArgs> = $Result.GetResult<Prisma.$EvolutiveChainPayload, S>

  type EvolutiveChainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvolutiveChainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvolutiveChainCountAggregateInputType | true
    }

  export interface EvolutiveChainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvolutiveChain'], meta: { name: 'EvolutiveChain' } }
    /**
     * Find zero or one EvolutiveChain that matches the filter.
     * @param {EvolutiveChainFindUniqueArgs} args - Arguments to find a EvolutiveChain
     * @example
     * // Get one EvolutiveChain
     * const evolutiveChain = await prisma.evolutiveChain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvolutiveChainFindUniqueArgs>(args: SelectSubset<T, EvolutiveChainFindUniqueArgs<ExtArgs>>): Prisma__EvolutiveChainClient<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EvolutiveChain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvolutiveChainFindUniqueOrThrowArgs} args - Arguments to find a EvolutiveChain
     * @example
     * // Get one EvolutiveChain
     * const evolutiveChain = await prisma.evolutiveChain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvolutiveChainFindUniqueOrThrowArgs>(args: SelectSubset<T, EvolutiveChainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvolutiveChainClient<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvolutiveChain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutiveChainFindFirstArgs} args - Arguments to find a EvolutiveChain
     * @example
     * // Get one EvolutiveChain
     * const evolutiveChain = await prisma.evolutiveChain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvolutiveChainFindFirstArgs>(args?: SelectSubset<T, EvolutiveChainFindFirstArgs<ExtArgs>>): Prisma__EvolutiveChainClient<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvolutiveChain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutiveChainFindFirstOrThrowArgs} args - Arguments to find a EvolutiveChain
     * @example
     * // Get one EvolutiveChain
     * const evolutiveChain = await prisma.evolutiveChain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvolutiveChainFindFirstOrThrowArgs>(args?: SelectSubset<T, EvolutiveChainFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvolutiveChainClient<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EvolutiveChains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutiveChainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvolutiveChains
     * const evolutiveChains = await prisma.evolutiveChain.findMany()
     * 
     * // Get first 10 EvolutiveChains
     * const evolutiveChains = await prisma.evolutiveChain.findMany({ take: 10 })
     * 
     * // Only select the `evolutionChainId`
     * const evolutiveChainWithEvolutionChainIdOnly = await prisma.evolutiveChain.findMany({ select: { evolutionChainId: true } })
     * 
     */
    findMany<T extends EvolutiveChainFindManyArgs>(args?: SelectSubset<T, EvolutiveChainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EvolutiveChain.
     * @param {EvolutiveChainCreateArgs} args - Arguments to create a EvolutiveChain.
     * @example
     * // Create one EvolutiveChain
     * const EvolutiveChain = await prisma.evolutiveChain.create({
     *   data: {
     *     // ... data to create a EvolutiveChain
     *   }
     * })
     * 
     */
    create<T extends EvolutiveChainCreateArgs>(args: SelectSubset<T, EvolutiveChainCreateArgs<ExtArgs>>): Prisma__EvolutiveChainClient<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EvolutiveChains.
     * @param {EvolutiveChainCreateManyArgs} args - Arguments to create many EvolutiveChains.
     * @example
     * // Create many EvolutiveChains
     * const evolutiveChain = await prisma.evolutiveChain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvolutiveChainCreateManyArgs>(args?: SelectSubset<T, EvolutiveChainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EvolutiveChains and returns the data saved in the database.
     * @param {EvolutiveChainCreateManyAndReturnArgs} args - Arguments to create many EvolutiveChains.
     * @example
     * // Create many EvolutiveChains
     * const evolutiveChain = await prisma.evolutiveChain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EvolutiveChains and only return the `evolutionChainId`
     * const evolutiveChainWithEvolutionChainIdOnly = await prisma.evolutiveChain.createManyAndReturn({
     *   select: { evolutionChainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvolutiveChainCreateManyAndReturnArgs>(args?: SelectSubset<T, EvolutiveChainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EvolutiveChain.
     * @param {EvolutiveChainDeleteArgs} args - Arguments to delete one EvolutiveChain.
     * @example
     * // Delete one EvolutiveChain
     * const EvolutiveChain = await prisma.evolutiveChain.delete({
     *   where: {
     *     // ... filter to delete one EvolutiveChain
     *   }
     * })
     * 
     */
    delete<T extends EvolutiveChainDeleteArgs>(args: SelectSubset<T, EvolutiveChainDeleteArgs<ExtArgs>>): Prisma__EvolutiveChainClient<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EvolutiveChain.
     * @param {EvolutiveChainUpdateArgs} args - Arguments to update one EvolutiveChain.
     * @example
     * // Update one EvolutiveChain
     * const evolutiveChain = await prisma.evolutiveChain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvolutiveChainUpdateArgs>(args: SelectSubset<T, EvolutiveChainUpdateArgs<ExtArgs>>): Prisma__EvolutiveChainClient<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EvolutiveChains.
     * @param {EvolutiveChainDeleteManyArgs} args - Arguments to filter EvolutiveChains to delete.
     * @example
     * // Delete a few EvolutiveChains
     * const { count } = await prisma.evolutiveChain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvolutiveChainDeleteManyArgs>(args?: SelectSubset<T, EvolutiveChainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvolutiveChains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutiveChainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvolutiveChains
     * const evolutiveChain = await prisma.evolutiveChain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvolutiveChainUpdateManyArgs>(args: SelectSubset<T, EvolutiveChainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvolutiveChains and returns the data updated in the database.
     * @param {EvolutiveChainUpdateManyAndReturnArgs} args - Arguments to update many EvolutiveChains.
     * @example
     * // Update many EvolutiveChains
     * const evolutiveChain = await prisma.evolutiveChain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EvolutiveChains and only return the `evolutionChainId`
     * const evolutiveChainWithEvolutionChainIdOnly = await prisma.evolutiveChain.updateManyAndReturn({
     *   select: { evolutionChainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvolutiveChainUpdateManyAndReturnArgs>(args: SelectSubset<T, EvolutiveChainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EvolutiveChain.
     * @param {EvolutiveChainUpsertArgs} args - Arguments to update or create a EvolutiveChain.
     * @example
     * // Update or create a EvolutiveChain
     * const evolutiveChain = await prisma.evolutiveChain.upsert({
     *   create: {
     *     // ... data to create a EvolutiveChain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvolutiveChain we want to update
     *   }
     * })
     */
    upsert<T extends EvolutiveChainUpsertArgs>(args: SelectSubset<T, EvolutiveChainUpsertArgs<ExtArgs>>): Prisma__EvolutiveChainClient<$Result.GetResult<Prisma.$EvolutiveChainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EvolutiveChains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutiveChainCountArgs} args - Arguments to filter EvolutiveChains to count.
     * @example
     * // Count the number of EvolutiveChains
     * const count = await prisma.evolutiveChain.count({
     *   where: {
     *     // ... the filter for the EvolutiveChains we want to count
     *   }
     * })
    **/
    count<T extends EvolutiveChainCountArgs>(
      args?: Subset<T, EvolutiveChainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvolutiveChainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvolutiveChain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutiveChainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvolutiveChainAggregateArgs>(args: Subset<T, EvolutiveChainAggregateArgs>): Prisma.PrismaPromise<GetEvolutiveChainAggregateType<T>>

    /**
     * Group by EvolutiveChain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutiveChainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvolutiveChainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvolutiveChainGroupByArgs['orderBy'] }
        : { orderBy?: EvolutiveChainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvolutiveChainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvolutiveChainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EvolutiveChain model
   */
  readonly fields: EvolutiveChainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EvolutiveChain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvolutiveChainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromPokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toPokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EvolutiveChain model
   */
  interface EvolutiveChainFieldRefs {
    readonly evolutionChainId: FieldRef<"EvolutiveChain", 'Int'>
    readonly fromPokemonId: FieldRef<"EvolutiveChain", 'Int'>
    readonly toPokemonId: FieldRef<"EvolutiveChain", 'Int'>
    readonly method: FieldRef<"EvolutiveChain", 'String'>
    readonly condition: FieldRef<"EvolutiveChain", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EvolutiveChain findUnique
   */
  export type EvolutiveChainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainInclude<ExtArgs> | null
    /**
     * Filter, which EvolutiveChain to fetch.
     */
    where: EvolutiveChainWhereUniqueInput
  }

  /**
   * EvolutiveChain findUniqueOrThrow
   */
  export type EvolutiveChainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainInclude<ExtArgs> | null
    /**
     * Filter, which EvolutiveChain to fetch.
     */
    where: EvolutiveChainWhereUniqueInput
  }

  /**
   * EvolutiveChain findFirst
   */
  export type EvolutiveChainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainInclude<ExtArgs> | null
    /**
     * Filter, which EvolutiveChain to fetch.
     */
    where?: EvolutiveChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvolutiveChains to fetch.
     */
    orderBy?: EvolutiveChainOrderByWithRelationInput | EvolutiveChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvolutiveChains.
     */
    cursor?: EvolutiveChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvolutiveChains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvolutiveChains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvolutiveChains.
     */
    distinct?: EvolutiveChainScalarFieldEnum | EvolutiveChainScalarFieldEnum[]
  }

  /**
   * EvolutiveChain findFirstOrThrow
   */
  export type EvolutiveChainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainInclude<ExtArgs> | null
    /**
     * Filter, which EvolutiveChain to fetch.
     */
    where?: EvolutiveChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvolutiveChains to fetch.
     */
    orderBy?: EvolutiveChainOrderByWithRelationInput | EvolutiveChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvolutiveChains.
     */
    cursor?: EvolutiveChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvolutiveChains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvolutiveChains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvolutiveChains.
     */
    distinct?: EvolutiveChainScalarFieldEnum | EvolutiveChainScalarFieldEnum[]
  }

  /**
   * EvolutiveChain findMany
   */
  export type EvolutiveChainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainInclude<ExtArgs> | null
    /**
     * Filter, which EvolutiveChains to fetch.
     */
    where?: EvolutiveChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvolutiveChains to fetch.
     */
    orderBy?: EvolutiveChainOrderByWithRelationInput | EvolutiveChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvolutiveChains.
     */
    cursor?: EvolutiveChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvolutiveChains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvolutiveChains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvolutiveChains.
     */
    distinct?: EvolutiveChainScalarFieldEnum | EvolutiveChainScalarFieldEnum[]
  }

  /**
   * EvolutiveChain create
   */
  export type EvolutiveChainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainInclude<ExtArgs> | null
    /**
     * The data needed to create a EvolutiveChain.
     */
    data: XOR<EvolutiveChainCreateInput, EvolutiveChainUncheckedCreateInput>
  }

  /**
   * EvolutiveChain createMany
   */
  export type EvolutiveChainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvolutiveChains.
     */
    data: EvolutiveChainCreateManyInput | EvolutiveChainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvolutiveChain createManyAndReturn
   */
  export type EvolutiveChainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * The data used to create many EvolutiveChains.
     */
    data: EvolutiveChainCreateManyInput | EvolutiveChainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvolutiveChain update
   */
  export type EvolutiveChainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainInclude<ExtArgs> | null
    /**
     * The data needed to update a EvolutiveChain.
     */
    data: XOR<EvolutiveChainUpdateInput, EvolutiveChainUncheckedUpdateInput>
    /**
     * Choose, which EvolutiveChain to update.
     */
    where: EvolutiveChainWhereUniqueInput
  }

  /**
   * EvolutiveChain updateMany
   */
  export type EvolutiveChainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvolutiveChains.
     */
    data: XOR<EvolutiveChainUpdateManyMutationInput, EvolutiveChainUncheckedUpdateManyInput>
    /**
     * Filter which EvolutiveChains to update
     */
    where?: EvolutiveChainWhereInput
    /**
     * Limit how many EvolutiveChains to update.
     */
    limit?: number
  }

  /**
   * EvolutiveChain updateManyAndReturn
   */
  export type EvolutiveChainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * The data used to update EvolutiveChains.
     */
    data: XOR<EvolutiveChainUpdateManyMutationInput, EvolutiveChainUncheckedUpdateManyInput>
    /**
     * Filter which EvolutiveChains to update
     */
    where?: EvolutiveChainWhereInput
    /**
     * Limit how many EvolutiveChains to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvolutiveChain upsert
   */
  export type EvolutiveChainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainInclude<ExtArgs> | null
    /**
     * The filter to search for the EvolutiveChain to update in case it exists.
     */
    where: EvolutiveChainWhereUniqueInput
    /**
     * In case the EvolutiveChain found by the `where` argument doesn't exist, create a new EvolutiveChain with this data.
     */
    create: XOR<EvolutiveChainCreateInput, EvolutiveChainUncheckedCreateInput>
    /**
     * In case the EvolutiveChain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvolutiveChainUpdateInput, EvolutiveChainUncheckedUpdateInput>
  }

  /**
   * EvolutiveChain delete
   */
  export type EvolutiveChainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainInclude<ExtArgs> | null
    /**
     * Filter which EvolutiveChain to delete.
     */
    where: EvolutiveChainWhereUniqueInput
  }

  /**
   * EvolutiveChain deleteMany
   */
  export type EvolutiveChainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvolutiveChains to delete
     */
    where?: EvolutiveChainWhereInput
    /**
     * Limit how many EvolutiveChains to delete.
     */
    limit?: number
  }

  /**
   * EvolutiveChain without action
   */
  export type EvolutiveChainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutiveChain
     */
    select?: EvolutiveChainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvolutiveChain
     */
    omit?: EvolutiveChainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutiveChainInclude<ExtArgs> | null
  }


  /**
   * Model GuessPokemonGame
   */

  export type AggregateGuessPokemonGame = {
    _count: GuessPokemonGameCountAggregateOutputType | null
    _avg: GuessPokemonGameAvgAggregateOutputType | null
    _sum: GuessPokemonGameSumAggregateOutputType | null
    _min: GuessPokemonGameMinAggregateOutputType | null
    _max: GuessPokemonGameMaxAggregateOutputType | null
  }

  export type GuessPokemonGameAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    pokemonId: number | null
    maxAttempts: number | null
    remainingAttempts: number | null
    xpEarned: number | null
  }

  export type GuessPokemonGameSumAggregateOutputType = {
    id: number | null
    userId: number | null
    pokemonId: number | null
    maxAttempts: number | null
    remainingAttempts: number | null
    xpEarned: number | null
  }

  export type GuessPokemonGameMinAggregateOutputType = {
    id: number | null
    gameId: string | null
    userId: number | null
    pokemonId: number | null
    maxAttempts: number | null
    remainingAttempts: number | null
    lastGuess: string | null
    status: $Enums.GameStatus | null
    startedAt: Date | null
    xpEarned: number | null
  }

  export type GuessPokemonGameMaxAggregateOutputType = {
    id: number | null
    gameId: string | null
    userId: number | null
    pokemonId: number | null
    maxAttempts: number | null
    remainingAttempts: number | null
    lastGuess: string | null
    status: $Enums.GameStatus | null
    startedAt: Date | null
    xpEarned: number | null
  }

  export type GuessPokemonGameCountAggregateOutputType = {
    id: number
    gameId: number
    userId: number
    pokemonId: number
    maxAttempts: number
    remainingAttempts: number
    lastGuess: number
    status: number
    startedAt: number
    xpEarned: number
    _all: number
  }


  export type GuessPokemonGameAvgAggregateInputType = {
    id?: true
    userId?: true
    pokemonId?: true
    maxAttempts?: true
    remainingAttempts?: true
    xpEarned?: true
  }

  export type GuessPokemonGameSumAggregateInputType = {
    id?: true
    userId?: true
    pokemonId?: true
    maxAttempts?: true
    remainingAttempts?: true
    xpEarned?: true
  }

  export type GuessPokemonGameMinAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    pokemonId?: true
    maxAttempts?: true
    remainingAttempts?: true
    lastGuess?: true
    status?: true
    startedAt?: true
    xpEarned?: true
  }

  export type GuessPokemonGameMaxAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    pokemonId?: true
    maxAttempts?: true
    remainingAttempts?: true
    lastGuess?: true
    status?: true
    startedAt?: true
    xpEarned?: true
  }

  export type GuessPokemonGameCountAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    pokemonId?: true
    maxAttempts?: true
    remainingAttempts?: true
    lastGuess?: true
    status?: true
    startedAt?: true
    xpEarned?: true
    _all?: true
  }

  export type GuessPokemonGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuessPokemonGame to aggregate.
     */
    where?: GuessPokemonGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuessPokemonGames to fetch.
     */
    orderBy?: GuessPokemonGameOrderByWithRelationInput | GuessPokemonGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuessPokemonGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuessPokemonGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuessPokemonGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuessPokemonGames
    **/
    _count?: true | GuessPokemonGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuessPokemonGameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuessPokemonGameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuessPokemonGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuessPokemonGameMaxAggregateInputType
  }

  export type GetGuessPokemonGameAggregateType<T extends GuessPokemonGameAggregateArgs> = {
        [P in keyof T & keyof AggregateGuessPokemonGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuessPokemonGame[P]>
      : GetScalarType<T[P], AggregateGuessPokemonGame[P]>
  }




  export type GuessPokemonGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuessPokemonGameWhereInput
    orderBy?: GuessPokemonGameOrderByWithAggregationInput | GuessPokemonGameOrderByWithAggregationInput[]
    by: GuessPokemonGameScalarFieldEnum[] | GuessPokemonGameScalarFieldEnum
    having?: GuessPokemonGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuessPokemonGameCountAggregateInputType | true
    _avg?: GuessPokemonGameAvgAggregateInputType
    _sum?: GuessPokemonGameSumAggregateInputType
    _min?: GuessPokemonGameMinAggregateInputType
    _max?: GuessPokemonGameMaxAggregateInputType
  }

  export type GuessPokemonGameGroupByOutputType = {
    id: number
    gameId: string
    userId: number
    pokemonId: number
    maxAttempts: number
    remainingAttempts: number
    lastGuess: string | null
    status: $Enums.GameStatus
    startedAt: Date
    xpEarned: number | null
    _count: GuessPokemonGameCountAggregateOutputType | null
    _avg: GuessPokemonGameAvgAggregateOutputType | null
    _sum: GuessPokemonGameSumAggregateOutputType | null
    _min: GuessPokemonGameMinAggregateOutputType | null
    _max: GuessPokemonGameMaxAggregateOutputType | null
  }

  type GetGuessPokemonGameGroupByPayload<T extends GuessPokemonGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuessPokemonGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuessPokemonGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuessPokemonGameGroupByOutputType[P]>
            : GetScalarType<T[P], GuessPokemonGameGroupByOutputType[P]>
        }
      >
    >


  export type GuessPokemonGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    pokemonId?: boolean
    maxAttempts?: boolean
    remainingAttempts?: boolean
    lastGuess?: boolean
    status?: boolean
    startedAt?: boolean
    xpEarned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guessPokemonGame"]>

  export type GuessPokemonGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    pokemonId?: boolean
    maxAttempts?: boolean
    remainingAttempts?: boolean
    lastGuess?: boolean
    status?: boolean
    startedAt?: boolean
    xpEarned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guessPokemonGame"]>

  export type GuessPokemonGameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    pokemonId?: boolean
    maxAttempts?: boolean
    remainingAttempts?: boolean
    lastGuess?: boolean
    status?: boolean
    startedAt?: boolean
    xpEarned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guessPokemonGame"]>

  export type GuessPokemonGameSelectScalar = {
    id?: boolean
    gameId?: boolean
    userId?: boolean
    pokemonId?: boolean
    maxAttempts?: boolean
    remainingAttempts?: boolean
    lastGuess?: boolean
    status?: boolean
    startedAt?: boolean
    xpEarned?: boolean
  }

  export type GuessPokemonGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "userId" | "pokemonId" | "maxAttempts" | "remainingAttempts" | "lastGuess" | "status" | "startedAt" | "xpEarned", ExtArgs["result"]["guessPokemonGame"]>
  export type GuessPokemonGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type GuessPokemonGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type GuessPokemonGameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }

  export type $GuessPokemonGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuessPokemonGame"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pokemon: Prisma.$PokemonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: string
      userId: number
      pokemonId: number
      maxAttempts: number
      remainingAttempts: number
      lastGuess: string | null
      status: $Enums.GameStatus
      startedAt: Date
      xpEarned: number | null
    }, ExtArgs["result"]["guessPokemonGame"]>
    composites: {}
  }

  type GuessPokemonGameGetPayload<S extends boolean | null | undefined | GuessPokemonGameDefaultArgs> = $Result.GetResult<Prisma.$GuessPokemonGamePayload, S>

  type GuessPokemonGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuessPokemonGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuessPokemonGameCountAggregateInputType | true
    }

  export interface GuessPokemonGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuessPokemonGame'], meta: { name: 'GuessPokemonGame' } }
    /**
     * Find zero or one GuessPokemonGame that matches the filter.
     * @param {GuessPokemonGameFindUniqueArgs} args - Arguments to find a GuessPokemonGame
     * @example
     * // Get one GuessPokemonGame
     * const guessPokemonGame = await prisma.guessPokemonGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuessPokemonGameFindUniqueArgs>(args: SelectSubset<T, GuessPokemonGameFindUniqueArgs<ExtArgs>>): Prisma__GuessPokemonGameClient<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuessPokemonGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuessPokemonGameFindUniqueOrThrowArgs} args - Arguments to find a GuessPokemonGame
     * @example
     * // Get one GuessPokemonGame
     * const guessPokemonGame = await prisma.guessPokemonGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuessPokemonGameFindUniqueOrThrowArgs>(args: SelectSubset<T, GuessPokemonGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuessPokemonGameClient<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuessPokemonGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessPokemonGameFindFirstArgs} args - Arguments to find a GuessPokemonGame
     * @example
     * // Get one GuessPokemonGame
     * const guessPokemonGame = await prisma.guessPokemonGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuessPokemonGameFindFirstArgs>(args?: SelectSubset<T, GuessPokemonGameFindFirstArgs<ExtArgs>>): Prisma__GuessPokemonGameClient<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuessPokemonGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessPokemonGameFindFirstOrThrowArgs} args - Arguments to find a GuessPokemonGame
     * @example
     * // Get one GuessPokemonGame
     * const guessPokemonGame = await prisma.guessPokemonGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuessPokemonGameFindFirstOrThrowArgs>(args?: SelectSubset<T, GuessPokemonGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuessPokemonGameClient<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuessPokemonGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessPokemonGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuessPokemonGames
     * const guessPokemonGames = await prisma.guessPokemonGame.findMany()
     * 
     * // Get first 10 GuessPokemonGames
     * const guessPokemonGames = await prisma.guessPokemonGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guessPokemonGameWithIdOnly = await prisma.guessPokemonGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuessPokemonGameFindManyArgs>(args?: SelectSubset<T, GuessPokemonGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuessPokemonGame.
     * @param {GuessPokemonGameCreateArgs} args - Arguments to create a GuessPokemonGame.
     * @example
     * // Create one GuessPokemonGame
     * const GuessPokemonGame = await prisma.guessPokemonGame.create({
     *   data: {
     *     // ... data to create a GuessPokemonGame
     *   }
     * })
     * 
     */
    create<T extends GuessPokemonGameCreateArgs>(args: SelectSubset<T, GuessPokemonGameCreateArgs<ExtArgs>>): Prisma__GuessPokemonGameClient<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuessPokemonGames.
     * @param {GuessPokemonGameCreateManyArgs} args - Arguments to create many GuessPokemonGames.
     * @example
     * // Create many GuessPokemonGames
     * const guessPokemonGame = await prisma.guessPokemonGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuessPokemonGameCreateManyArgs>(args?: SelectSubset<T, GuessPokemonGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuessPokemonGames and returns the data saved in the database.
     * @param {GuessPokemonGameCreateManyAndReturnArgs} args - Arguments to create many GuessPokemonGames.
     * @example
     * // Create many GuessPokemonGames
     * const guessPokemonGame = await prisma.guessPokemonGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuessPokemonGames and only return the `id`
     * const guessPokemonGameWithIdOnly = await prisma.guessPokemonGame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuessPokemonGameCreateManyAndReturnArgs>(args?: SelectSubset<T, GuessPokemonGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuessPokemonGame.
     * @param {GuessPokemonGameDeleteArgs} args - Arguments to delete one GuessPokemonGame.
     * @example
     * // Delete one GuessPokemonGame
     * const GuessPokemonGame = await prisma.guessPokemonGame.delete({
     *   where: {
     *     // ... filter to delete one GuessPokemonGame
     *   }
     * })
     * 
     */
    delete<T extends GuessPokemonGameDeleteArgs>(args: SelectSubset<T, GuessPokemonGameDeleteArgs<ExtArgs>>): Prisma__GuessPokemonGameClient<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuessPokemonGame.
     * @param {GuessPokemonGameUpdateArgs} args - Arguments to update one GuessPokemonGame.
     * @example
     * // Update one GuessPokemonGame
     * const guessPokemonGame = await prisma.guessPokemonGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuessPokemonGameUpdateArgs>(args: SelectSubset<T, GuessPokemonGameUpdateArgs<ExtArgs>>): Prisma__GuessPokemonGameClient<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuessPokemonGames.
     * @param {GuessPokemonGameDeleteManyArgs} args - Arguments to filter GuessPokemonGames to delete.
     * @example
     * // Delete a few GuessPokemonGames
     * const { count } = await prisma.guessPokemonGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuessPokemonGameDeleteManyArgs>(args?: SelectSubset<T, GuessPokemonGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuessPokemonGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessPokemonGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuessPokemonGames
     * const guessPokemonGame = await prisma.guessPokemonGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuessPokemonGameUpdateManyArgs>(args: SelectSubset<T, GuessPokemonGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuessPokemonGames and returns the data updated in the database.
     * @param {GuessPokemonGameUpdateManyAndReturnArgs} args - Arguments to update many GuessPokemonGames.
     * @example
     * // Update many GuessPokemonGames
     * const guessPokemonGame = await prisma.guessPokemonGame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuessPokemonGames and only return the `id`
     * const guessPokemonGameWithIdOnly = await prisma.guessPokemonGame.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuessPokemonGameUpdateManyAndReturnArgs>(args: SelectSubset<T, GuessPokemonGameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuessPokemonGame.
     * @param {GuessPokemonGameUpsertArgs} args - Arguments to update or create a GuessPokemonGame.
     * @example
     * // Update or create a GuessPokemonGame
     * const guessPokemonGame = await prisma.guessPokemonGame.upsert({
     *   create: {
     *     // ... data to create a GuessPokemonGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuessPokemonGame we want to update
     *   }
     * })
     */
    upsert<T extends GuessPokemonGameUpsertArgs>(args: SelectSubset<T, GuessPokemonGameUpsertArgs<ExtArgs>>): Prisma__GuessPokemonGameClient<$Result.GetResult<Prisma.$GuessPokemonGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuessPokemonGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessPokemonGameCountArgs} args - Arguments to filter GuessPokemonGames to count.
     * @example
     * // Count the number of GuessPokemonGames
     * const count = await prisma.guessPokemonGame.count({
     *   where: {
     *     // ... the filter for the GuessPokemonGames we want to count
     *   }
     * })
    **/
    count<T extends GuessPokemonGameCountArgs>(
      args?: Subset<T, GuessPokemonGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuessPokemonGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuessPokemonGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessPokemonGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuessPokemonGameAggregateArgs>(args: Subset<T, GuessPokemonGameAggregateArgs>): Prisma.PrismaPromise<GetGuessPokemonGameAggregateType<T>>

    /**
     * Group by GuessPokemonGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessPokemonGameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuessPokemonGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuessPokemonGameGroupByArgs['orderBy'] }
        : { orderBy?: GuessPokemonGameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuessPokemonGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuessPokemonGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuessPokemonGame model
   */
  readonly fields: GuessPokemonGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuessPokemonGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuessPokemonGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuessPokemonGame model
   */
  interface GuessPokemonGameFieldRefs {
    readonly id: FieldRef<"GuessPokemonGame", 'Int'>
    readonly gameId: FieldRef<"GuessPokemonGame", 'String'>
    readonly userId: FieldRef<"GuessPokemonGame", 'Int'>
    readonly pokemonId: FieldRef<"GuessPokemonGame", 'Int'>
    readonly maxAttempts: FieldRef<"GuessPokemonGame", 'Int'>
    readonly remainingAttempts: FieldRef<"GuessPokemonGame", 'Int'>
    readonly lastGuess: FieldRef<"GuessPokemonGame", 'String'>
    readonly status: FieldRef<"GuessPokemonGame", 'GameStatus'>
    readonly startedAt: FieldRef<"GuessPokemonGame", 'DateTime'>
    readonly xpEarned: FieldRef<"GuessPokemonGame", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GuessPokemonGame findUnique
   */
  export type GuessPokemonGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameInclude<ExtArgs> | null
    /**
     * Filter, which GuessPokemonGame to fetch.
     */
    where: GuessPokemonGameWhereUniqueInput
  }

  /**
   * GuessPokemonGame findUniqueOrThrow
   */
  export type GuessPokemonGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameInclude<ExtArgs> | null
    /**
     * Filter, which GuessPokemonGame to fetch.
     */
    where: GuessPokemonGameWhereUniqueInput
  }

  /**
   * GuessPokemonGame findFirst
   */
  export type GuessPokemonGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameInclude<ExtArgs> | null
    /**
     * Filter, which GuessPokemonGame to fetch.
     */
    where?: GuessPokemonGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuessPokemonGames to fetch.
     */
    orderBy?: GuessPokemonGameOrderByWithRelationInput | GuessPokemonGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuessPokemonGames.
     */
    cursor?: GuessPokemonGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuessPokemonGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuessPokemonGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuessPokemonGames.
     */
    distinct?: GuessPokemonGameScalarFieldEnum | GuessPokemonGameScalarFieldEnum[]
  }

  /**
   * GuessPokemonGame findFirstOrThrow
   */
  export type GuessPokemonGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameInclude<ExtArgs> | null
    /**
     * Filter, which GuessPokemonGame to fetch.
     */
    where?: GuessPokemonGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuessPokemonGames to fetch.
     */
    orderBy?: GuessPokemonGameOrderByWithRelationInput | GuessPokemonGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuessPokemonGames.
     */
    cursor?: GuessPokemonGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuessPokemonGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuessPokemonGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuessPokemonGames.
     */
    distinct?: GuessPokemonGameScalarFieldEnum | GuessPokemonGameScalarFieldEnum[]
  }

  /**
   * GuessPokemonGame findMany
   */
  export type GuessPokemonGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameInclude<ExtArgs> | null
    /**
     * Filter, which GuessPokemonGames to fetch.
     */
    where?: GuessPokemonGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuessPokemonGames to fetch.
     */
    orderBy?: GuessPokemonGameOrderByWithRelationInput | GuessPokemonGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuessPokemonGames.
     */
    cursor?: GuessPokemonGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuessPokemonGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuessPokemonGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuessPokemonGames.
     */
    distinct?: GuessPokemonGameScalarFieldEnum | GuessPokemonGameScalarFieldEnum[]
  }

  /**
   * GuessPokemonGame create
   */
  export type GuessPokemonGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameInclude<ExtArgs> | null
    /**
     * The data needed to create a GuessPokemonGame.
     */
    data: XOR<GuessPokemonGameCreateInput, GuessPokemonGameUncheckedCreateInput>
  }

  /**
   * GuessPokemonGame createMany
   */
  export type GuessPokemonGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuessPokemonGames.
     */
    data: GuessPokemonGameCreateManyInput | GuessPokemonGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuessPokemonGame createManyAndReturn
   */
  export type GuessPokemonGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * The data used to create many GuessPokemonGames.
     */
    data: GuessPokemonGameCreateManyInput | GuessPokemonGameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuessPokemonGame update
   */
  export type GuessPokemonGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameInclude<ExtArgs> | null
    /**
     * The data needed to update a GuessPokemonGame.
     */
    data: XOR<GuessPokemonGameUpdateInput, GuessPokemonGameUncheckedUpdateInput>
    /**
     * Choose, which GuessPokemonGame to update.
     */
    where: GuessPokemonGameWhereUniqueInput
  }

  /**
   * GuessPokemonGame updateMany
   */
  export type GuessPokemonGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuessPokemonGames.
     */
    data: XOR<GuessPokemonGameUpdateManyMutationInput, GuessPokemonGameUncheckedUpdateManyInput>
    /**
     * Filter which GuessPokemonGames to update
     */
    where?: GuessPokemonGameWhereInput
    /**
     * Limit how many GuessPokemonGames to update.
     */
    limit?: number
  }

  /**
   * GuessPokemonGame updateManyAndReturn
   */
  export type GuessPokemonGameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * The data used to update GuessPokemonGames.
     */
    data: XOR<GuessPokemonGameUpdateManyMutationInput, GuessPokemonGameUncheckedUpdateManyInput>
    /**
     * Filter which GuessPokemonGames to update
     */
    where?: GuessPokemonGameWhereInput
    /**
     * Limit how many GuessPokemonGames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuessPokemonGame upsert
   */
  export type GuessPokemonGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameInclude<ExtArgs> | null
    /**
     * The filter to search for the GuessPokemonGame to update in case it exists.
     */
    where: GuessPokemonGameWhereUniqueInput
    /**
     * In case the GuessPokemonGame found by the `where` argument doesn't exist, create a new GuessPokemonGame with this data.
     */
    create: XOR<GuessPokemonGameCreateInput, GuessPokemonGameUncheckedCreateInput>
    /**
     * In case the GuessPokemonGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuessPokemonGameUpdateInput, GuessPokemonGameUncheckedUpdateInput>
  }

  /**
   * GuessPokemonGame delete
   */
  export type GuessPokemonGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameInclude<ExtArgs> | null
    /**
     * Filter which GuessPokemonGame to delete.
     */
    where: GuessPokemonGameWhereUniqueInput
  }

  /**
   * GuessPokemonGame deleteMany
   */
  export type GuessPokemonGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuessPokemonGames to delete
     */
    where?: GuessPokemonGameWhereInput
    /**
     * Limit how many GuessPokemonGames to delete.
     */
    limit?: number
  }

  /**
   * GuessPokemonGame without action
   */
  export type GuessPokemonGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessPokemonGame
     */
    select?: GuessPokemonGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessPokemonGame
     */
    omit?: GuessPokemonGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessPokemonGameInclude<ExtArgs> | null
  }


  /**
   * Model GuessShinyGame
   */

  export type AggregateGuessShinyGame = {
    _count: GuessShinyGameCountAggregateOutputType | null
    _avg: GuessShinyGameAvgAggregateOutputType | null
    _sum: GuessShinyGameSumAggregateOutputType | null
    _min: GuessShinyGameMinAggregateOutputType | null
    _max: GuessShinyGameMaxAggregateOutputType | null
  }

  export type GuessShinyGameAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    pokemonId: number | null
    correctPosition: number | null
    maxAttempts: number | null
    remainingAttempts: number | null
    xpEarned: number | null
  }

  export type GuessShinyGameSumAggregateOutputType = {
    id: number | null
    userId: number | null
    pokemonId: number | null
    correctPosition: number | null
    maxAttempts: number | null
    remainingAttempts: number | null
    xpEarned: number | null
  }

  export type GuessShinyGameMinAggregateOutputType = {
    id: number | null
    gameId: string | null
    userId: number | null
    pokemonId: number | null
    correctPosition: number | null
    maxAttempts: number | null
    remainingAttempts: number | null
    lastGuess: string | null
    status: $Enums.GameStatus | null
    startedAt: Date | null
    xpEarned: number | null
  }

  export type GuessShinyGameMaxAggregateOutputType = {
    id: number | null
    gameId: string | null
    userId: number | null
    pokemonId: number | null
    correctPosition: number | null
    maxAttempts: number | null
    remainingAttempts: number | null
    lastGuess: string | null
    status: $Enums.GameStatus | null
    startedAt: Date | null
    xpEarned: number | null
  }

  export type GuessShinyGameCountAggregateOutputType = {
    id: number
    gameId: number
    userId: number
    pokemonId: number
    correctPosition: number
    maxAttempts: number
    remainingAttempts: number
    lastGuess: number
    status: number
    startedAt: number
    xpEarned: number
    _all: number
  }


  export type GuessShinyGameAvgAggregateInputType = {
    id?: true
    userId?: true
    pokemonId?: true
    correctPosition?: true
    maxAttempts?: true
    remainingAttempts?: true
    xpEarned?: true
  }

  export type GuessShinyGameSumAggregateInputType = {
    id?: true
    userId?: true
    pokemonId?: true
    correctPosition?: true
    maxAttempts?: true
    remainingAttempts?: true
    xpEarned?: true
  }

  export type GuessShinyGameMinAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    pokemonId?: true
    correctPosition?: true
    maxAttempts?: true
    remainingAttempts?: true
    lastGuess?: true
    status?: true
    startedAt?: true
    xpEarned?: true
  }

  export type GuessShinyGameMaxAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    pokemonId?: true
    correctPosition?: true
    maxAttempts?: true
    remainingAttempts?: true
    lastGuess?: true
    status?: true
    startedAt?: true
    xpEarned?: true
  }

  export type GuessShinyGameCountAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    pokemonId?: true
    correctPosition?: true
    maxAttempts?: true
    remainingAttempts?: true
    lastGuess?: true
    status?: true
    startedAt?: true
    xpEarned?: true
    _all?: true
  }

  export type GuessShinyGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuessShinyGame to aggregate.
     */
    where?: GuessShinyGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuessShinyGames to fetch.
     */
    orderBy?: GuessShinyGameOrderByWithRelationInput | GuessShinyGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuessShinyGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuessShinyGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuessShinyGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuessShinyGames
    **/
    _count?: true | GuessShinyGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuessShinyGameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuessShinyGameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuessShinyGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuessShinyGameMaxAggregateInputType
  }

  export type GetGuessShinyGameAggregateType<T extends GuessShinyGameAggregateArgs> = {
        [P in keyof T & keyof AggregateGuessShinyGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuessShinyGame[P]>
      : GetScalarType<T[P], AggregateGuessShinyGame[P]>
  }




  export type GuessShinyGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuessShinyGameWhereInput
    orderBy?: GuessShinyGameOrderByWithAggregationInput | GuessShinyGameOrderByWithAggregationInput[]
    by: GuessShinyGameScalarFieldEnum[] | GuessShinyGameScalarFieldEnum
    having?: GuessShinyGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuessShinyGameCountAggregateInputType | true
    _avg?: GuessShinyGameAvgAggregateInputType
    _sum?: GuessShinyGameSumAggregateInputType
    _min?: GuessShinyGameMinAggregateInputType
    _max?: GuessShinyGameMaxAggregateInputType
  }

  export type GuessShinyGameGroupByOutputType = {
    id: number
    gameId: string
    userId: number
    pokemonId: number
    correctPosition: number
    maxAttempts: number
    remainingAttempts: number
    lastGuess: string | null
    status: $Enums.GameStatus
    startedAt: Date
    xpEarned: number | null
    _count: GuessShinyGameCountAggregateOutputType | null
    _avg: GuessShinyGameAvgAggregateOutputType | null
    _sum: GuessShinyGameSumAggregateOutputType | null
    _min: GuessShinyGameMinAggregateOutputType | null
    _max: GuessShinyGameMaxAggregateOutputType | null
  }

  type GetGuessShinyGameGroupByPayload<T extends GuessShinyGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuessShinyGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuessShinyGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuessShinyGameGroupByOutputType[P]>
            : GetScalarType<T[P], GuessShinyGameGroupByOutputType[P]>
        }
      >
    >


  export type GuessShinyGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    pokemonId?: boolean
    correctPosition?: boolean
    maxAttempts?: boolean
    remainingAttempts?: boolean
    lastGuess?: boolean
    status?: boolean
    startedAt?: boolean
    xpEarned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guessShinyGame"]>

  export type GuessShinyGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    pokemonId?: boolean
    correctPosition?: boolean
    maxAttempts?: boolean
    remainingAttempts?: boolean
    lastGuess?: boolean
    status?: boolean
    startedAt?: boolean
    xpEarned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guessShinyGame"]>

  export type GuessShinyGameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    pokemonId?: boolean
    correctPosition?: boolean
    maxAttempts?: boolean
    remainingAttempts?: boolean
    lastGuess?: boolean
    status?: boolean
    startedAt?: boolean
    xpEarned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guessShinyGame"]>

  export type GuessShinyGameSelectScalar = {
    id?: boolean
    gameId?: boolean
    userId?: boolean
    pokemonId?: boolean
    correctPosition?: boolean
    maxAttempts?: boolean
    remainingAttempts?: boolean
    lastGuess?: boolean
    status?: boolean
    startedAt?: boolean
    xpEarned?: boolean
  }

  export type GuessShinyGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "userId" | "pokemonId" | "correctPosition" | "maxAttempts" | "remainingAttempts" | "lastGuess" | "status" | "startedAt" | "xpEarned", ExtArgs["result"]["guessShinyGame"]>
  export type GuessShinyGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type GuessShinyGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type GuessShinyGameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }

  export type $GuessShinyGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuessShinyGame"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pokemon: Prisma.$PokemonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: string
      userId: number
      pokemonId: number
      correctPosition: number
      maxAttempts: number
      remainingAttempts: number
      lastGuess: string | null
      status: $Enums.GameStatus
      startedAt: Date
      xpEarned: number | null
    }, ExtArgs["result"]["guessShinyGame"]>
    composites: {}
  }

  type GuessShinyGameGetPayload<S extends boolean | null | undefined | GuessShinyGameDefaultArgs> = $Result.GetResult<Prisma.$GuessShinyGamePayload, S>

  type GuessShinyGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuessShinyGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuessShinyGameCountAggregateInputType | true
    }

  export interface GuessShinyGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuessShinyGame'], meta: { name: 'GuessShinyGame' } }
    /**
     * Find zero or one GuessShinyGame that matches the filter.
     * @param {GuessShinyGameFindUniqueArgs} args - Arguments to find a GuessShinyGame
     * @example
     * // Get one GuessShinyGame
     * const guessShinyGame = await prisma.guessShinyGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuessShinyGameFindUniqueArgs>(args: SelectSubset<T, GuessShinyGameFindUniqueArgs<ExtArgs>>): Prisma__GuessShinyGameClient<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuessShinyGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuessShinyGameFindUniqueOrThrowArgs} args - Arguments to find a GuessShinyGame
     * @example
     * // Get one GuessShinyGame
     * const guessShinyGame = await prisma.guessShinyGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuessShinyGameFindUniqueOrThrowArgs>(args: SelectSubset<T, GuessShinyGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuessShinyGameClient<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuessShinyGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessShinyGameFindFirstArgs} args - Arguments to find a GuessShinyGame
     * @example
     * // Get one GuessShinyGame
     * const guessShinyGame = await prisma.guessShinyGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuessShinyGameFindFirstArgs>(args?: SelectSubset<T, GuessShinyGameFindFirstArgs<ExtArgs>>): Prisma__GuessShinyGameClient<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuessShinyGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessShinyGameFindFirstOrThrowArgs} args - Arguments to find a GuessShinyGame
     * @example
     * // Get one GuessShinyGame
     * const guessShinyGame = await prisma.guessShinyGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuessShinyGameFindFirstOrThrowArgs>(args?: SelectSubset<T, GuessShinyGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuessShinyGameClient<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuessShinyGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessShinyGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuessShinyGames
     * const guessShinyGames = await prisma.guessShinyGame.findMany()
     * 
     * // Get first 10 GuessShinyGames
     * const guessShinyGames = await prisma.guessShinyGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guessShinyGameWithIdOnly = await prisma.guessShinyGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuessShinyGameFindManyArgs>(args?: SelectSubset<T, GuessShinyGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuessShinyGame.
     * @param {GuessShinyGameCreateArgs} args - Arguments to create a GuessShinyGame.
     * @example
     * // Create one GuessShinyGame
     * const GuessShinyGame = await prisma.guessShinyGame.create({
     *   data: {
     *     // ... data to create a GuessShinyGame
     *   }
     * })
     * 
     */
    create<T extends GuessShinyGameCreateArgs>(args: SelectSubset<T, GuessShinyGameCreateArgs<ExtArgs>>): Prisma__GuessShinyGameClient<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuessShinyGames.
     * @param {GuessShinyGameCreateManyArgs} args - Arguments to create many GuessShinyGames.
     * @example
     * // Create many GuessShinyGames
     * const guessShinyGame = await prisma.guessShinyGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuessShinyGameCreateManyArgs>(args?: SelectSubset<T, GuessShinyGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuessShinyGames and returns the data saved in the database.
     * @param {GuessShinyGameCreateManyAndReturnArgs} args - Arguments to create many GuessShinyGames.
     * @example
     * // Create many GuessShinyGames
     * const guessShinyGame = await prisma.guessShinyGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuessShinyGames and only return the `id`
     * const guessShinyGameWithIdOnly = await prisma.guessShinyGame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuessShinyGameCreateManyAndReturnArgs>(args?: SelectSubset<T, GuessShinyGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuessShinyGame.
     * @param {GuessShinyGameDeleteArgs} args - Arguments to delete one GuessShinyGame.
     * @example
     * // Delete one GuessShinyGame
     * const GuessShinyGame = await prisma.guessShinyGame.delete({
     *   where: {
     *     // ... filter to delete one GuessShinyGame
     *   }
     * })
     * 
     */
    delete<T extends GuessShinyGameDeleteArgs>(args: SelectSubset<T, GuessShinyGameDeleteArgs<ExtArgs>>): Prisma__GuessShinyGameClient<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuessShinyGame.
     * @param {GuessShinyGameUpdateArgs} args - Arguments to update one GuessShinyGame.
     * @example
     * // Update one GuessShinyGame
     * const guessShinyGame = await prisma.guessShinyGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuessShinyGameUpdateArgs>(args: SelectSubset<T, GuessShinyGameUpdateArgs<ExtArgs>>): Prisma__GuessShinyGameClient<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuessShinyGames.
     * @param {GuessShinyGameDeleteManyArgs} args - Arguments to filter GuessShinyGames to delete.
     * @example
     * // Delete a few GuessShinyGames
     * const { count } = await prisma.guessShinyGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuessShinyGameDeleteManyArgs>(args?: SelectSubset<T, GuessShinyGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuessShinyGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessShinyGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuessShinyGames
     * const guessShinyGame = await prisma.guessShinyGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuessShinyGameUpdateManyArgs>(args: SelectSubset<T, GuessShinyGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuessShinyGames and returns the data updated in the database.
     * @param {GuessShinyGameUpdateManyAndReturnArgs} args - Arguments to update many GuessShinyGames.
     * @example
     * // Update many GuessShinyGames
     * const guessShinyGame = await prisma.guessShinyGame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuessShinyGames and only return the `id`
     * const guessShinyGameWithIdOnly = await prisma.guessShinyGame.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuessShinyGameUpdateManyAndReturnArgs>(args: SelectSubset<T, GuessShinyGameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuessShinyGame.
     * @param {GuessShinyGameUpsertArgs} args - Arguments to update or create a GuessShinyGame.
     * @example
     * // Update or create a GuessShinyGame
     * const guessShinyGame = await prisma.guessShinyGame.upsert({
     *   create: {
     *     // ... data to create a GuessShinyGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuessShinyGame we want to update
     *   }
     * })
     */
    upsert<T extends GuessShinyGameUpsertArgs>(args: SelectSubset<T, GuessShinyGameUpsertArgs<ExtArgs>>): Prisma__GuessShinyGameClient<$Result.GetResult<Prisma.$GuessShinyGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuessShinyGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessShinyGameCountArgs} args - Arguments to filter GuessShinyGames to count.
     * @example
     * // Count the number of GuessShinyGames
     * const count = await prisma.guessShinyGame.count({
     *   where: {
     *     // ... the filter for the GuessShinyGames we want to count
     *   }
     * })
    **/
    count<T extends GuessShinyGameCountArgs>(
      args?: Subset<T, GuessShinyGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuessShinyGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuessShinyGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessShinyGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuessShinyGameAggregateArgs>(args: Subset<T, GuessShinyGameAggregateArgs>): Prisma.PrismaPromise<GetGuessShinyGameAggregateType<T>>

    /**
     * Group by GuessShinyGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessShinyGameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuessShinyGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuessShinyGameGroupByArgs['orderBy'] }
        : { orderBy?: GuessShinyGameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuessShinyGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuessShinyGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuessShinyGame model
   */
  readonly fields: GuessShinyGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuessShinyGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuessShinyGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuessShinyGame model
   */
  interface GuessShinyGameFieldRefs {
    readonly id: FieldRef<"GuessShinyGame", 'Int'>
    readonly gameId: FieldRef<"GuessShinyGame", 'String'>
    readonly userId: FieldRef<"GuessShinyGame", 'Int'>
    readonly pokemonId: FieldRef<"GuessShinyGame", 'Int'>
    readonly correctPosition: FieldRef<"GuessShinyGame", 'Int'>
    readonly maxAttempts: FieldRef<"GuessShinyGame", 'Int'>
    readonly remainingAttempts: FieldRef<"GuessShinyGame", 'Int'>
    readonly lastGuess: FieldRef<"GuessShinyGame", 'String'>
    readonly status: FieldRef<"GuessShinyGame", 'GameStatus'>
    readonly startedAt: FieldRef<"GuessShinyGame", 'DateTime'>
    readonly xpEarned: FieldRef<"GuessShinyGame", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GuessShinyGame findUnique
   */
  export type GuessShinyGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameInclude<ExtArgs> | null
    /**
     * Filter, which GuessShinyGame to fetch.
     */
    where: GuessShinyGameWhereUniqueInput
  }

  /**
   * GuessShinyGame findUniqueOrThrow
   */
  export type GuessShinyGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameInclude<ExtArgs> | null
    /**
     * Filter, which GuessShinyGame to fetch.
     */
    where: GuessShinyGameWhereUniqueInput
  }

  /**
   * GuessShinyGame findFirst
   */
  export type GuessShinyGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameInclude<ExtArgs> | null
    /**
     * Filter, which GuessShinyGame to fetch.
     */
    where?: GuessShinyGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuessShinyGames to fetch.
     */
    orderBy?: GuessShinyGameOrderByWithRelationInput | GuessShinyGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuessShinyGames.
     */
    cursor?: GuessShinyGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuessShinyGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuessShinyGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuessShinyGames.
     */
    distinct?: GuessShinyGameScalarFieldEnum | GuessShinyGameScalarFieldEnum[]
  }

  /**
   * GuessShinyGame findFirstOrThrow
   */
  export type GuessShinyGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameInclude<ExtArgs> | null
    /**
     * Filter, which GuessShinyGame to fetch.
     */
    where?: GuessShinyGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuessShinyGames to fetch.
     */
    orderBy?: GuessShinyGameOrderByWithRelationInput | GuessShinyGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuessShinyGames.
     */
    cursor?: GuessShinyGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuessShinyGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuessShinyGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuessShinyGames.
     */
    distinct?: GuessShinyGameScalarFieldEnum | GuessShinyGameScalarFieldEnum[]
  }

  /**
   * GuessShinyGame findMany
   */
  export type GuessShinyGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameInclude<ExtArgs> | null
    /**
     * Filter, which GuessShinyGames to fetch.
     */
    where?: GuessShinyGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuessShinyGames to fetch.
     */
    orderBy?: GuessShinyGameOrderByWithRelationInput | GuessShinyGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuessShinyGames.
     */
    cursor?: GuessShinyGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuessShinyGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuessShinyGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuessShinyGames.
     */
    distinct?: GuessShinyGameScalarFieldEnum | GuessShinyGameScalarFieldEnum[]
  }

  /**
   * GuessShinyGame create
   */
  export type GuessShinyGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameInclude<ExtArgs> | null
    /**
     * The data needed to create a GuessShinyGame.
     */
    data: XOR<GuessShinyGameCreateInput, GuessShinyGameUncheckedCreateInput>
  }

  /**
   * GuessShinyGame createMany
   */
  export type GuessShinyGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuessShinyGames.
     */
    data: GuessShinyGameCreateManyInput | GuessShinyGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuessShinyGame createManyAndReturn
   */
  export type GuessShinyGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * The data used to create many GuessShinyGames.
     */
    data: GuessShinyGameCreateManyInput | GuessShinyGameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuessShinyGame update
   */
  export type GuessShinyGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameInclude<ExtArgs> | null
    /**
     * The data needed to update a GuessShinyGame.
     */
    data: XOR<GuessShinyGameUpdateInput, GuessShinyGameUncheckedUpdateInput>
    /**
     * Choose, which GuessShinyGame to update.
     */
    where: GuessShinyGameWhereUniqueInput
  }

  /**
   * GuessShinyGame updateMany
   */
  export type GuessShinyGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuessShinyGames.
     */
    data: XOR<GuessShinyGameUpdateManyMutationInput, GuessShinyGameUncheckedUpdateManyInput>
    /**
     * Filter which GuessShinyGames to update
     */
    where?: GuessShinyGameWhereInput
    /**
     * Limit how many GuessShinyGames to update.
     */
    limit?: number
  }

  /**
   * GuessShinyGame updateManyAndReturn
   */
  export type GuessShinyGameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * The data used to update GuessShinyGames.
     */
    data: XOR<GuessShinyGameUpdateManyMutationInput, GuessShinyGameUncheckedUpdateManyInput>
    /**
     * Filter which GuessShinyGames to update
     */
    where?: GuessShinyGameWhereInput
    /**
     * Limit how many GuessShinyGames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuessShinyGame upsert
   */
  export type GuessShinyGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameInclude<ExtArgs> | null
    /**
     * The filter to search for the GuessShinyGame to update in case it exists.
     */
    where: GuessShinyGameWhereUniqueInput
    /**
     * In case the GuessShinyGame found by the `where` argument doesn't exist, create a new GuessShinyGame with this data.
     */
    create: XOR<GuessShinyGameCreateInput, GuessShinyGameUncheckedCreateInput>
    /**
     * In case the GuessShinyGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuessShinyGameUpdateInput, GuessShinyGameUncheckedUpdateInput>
  }

  /**
   * GuessShinyGame delete
   */
  export type GuessShinyGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameInclude<ExtArgs> | null
    /**
     * Filter which GuessShinyGame to delete.
     */
    where: GuessShinyGameWhereUniqueInput
  }

  /**
   * GuessShinyGame deleteMany
   */
  export type GuessShinyGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuessShinyGames to delete
     */
    where?: GuessShinyGameWhereInput
    /**
     * Limit how many GuessShinyGames to delete.
     */
    limit?: number
  }

  /**
   * GuessShinyGame without action
   */
  export type GuessShinyGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuessShinyGame
     */
    select?: GuessShinyGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuessShinyGame
     */
    omit?: GuessShinyGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuessShinyGameInclude<ExtArgs> | null
  }


  /**
   * Model PokedokuGame
   */

  export type AggregatePokedokuGame = {
    _count: PokedokuGameCountAggregateOutputType | null
    _avg: PokedokuGameAvgAggregateOutputType | null
    _sum: PokedokuGameSumAggregateOutputType | null
    _min: PokedokuGameMinAggregateOutputType | null
    _max: PokedokuGameMaxAggregateOutputType | null
  }

  export type PokedokuGameAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    xpEarned: number | null
  }

  export type PokedokuGameSumAggregateOutputType = {
    id: number | null
    userId: number | null
    xpEarned: number | null
  }

  export type PokedokuGameMinAggregateOutputType = {
    id: number | null
    gameId: string | null
    userId: number | null
    status: $Enums.GameStatus | null
    startedAt: Date | null
    xpEarned: number | null
  }

  export type PokedokuGameMaxAggregateOutputType = {
    id: number | null
    gameId: string | null
    userId: number | null
    status: $Enums.GameStatus | null
    startedAt: Date | null
    xpEarned: number | null
  }

  export type PokedokuGameCountAggregateOutputType = {
    id: number
    gameId: number
    userId: number
    status: number
    startedAt: number
    xpEarned: number
    _all: number
  }


  export type PokedokuGameAvgAggregateInputType = {
    id?: true
    userId?: true
    xpEarned?: true
  }

  export type PokedokuGameSumAggregateInputType = {
    id?: true
    userId?: true
    xpEarned?: true
  }

  export type PokedokuGameMinAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    status?: true
    startedAt?: true
    xpEarned?: true
  }

  export type PokedokuGameMaxAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    status?: true
    startedAt?: true
    xpEarned?: true
  }

  export type PokedokuGameCountAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    status?: true
    startedAt?: true
    xpEarned?: true
    _all?: true
  }

  export type PokedokuGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokedokuGame to aggregate.
     */
    where?: PokedokuGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokedokuGames to fetch.
     */
    orderBy?: PokedokuGameOrderByWithRelationInput | PokedokuGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokedokuGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokedokuGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokedokuGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokedokuGames
    **/
    _count?: true | PokedokuGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokedokuGameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokedokuGameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokedokuGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokedokuGameMaxAggregateInputType
  }

  export type GetPokedokuGameAggregateType<T extends PokedokuGameAggregateArgs> = {
        [P in keyof T & keyof AggregatePokedokuGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokedokuGame[P]>
      : GetScalarType<T[P], AggregatePokedokuGame[P]>
  }




  export type PokedokuGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokedokuGameWhereInput
    orderBy?: PokedokuGameOrderByWithAggregationInput | PokedokuGameOrderByWithAggregationInput[]
    by: PokedokuGameScalarFieldEnum[] | PokedokuGameScalarFieldEnum
    having?: PokedokuGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokedokuGameCountAggregateInputType | true
    _avg?: PokedokuGameAvgAggregateInputType
    _sum?: PokedokuGameSumAggregateInputType
    _min?: PokedokuGameMinAggregateInputType
    _max?: PokedokuGameMaxAggregateInputType
  }

  export type PokedokuGameGroupByOutputType = {
    id: number
    gameId: string
    userId: number
    status: $Enums.GameStatus
    startedAt: Date
    xpEarned: number | null
    _count: PokedokuGameCountAggregateOutputType | null
    _avg: PokedokuGameAvgAggregateOutputType | null
    _sum: PokedokuGameSumAggregateOutputType | null
    _min: PokedokuGameMinAggregateOutputType | null
    _max: PokedokuGameMaxAggregateOutputType | null
  }

  type GetPokedokuGameGroupByPayload<T extends PokedokuGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokedokuGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokedokuGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokedokuGameGroupByOutputType[P]>
            : GetScalarType<T[P], PokedokuGameGroupByOutputType[P]>
        }
      >
    >


  export type PokedokuGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    status?: boolean
    startedAt?: boolean
    xpEarned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cells?: boolean | PokedokuGame$cellsArgs<ExtArgs>
    _count?: boolean | PokedokuGameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokedokuGame"]>

  export type PokedokuGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    status?: boolean
    startedAt?: boolean
    xpEarned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokedokuGame"]>

  export type PokedokuGameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    status?: boolean
    startedAt?: boolean
    xpEarned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokedokuGame"]>

  export type PokedokuGameSelectScalar = {
    id?: boolean
    gameId?: boolean
    userId?: boolean
    status?: boolean
    startedAt?: boolean
    xpEarned?: boolean
  }

  export type PokedokuGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "userId" | "status" | "startedAt" | "xpEarned", ExtArgs["result"]["pokedokuGame"]>
  export type PokedokuGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cells?: boolean | PokedokuGame$cellsArgs<ExtArgs>
    _count?: boolean | PokedokuGameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PokedokuGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PokedokuGameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PokedokuGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokedokuGame"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cells: Prisma.$PokedokuGameCellPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: string
      userId: number
      status: $Enums.GameStatus
      startedAt: Date
      xpEarned: number | null
    }, ExtArgs["result"]["pokedokuGame"]>
    composites: {}
  }

  type PokedokuGameGetPayload<S extends boolean | null | undefined | PokedokuGameDefaultArgs> = $Result.GetResult<Prisma.$PokedokuGamePayload, S>

  type PokedokuGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokedokuGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokedokuGameCountAggregateInputType | true
    }

  export interface PokedokuGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokedokuGame'], meta: { name: 'PokedokuGame' } }
    /**
     * Find zero or one PokedokuGame that matches the filter.
     * @param {PokedokuGameFindUniqueArgs} args - Arguments to find a PokedokuGame
     * @example
     * // Get one PokedokuGame
     * const pokedokuGame = await prisma.pokedokuGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokedokuGameFindUniqueArgs>(args: SelectSubset<T, PokedokuGameFindUniqueArgs<ExtArgs>>): Prisma__PokedokuGameClient<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PokedokuGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokedokuGameFindUniqueOrThrowArgs} args - Arguments to find a PokedokuGame
     * @example
     * // Get one PokedokuGame
     * const pokedokuGame = await prisma.pokedokuGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokedokuGameFindUniqueOrThrowArgs>(args: SelectSubset<T, PokedokuGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokedokuGameClient<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokedokuGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameFindFirstArgs} args - Arguments to find a PokedokuGame
     * @example
     * // Get one PokedokuGame
     * const pokedokuGame = await prisma.pokedokuGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokedokuGameFindFirstArgs>(args?: SelectSubset<T, PokedokuGameFindFirstArgs<ExtArgs>>): Prisma__PokedokuGameClient<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokedokuGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameFindFirstOrThrowArgs} args - Arguments to find a PokedokuGame
     * @example
     * // Get one PokedokuGame
     * const pokedokuGame = await prisma.pokedokuGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokedokuGameFindFirstOrThrowArgs>(args?: SelectSubset<T, PokedokuGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokedokuGameClient<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PokedokuGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokedokuGames
     * const pokedokuGames = await prisma.pokedokuGame.findMany()
     * 
     * // Get first 10 PokedokuGames
     * const pokedokuGames = await prisma.pokedokuGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokedokuGameWithIdOnly = await prisma.pokedokuGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokedokuGameFindManyArgs>(args?: SelectSubset<T, PokedokuGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PokedokuGame.
     * @param {PokedokuGameCreateArgs} args - Arguments to create a PokedokuGame.
     * @example
     * // Create one PokedokuGame
     * const PokedokuGame = await prisma.pokedokuGame.create({
     *   data: {
     *     // ... data to create a PokedokuGame
     *   }
     * })
     * 
     */
    create<T extends PokedokuGameCreateArgs>(args: SelectSubset<T, PokedokuGameCreateArgs<ExtArgs>>): Prisma__PokedokuGameClient<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PokedokuGames.
     * @param {PokedokuGameCreateManyArgs} args - Arguments to create many PokedokuGames.
     * @example
     * // Create many PokedokuGames
     * const pokedokuGame = await prisma.pokedokuGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokedokuGameCreateManyArgs>(args?: SelectSubset<T, PokedokuGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokedokuGames and returns the data saved in the database.
     * @param {PokedokuGameCreateManyAndReturnArgs} args - Arguments to create many PokedokuGames.
     * @example
     * // Create many PokedokuGames
     * const pokedokuGame = await prisma.pokedokuGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokedokuGames and only return the `id`
     * const pokedokuGameWithIdOnly = await prisma.pokedokuGame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokedokuGameCreateManyAndReturnArgs>(args?: SelectSubset<T, PokedokuGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PokedokuGame.
     * @param {PokedokuGameDeleteArgs} args - Arguments to delete one PokedokuGame.
     * @example
     * // Delete one PokedokuGame
     * const PokedokuGame = await prisma.pokedokuGame.delete({
     *   where: {
     *     // ... filter to delete one PokedokuGame
     *   }
     * })
     * 
     */
    delete<T extends PokedokuGameDeleteArgs>(args: SelectSubset<T, PokedokuGameDeleteArgs<ExtArgs>>): Prisma__PokedokuGameClient<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PokedokuGame.
     * @param {PokedokuGameUpdateArgs} args - Arguments to update one PokedokuGame.
     * @example
     * // Update one PokedokuGame
     * const pokedokuGame = await prisma.pokedokuGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokedokuGameUpdateArgs>(args: SelectSubset<T, PokedokuGameUpdateArgs<ExtArgs>>): Prisma__PokedokuGameClient<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PokedokuGames.
     * @param {PokedokuGameDeleteManyArgs} args - Arguments to filter PokedokuGames to delete.
     * @example
     * // Delete a few PokedokuGames
     * const { count } = await prisma.pokedokuGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokedokuGameDeleteManyArgs>(args?: SelectSubset<T, PokedokuGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokedokuGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokedokuGames
     * const pokedokuGame = await prisma.pokedokuGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokedokuGameUpdateManyArgs>(args: SelectSubset<T, PokedokuGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokedokuGames and returns the data updated in the database.
     * @param {PokedokuGameUpdateManyAndReturnArgs} args - Arguments to update many PokedokuGames.
     * @example
     * // Update many PokedokuGames
     * const pokedokuGame = await prisma.pokedokuGame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PokedokuGames and only return the `id`
     * const pokedokuGameWithIdOnly = await prisma.pokedokuGame.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokedokuGameUpdateManyAndReturnArgs>(args: SelectSubset<T, PokedokuGameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PokedokuGame.
     * @param {PokedokuGameUpsertArgs} args - Arguments to update or create a PokedokuGame.
     * @example
     * // Update or create a PokedokuGame
     * const pokedokuGame = await prisma.pokedokuGame.upsert({
     *   create: {
     *     // ... data to create a PokedokuGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokedokuGame we want to update
     *   }
     * })
     */
    upsert<T extends PokedokuGameUpsertArgs>(args: SelectSubset<T, PokedokuGameUpsertArgs<ExtArgs>>): Prisma__PokedokuGameClient<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PokedokuGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameCountArgs} args - Arguments to filter PokedokuGames to count.
     * @example
     * // Count the number of PokedokuGames
     * const count = await prisma.pokedokuGame.count({
     *   where: {
     *     // ... the filter for the PokedokuGames we want to count
     *   }
     * })
    **/
    count<T extends PokedokuGameCountArgs>(
      args?: Subset<T, PokedokuGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokedokuGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokedokuGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokedokuGameAggregateArgs>(args: Subset<T, PokedokuGameAggregateArgs>): Prisma.PrismaPromise<GetPokedokuGameAggregateType<T>>

    /**
     * Group by PokedokuGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokedokuGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokedokuGameGroupByArgs['orderBy'] }
        : { orderBy?: PokedokuGameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokedokuGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokedokuGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokedokuGame model
   */
  readonly fields: PokedokuGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokedokuGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokedokuGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cells<T extends PokedokuGame$cellsArgs<ExtArgs> = {}>(args?: Subset<T, PokedokuGame$cellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PokedokuGame model
   */
  interface PokedokuGameFieldRefs {
    readonly id: FieldRef<"PokedokuGame", 'Int'>
    readonly gameId: FieldRef<"PokedokuGame", 'String'>
    readonly userId: FieldRef<"PokedokuGame", 'Int'>
    readonly status: FieldRef<"PokedokuGame", 'GameStatus'>
    readonly startedAt: FieldRef<"PokedokuGame", 'DateTime'>
    readonly xpEarned: FieldRef<"PokedokuGame", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PokedokuGame findUnique
   */
  export type PokedokuGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameInclude<ExtArgs> | null
    /**
     * Filter, which PokedokuGame to fetch.
     */
    where: PokedokuGameWhereUniqueInput
  }

  /**
   * PokedokuGame findUniqueOrThrow
   */
  export type PokedokuGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameInclude<ExtArgs> | null
    /**
     * Filter, which PokedokuGame to fetch.
     */
    where: PokedokuGameWhereUniqueInput
  }

  /**
   * PokedokuGame findFirst
   */
  export type PokedokuGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameInclude<ExtArgs> | null
    /**
     * Filter, which PokedokuGame to fetch.
     */
    where?: PokedokuGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokedokuGames to fetch.
     */
    orderBy?: PokedokuGameOrderByWithRelationInput | PokedokuGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokedokuGames.
     */
    cursor?: PokedokuGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokedokuGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokedokuGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokedokuGames.
     */
    distinct?: PokedokuGameScalarFieldEnum | PokedokuGameScalarFieldEnum[]
  }

  /**
   * PokedokuGame findFirstOrThrow
   */
  export type PokedokuGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameInclude<ExtArgs> | null
    /**
     * Filter, which PokedokuGame to fetch.
     */
    where?: PokedokuGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokedokuGames to fetch.
     */
    orderBy?: PokedokuGameOrderByWithRelationInput | PokedokuGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokedokuGames.
     */
    cursor?: PokedokuGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokedokuGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokedokuGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokedokuGames.
     */
    distinct?: PokedokuGameScalarFieldEnum | PokedokuGameScalarFieldEnum[]
  }

  /**
   * PokedokuGame findMany
   */
  export type PokedokuGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameInclude<ExtArgs> | null
    /**
     * Filter, which PokedokuGames to fetch.
     */
    where?: PokedokuGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokedokuGames to fetch.
     */
    orderBy?: PokedokuGameOrderByWithRelationInput | PokedokuGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokedokuGames.
     */
    cursor?: PokedokuGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokedokuGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokedokuGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokedokuGames.
     */
    distinct?: PokedokuGameScalarFieldEnum | PokedokuGameScalarFieldEnum[]
  }

  /**
   * PokedokuGame create
   */
  export type PokedokuGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameInclude<ExtArgs> | null
    /**
     * The data needed to create a PokedokuGame.
     */
    data: XOR<PokedokuGameCreateInput, PokedokuGameUncheckedCreateInput>
  }

  /**
   * PokedokuGame createMany
   */
  export type PokedokuGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokedokuGames.
     */
    data: PokedokuGameCreateManyInput | PokedokuGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokedokuGame createManyAndReturn
   */
  export type PokedokuGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * The data used to create many PokedokuGames.
     */
    data: PokedokuGameCreateManyInput | PokedokuGameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokedokuGame update
   */
  export type PokedokuGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameInclude<ExtArgs> | null
    /**
     * The data needed to update a PokedokuGame.
     */
    data: XOR<PokedokuGameUpdateInput, PokedokuGameUncheckedUpdateInput>
    /**
     * Choose, which PokedokuGame to update.
     */
    where: PokedokuGameWhereUniqueInput
  }

  /**
   * PokedokuGame updateMany
   */
  export type PokedokuGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokedokuGames.
     */
    data: XOR<PokedokuGameUpdateManyMutationInput, PokedokuGameUncheckedUpdateManyInput>
    /**
     * Filter which PokedokuGames to update
     */
    where?: PokedokuGameWhereInput
    /**
     * Limit how many PokedokuGames to update.
     */
    limit?: number
  }

  /**
   * PokedokuGame updateManyAndReturn
   */
  export type PokedokuGameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * The data used to update PokedokuGames.
     */
    data: XOR<PokedokuGameUpdateManyMutationInput, PokedokuGameUncheckedUpdateManyInput>
    /**
     * Filter which PokedokuGames to update
     */
    where?: PokedokuGameWhereInput
    /**
     * Limit how many PokedokuGames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokedokuGame upsert
   */
  export type PokedokuGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameInclude<ExtArgs> | null
    /**
     * The filter to search for the PokedokuGame to update in case it exists.
     */
    where: PokedokuGameWhereUniqueInput
    /**
     * In case the PokedokuGame found by the `where` argument doesn't exist, create a new PokedokuGame with this data.
     */
    create: XOR<PokedokuGameCreateInput, PokedokuGameUncheckedCreateInput>
    /**
     * In case the PokedokuGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokedokuGameUpdateInput, PokedokuGameUncheckedUpdateInput>
  }

  /**
   * PokedokuGame delete
   */
  export type PokedokuGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameInclude<ExtArgs> | null
    /**
     * Filter which PokedokuGame to delete.
     */
    where: PokedokuGameWhereUniqueInput
  }

  /**
   * PokedokuGame deleteMany
   */
  export type PokedokuGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokedokuGames to delete
     */
    where?: PokedokuGameWhereInput
    /**
     * Limit how many PokedokuGames to delete.
     */
    limit?: number
  }

  /**
   * PokedokuGame.cells
   */
  export type PokedokuGame$cellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellInclude<ExtArgs> | null
    where?: PokedokuGameCellWhereInput
    orderBy?: PokedokuGameCellOrderByWithRelationInput | PokedokuGameCellOrderByWithRelationInput[]
    cursor?: PokedokuGameCellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokedokuGameCellScalarFieldEnum | PokedokuGameCellScalarFieldEnum[]
  }

  /**
   * PokedokuGame without action
   */
  export type PokedokuGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGame
     */
    select?: PokedokuGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGame
     */
    omit?: PokedokuGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameInclude<ExtArgs> | null
  }


  /**
   * Model PokedokuGameCell
   */

  export type AggregatePokedokuGameCell = {
    _count: PokedokuGameCellCountAggregateOutputType | null
    _avg: PokedokuGameCellAvgAggregateOutputType | null
    _sum: PokedokuGameCellSumAggregateOutputType | null
    _min: PokedokuGameCellMinAggregateOutputType | null
    _max: PokedokuGameCellMaxAggregateOutputType | null
  }

  export type PokedokuGameCellAvgAggregateOutputType = {
    id: number | null
    gameInternalId: number | null
    position: number | null
    answerPokemonId: number | null
  }

  export type PokedokuGameCellSumAggregateOutputType = {
    id: number | null
    gameInternalId: number | null
    position: number | null
    answerPokemonId: number | null
  }

  export type PokedokuGameCellMinAggregateOutputType = {
    id: number | null
    gameInternalId: number | null
    position: number | null
    rowConditionType: string | null
    rowConditionValue: string | null
    columnConditionType: string | null
    columnConditionValue: string | null
    answerPokemonId: number | null
    isCorrect: boolean | null
    answeredAt: Date | null
  }

  export type PokedokuGameCellMaxAggregateOutputType = {
    id: number | null
    gameInternalId: number | null
    position: number | null
    rowConditionType: string | null
    rowConditionValue: string | null
    columnConditionType: string | null
    columnConditionValue: string | null
    answerPokemonId: number | null
    isCorrect: boolean | null
    answeredAt: Date | null
  }

  export type PokedokuGameCellCountAggregateOutputType = {
    id: number
    gameInternalId: number
    position: number
    rowConditionType: number
    rowConditionValue: number
    columnConditionType: number
    columnConditionValue: number
    answerPokemonId: number
    isCorrect: number
    answeredAt: number
    _all: number
  }


  export type PokedokuGameCellAvgAggregateInputType = {
    id?: true
    gameInternalId?: true
    position?: true
    answerPokemonId?: true
  }

  export type PokedokuGameCellSumAggregateInputType = {
    id?: true
    gameInternalId?: true
    position?: true
    answerPokemonId?: true
  }

  export type PokedokuGameCellMinAggregateInputType = {
    id?: true
    gameInternalId?: true
    position?: true
    rowConditionType?: true
    rowConditionValue?: true
    columnConditionType?: true
    columnConditionValue?: true
    answerPokemonId?: true
    isCorrect?: true
    answeredAt?: true
  }

  export type PokedokuGameCellMaxAggregateInputType = {
    id?: true
    gameInternalId?: true
    position?: true
    rowConditionType?: true
    rowConditionValue?: true
    columnConditionType?: true
    columnConditionValue?: true
    answerPokemonId?: true
    isCorrect?: true
    answeredAt?: true
  }

  export type PokedokuGameCellCountAggregateInputType = {
    id?: true
    gameInternalId?: true
    position?: true
    rowConditionType?: true
    rowConditionValue?: true
    columnConditionType?: true
    columnConditionValue?: true
    answerPokemonId?: true
    isCorrect?: true
    answeredAt?: true
    _all?: true
  }

  export type PokedokuGameCellAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokedokuGameCell to aggregate.
     */
    where?: PokedokuGameCellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokedokuGameCells to fetch.
     */
    orderBy?: PokedokuGameCellOrderByWithRelationInput | PokedokuGameCellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokedokuGameCellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokedokuGameCells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokedokuGameCells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokedokuGameCells
    **/
    _count?: true | PokedokuGameCellCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokedokuGameCellAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokedokuGameCellSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokedokuGameCellMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokedokuGameCellMaxAggregateInputType
  }

  export type GetPokedokuGameCellAggregateType<T extends PokedokuGameCellAggregateArgs> = {
        [P in keyof T & keyof AggregatePokedokuGameCell]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokedokuGameCell[P]>
      : GetScalarType<T[P], AggregatePokedokuGameCell[P]>
  }




  export type PokedokuGameCellGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokedokuGameCellWhereInput
    orderBy?: PokedokuGameCellOrderByWithAggregationInput | PokedokuGameCellOrderByWithAggregationInput[]
    by: PokedokuGameCellScalarFieldEnum[] | PokedokuGameCellScalarFieldEnum
    having?: PokedokuGameCellScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokedokuGameCellCountAggregateInputType | true
    _avg?: PokedokuGameCellAvgAggregateInputType
    _sum?: PokedokuGameCellSumAggregateInputType
    _min?: PokedokuGameCellMinAggregateInputType
    _max?: PokedokuGameCellMaxAggregateInputType
  }

  export type PokedokuGameCellGroupByOutputType = {
    id: number
    gameInternalId: number
    position: number
    rowConditionType: string
    rowConditionValue: string
    columnConditionType: string
    columnConditionValue: string
    answerPokemonId: number | null
    isCorrect: boolean | null
    answeredAt: Date | null
    _count: PokedokuGameCellCountAggregateOutputType | null
    _avg: PokedokuGameCellAvgAggregateOutputType | null
    _sum: PokedokuGameCellSumAggregateOutputType | null
    _min: PokedokuGameCellMinAggregateOutputType | null
    _max: PokedokuGameCellMaxAggregateOutputType | null
  }

  type GetPokedokuGameCellGroupByPayload<T extends PokedokuGameCellGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokedokuGameCellGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokedokuGameCellGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokedokuGameCellGroupByOutputType[P]>
            : GetScalarType<T[P], PokedokuGameCellGroupByOutputType[P]>
        }
      >
    >


  export type PokedokuGameCellSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameInternalId?: boolean
    position?: boolean
    rowConditionType?: boolean
    rowConditionValue?: boolean
    columnConditionType?: boolean
    columnConditionValue?: boolean
    answerPokemonId?: boolean
    isCorrect?: boolean
    answeredAt?: boolean
    game?: boolean | PokedokuGameDefaultArgs<ExtArgs>
    answerPokemon?: boolean | PokedokuGameCell$answerPokemonArgs<ExtArgs>
  }, ExtArgs["result"]["pokedokuGameCell"]>

  export type PokedokuGameCellSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameInternalId?: boolean
    position?: boolean
    rowConditionType?: boolean
    rowConditionValue?: boolean
    columnConditionType?: boolean
    columnConditionValue?: boolean
    answerPokemonId?: boolean
    isCorrect?: boolean
    answeredAt?: boolean
    game?: boolean | PokedokuGameDefaultArgs<ExtArgs>
    answerPokemon?: boolean | PokedokuGameCell$answerPokemonArgs<ExtArgs>
  }, ExtArgs["result"]["pokedokuGameCell"]>

  export type PokedokuGameCellSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameInternalId?: boolean
    position?: boolean
    rowConditionType?: boolean
    rowConditionValue?: boolean
    columnConditionType?: boolean
    columnConditionValue?: boolean
    answerPokemonId?: boolean
    isCorrect?: boolean
    answeredAt?: boolean
    game?: boolean | PokedokuGameDefaultArgs<ExtArgs>
    answerPokemon?: boolean | PokedokuGameCell$answerPokemonArgs<ExtArgs>
  }, ExtArgs["result"]["pokedokuGameCell"]>

  export type PokedokuGameCellSelectScalar = {
    id?: boolean
    gameInternalId?: boolean
    position?: boolean
    rowConditionType?: boolean
    rowConditionValue?: boolean
    columnConditionType?: boolean
    columnConditionValue?: boolean
    answerPokemonId?: boolean
    isCorrect?: boolean
    answeredAt?: boolean
  }

  export type PokedokuGameCellOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameInternalId" | "position" | "rowConditionType" | "rowConditionValue" | "columnConditionType" | "columnConditionValue" | "answerPokemonId" | "isCorrect" | "answeredAt", ExtArgs["result"]["pokedokuGameCell"]>
  export type PokedokuGameCellInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | PokedokuGameDefaultArgs<ExtArgs>
    answerPokemon?: boolean | PokedokuGameCell$answerPokemonArgs<ExtArgs>
  }
  export type PokedokuGameCellIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | PokedokuGameDefaultArgs<ExtArgs>
    answerPokemon?: boolean | PokedokuGameCell$answerPokemonArgs<ExtArgs>
  }
  export type PokedokuGameCellIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | PokedokuGameDefaultArgs<ExtArgs>
    answerPokemon?: boolean | PokedokuGameCell$answerPokemonArgs<ExtArgs>
  }

  export type $PokedokuGameCellPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokedokuGameCell"
    objects: {
      game: Prisma.$PokedokuGamePayload<ExtArgs>
      answerPokemon: Prisma.$PokemonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameInternalId: number
      position: number
      rowConditionType: string
      rowConditionValue: string
      columnConditionType: string
      columnConditionValue: string
      answerPokemonId: number | null
      isCorrect: boolean | null
      answeredAt: Date | null
    }, ExtArgs["result"]["pokedokuGameCell"]>
    composites: {}
  }

  type PokedokuGameCellGetPayload<S extends boolean | null | undefined | PokedokuGameCellDefaultArgs> = $Result.GetResult<Prisma.$PokedokuGameCellPayload, S>

  type PokedokuGameCellCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokedokuGameCellFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokedokuGameCellCountAggregateInputType | true
    }

  export interface PokedokuGameCellDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokedokuGameCell'], meta: { name: 'PokedokuGameCell' } }
    /**
     * Find zero or one PokedokuGameCell that matches the filter.
     * @param {PokedokuGameCellFindUniqueArgs} args - Arguments to find a PokedokuGameCell
     * @example
     * // Get one PokedokuGameCell
     * const pokedokuGameCell = await prisma.pokedokuGameCell.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokedokuGameCellFindUniqueArgs>(args: SelectSubset<T, PokedokuGameCellFindUniqueArgs<ExtArgs>>): Prisma__PokedokuGameCellClient<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PokedokuGameCell that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokedokuGameCellFindUniqueOrThrowArgs} args - Arguments to find a PokedokuGameCell
     * @example
     * // Get one PokedokuGameCell
     * const pokedokuGameCell = await prisma.pokedokuGameCell.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokedokuGameCellFindUniqueOrThrowArgs>(args: SelectSubset<T, PokedokuGameCellFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokedokuGameCellClient<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokedokuGameCell that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameCellFindFirstArgs} args - Arguments to find a PokedokuGameCell
     * @example
     * // Get one PokedokuGameCell
     * const pokedokuGameCell = await prisma.pokedokuGameCell.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokedokuGameCellFindFirstArgs>(args?: SelectSubset<T, PokedokuGameCellFindFirstArgs<ExtArgs>>): Prisma__PokedokuGameCellClient<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokedokuGameCell that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameCellFindFirstOrThrowArgs} args - Arguments to find a PokedokuGameCell
     * @example
     * // Get one PokedokuGameCell
     * const pokedokuGameCell = await prisma.pokedokuGameCell.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokedokuGameCellFindFirstOrThrowArgs>(args?: SelectSubset<T, PokedokuGameCellFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokedokuGameCellClient<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PokedokuGameCells that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameCellFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokedokuGameCells
     * const pokedokuGameCells = await prisma.pokedokuGameCell.findMany()
     * 
     * // Get first 10 PokedokuGameCells
     * const pokedokuGameCells = await prisma.pokedokuGameCell.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokedokuGameCellWithIdOnly = await prisma.pokedokuGameCell.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokedokuGameCellFindManyArgs>(args?: SelectSubset<T, PokedokuGameCellFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PokedokuGameCell.
     * @param {PokedokuGameCellCreateArgs} args - Arguments to create a PokedokuGameCell.
     * @example
     * // Create one PokedokuGameCell
     * const PokedokuGameCell = await prisma.pokedokuGameCell.create({
     *   data: {
     *     // ... data to create a PokedokuGameCell
     *   }
     * })
     * 
     */
    create<T extends PokedokuGameCellCreateArgs>(args: SelectSubset<T, PokedokuGameCellCreateArgs<ExtArgs>>): Prisma__PokedokuGameCellClient<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PokedokuGameCells.
     * @param {PokedokuGameCellCreateManyArgs} args - Arguments to create many PokedokuGameCells.
     * @example
     * // Create many PokedokuGameCells
     * const pokedokuGameCell = await prisma.pokedokuGameCell.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokedokuGameCellCreateManyArgs>(args?: SelectSubset<T, PokedokuGameCellCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokedokuGameCells and returns the data saved in the database.
     * @param {PokedokuGameCellCreateManyAndReturnArgs} args - Arguments to create many PokedokuGameCells.
     * @example
     * // Create many PokedokuGameCells
     * const pokedokuGameCell = await prisma.pokedokuGameCell.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokedokuGameCells and only return the `id`
     * const pokedokuGameCellWithIdOnly = await prisma.pokedokuGameCell.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokedokuGameCellCreateManyAndReturnArgs>(args?: SelectSubset<T, PokedokuGameCellCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PokedokuGameCell.
     * @param {PokedokuGameCellDeleteArgs} args - Arguments to delete one PokedokuGameCell.
     * @example
     * // Delete one PokedokuGameCell
     * const PokedokuGameCell = await prisma.pokedokuGameCell.delete({
     *   where: {
     *     // ... filter to delete one PokedokuGameCell
     *   }
     * })
     * 
     */
    delete<T extends PokedokuGameCellDeleteArgs>(args: SelectSubset<T, PokedokuGameCellDeleteArgs<ExtArgs>>): Prisma__PokedokuGameCellClient<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PokedokuGameCell.
     * @param {PokedokuGameCellUpdateArgs} args - Arguments to update one PokedokuGameCell.
     * @example
     * // Update one PokedokuGameCell
     * const pokedokuGameCell = await prisma.pokedokuGameCell.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokedokuGameCellUpdateArgs>(args: SelectSubset<T, PokedokuGameCellUpdateArgs<ExtArgs>>): Prisma__PokedokuGameCellClient<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PokedokuGameCells.
     * @param {PokedokuGameCellDeleteManyArgs} args - Arguments to filter PokedokuGameCells to delete.
     * @example
     * // Delete a few PokedokuGameCells
     * const { count } = await prisma.pokedokuGameCell.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokedokuGameCellDeleteManyArgs>(args?: SelectSubset<T, PokedokuGameCellDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokedokuGameCells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameCellUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokedokuGameCells
     * const pokedokuGameCell = await prisma.pokedokuGameCell.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokedokuGameCellUpdateManyArgs>(args: SelectSubset<T, PokedokuGameCellUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokedokuGameCells and returns the data updated in the database.
     * @param {PokedokuGameCellUpdateManyAndReturnArgs} args - Arguments to update many PokedokuGameCells.
     * @example
     * // Update many PokedokuGameCells
     * const pokedokuGameCell = await prisma.pokedokuGameCell.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PokedokuGameCells and only return the `id`
     * const pokedokuGameCellWithIdOnly = await prisma.pokedokuGameCell.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokedokuGameCellUpdateManyAndReturnArgs>(args: SelectSubset<T, PokedokuGameCellUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PokedokuGameCell.
     * @param {PokedokuGameCellUpsertArgs} args - Arguments to update or create a PokedokuGameCell.
     * @example
     * // Update or create a PokedokuGameCell
     * const pokedokuGameCell = await prisma.pokedokuGameCell.upsert({
     *   create: {
     *     // ... data to create a PokedokuGameCell
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokedokuGameCell we want to update
     *   }
     * })
     */
    upsert<T extends PokedokuGameCellUpsertArgs>(args: SelectSubset<T, PokedokuGameCellUpsertArgs<ExtArgs>>): Prisma__PokedokuGameCellClient<$Result.GetResult<Prisma.$PokedokuGameCellPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PokedokuGameCells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameCellCountArgs} args - Arguments to filter PokedokuGameCells to count.
     * @example
     * // Count the number of PokedokuGameCells
     * const count = await prisma.pokedokuGameCell.count({
     *   where: {
     *     // ... the filter for the PokedokuGameCells we want to count
     *   }
     * })
    **/
    count<T extends PokedokuGameCellCountArgs>(
      args?: Subset<T, PokedokuGameCellCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokedokuGameCellCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokedokuGameCell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameCellAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokedokuGameCellAggregateArgs>(args: Subset<T, PokedokuGameCellAggregateArgs>): Prisma.PrismaPromise<GetPokedokuGameCellAggregateType<T>>

    /**
     * Group by PokedokuGameCell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokedokuGameCellGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokedokuGameCellGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokedokuGameCellGroupByArgs['orderBy'] }
        : { orderBy?: PokedokuGameCellGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokedokuGameCellGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokedokuGameCellGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokedokuGameCell model
   */
  readonly fields: PokedokuGameCellFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokedokuGameCell.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokedokuGameCellClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends PokedokuGameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokedokuGameDefaultArgs<ExtArgs>>): Prisma__PokedokuGameClient<$Result.GetResult<Prisma.$PokedokuGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answerPokemon<T extends PokedokuGameCell$answerPokemonArgs<ExtArgs> = {}>(args?: Subset<T, PokedokuGameCell$answerPokemonArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PokedokuGameCell model
   */
  interface PokedokuGameCellFieldRefs {
    readonly id: FieldRef<"PokedokuGameCell", 'Int'>
    readonly gameInternalId: FieldRef<"PokedokuGameCell", 'Int'>
    readonly position: FieldRef<"PokedokuGameCell", 'Int'>
    readonly rowConditionType: FieldRef<"PokedokuGameCell", 'String'>
    readonly rowConditionValue: FieldRef<"PokedokuGameCell", 'String'>
    readonly columnConditionType: FieldRef<"PokedokuGameCell", 'String'>
    readonly columnConditionValue: FieldRef<"PokedokuGameCell", 'String'>
    readonly answerPokemonId: FieldRef<"PokedokuGameCell", 'Int'>
    readonly isCorrect: FieldRef<"PokedokuGameCell", 'Boolean'>
    readonly answeredAt: FieldRef<"PokedokuGameCell", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PokedokuGameCell findUnique
   */
  export type PokedokuGameCellFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellInclude<ExtArgs> | null
    /**
     * Filter, which PokedokuGameCell to fetch.
     */
    where: PokedokuGameCellWhereUniqueInput
  }

  /**
   * PokedokuGameCell findUniqueOrThrow
   */
  export type PokedokuGameCellFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellInclude<ExtArgs> | null
    /**
     * Filter, which PokedokuGameCell to fetch.
     */
    where: PokedokuGameCellWhereUniqueInput
  }

  /**
   * PokedokuGameCell findFirst
   */
  export type PokedokuGameCellFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellInclude<ExtArgs> | null
    /**
     * Filter, which PokedokuGameCell to fetch.
     */
    where?: PokedokuGameCellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokedokuGameCells to fetch.
     */
    orderBy?: PokedokuGameCellOrderByWithRelationInput | PokedokuGameCellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokedokuGameCells.
     */
    cursor?: PokedokuGameCellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokedokuGameCells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokedokuGameCells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokedokuGameCells.
     */
    distinct?: PokedokuGameCellScalarFieldEnum | PokedokuGameCellScalarFieldEnum[]
  }

  /**
   * PokedokuGameCell findFirstOrThrow
   */
  export type PokedokuGameCellFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellInclude<ExtArgs> | null
    /**
     * Filter, which PokedokuGameCell to fetch.
     */
    where?: PokedokuGameCellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokedokuGameCells to fetch.
     */
    orderBy?: PokedokuGameCellOrderByWithRelationInput | PokedokuGameCellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokedokuGameCells.
     */
    cursor?: PokedokuGameCellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokedokuGameCells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokedokuGameCells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokedokuGameCells.
     */
    distinct?: PokedokuGameCellScalarFieldEnum | PokedokuGameCellScalarFieldEnum[]
  }

  /**
   * PokedokuGameCell findMany
   */
  export type PokedokuGameCellFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellInclude<ExtArgs> | null
    /**
     * Filter, which PokedokuGameCells to fetch.
     */
    where?: PokedokuGameCellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokedokuGameCells to fetch.
     */
    orderBy?: PokedokuGameCellOrderByWithRelationInput | PokedokuGameCellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokedokuGameCells.
     */
    cursor?: PokedokuGameCellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokedokuGameCells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokedokuGameCells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokedokuGameCells.
     */
    distinct?: PokedokuGameCellScalarFieldEnum | PokedokuGameCellScalarFieldEnum[]
  }

  /**
   * PokedokuGameCell create
   */
  export type PokedokuGameCellCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellInclude<ExtArgs> | null
    /**
     * The data needed to create a PokedokuGameCell.
     */
    data: XOR<PokedokuGameCellCreateInput, PokedokuGameCellUncheckedCreateInput>
  }

  /**
   * PokedokuGameCell createMany
   */
  export type PokedokuGameCellCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokedokuGameCells.
     */
    data: PokedokuGameCellCreateManyInput | PokedokuGameCellCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokedokuGameCell createManyAndReturn
   */
  export type PokedokuGameCellCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * The data used to create many PokedokuGameCells.
     */
    data: PokedokuGameCellCreateManyInput | PokedokuGameCellCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokedokuGameCell update
   */
  export type PokedokuGameCellUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellInclude<ExtArgs> | null
    /**
     * The data needed to update a PokedokuGameCell.
     */
    data: XOR<PokedokuGameCellUpdateInput, PokedokuGameCellUncheckedUpdateInput>
    /**
     * Choose, which PokedokuGameCell to update.
     */
    where: PokedokuGameCellWhereUniqueInput
  }

  /**
   * PokedokuGameCell updateMany
   */
  export type PokedokuGameCellUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokedokuGameCells.
     */
    data: XOR<PokedokuGameCellUpdateManyMutationInput, PokedokuGameCellUncheckedUpdateManyInput>
    /**
     * Filter which PokedokuGameCells to update
     */
    where?: PokedokuGameCellWhereInput
    /**
     * Limit how many PokedokuGameCells to update.
     */
    limit?: number
  }

  /**
   * PokedokuGameCell updateManyAndReturn
   */
  export type PokedokuGameCellUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * The data used to update PokedokuGameCells.
     */
    data: XOR<PokedokuGameCellUpdateManyMutationInput, PokedokuGameCellUncheckedUpdateManyInput>
    /**
     * Filter which PokedokuGameCells to update
     */
    where?: PokedokuGameCellWhereInput
    /**
     * Limit how many PokedokuGameCells to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokedokuGameCell upsert
   */
  export type PokedokuGameCellUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellInclude<ExtArgs> | null
    /**
     * The filter to search for the PokedokuGameCell to update in case it exists.
     */
    where: PokedokuGameCellWhereUniqueInput
    /**
     * In case the PokedokuGameCell found by the `where` argument doesn't exist, create a new PokedokuGameCell with this data.
     */
    create: XOR<PokedokuGameCellCreateInput, PokedokuGameCellUncheckedCreateInput>
    /**
     * In case the PokedokuGameCell was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokedokuGameCellUpdateInput, PokedokuGameCellUncheckedUpdateInput>
  }

  /**
   * PokedokuGameCell delete
   */
  export type PokedokuGameCellDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellInclude<ExtArgs> | null
    /**
     * Filter which PokedokuGameCell to delete.
     */
    where: PokedokuGameCellWhereUniqueInput
  }

  /**
   * PokedokuGameCell deleteMany
   */
  export type PokedokuGameCellDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokedokuGameCells to delete
     */
    where?: PokedokuGameCellWhereInput
    /**
     * Limit how many PokedokuGameCells to delete.
     */
    limit?: number
  }

  /**
   * PokedokuGameCell.answerPokemon
   */
  export type PokedokuGameCell$answerPokemonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    where?: PokemonWhereInput
  }

  /**
   * PokedokuGameCell without action
   */
  export type PokedokuGameCellDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedokuGameCell
     */
    select?: PokedokuGameCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokedokuGameCell
     */
    omit?: PokedokuGameCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokedokuGameCellInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PasswordResetTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    tokenHash: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    tokenHash: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    expiresAt: number
    usedAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PasswordResetTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _avg?: PasswordResetTokenAvgAggregateInputType
    _sum?: PasswordResetTokenSumAggregateInputType
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: number
    userId: number
    tokenHash: string
    expiresAt: Date
    usedAt: Date | null
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "expiresAt" | "usedAt" | "createdAt", ExtArgs["result"]["passwordResetToken"]>
  export type PasswordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      tokenHash: string
      expiresAt: Date
      usedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'Int'>
    readonly userId: FieldRef<"PasswordResetToken", 'Int'>
    readonly tokenHash: FieldRef<"PasswordResetToken", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly usedAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    level: 'level',
    xp: 'xp',
    lootboxes: 'lootboxes',
    admin: 'admin',
    refreshToken: 'refreshToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PokemonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    generation: 'generation',
    urlImage: 'urlImage',
    urlShinyImage: 'urlShinyImage',
    legendary: 'legendary',
    myth: 'myth',
    hp: 'hp',
    atk: 'atk',
    def: 'def',
    spAtk: 'spAtk',
    spDef: 'spDef',
    speed: 'speed'
  };

  export type PokemonScalarFieldEnum = (typeof PokemonScalarFieldEnum)[keyof typeof PokemonScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const UserPokemonScalarFieldEnum: {
    userId: 'userId',
    pokemonId: 'pokemonId',
    quantity: 'quantity'
  };

  export type UserPokemonScalarFieldEnum = (typeof UserPokemonScalarFieldEnum)[keyof typeof UserPokemonScalarFieldEnum]


  export const PokemonTypeScalarFieldEnum: {
    pokemonId: 'pokemonId',
    typeId: 'typeId'
  };

  export type PokemonTypeScalarFieldEnum = (typeof PokemonTypeScalarFieldEnum)[keyof typeof PokemonTypeScalarFieldEnum]


  export const EvolutiveChainScalarFieldEnum: {
    evolutionChainId: 'evolutionChainId',
    fromPokemonId: 'fromPokemonId',
    toPokemonId: 'toPokemonId',
    method: 'method',
    condition: 'condition'
  };

  export type EvolutiveChainScalarFieldEnum = (typeof EvolutiveChainScalarFieldEnum)[keyof typeof EvolutiveChainScalarFieldEnum]


  export const GuessPokemonGameScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    userId: 'userId',
    pokemonId: 'pokemonId',
    maxAttempts: 'maxAttempts',
    remainingAttempts: 'remainingAttempts',
    lastGuess: 'lastGuess',
    status: 'status',
    startedAt: 'startedAt',
    xpEarned: 'xpEarned'
  };

  export type GuessPokemonGameScalarFieldEnum = (typeof GuessPokemonGameScalarFieldEnum)[keyof typeof GuessPokemonGameScalarFieldEnum]


  export const GuessShinyGameScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    userId: 'userId',
    pokemonId: 'pokemonId',
    correctPosition: 'correctPosition',
    maxAttempts: 'maxAttempts',
    remainingAttempts: 'remainingAttempts',
    lastGuess: 'lastGuess',
    status: 'status',
    startedAt: 'startedAt',
    xpEarned: 'xpEarned'
  };

  export type GuessShinyGameScalarFieldEnum = (typeof GuessShinyGameScalarFieldEnum)[keyof typeof GuessShinyGameScalarFieldEnum]


  export const PokedokuGameScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    userId: 'userId',
    status: 'status',
    startedAt: 'startedAt',
    xpEarned: 'xpEarned'
  };

  export type PokedokuGameScalarFieldEnum = (typeof PokedokuGameScalarFieldEnum)[keyof typeof PokedokuGameScalarFieldEnum]


  export const PokedokuGameCellScalarFieldEnum: {
    id: 'id',
    gameInternalId: 'gameInternalId',
    position: 'position',
    rowConditionType: 'rowConditionType',
    rowConditionValue: 'rowConditionValue',
    columnConditionType: 'columnConditionType',
    columnConditionValue: 'columnConditionValue',
    answerPokemonId: 'answerPokemonId',
    isCorrect: 'isCorrect',
    answeredAt: 'answeredAt'
  };

  export type PokedokuGameCellScalarFieldEnum = (typeof PokedokuGameCellScalarFieldEnum)[keyof typeof PokedokuGameCellScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    level?: IntFilter<"User"> | number
    xp?: IntFilter<"User"> | number
    lootboxes?: IntFilter<"User"> | number
    admin?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    pokemons?: UserPokemonListRelationFilter
    guessPokemonGames?: GuessPokemonGameListRelationFilter
    guessShinyGames?: GuessShinyGameListRelationFilter
    pokedokuGames?: PokedokuGameListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lootboxes?: SortOrder
    admin?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    pokemons?: UserPokemonOrderByRelationAggregateInput
    guessPokemonGames?: GuessPokemonGameOrderByRelationAggregateInput
    guessShinyGames?: GuessShinyGameOrderByRelationAggregateInput
    pokedokuGames?: PokedokuGameOrderByRelationAggregateInput
    passwordResetTokens?: PasswordResetTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    level?: IntFilter<"User"> | number
    xp?: IntFilter<"User"> | number
    lootboxes?: IntFilter<"User"> | number
    admin?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    pokemons?: UserPokemonListRelationFilter
    guessPokemonGames?: GuessPokemonGameListRelationFilter
    guessShinyGames?: GuessShinyGameListRelationFilter
    pokedokuGames?: PokedokuGameListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lootboxes?: SortOrder
    admin?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    level?: IntWithAggregatesFilter<"User"> | number
    xp?: IntWithAggregatesFilter<"User"> | number
    lootboxes?: IntWithAggregatesFilter<"User"> | number
    admin?: BoolWithAggregatesFilter<"User"> | boolean
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PokemonWhereInput = {
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    id?: IntFilter<"Pokemon"> | number
    name?: StringFilter<"Pokemon"> | string
    generation?: IntFilter<"Pokemon"> | number
    urlImage?: StringNullableFilter<"Pokemon"> | string | null
    urlShinyImage?: StringNullableFilter<"Pokemon"> | string | null
    legendary?: BoolFilter<"Pokemon"> | boolean
    myth?: BoolFilter<"Pokemon"> | boolean
    hp?: IntFilter<"Pokemon"> | number
    atk?: IntFilter<"Pokemon"> | number
    def?: IntFilter<"Pokemon"> | number
    spAtk?: IntFilter<"Pokemon"> | number
    spDef?: IntFilter<"Pokemon"> | number
    speed?: IntFilter<"Pokemon"> | number
    owners?: UserPokemonListRelationFilter
    types?: PokemonTypeListRelationFilter
    evolutionsFrom?: EvolutiveChainListRelationFilter
    evolutionsTo?: EvolutiveChainListRelationFilter
    guessPokemonGames?: GuessPokemonGameListRelationFilter
    guessShinyGames?: GuessShinyGameListRelationFilter
    pokedokuAnswerCells?: PokedokuGameCellListRelationFilter
  }

  export type PokemonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    generation?: SortOrder
    urlImage?: SortOrderInput | SortOrder
    urlShinyImage?: SortOrderInput | SortOrder
    legendary?: SortOrder
    myth?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    def?: SortOrder
    spAtk?: SortOrder
    spDef?: SortOrder
    speed?: SortOrder
    owners?: UserPokemonOrderByRelationAggregateInput
    types?: PokemonTypeOrderByRelationAggregateInput
    evolutionsFrom?: EvolutiveChainOrderByRelationAggregateInput
    evolutionsTo?: EvolutiveChainOrderByRelationAggregateInput
    guessPokemonGames?: GuessPokemonGameOrderByRelationAggregateInput
    guessShinyGames?: GuessShinyGameOrderByRelationAggregateInput
    pokedokuAnswerCells?: PokedokuGameCellOrderByRelationAggregateInput
  }

  export type PokemonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    name?: StringFilter<"Pokemon"> | string
    generation?: IntFilter<"Pokemon"> | number
    urlImage?: StringNullableFilter<"Pokemon"> | string | null
    urlShinyImage?: StringNullableFilter<"Pokemon"> | string | null
    legendary?: BoolFilter<"Pokemon"> | boolean
    myth?: BoolFilter<"Pokemon"> | boolean
    hp?: IntFilter<"Pokemon"> | number
    atk?: IntFilter<"Pokemon"> | number
    def?: IntFilter<"Pokemon"> | number
    spAtk?: IntFilter<"Pokemon"> | number
    spDef?: IntFilter<"Pokemon"> | number
    speed?: IntFilter<"Pokemon"> | number
    owners?: UserPokemonListRelationFilter
    types?: PokemonTypeListRelationFilter
    evolutionsFrom?: EvolutiveChainListRelationFilter
    evolutionsTo?: EvolutiveChainListRelationFilter
    guessPokemonGames?: GuessPokemonGameListRelationFilter
    guessShinyGames?: GuessShinyGameListRelationFilter
    pokedokuAnswerCells?: PokedokuGameCellListRelationFilter
  }, "id">

  export type PokemonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    generation?: SortOrder
    urlImage?: SortOrderInput | SortOrder
    urlShinyImage?: SortOrderInput | SortOrder
    legendary?: SortOrder
    myth?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    def?: SortOrder
    spAtk?: SortOrder
    spDef?: SortOrder
    speed?: SortOrder
    _count?: PokemonCountOrderByAggregateInput
    _avg?: PokemonAvgOrderByAggregateInput
    _max?: PokemonMaxOrderByAggregateInput
    _min?: PokemonMinOrderByAggregateInput
    _sum?: PokemonSumOrderByAggregateInput
  }

  export type PokemonScalarWhereWithAggregatesInput = {
    AND?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    OR?: PokemonScalarWhereWithAggregatesInput[]
    NOT?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pokemon"> | number
    name?: StringWithAggregatesFilter<"Pokemon"> | string
    generation?: IntWithAggregatesFilter<"Pokemon"> | number
    urlImage?: StringNullableWithAggregatesFilter<"Pokemon"> | string | null
    urlShinyImage?: StringNullableWithAggregatesFilter<"Pokemon"> | string | null
    legendary?: BoolWithAggregatesFilter<"Pokemon"> | boolean
    myth?: BoolWithAggregatesFilter<"Pokemon"> | boolean
    hp?: IntWithAggregatesFilter<"Pokemon"> | number
    atk?: IntWithAggregatesFilter<"Pokemon"> | number
    def?: IntWithAggregatesFilter<"Pokemon"> | number
    spAtk?: IntWithAggregatesFilter<"Pokemon"> | number
    spDef?: IntWithAggregatesFilter<"Pokemon"> | number
    speed?: IntWithAggregatesFilter<"Pokemon"> | number
  }

  export type TypeWhereInput = {
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    id?: IntFilter<"Type"> | number
    name?: StringFilter<"Type"> | string
    Pokemon?: PokemonTypeListRelationFilter
  }

  export type TypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Pokemon?: PokemonTypeOrderByRelationAggregateInput
  }

  export type TypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    Pokemon?: PokemonTypeListRelationFilter
  }, "id" | "name">

  export type TypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TypeCountOrderByAggregateInput
    _avg?: TypeAvgOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
    _sum?: TypeSumOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    OR?: TypeScalarWhereWithAggregatesInput[]
    NOT?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Type"> | number
    name?: StringWithAggregatesFilter<"Type"> | string
  }

  export type UserPokemonWhereInput = {
    AND?: UserPokemonWhereInput | UserPokemonWhereInput[]
    OR?: UserPokemonWhereInput[]
    NOT?: UserPokemonWhereInput | UserPokemonWhereInput[]
    userId?: IntFilter<"UserPokemon"> | number
    pokemonId?: IntFilter<"UserPokemon"> | number
    quantity?: IntFilter<"UserPokemon"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }

  export type UserPokemonOrderByWithRelationInput = {
    userId?: SortOrder
    pokemonId?: SortOrder
    quantity?: SortOrder
    user?: UserOrderByWithRelationInput
    pokemon?: PokemonOrderByWithRelationInput
  }

  export type UserPokemonWhereUniqueInput = Prisma.AtLeast<{
    userId_pokemonId?: UserPokemonUserIdPokemonIdCompoundUniqueInput
    AND?: UserPokemonWhereInput | UserPokemonWhereInput[]
    OR?: UserPokemonWhereInput[]
    NOT?: UserPokemonWhereInput | UserPokemonWhereInput[]
    userId?: IntFilter<"UserPokemon"> | number
    pokemonId?: IntFilter<"UserPokemon"> | number
    quantity?: IntFilter<"UserPokemon"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }, "userId_pokemonId">

  export type UserPokemonOrderByWithAggregationInput = {
    userId?: SortOrder
    pokemonId?: SortOrder
    quantity?: SortOrder
    _count?: UserPokemonCountOrderByAggregateInput
    _avg?: UserPokemonAvgOrderByAggregateInput
    _max?: UserPokemonMaxOrderByAggregateInput
    _min?: UserPokemonMinOrderByAggregateInput
    _sum?: UserPokemonSumOrderByAggregateInput
  }

  export type UserPokemonScalarWhereWithAggregatesInput = {
    AND?: UserPokemonScalarWhereWithAggregatesInput | UserPokemonScalarWhereWithAggregatesInput[]
    OR?: UserPokemonScalarWhereWithAggregatesInput[]
    NOT?: UserPokemonScalarWhereWithAggregatesInput | UserPokemonScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserPokemon"> | number
    pokemonId?: IntWithAggregatesFilter<"UserPokemon"> | number
    quantity?: IntWithAggregatesFilter<"UserPokemon"> | number
  }

  export type PokemonTypeWhereInput = {
    AND?: PokemonTypeWhereInput | PokemonTypeWhereInput[]
    OR?: PokemonTypeWhereInput[]
    NOT?: PokemonTypeWhereInput | PokemonTypeWhereInput[]
    pokemonId?: IntFilter<"PokemonType"> | number
    typeId?: IntFilter<"PokemonType"> | number
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
  }

  export type PokemonTypeOrderByWithRelationInput = {
    pokemonId?: SortOrder
    typeId?: SortOrder
    pokemon?: PokemonOrderByWithRelationInput
    type?: TypeOrderByWithRelationInput
  }

  export type PokemonTypeWhereUniqueInput = Prisma.AtLeast<{
    pokemonId_typeId?: PokemonTypePokemonIdTypeIdCompoundUniqueInput
    AND?: PokemonTypeWhereInput | PokemonTypeWhereInput[]
    OR?: PokemonTypeWhereInput[]
    NOT?: PokemonTypeWhereInput | PokemonTypeWhereInput[]
    pokemonId?: IntFilter<"PokemonType"> | number
    typeId?: IntFilter<"PokemonType"> | number
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
  }, "pokemonId_typeId">

  export type PokemonTypeOrderByWithAggregationInput = {
    pokemonId?: SortOrder
    typeId?: SortOrder
    _count?: PokemonTypeCountOrderByAggregateInput
    _avg?: PokemonTypeAvgOrderByAggregateInput
    _max?: PokemonTypeMaxOrderByAggregateInput
    _min?: PokemonTypeMinOrderByAggregateInput
    _sum?: PokemonTypeSumOrderByAggregateInput
  }

  export type PokemonTypeScalarWhereWithAggregatesInput = {
    AND?: PokemonTypeScalarWhereWithAggregatesInput | PokemonTypeScalarWhereWithAggregatesInput[]
    OR?: PokemonTypeScalarWhereWithAggregatesInput[]
    NOT?: PokemonTypeScalarWhereWithAggregatesInput | PokemonTypeScalarWhereWithAggregatesInput[]
    pokemonId?: IntWithAggregatesFilter<"PokemonType"> | number
    typeId?: IntWithAggregatesFilter<"PokemonType"> | number
  }

  export type EvolutiveChainWhereInput = {
    AND?: EvolutiveChainWhereInput | EvolutiveChainWhereInput[]
    OR?: EvolutiveChainWhereInput[]
    NOT?: EvolutiveChainWhereInput | EvolutiveChainWhereInput[]
    evolutionChainId?: IntFilter<"EvolutiveChain"> | number
    fromPokemonId?: IntFilter<"EvolutiveChain"> | number
    toPokemonId?: IntFilter<"EvolutiveChain"> | number
    method?: StringNullableFilter<"EvolutiveChain"> | string | null
    condition?: StringNullableFilter<"EvolutiveChain"> | string | null
    fromPokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    toPokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }

  export type EvolutiveChainOrderByWithRelationInput = {
    evolutionChainId?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
    method?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    fromPokemon?: PokemonOrderByWithRelationInput
    toPokemon?: PokemonOrderByWithRelationInput
  }

  export type EvolutiveChainWhereUniqueInput = Prisma.AtLeast<{
    evolutionChainId_fromPokemonId_toPokemonId?: EvolutiveChainEvolutionChainIdFromPokemonIdToPokemonIdCompoundUniqueInput
    AND?: EvolutiveChainWhereInput | EvolutiveChainWhereInput[]
    OR?: EvolutiveChainWhereInput[]
    NOT?: EvolutiveChainWhereInput | EvolutiveChainWhereInput[]
    evolutionChainId?: IntFilter<"EvolutiveChain"> | number
    fromPokemonId?: IntFilter<"EvolutiveChain"> | number
    toPokemonId?: IntFilter<"EvolutiveChain"> | number
    method?: StringNullableFilter<"EvolutiveChain"> | string | null
    condition?: StringNullableFilter<"EvolutiveChain"> | string | null
    fromPokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    toPokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }, "evolutionChainId_fromPokemonId_toPokemonId">

  export type EvolutiveChainOrderByWithAggregationInput = {
    evolutionChainId?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
    method?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    _count?: EvolutiveChainCountOrderByAggregateInput
    _avg?: EvolutiveChainAvgOrderByAggregateInput
    _max?: EvolutiveChainMaxOrderByAggregateInput
    _min?: EvolutiveChainMinOrderByAggregateInput
    _sum?: EvolutiveChainSumOrderByAggregateInput
  }

  export type EvolutiveChainScalarWhereWithAggregatesInput = {
    AND?: EvolutiveChainScalarWhereWithAggregatesInput | EvolutiveChainScalarWhereWithAggregatesInput[]
    OR?: EvolutiveChainScalarWhereWithAggregatesInput[]
    NOT?: EvolutiveChainScalarWhereWithAggregatesInput | EvolutiveChainScalarWhereWithAggregatesInput[]
    evolutionChainId?: IntWithAggregatesFilter<"EvolutiveChain"> | number
    fromPokemonId?: IntWithAggregatesFilter<"EvolutiveChain"> | number
    toPokemonId?: IntWithAggregatesFilter<"EvolutiveChain"> | number
    method?: StringNullableWithAggregatesFilter<"EvolutiveChain"> | string | null
    condition?: StringNullableWithAggregatesFilter<"EvolutiveChain"> | string | null
  }

  export type GuessPokemonGameWhereInput = {
    AND?: GuessPokemonGameWhereInput | GuessPokemonGameWhereInput[]
    OR?: GuessPokemonGameWhereInput[]
    NOT?: GuessPokemonGameWhereInput | GuessPokemonGameWhereInput[]
    id?: IntFilter<"GuessPokemonGame"> | number
    gameId?: StringFilter<"GuessPokemonGame"> | string
    userId?: IntFilter<"GuessPokemonGame"> | number
    pokemonId?: IntFilter<"GuessPokemonGame"> | number
    maxAttempts?: IntFilter<"GuessPokemonGame"> | number
    remainingAttempts?: IntFilter<"GuessPokemonGame"> | number
    lastGuess?: StringNullableFilter<"GuessPokemonGame"> | string | null
    status?: EnumGameStatusFilter<"GuessPokemonGame"> | $Enums.GameStatus
    startedAt?: DateTimeFilter<"GuessPokemonGame"> | Date | string
    xpEarned?: IntNullableFilter<"GuessPokemonGame"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }

  export type GuessPokemonGameOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    lastGuess?: SortOrderInput | SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    pokemon?: PokemonOrderByWithRelationInput
  }

  export type GuessPokemonGameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gameId?: string
    AND?: GuessPokemonGameWhereInput | GuessPokemonGameWhereInput[]
    OR?: GuessPokemonGameWhereInput[]
    NOT?: GuessPokemonGameWhereInput | GuessPokemonGameWhereInput[]
    userId?: IntFilter<"GuessPokemonGame"> | number
    pokemonId?: IntFilter<"GuessPokemonGame"> | number
    maxAttempts?: IntFilter<"GuessPokemonGame"> | number
    remainingAttempts?: IntFilter<"GuessPokemonGame"> | number
    lastGuess?: StringNullableFilter<"GuessPokemonGame"> | string | null
    status?: EnumGameStatusFilter<"GuessPokemonGame"> | $Enums.GameStatus
    startedAt?: DateTimeFilter<"GuessPokemonGame"> | Date | string
    xpEarned?: IntNullableFilter<"GuessPokemonGame"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }, "id" | "gameId">

  export type GuessPokemonGameOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    lastGuess?: SortOrderInput | SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrderInput | SortOrder
    _count?: GuessPokemonGameCountOrderByAggregateInput
    _avg?: GuessPokemonGameAvgOrderByAggregateInput
    _max?: GuessPokemonGameMaxOrderByAggregateInput
    _min?: GuessPokemonGameMinOrderByAggregateInput
    _sum?: GuessPokemonGameSumOrderByAggregateInput
  }

  export type GuessPokemonGameScalarWhereWithAggregatesInput = {
    AND?: GuessPokemonGameScalarWhereWithAggregatesInput | GuessPokemonGameScalarWhereWithAggregatesInput[]
    OR?: GuessPokemonGameScalarWhereWithAggregatesInput[]
    NOT?: GuessPokemonGameScalarWhereWithAggregatesInput | GuessPokemonGameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GuessPokemonGame"> | number
    gameId?: StringWithAggregatesFilter<"GuessPokemonGame"> | string
    userId?: IntWithAggregatesFilter<"GuessPokemonGame"> | number
    pokemonId?: IntWithAggregatesFilter<"GuessPokemonGame"> | number
    maxAttempts?: IntWithAggregatesFilter<"GuessPokemonGame"> | number
    remainingAttempts?: IntWithAggregatesFilter<"GuessPokemonGame"> | number
    lastGuess?: StringNullableWithAggregatesFilter<"GuessPokemonGame"> | string | null
    status?: EnumGameStatusWithAggregatesFilter<"GuessPokemonGame"> | $Enums.GameStatus
    startedAt?: DateTimeWithAggregatesFilter<"GuessPokemonGame"> | Date | string
    xpEarned?: IntNullableWithAggregatesFilter<"GuessPokemonGame"> | number | null
  }

  export type GuessShinyGameWhereInput = {
    AND?: GuessShinyGameWhereInput | GuessShinyGameWhereInput[]
    OR?: GuessShinyGameWhereInput[]
    NOT?: GuessShinyGameWhereInput | GuessShinyGameWhereInput[]
    id?: IntFilter<"GuessShinyGame"> | number
    gameId?: StringFilter<"GuessShinyGame"> | string
    userId?: IntFilter<"GuessShinyGame"> | number
    pokemonId?: IntFilter<"GuessShinyGame"> | number
    correctPosition?: IntFilter<"GuessShinyGame"> | number
    maxAttempts?: IntFilter<"GuessShinyGame"> | number
    remainingAttempts?: IntFilter<"GuessShinyGame"> | number
    lastGuess?: StringNullableFilter<"GuessShinyGame"> | string | null
    status?: EnumGameStatusFilter<"GuessShinyGame"> | $Enums.GameStatus
    startedAt?: DateTimeFilter<"GuessShinyGame"> | Date | string
    xpEarned?: IntNullableFilter<"GuessShinyGame"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }

  export type GuessShinyGameOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    correctPosition?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    lastGuess?: SortOrderInput | SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    pokemon?: PokemonOrderByWithRelationInput
  }

  export type GuessShinyGameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gameId?: string
    AND?: GuessShinyGameWhereInput | GuessShinyGameWhereInput[]
    OR?: GuessShinyGameWhereInput[]
    NOT?: GuessShinyGameWhereInput | GuessShinyGameWhereInput[]
    userId?: IntFilter<"GuessShinyGame"> | number
    pokemonId?: IntFilter<"GuessShinyGame"> | number
    correctPosition?: IntFilter<"GuessShinyGame"> | number
    maxAttempts?: IntFilter<"GuessShinyGame"> | number
    remainingAttempts?: IntFilter<"GuessShinyGame"> | number
    lastGuess?: StringNullableFilter<"GuessShinyGame"> | string | null
    status?: EnumGameStatusFilter<"GuessShinyGame"> | $Enums.GameStatus
    startedAt?: DateTimeFilter<"GuessShinyGame"> | Date | string
    xpEarned?: IntNullableFilter<"GuessShinyGame"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }, "id" | "gameId">

  export type GuessShinyGameOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    correctPosition?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    lastGuess?: SortOrderInput | SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrderInput | SortOrder
    _count?: GuessShinyGameCountOrderByAggregateInput
    _avg?: GuessShinyGameAvgOrderByAggregateInput
    _max?: GuessShinyGameMaxOrderByAggregateInput
    _min?: GuessShinyGameMinOrderByAggregateInput
    _sum?: GuessShinyGameSumOrderByAggregateInput
  }

  export type GuessShinyGameScalarWhereWithAggregatesInput = {
    AND?: GuessShinyGameScalarWhereWithAggregatesInput | GuessShinyGameScalarWhereWithAggregatesInput[]
    OR?: GuessShinyGameScalarWhereWithAggregatesInput[]
    NOT?: GuessShinyGameScalarWhereWithAggregatesInput | GuessShinyGameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GuessShinyGame"> | number
    gameId?: StringWithAggregatesFilter<"GuessShinyGame"> | string
    userId?: IntWithAggregatesFilter<"GuessShinyGame"> | number
    pokemonId?: IntWithAggregatesFilter<"GuessShinyGame"> | number
    correctPosition?: IntWithAggregatesFilter<"GuessShinyGame"> | number
    maxAttempts?: IntWithAggregatesFilter<"GuessShinyGame"> | number
    remainingAttempts?: IntWithAggregatesFilter<"GuessShinyGame"> | number
    lastGuess?: StringNullableWithAggregatesFilter<"GuessShinyGame"> | string | null
    status?: EnumGameStatusWithAggregatesFilter<"GuessShinyGame"> | $Enums.GameStatus
    startedAt?: DateTimeWithAggregatesFilter<"GuessShinyGame"> | Date | string
    xpEarned?: IntNullableWithAggregatesFilter<"GuessShinyGame"> | number | null
  }

  export type PokedokuGameWhereInput = {
    AND?: PokedokuGameWhereInput | PokedokuGameWhereInput[]
    OR?: PokedokuGameWhereInput[]
    NOT?: PokedokuGameWhereInput | PokedokuGameWhereInput[]
    id?: IntFilter<"PokedokuGame"> | number
    gameId?: StringFilter<"PokedokuGame"> | string
    userId?: IntFilter<"PokedokuGame"> | number
    status?: EnumGameStatusFilter<"PokedokuGame"> | $Enums.GameStatus
    startedAt?: DateTimeFilter<"PokedokuGame"> | Date | string
    xpEarned?: IntNullableFilter<"PokedokuGame"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cells?: PokedokuGameCellListRelationFilter
  }

  export type PokedokuGameOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    cells?: PokedokuGameCellOrderByRelationAggregateInput
  }

  export type PokedokuGameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gameId?: string
    AND?: PokedokuGameWhereInput | PokedokuGameWhereInput[]
    OR?: PokedokuGameWhereInput[]
    NOT?: PokedokuGameWhereInput | PokedokuGameWhereInput[]
    userId?: IntFilter<"PokedokuGame"> | number
    status?: EnumGameStatusFilter<"PokedokuGame"> | $Enums.GameStatus
    startedAt?: DateTimeFilter<"PokedokuGame"> | Date | string
    xpEarned?: IntNullableFilter<"PokedokuGame"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cells?: PokedokuGameCellListRelationFilter
  }, "id" | "gameId">

  export type PokedokuGameOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrderInput | SortOrder
    _count?: PokedokuGameCountOrderByAggregateInput
    _avg?: PokedokuGameAvgOrderByAggregateInput
    _max?: PokedokuGameMaxOrderByAggregateInput
    _min?: PokedokuGameMinOrderByAggregateInput
    _sum?: PokedokuGameSumOrderByAggregateInput
  }

  export type PokedokuGameScalarWhereWithAggregatesInput = {
    AND?: PokedokuGameScalarWhereWithAggregatesInput | PokedokuGameScalarWhereWithAggregatesInput[]
    OR?: PokedokuGameScalarWhereWithAggregatesInput[]
    NOT?: PokedokuGameScalarWhereWithAggregatesInput | PokedokuGameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PokedokuGame"> | number
    gameId?: StringWithAggregatesFilter<"PokedokuGame"> | string
    userId?: IntWithAggregatesFilter<"PokedokuGame"> | number
    status?: EnumGameStatusWithAggregatesFilter<"PokedokuGame"> | $Enums.GameStatus
    startedAt?: DateTimeWithAggregatesFilter<"PokedokuGame"> | Date | string
    xpEarned?: IntNullableWithAggregatesFilter<"PokedokuGame"> | number | null
  }

  export type PokedokuGameCellWhereInput = {
    AND?: PokedokuGameCellWhereInput | PokedokuGameCellWhereInput[]
    OR?: PokedokuGameCellWhereInput[]
    NOT?: PokedokuGameCellWhereInput | PokedokuGameCellWhereInput[]
    id?: IntFilter<"PokedokuGameCell"> | number
    gameInternalId?: IntFilter<"PokedokuGameCell"> | number
    position?: IntFilter<"PokedokuGameCell"> | number
    rowConditionType?: StringFilter<"PokedokuGameCell"> | string
    rowConditionValue?: StringFilter<"PokedokuGameCell"> | string
    columnConditionType?: StringFilter<"PokedokuGameCell"> | string
    columnConditionValue?: StringFilter<"PokedokuGameCell"> | string
    answerPokemonId?: IntNullableFilter<"PokedokuGameCell"> | number | null
    isCorrect?: BoolNullableFilter<"PokedokuGameCell"> | boolean | null
    answeredAt?: DateTimeNullableFilter<"PokedokuGameCell"> | Date | string | null
    game?: XOR<PokedokuGameScalarRelationFilter, PokedokuGameWhereInput>
    answerPokemon?: XOR<PokemonNullableScalarRelationFilter, PokemonWhereInput> | null
  }

  export type PokedokuGameCellOrderByWithRelationInput = {
    id?: SortOrder
    gameInternalId?: SortOrder
    position?: SortOrder
    rowConditionType?: SortOrder
    rowConditionValue?: SortOrder
    columnConditionType?: SortOrder
    columnConditionValue?: SortOrder
    answerPokemonId?: SortOrderInput | SortOrder
    isCorrect?: SortOrderInput | SortOrder
    answeredAt?: SortOrderInput | SortOrder
    game?: PokedokuGameOrderByWithRelationInput
    answerPokemon?: PokemonOrderByWithRelationInput
  }

  export type PokedokuGameCellWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gameInternalId_position?: PokedokuGameCellGameInternalIdPositionCompoundUniqueInput
    AND?: PokedokuGameCellWhereInput | PokedokuGameCellWhereInput[]
    OR?: PokedokuGameCellWhereInput[]
    NOT?: PokedokuGameCellWhereInput | PokedokuGameCellWhereInput[]
    gameInternalId?: IntFilter<"PokedokuGameCell"> | number
    position?: IntFilter<"PokedokuGameCell"> | number
    rowConditionType?: StringFilter<"PokedokuGameCell"> | string
    rowConditionValue?: StringFilter<"PokedokuGameCell"> | string
    columnConditionType?: StringFilter<"PokedokuGameCell"> | string
    columnConditionValue?: StringFilter<"PokedokuGameCell"> | string
    answerPokemonId?: IntNullableFilter<"PokedokuGameCell"> | number | null
    isCorrect?: BoolNullableFilter<"PokedokuGameCell"> | boolean | null
    answeredAt?: DateTimeNullableFilter<"PokedokuGameCell"> | Date | string | null
    game?: XOR<PokedokuGameScalarRelationFilter, PokedokuGameWhereInput>
    answerPokemon?: XOR<PokemonNullableScalarRelationFilter, PokemonWhereInput> | null
  }, "id" | "gameInternalId_position">

  export type PokedokuGameCellOrderByWithAggregationInput = {
    id?: SortOrder
    gameInternalId?: SortOrder
    position?: SortOrder
    rowConditionType?: SortOrder
    rowConditionValue?: SortOrder
    columnConditionType?: SortOrder
    columnConditionValue?: SortOrder
    answerPokemonId?: SortOrderInput | SortOrder
    isCorrect?: SortOrderInput | SortOrder
    answeredAt?: SortOrderInput | SortOrder
    _count?: PokedokuGameCellCountOrderByAggregateInput
    _avg?: PokedokuGameCellAvgOrderByAggregateInput
    _max?: PokedokuGameCellMaxOrderByAggregateInput
    _min?: PokedokuGameCellMinOrderByAggregateInput
    _sum?: PokedokuGameCellSumOrderByAggregateInput
  }

  export type PokedokuGameCellScalarWhereWithAggregatesInput = {
    AND?: PokedokuGameCellScalarWhereWithAggregatesInput | PokedokuGameCellScalarWhereWithAggregatesInput[]
    OR?: PokedokuGameCellScalarWhereWithAggregatesInput[]
    NOT?: PokedokuGameCellScalarWhereWithAggregatesInput | PokedokuGameCellScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PokedokuGameCell"> | number
    gameInternalId?: IntWithAggregatesFilter<"PokedokuGameCell"> | number
    position?: IntWithAggregatesFilter<"PokedokuGameCell"> | number
    rowConditionType?: StringWithAggregatesFilter<"PokedokuGameCell"> | string
    rowConditionValue?: StringWithAggregatesFilter<"PokedokuGameCell"> | string
    columnConditionType?: StringWithAggregatesFilter<"PokedokuGameCell"> | string
    columnConditionValue?: StringWithAggregatesFilter<"PokedokuGameCell"> | string
    answerPokemonId?: IntNullableWithAggregatesFilter<"PokedokuGameCell"> | number | null
    isCorrect?: BoolNullableWithAggregatesFilter<"PokedokuGameCell"> | boolean | null
    answeredAt?: DateTimeNullableWithAggregatesFilter<"PokedokuGameCell"> | Date | string | null
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: IntFilter<"PasswordResetToken"> | number
    userId?: IntFilter<"PasswordResetToken"> | number
    tokenHash?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tokenHash?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    userId?: IntFilter<"PasswordResetToken"> | number
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _avg?: PasswordResetTokenAvgOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
    _sum?: PasswordResetTokenSumOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PasswordResetToken"> | number
    userId?: IntWithAggregatesFilter<"PasswordResetToken"> | number
    tokenHash?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
    pokemons?: UserPokemonCreateNestedManyWithoutUserInput
    guessPokemonGames?: GuessPokemonGameCreateNestedManyWithoutUserInput
    guessShinyGames?: GuessShinyGameCreateNestedManyWithoutUserInput
    pokedokuGames?: PokedokuGameCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
    pokemons?: UserPokemonUncheckedCreateNestedManyWithoutUserInput
    guessPokemonGames?: GuessPokemonGameUncheckedCreateNestedManyWithoutUserInput
    guessShinyGames?: GuessShinyGameUncheckedCreateNestedManyWithoutUserInput
    pokedokuGames?: PokedokuGameUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    pokemons?: UserPokemonUpdateManyWithoutUserNestedInput
    guessPokemonGames?: GuessPokemonGameUpdateManyWithoutUserNestedInput
    guessShinyGames?: GuessShinyGameUpdateManyWithoutUserNestedInput
    pokedokuGames?: PokedokuGameUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    pokemons?: UserPokemonUncheckedUpdateManyWithoutUserNestedInput
    guessPokemonGames?: GuessPokemonGameUncheckedUpdateManyWithoutUserNestedInput
    guessShinyGames?: GuessShinyGameUncheckedUpdateManyWithoutUserNestedInput
    pokedokuGames?: PokedokuGameUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PokemonCreateInput = {
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonCreateNestedManyWithoutPokemonInput
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainCreateNestedManyWithoutFromPokemonInput
    evolutionsTo?: EvolutiveChainCreateNestedManyWithoutToPokemonInput
    guessPokemonGames?: GuessPokemonGameCreateNestedManyWithoutPokemonInput
    guessShinyGames?: GuessShinyGameCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonUncheckedCreateInput = {
    id?: number
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonUncheckedCreateNestedManyWithoutPokemonInput
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainUncheckedCreateNestedManyWithoutFromPokemonInput
    evolutionsTo?: EvolutiveChainUncheckedCreateNestedManyWithoutToPokemonInput
    guessPokemonGames?: GuessPokemonGameUncheckedCreateNestedManyWithoutPokemonInput
    guessShinyGames?: GuessShinyGameUncheckedCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUpdateManyWithoutPokemonNestedInput
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUpdateManyWithoutFromPokemonNestedInput
    evolutionsTo?: EvolutiveChainUpdateManyWithoutToPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUpdateManyWithoutPokemonNestedInput
    guessShinyGames?: GuessShinyGameUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type PokemonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUncheckedUpdateManyWithoutPokemonNestedInput
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUncheckedUpdateManyWithoutFromPokemonNestedInput
    evolutionsTo?: EvolutiveChainUncheckedUpdateManyWithoutToPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUncheckedUpdateManyWithoutPokemonNestedInput
    guessShinyGames?: GuessShinyGameUncheckedUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type PokemonCreateManyInput = {
    id?: number
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
  }

  export type PokemonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
  }

  export type TypeCreateInput = {
    name: string
    Pokemon?: PokemonTypeCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateInput = {
    id?: number
    name: string
    Pokemon?: PokemonTypeUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Pokemon?: PokemonTypeUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Pokemon?: PokemonTypeUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeCreateManyInput = {
    id?: number
    name: string
  }

  export type TypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserPokemonCreateInput = {
    quantity?: number
    user: UserCreateNestedOneWithoutPokemonsInput
    pokemon: PokemonCreateNestedOneWithoutOwnersInput
  }

  export type UserPokemonUncheckedCreateInput = {
    userId: number
    pokemonId: number
    quantity?: number
  }

  export type UserPokemonUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPokemonsNestedInput
    pokemon?: PokemonUpdateOneRequiredWithoutOwnersNestedInput
  }

  export type UserPokemonUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UserPokemonCreateManyInput = {
    userId: number
    pokemonId: number
    quantity?: number
  }

  export type UserPokemonUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UserPokemonUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonTypeCreateInput = {
    pokemon: PokemonCreateNestedOneWithoutTypesInput
    type: TypeCreateNestedOneWithoutPokemonInput
  }

  export type PokemonTypeUncheckedCreateInput = {
    pokemonId: number
    typeId: number
  }

  export type PokemonTypeUpdateInput = {
    pokemon?: PokemonUpdateOneRequiredWithoutTypesNestedInput
    type?: TypeUpdateOneRequiredWithoutPokemonNestedInput
  }

  export type PokemonTypeUncheckedUpdateInput = {
    pokemonId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonTypeCreateManyInput = {
    pokemonId: number
    typeId: number
  }

  export type PokemonTypeUpdateManyMutationInput = {

  }

  export type PokemonTypeUncheckedUpdateManyInput = {
    pokemonId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type EvolutiveChainCreateInput = {
    evolutionChainId: number
    method?: string | null
    condition?: string | null
    fromPokemon: PokemonCreateNestedOneWithoutEvolutionsFromInput
    toPokemon: PokemonCreateNestedOneWithoutEvolutionsToInput
  }

  export type EvolutiveChainUncheckedCreateInput = {
    evolutionChainId: number
    fromPokemonId: number
    toPokemonId: number
    method?: string | null
    condition?: string | null
  }

  export type EvolutiveChainUpdateInput = {
    evolutionChainId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    fromPokemon?: PokemonUpdateOneRequiredWithoutEvolutionsFromNestedInput
    toPokemon?: PokemonUpdateOneRequiredWithoutEvolutionsToNestedInput
  }

  export type EvolutiveChainUncheckedUpdateInput = {
    evolutionChainId?: IntFieldUpdateOperationsInput | number
    fromPokemonId?: IntFieldUpdateOperationsInput | number
    toPokemonId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvolutiveChainCreateManyInput = {
    evolutionChainId: number
    fromPokemonId: number
    toPokemonId: number
    method?: string | null
    condition?: string | null
  }

  export type EvolutiveChainUpdateManyMutationInput = {
    evolutionChainId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvolutiveChainUncheckedUpdateManyInput = {
    evolutionChainId?: IntFieldUpdateOperationsInput | number
    fromPokemonId?: IntFieldUpdateOperationsInput | number
    toPokemonId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuessPokemonGameCreateInput = {
    gameId?: string
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
    user: UserCreateNestedOneWithoutGuessPokemonGamesInput
    pokemon: PokemonCreateNestedOneWithoutGuessPokemonGamesInput
  }

  export type GuessPokemonGameUncheckedCreateInput = {
    id?: number
    gameId?: string
    userId: number
    pokemonId: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type GuessPokemonGameUpdateInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutGuessPokemonGamesNestedInput
    pokemon?: PokemonUpdateOneRequiredWithoutGuessPokemonGamesNestedInput
  }

  export type GuessPokemonGameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GuessPokemonGameCreateManyInput = {
    id?: number
    gameId?: string
    userId: number
    pokemonId: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type GuessPokemonGameUpdateManyMutationInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GuessPokemonGameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GuessShinyGameCreateInput = {
    gameId?: string
    correctPosition?: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
    user: UserCreateNestedOneWithoutGuessShinyGamesInput
    pokemon: PokemonCreateNestedOneWithoutGuessShinyGamesInput
  }

  export type GuessShinyGameUncheckedCreateInput = {
    id?: number
    gameId?: string
    userId: number
    pokemonId: number
    correctPosition?: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type GuessShinyGameUpdateInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    correctPosition?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutGuessShinyGamesNestedInput
    pokemon?: PokemonUpdateOneRequiredWithoutGuessShinyGamesNestedInput
  }

  export type GuessShinyGameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
    correctPosition?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GuessShinyGameCreateManyInput = {
    id?: number
    gameId?: string
    userId: number
    pokemonId: number
    correctPosition?: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type GuessShinyGameUpdateManyMutationInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    correctPosition?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GuessShinyGameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
    correctPosition?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokedokuGameCreateInput = {
    gameId?: string
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
    user: UserCreateNestedOneWithoutPokedokuGamesInput
    cells?: PokedokuGameCellCreateNestedManyWithoutGameInput
  }

  export type PokedokuGameUncheckedCreateInput = {
    id?: number
    gameId?: string
    userId: number
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
    cells?: PokedokuGameCellUncheckedCreateNestedManyWithoutGameInput
  }

  export type PokedokuGameUpdateInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutPokedokuGamesNestedInput
    cells?: PokedokuGameCellUpdateManyWithoutGameNestedInput
  }

  export type PokedokuGameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
    cells?: PokedokuGameCellUncheckedUpdateManyWithoutGameNestedInput
  }

  export type PokedokuGameCreateManyInput = {
    id?: number
    gameId?: string
    userId: number
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type PokedokuGameUpdateManyMutationInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokedokuGameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokedokuGameCellCreateInput = {
    position: number
    rowConditionType: string
    rowConditionValue: string
    columnConditionType: string
    columnConditionValue: string
    isCorrect?: boolean | null
    answeredAt?: Date | string | null
    game: PokedokuGameCreateNestedOneWithoutCellsInput
    answerPokemon?: PokemonCreateNestedOneWithoutPokedokuAnswerCellsInput
  }

  export type PokedokuGameCellUncheckedCreateInput = {
    id?: number
    gameInternalId: number
    position: number
    rowConditionType: string
    rowConditionValue: string
    columnConditionType: string
    columnConditionValue: string
    answerPokemonId?: number | null
    isCorrect?: boolean | null
    answeredAt?: Date | string | null
  }

  export type PokedokuGameCellUpdateInput = {
    position?: IntFieldUpdateOperationsInput | number
    rowConditionType?: StringFieldUpdateOperationsInput | string
    rowConditionValue?: StringFieldUpdateOperationsInput | string
    columnConditionType?: StringFieldUpdateOperationsInput | string
    columnConditionValue?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game?: PokedokuGameUpdateOneRequiredWithoutCellsNestedInput
    answerPokemon?: PokemonUpdateOneWithoutPokedokuAnswerCellsNestedInput
  }

  export type PokedokuGameCellUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameInternalId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    rowConditionType?: StringFieldUpdateOperationsInput | string
    rowConditionValue?: StringFieldUpdateOperationsInput | string
    columnConditionType?: StringFieldUpdateOperationsInput | string
    columnConditionValue?: StringFieldUpdateOperationsInput | string
    answerPokemonId?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PokedokuGameCellCreateManyInput = {
    id?: number
    gameInternalId: number
    position: number
    rowConditionType: string
    rowConditionValue: string
    columnConditionType: string
    columnConditionValue: string
    answerPokemonId?: number | null
    isCorrect?: boolean | null
    answeredAt?: Date | string | null
  }

  export type PokedokuGameCellUpdateManyMutationInput = {
    position?: IntFieldUpdateOperationsInput | number
    rowConditionType?: StringFieldUpdateOperationsInput | string
    rowConditionValue?: StringFieldUpdateOperationsInput | string
    columnConditionType?: StringFieldUpdateOperationsInput | string
    columnConditionValue?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PokedokuGameCellUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameInternalId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    rowConditionType?: StringFieldUpdateOperationsInput | string
    rowConditionValue?: StringFieldUpdateOperationsInput | string
    columnConditionType?: StringFieldUpdateOperationsInput | string
    columnConditionValue?: StringFieldUpdateOperationsInput | string
    answerPokemonId?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordResetTokenCreateInput = {
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPasswordResetTokensInput
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: number
    userId: number
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: number
    userId: number
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserPokemonListRelationFilter = {
    every?: UserPokemonWhereInput
    some?: UserPokemonWhereInput
    none?: UserPokemonWhereInput
  }

  export type GuessPokemonGameListRelationFilter = {
    every?: GuessPokemonGameWhereInput
    some?: GuessPokemonGameWhereInput
    none?: GuessPokemonGameWhereInput
  }

  export type GuessShinyGameListRelationFilter = {
    every?: GuessShinyGameWhereInput
    some?: GuessShinyGameWhereInput
    none?: GuessShinyGameWhereInput
  }

  export type PokedokuGameListRelationFilter = {
    every?: PokedokuGameWhereInput
    some?: PokedokuGameWhereInput
    none?: PokedokuGameWhereInput
  }

  export type PasswordResetTokenListRelationFilter = {
    every?: PasswordResetTokenWhereInput
    some?: PasswordResetTokenWhereInput
    none?: PasswordResetTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserPokemonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuessPokemonGameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuessShinyGameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PokedokuGameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lootboxes?: SortOrder
    admin?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lootboxes?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lootboxes?: SortOrder
    admin?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lootboxes?: SortOrder
    admin?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lootboxes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PokemonTypeListRelationFilter = {
    every?: PokemonTypeWhereInput
    some?: PokemonTypeWhereInput
    none?: PokemonTypeWhereInput
  }

  export type EvolutiveChainListRelationFilter = {
    every?: EvolutiveChainWhereInput
    some?: EvolutiveChainWhereInput
    none?: EvolutiveChainWhereInput
  }

  export type PokedokuGameCellListRelationFilter = {
    every?: PokedokuGameCellWhereInput
    some?: PokedokuGameCellWhereInput
    none?: PokedokuGameCellWhereInput
  }

  export type PokemonTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvolutiveChainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PokedokuGameCellOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PokemonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    generation?: SortOrder
    urlImage?: SortOrder
    urlShinyImage?: SortOrder
    legendary?: SortOrder
    myth?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    def?: SortOrder
    spAtk?: SortOrder
    spDef?: SortOrder
    speed?: SortOrder
  }

  export type PokemonAvgOrderByAggregateInput = {
    id?: SortOrder
    generation?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    def?: SortOrder
    spAtk?: SortOrder
    spDef?: SortOrder
    speed?: SortOrder
  }

  export type PokemonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    generation?: SortOrder
    urlImage?: SortOrder
    urlShinyImage?: SortOrder
    legendary?: SortOrder
    myth?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    def?: SortOrder
    spAtk?: SortOrder
    spDef?: SortOrder
    speed?: SortOrder
  }

  export type PokemonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    generation?: SortOrder
    urlImage?: SortOrder
    urlShinyImage?: SortOrder
    legendary?: SortOrder
    myth?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    def?: SortOrder
    spAtk?: SortOrder
    spDef?: SortOrder
    speed?: SortOrder
  }

  export type PokemonSumOrderByAggregateInput = {
    id?: SortOrder
    generation?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    def?: SortOrder
    spAtk?: SortOrder
    spDef?: SortOrder
    speed?: SortOrder
  }

  export type TypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PokemonScalarRelationFilter = {
    is?: PokemonWhereInput
    isNot?: PokemonWhereInput
  }

  export type UserPokemonUserIdPokemonIdCompoundUniqueInput = {
    userId: number
    pokemonId: number
  }

  export type UserPokemonCountOrderByAggregateInput = {
    userId?: SortOrder
    pokemonId?: SortOrder
    quantity?: SortOrder
  }

  export type UserPokemonAvgOrderByAggregateInput = {
    userId?: SortOrder
    pokemonId?: SortOrder
    quantity?: SortOrder
  }

  export type UserPokemonMaxOrderByAggregateInput = {
    userId?: SortOrder
    pokemonId?: SortOrder
    quantity?: SortOrder
  }

  export type UserPokemonMinOrderByAggregateInput = {
    userId?: SortOrder
    pokemonId?: SortOrder
    quantity?: SortOrder
  }

  export type UserPokemonSumOrderByAggregateInput = {
    userId?: SortOrder
    pokemonId?: SortOrder
    quantity?: SortOrder
  }

  export type TypeScalarRelationFilter = {
    is?: TypeWhereInput
    isNot?: TypeWhereInput
  }

  export type PokemonTypePokemonIdTypeIdCompoundUniqueInput = {
    pokemonId: number
    typeId: number
  }

  export type PokemonTypeCountOrderByAggregateInput = {
    pokemonId?: SortOrder
    typeId?: SortOrder
  }

  export type PokemonTypeAvgOrderByAggregateInput = {
    pokemonId?: SortOrder
    typeId?: SortOrder
  }

  export type PokemonTypeMaxOrderByAggregateInput = {
    pokemonId?: SortOrder
    typeId?: SortOrder
  }

  export type PokemonTypeMinOrderByAggregateInput = {
    pokemonId?: SortOrder
    typeId?: SortOrder
  }

  export type PokemonTypeSumOrderByAggregateInput = {
    pokemonId?: SortOrder
    typeId?: SortOrder
  }

  export type EvolutiveChainEvolutionChainIdFromPokemonIdToPokemonIdCompoundUniqueInput = {
    evolutionChainId: number
    fromPokemonId: number
    toPokemonId: number
  }

  export type EvolutiveChainCountOrderByAggregateInput = {
    evolutionChainId?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
    method?: SortOrder
    condition?: SortOrder
  }

  export type EvolutiveChainAvgOrderByAggregateInput = {
    evolutionChainId?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
  }

  export type EvolutiveChainMaxOrderByAggregateInput = {
    evolutionChainId?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
    method?: SortOrder
    condition?: SortOrder
  }

  export type EvolutiveChainMinOrderByAggregateInput = {
    evolutionChainId?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
    method?: SortOrder
    condition?: SortOrder
  }

  export type EvolutiveChainSumOrderByAggregateInput = {
    evolutionChainId?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GuessPokemonGameCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    lastGuess?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrder
  }

  export type GuessPokemonGameAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    xpEarned?: SortOrder
  }

  export type GuessPokemonGameMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    lastGuess?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrder
  }

  export type GuessPokemonGameMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    lastGuess?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrder
  }

  export type GuessPokemonGameSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    xpEarned?: SortOrder
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type GuessShinyGameCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    correctPosition?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    lastGuess?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrder
  }

  export type GuessShinyGameAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    correctPosition?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    xpEarned?: SortOrder
  }

  export type GuessShinyGameMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    correctPosition?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    lastGuess?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrder
  }

  export type GuessShinyGameMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    correctPosition?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    lastGuess?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrder
  }

  export type GuessShinyGameSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    correctPosition?: SortOrder
    maxAttempts?: SortOrder
    remainingAttempts?: SortOrder
    xpEarned?: SortOrder
  }

  export type PokedokuGameCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrder
  }

  export type PokedokuGameAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    xpEarned?: SortOrder
  }

  export type PokedokuGameMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrder
  }

  export type PokedokuGameMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    xpEarned?: SortOrder
  }

  export type PokedokuGameSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    xpEarned?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PokedokuGameScalarRelationFilter = {
    is?: PokedokuGameWhereInput
    isNot?: PokedokuGameWhereInput
  }

  export type PokemonNullableScalarRelationFilter = {
    is?: PokemonWhereInput | null
    isNot?: PokemonWhereInput | null
  }

  export type PokedokuGameCellGameInternalIdPositionCompoundUniqueInput = {
    gameInternalId: number
    position: number
  }

  export type PokedokuGameCellCountOrderByAggregateInput = {
    id?: SortOrder
    gameInternalId?: SortOrder
    position?: SortOrder
    rowConditionType?: SortOrder
    rowConditionValue?: SortOrder
    columnConditionType?: SortOrder
    columnConditionValue?: SortOrder
    answerPokemonId?: SortOrder
    isCorrect?: SortOrder
    answeredAt?: SortOrder
  }

  export type PokedokuGameCellAvgOrderByAggregateInput = {
    id?: SortOrder
    gameInternalId?: SortOrder
    position?: SortOrder
    answerPokemonId?: SortOrder
  }

  export type PokedokuGameCellMaxOrderByAggregateInput = {
    id?: SortOrder
    gameInternalId?: SortOrder
    position?: SortOrder
    rowConditionType?: SortOrder
    rowConditionValue?: SortOrder
    columnConditionType?: SortOrder
    columnConditionValue?: SortOrder
    answerPokemonId?: SortOrder
    isCorrect?: SortOrder
    answeredAt?: SortOrder
  }

  export type PokedokuGameCellMinOrderByAggregateInput = {
    id?: SortOrder
    gameInternalId?: SortOrder
    position?: SortOrder
    rowConditionType?: SortOrder
    rowConditionValue?: SortOrder
    columnConditionType?: SortOrder
    columnConditionValue?: SortOrder
    answerPokemonId?: SortOrder
    isCorrect?: SortOrder
    answeredAt?: SortOrder
  }

  export type PokedokuGameCellSumOrderByAggregateInput = {
    id?: SortOrder
    gameInternalId?: SortOrder
    position?: SortOrder
    answerPokemonId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserPokemonCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPokemonCreateWithoutUserInput, UserPokemonUncheckedCreateWithoutUserInput> | UserPokemonCreateWithoutUserInput[] | UserPokemonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPokemonCreateOrConnectWithoutUserInput | UserPokemonCreateOrConnectWithoutUserInput[]
    createMany?: UserPokemonCreateManyUserInputEnvelope
    connect?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
  }

  export type GuessPokemonGameCreateNestedManyWithoutUserInput = {
    create?: XOR<GuessPokemonGameCreateWithoutUserInput, GuessPokemonGameUncheckedCreateWithoutUserInput> | GuessPokemonGameCreateWithoutUserInput[] | GuessPokemonGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuessPokemonGameCreateOrConnectWithoutUserInput | GuessPokemonGameCreateOrConnectWithoutUserInput[]
    createMany?: GuessPokemonGameCreateManyUserInputEnvelope
    connect?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
  }

  export type GuessShinyGameCreateNestedManyWithoutUserInput = {
    create?: XOR<GuessShinyGameCreateWithoutUserInput, GuessShinyGameUncheckedCreateWithoutUserInput> | GuessShinyGameCreateWithoutUserInput[] | GuessShinyGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuessShinyGameCreateOrConnectWithoutUserInput | GuessShinyGameCreateOrConnectWithoutUserInput[]
    createMany?: GuessShinyGameCreateManyUserInputEnvelope
    connect?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
  }

  export type PokedokuGameCreateNestedManyWithoutUserInput = {
    create?: XOR<PokedokuGameCreateWithoutUserInput, PokedokuGameUncheckedCreateWithoutUserInput> | PokedokuGameCreateWithoutUserInput[] | PokedokuGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PokedokuGameCreateOrConnectWithoutUserInput | PokedokuGameCreateOrConnectWithoutUserInput[]
    createMany?: PokedokuGameCreateManyUserInputEnvelope
    connect?: PokedokuGameWhereUniqueInput | PokedokuGameWhereUniqueInput[]
  }

  export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type UserPokemonUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPokemonCreateWithoutUserInput, UserPokemonUncheckedCreateWithoutUserInput> | UserPokemonCreateWithoutUserInput[] | UserPokemonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPokemonCreateOrConnectWithoutUserInput | UserPokemonCreateOrConnectWithoutUserInput[]
    createMany?: UserPokemonCreateManyUserInputEnvelope
    connect?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
  }

  export type GuessPokemonGameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GuessPokemonGameCreateWithoutUserInput, GuessPokemonGameUncheckedCreateWithoutUserInput> | GuessPokemonGameCreateWithoutUserInput[] | GuessPokemonGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuessPokemonGameCreateOrConnectWithoutUserInput | GuessPokemonGameCreateOrConnectWithoutUserInput[]
    createMany?: GuessPokemonGameCreateManyUserInputEnvelope
    connect?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
  }

  export type GuessShinyGameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GuessShinyGameCreateWithoutUserInput, GuessShinyGameUncheckedCreateWithoutUserInput> | GuessShinyGameCreateWithoutUserInput[] | GuessShinyGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuessShinyGameCreateOrConnectWithoutUserInput | GuessShinyGameCreateOrConnectWithoutUserInput[]
    createMany?: GuessShinyGameCreateManyUserInputEnvelope
    connect?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
  }

  export type PokedokuGameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PokedokuGameCreateWithoutUserInput, PokedokuGameUncheckedCreateWithoutUserInput> | PokedokuGameCreateWithoutUserInput[] | PokedokuGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PokedokuGameCreateOrConnectWithoutUserInput | PokedokuGameCreateOrConnectWithoutUserInput[]
    createMany?: PokedokuGameCreateManyUserInputEnvelope
    connect?: PokedokuGameWhereUniqueInput | PokedokuGameWhereUniqueInput[]
  }

  export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserPokemonUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPokemonCreateWithoutUserInput, UserPokemonUncheckedCreateWithoutUserInput> | UserPokemonCreateWithoutUserInput[] | UserPokemonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPokemonCreateOrConnectWithoutUserInput | UserPokemonCreateOrConnectWithoutUserInput[]
    upsert?: UserPokemonUpsertWithWhereUniqueWithoutUserInput | UserPokemonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPokemonCreateManyUserInputEnvelope
    set?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    disconnect?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    delete?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    connect?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    update?: UserPokemonUpdateWithWhereUniqueWithoutUserInput | UserPokemonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPokemonUpdateManyWithWhereWithoutUserInput | UserPokemonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPokemonScalarWhereInput | UserPokemonScalarWhereInput[]
  }

  export type GuessPokemonGameUpdateManyWithoutUserNestedInput = {
    create?: XOR<GuessPokemonGameCreateWithoutUserInput, GuessPokemonGameUncheckedCreateWithoutUserInput> | GuessPokemonGameCreateWithoutUserInput[] | GuessPokemonGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuessPokemonGameCreateOrConnectWithoutUserInput | GuessPokemonGameCreateOrConnectWithoutUserInput[]
    upsert?: GuessPokemonGameUpsertWithWhereUniqueWithoutUserInput | GuessPokemonGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GuessPokemonGameCreateManyUserInputEnvelope
    set?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    disconnect?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    delete?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    connect?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    update?: GuessPokemonGameUpdateWithWhereUniqueWithoutUserInput | GuessPokemonGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GuessPokemonGameUpdateManyWithWhereWithoutUserInput | GuessPokemonGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GuessPokemonGameScalarWhereInput | GuessPokemonGameScalarWhereInput[]
  }

  export type GuessShinyGameUpdateManyWithoutUserNestedInput = {
    create?: XOR<GuessShinyGameCreateWithoutUserInput, GuessShinyGameUncheckedCreateWithoutUserInput> | GuessShinyGameCreateWithoutUserInput[] | GuessShinyGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuessShinyGameCreateOrConnectWithoutUserInput | GuessShinyGameCreateOrConnectWithoutUserInput[]
    upsert?: GuessShinyGameUpsertWithWhereUniqueWithoutUserInput | GuessShinyGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GuessShinyGameCreateManyUserInputEnvelope
    set?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    disconnect?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    delete?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    connect?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    update?: GuessShinyGameUpdateWithWhereUniqueWithoutUserInput | GuessShinyGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GuessShinyGameUpdateManyWithWhereWithoutUserInput | GuessShinyGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GuessShinyGameScalarWhereInput | GuessShinyGameScalarWhereInput[]
  }

  export type PokedokuGameUpdateManyWithoutUserNestedInput = {
    create?: XOR<PokedokuGameCreateWithoutUserInput, PokedokuGameUncheckedCreateWithoutUserInput> | PokedokuGameCreateWithoutUserInput[] | PokedokuGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PokedokuGameCreateOrConnectWithoutUserInput | PokedokuGameCreateOrConnectWithoutUserInput[]
    upsert?: PokedokuGameUpsertWithWhereUniqueWithoutUserInput | PokedokuGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PokedokuGameCreateManyUserInputEnvelope
    set?: PokedokuGameWhereUniqueInput | PokedokuGameWhereUniqueInput[]
    disconnect?: PokedokuGameWhereUniqueInput | PokedokuGameWhereUniqueInput[]
    delete?: PokedokuGameWhereUniqueInput | PokedokuGameWhereUniqueInput[]
    connect?: PokedokuGameWhereUniqueInput | PokedokuGameWhereUniqueInput[]
    update?: PokedokuGameUpdateWithWhereUniqueWithoutUserInput | PokedokuGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PokedokuGameUpdateManyWithWhereWithoutUserInput | PokedokuGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PokedokuGameScalarWhereInput | PokedokuGameScalarWhereInput[]
  }

  export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type UserPokemonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPokemonCreateWithoutUserInput, UserPokemonUncheckedCreateWithoutUserInput> | UserPokemonCreateWithoutUserInput[] | UserPokemonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPokemonCreateOrConnectWithoutUserInput | UserPokemonCreateOrConnectWithoutUserInput[]
    upsert?: UserPokemonUpsertWithWhereUniqueWithoutUserInput | UserPokemonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPokemonCreateManyUserInputEnvelope
    set?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    disconnect?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    delete?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    connect?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    update?: UserPokemonUpdateWithWhereUniqueWithoutUserInput | UserPokemonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPokemonUpdateManyWithWhereWithoutUserInput | UserPokemonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPokemonScalarWhereInput | UserPokemonScalarWhereInput[]
  }

  export type GuessPokemonGameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GuessPokemonGameCreateWithoutUserInput, GuessPokemonGameUncheckedCreateWithoutUserInput> | GuessPokemonGameCreateWithoutUserInput[] | GuessPokemonGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuessPokemonGameCreateOrConnectWithoutUserInput | GuessPokemonGameCreateOrConnectWithoutUserInput[]
    upsert?: GuessPokemonGameUpsertWithWhereUniqueWithoutUserInput | GuessPokemonGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GuessPokemonGameCreateManyUserInputEnvelope
    set?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    disconnect?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    delete?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    connect?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    update?: GuessPokemonGameUpdateWithWhereUniqueWithoutUserInput | GuessPokemonGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GuessPokemonGameUpdateManyWithWhereWithoutUserInput | GuessPokemonGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GuessPokemonGameScalarWhereInput | GuessPokemonGameScalarWhereInput[]
  }

  export type GuessShinyGameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GuessShinyGameCreateWithoutUserInput, GuessShinyGameUncheckedCreateWithoutUserInput> | GuessShinyGameCreateWithoutUserInput[] | GuessShinyGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuessShinyGameCreateOrConnectWithoutUserInput | GuessShinyGameCreateOrConnectWithoutUserInput[]
    upsert?: GuessShinyGameUpsertWithWhereUniqueWithoutUserInput | GuessShinyGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GuessShinyGameCreateManyUserInputEnvelope
    set?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    disconnect?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    delete?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    connect?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    update?: GuessShinyGameUpdateWithWhereUniqueWithoutUserInput | GuessShinyGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GuessShinyGameUpdateManyWithWhereWithoutUserInput | GuessShinyGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GuessShinyGameScalarWhereInput | GuessShinyGameScalarWhereInput[]
  }

  export type PokedokuGameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PokedokuGameCreateWithoutUserInput, PokedokuGameUncheckedCreateWithoutUserInput> | PokedokuGameCreateWithoutUserInput[] | PokedokuGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PokedokuGameCreateOrConnectWithoutUserInput | PokedokuGameCreateOrConnectWithoutUserInput[]
    upsert?: PokedokuGameUpsertWithWhereUniqueWithoutUserInput | PokedokuGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PokedokuGameCreateManyUserInputEnvelope
    set?: PokedokuGameWhereUniqueInput | PokedokuGameWhereUniqueInput[]
    disconnect?: PokedokuGameWhereUniqueInput | PokedokuGameWhereUniqueInput[]
    delete?: PokedokuGameWhereUniqueInput | PokedokuGameWhereUniqueInput[]
    connect?: PokedokuGameWhereUniqueInput | PokedokuGameWhereUniqueInput[]
    update?: PokedokuGameUpdateWithWhereUniqueWithoutUserInput | PokedokuGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PokedokuGameUpdateManyWithWhereWithoutUserInput | PokedokuGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PokedokuGameScalarWhereInput | PokedokuGameScalarWhereInput[]
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type UserPokemonCreateNestedManyWithoutPokemonInput = {
    create?: XOR<UserPokemonCreateWithoutPokemonInput, UserPokemonUncheckedCreateWithoutPokemonInput> | UserPokemonCreateWithoutPokemonInput[] | UserPokemonUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: UserPokemonCreateOrConnectWithoutPokemonInput | UserPokemonCreateOrConnectWithoutPokemonInput[]
    createMany?: UserPokemonCreateManyPokemonInputEnvelope
    connect?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
  }

  export type PokemonTypeCreateNestedManyWithoutPokemonInput = {
    create?: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput> | PokemonTypeCreateWithoutPokemonInput[] | PokemonTypeUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput | PokemonTypeCreateOrConnectWithoutPokemonInput[]
    createMany?: PokemonTypeCreateManyPokemonInputEnvelope
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
  }

  export type EvolutiveChainCreateNestedManyWithoutFromPokemonInput = {
    create?: XOR<EvolutiveChainCreateWithoutFromPokemonInput, EvolutiveChainUncheckedCreateWithoutFromPokemonInput> | EvolutiveChainCreateWithoutFromPokemonInput[] | EvolutiveChainUncheckedCreateWithoutFromPokemonInput[]
    connectOrCreate?: EvolutiveChainCreateOrConnectWithoutFromPokemonInput | EvolutiveChainCreateOrConnectWithoutFromPokemonInput[]
    createMany?: EvolutiveChainCreateManyFromPokemonInputEnvelope
    connect?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
  }

  export type EvolutiveChainCreateNestedManyWithoutToPokemonInput = {
    create?: XOR<EvolutiveChainCreateWithoutToPokemonInput, EvolutiveChainUncheckedCreateWithoutToPokemonInput> | EvolutiveChainCreateWithoutToPokemonInput[] | EvolutiveChainUncheckedCreateWithoutToPokemonInput[]
    connectOrCreate?: EvolutiveChainCreateOrConnectWithoutToPokemonInput | EvolutiveChainCreateOrConnectWithoutToPokemonInput[]
    createMany?: EvolutiveChainCreateManyToPokemonInputEnvelope
    connect?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
  }

  export type GuessPokemonGameCreateNestedManyWithoutPokemonInput = {
    create?: XOR<GuessPokemonGameCreateWithoutPokemonInput, GuessPokemonGameUncheckedCreateWithoutPokemonInput> | GuessPokemonGameCreateWithoutPokemonInput[] | GuessPokemonGameUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: GuessPokemonGameCreateOrConnectWithoutPokemonInput | GuessPokemonGameCreateOrConnectWithoutPokemonInput[]
    createMany?: GuessPokemonGameCreateManyPokemonInputEnvelope
    connect?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
  }

  export type GuessShinyGameCreateNestedManyWithoutPokemonInput = {
    create?: XOR<GuessShinyGameCreateWithoutPokemonInput, GuessShinyGameUncheckedCreateWithoutPokemonInput> | GuessShinyGameCreateWithoutPokemonInput[] | GuessShinyGameUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: GuessShinyGameCreateOrConnectWithoutPokemonInput | GuessShinyGameCreateOrConnectWithoutPokemonInput[]
    createMany?: GuessShinyGameCreateManyPokemonInputEnvelope
    connect?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
  }

  export type PokedokuGameCellCreateNestedManyWithoutAnswerPokemonInput = {
    create?: XOR<PokedokuGameCellCreateWithoutAnswerPokemonInput, PokedokuGameCellUncheckedCreateWithoutAnswerPokemonInput> | PokedokuGameCellCreateWithoutAnswerPokemonInput[] | PokedokuGameCellUncheckedCreateWithoutAnswerPokemonInput[]
    connectOrCreate?: PokedokuGameCellCreateOrConnectWithoutAnswerPokemonInput | PokedokuGameCellCreateOrConnectWithoutAnswerPokemonInput[]
    createMany?: PokedokuGameCellCreateManyAnswerPokemonInputEnvelope
    connect?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
  }

  export type UserPokemonUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: XOR<UserPokemonCreateWithoutPokemonInput, UserPokemonUncheckedCreateWithoutPokemonInput> | UserPokemonCreateWithoutPokemonInput[] | UserPokemonUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: UserPokemonCreateOrConnectWithoutPokemonInput | UserPokemonCreateOrConnectWithoutPokemonInput[]
    createMany?: UserPokemonCreateManyPokemonInputEnvelope
    connect?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
  }

  export type PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput> | PokemonTypeCreateWithoutPokemonInput[] | PokemonTypeUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput | PokemonTypeCreateOrConnectWithoutPokemonInput[]
    createMany?: PokemonTypeCreateManyPokemonInputEnvelope
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
  }

  export type EvolutiveChainUncheckedCreateNestedManyWithoutFromPokemonInput = {
    create?: XOR<EvolutiveChainCreateWithoutFromPokemonInput, EvolutiveChainUncheckedCreateWithoutFromPokemonInput> | EvolutiveChainCreateWithoutFromPokemonInput[] | EvolutiveChainUncheckedCreateWithoutFromPokemonInput[]
    connectOrCreate?: EvolutiveChainCreateOrConnectWithoutFromPokemonInput | EvolutiveChainCreateOrConnectWithoutFromPokemonInput[]
    createMany?: EvolutiveChainCreateManyFromPokemonInputEnvelope
    connect?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
  }

  export type EvolutiveChainUncheckedCreateNestedManyWithoutToPokemonInput = {
    create?: XOR<EvolutiveChainCreateWithoutToPokemonInput, EvolutiveChainUncheckedCreateWithoutToPokemonInput> | EvolutiveChainCreateWithoutToPokemonInput[] | EvolutiveChainUncheckedCreateWithoutToPokemonInput[]
    connectOrCreate?: EvolutiveChainCreateOrConnectWithoutToPokemonInput | EvolutiveChainCreateOrConnectWithoutToPokemonInput[]
    createMany?: EvolutiveChainCreateManyToPokemonInputEnvelope
    connect?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
  }

  export type GuessPokemonGameUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: XOR<GuessPokemonGameCreateWithoutPokemonInput, GuessPokemonGameUncheckedCreateWithoutPokemonInput> | GuessPokemonGameCreateWithoutPokemonInput[] | GuessPokemonGameUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: GuessPokemonGameCreateOrConnectWithoutPokemonInput | GuessPokemonGameCreateOrConnectWithoutPokemonInput[]
    createMany?: GuessPokemonGameCreateManyPokemonInputEnvelope
    connect?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
  }

  export type GuessShinyGameUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: XOR<GuessShinyGameCreateWithoutPokemonInput, GuessShinyGameUncheckedCreateWithoutPokemonInput> | GuessShinyGameCreateWithoutPokemonInput[] | GuessShinyGameUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: GuessShinyGameCreateOrConnectWithoutPokemonInput | GuessShinyGameCreateOrConnectWithoutPokemonInput[]
    createMany?: GuessShinyGameCreateManyPokemonInputEnvelope
    connect?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
  }

  export type PokedokuGameCellUncheckedCreateNestedManyWithoutAnswerPokemonInput = {
    create?: XOR<PokedokuGameCellCreateWithoutAnswerPokemonInput, PokedokuGameCellUncheckedCreateWithoutAnswerPokemonInput> | PokedokuGameCellCreateWithoutAnswerPokemonInput[] | PokedokuGameCellUncheckedCreateWithoutAnswerPokemonInput[]
    connectOrCreate?: PokedokuGameCellCreateOrConnectWithoutAnswerPokemonInput | PokedokuGameCellCreateOrConnectWithoutAnswerPokemonInput[]
    createMany?: PokedokuGameCellCreateManyAnswerPokemonInputEnvelope
    connect?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
  }

  export type UserPokemonUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<UserPokemonCreateWithoutPokemonInput, UserPokemonUncheckedCreateWithoutPokemonInput> | UserPokemonCreateWithoutPokemonInput[] | UserPokemonUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: UserPokemonCreateOrConnectWithoutPokemonInput | UserPokemonCreateOrConnectWithoutPokemonInput[]
    upsert?: UserPokemonUpsertWithWhereUniqueWithoutPokemonInput | UserPokemonUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: UserPokemonCreateManyPokemonInputEnvelope
    set?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    disconnect?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    delete?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    connect?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    update?: UserPokemonUpdateWithWhereUniqueWithoutPokemonInput | UserPokemonUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: UserPokemonUpdateManyWithWhereWithoutPokemonInput | UserPokemonUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: UserPokemonScalarWhereInput | UserPokemonScalarWhereInput[]
  }

  export type PokemonTypeUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput> | PokemonTypeCreateWithoutPokemonInput[] | PokemonTypeUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput | PokemonTypeCreateOrConnectWithoutPokemonInput[]
    upsert?: PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput | PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: PokemonTypeCreateManyPokemonInputEnvelope
    set?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    disconnect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    delete?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    update?: PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput | PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: PokemonTypeUpdateManyWithWhereWithoutPokemonInput | PokemonTypeUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
  }

  export type EvolutiveChainUpdateManyWithoutFromPokemonNestedInput = {
    create?: XOR<EvolutiveChainCreateWithoutFromPokemonInput, EvolutiveChainUncheckedCreateWithoutFromPokemonInput> | EvolutiveChainCreateWithoutFromPokemonInput[] | EvolutiveChainUncheckedCreateWithoutFromPokemonInput[]
    connectOrCreate?: EvolutiveChainCreateOrConnectWithoutFromPokemonInput | EvolutiveChainCreateOrConnectWithoutFromPokemonInput[]
    upsert?: EvolutiveChainUpsertWithWhereUniqueWithoutFromPokemonInput | EvolutiveChainUpsertWithWhereUniqueWithoutFromPokemonInput[]
    createMany?: EvolutiveChainCreateManyFromPokemonInputEnvelope
    set?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    disconnect?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    delete?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    connect?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    update?: EvolutiveChainUpdateWithWhereUniqueWithoutFromPokemonInput | EvolutiveChainUpdateWithWhereUniqueWithoutFromPokemonInput[]
    updateMany?: EvolutiveChainUpdateManyWithWhereWithoutFromPokemonInput | EvolutiveChainUpdateManyWithWhereWithoutFromPokemonInput[]
    deleteMany?: EvolutiveChainScalarWhereInput | EvolutiveChainScalarWhereInput[]
  }

  export type EvolutiveChainUpdateManyWithoutToPokemonNestedInput = {
    create?: XOR<EvolutiveChainCreateWithoutToPokemonInput, EvolutiveChainUncheckedCreateWithoutToPokemonInput> | EvolutiveChainCreateWithoutToPokemonInput[] | EvolutiveChainUncheckedCreateWithoutToPokemonInput[]
    connectOrCreate?: EvolutiveChainCreateOrConnectWithoutToPokemonInput | EvolutiveChainCreateOrConnectWithoutToPokemonInput[]
    upsert?: EvolutiveChainUpsertWithWhereUniqueWithoutToPokemonInput | EvolutiveChainUpsertWithWhereUniqueWithoutToPokemonInput[]
    createMany?: EvolutiveChainCreateManyToPokemonInputEnvelope
    set?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    disconnect?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    delete?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    connect?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    update?: EvolutiveChainUpdateWithWhereUniqueWithoutToPokemonInput | EvolutiveChainUpdateWithWhereUniqueWithoutToPokemonInput[]
    updateMany?: EvolutiveChainUpdateManyWithWhereWithoutToPokemonInput | EvolutiveChainUpdateManyWithWhereWithoutToPokemonInput[]
    deleteMany?: EvolutiveChainScalarWhereInput | EvolutiveChainScalarWhereInput[]
  }

  export type GuessPokemonGameUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<GuessPokemonGameCreateWithoutPokemonInput, GuessPokemonGameUncheckedCreateWithoutPokemonInput> | GuessPokemonGameCreateWithoutPokemonInput[] | GuessPokemonGameUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: GuessPokemonGameCreateOrConnectWithoutPokemonInput | GuessPokemonGameCreateOrConnectWithoutPokemonInput[]
    upsert?: GuessPokemonGameUpsertWithWhereUniqueWithoutPokemonInput | GuessPokemonGameUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: GuessPokemonGameCreateManyPokemonInputEnvelope
    set?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    disconnect?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    delete?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    connect?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    update?: GuessPokemonGameUpdateWithWhereUniqueWithoutPokemonInput | GuessPokemonGameUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: GuessPokemonGameUpdateManyWithWhereWithoutPokemonInput | GuessPokemonGameUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: GuessPokemonGameScalarWhereInput | GuessPokemonGameScalarWhereInput[]
  }

  export type GuessShinyGameUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<GuessShinyGameCreateWithoutPokemonInput, GuessShinyGameUncheckedCreateWithoutPokemonInput> | GuessShinyGameCreateWithoutPokemonInput[] | GuessShinyGameUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: GuessShinyGameCreateOrConnectWithoutPokemonInput | GuessShinyGameCreateOrConnectWithoutPokemonInput[]
    upsert?: GuessShinyGameUpsertWithWhereUniqueWithoutPokemonInput | GuessShinyGameUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: GuessShinyGameCreateManyPokemonInputEnvelope
    set?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    disconnect?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    delete?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    connect?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    update?: GuessShinyGameUpdateWithWhereUniqueWithoutPokemonInput | GuessShinyGameUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: GuessShinyGameUpdateManyWithWhereWithoutPokemonInput | GuessShinyGameUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: GuessShinyGameScalarWhereInput | GuessShinyGameScalarWhereInput[]
  }

  export type PokedokuGameCellUpdateManyWithoutAnswerPokemonNestedInput = {
    create?: XOR<PokedokuGameCellCreateWithoutAnswerPokemonInput, PokedokuGameCellUncheckedCreateWithoutAnswerPokemonInput> | PokedokuGameCellCreateWithoutAnswerPokemonInput[] | PokedokuGameCellUncheckedCreateWithoutAnswerPokemonInput[]
    connectOrCreate?: PokedokuGameCellCreateOrConnectWithoutAnswerPokemonInput | PokedokuGameCellCreateOrConnectWithoutAnswerPokemonInput[]
    upsert?: PokedokuGameCellUpsertWithWhereUniqueWithoutAnswerPokemonInput | PokedokuGameCellUpsertWithWhereUniqueWithoutAnswerPokemonInput[]
    createMany?: PokedokuGameCellCreateManyAnswerPokemonInputEnvelope
    set?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    disconnect?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    delete?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    connect?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    update?: PokedokuGameCellUpdateWithWhereUniqueWithoutAnswerPokemonInput | PokedokuGameCellUpdateWithWhereUniqueWithoutAnswerPokemonInput[]
    updateMany?: PokedokuGameCellUpdateManyWithWhereWithoutAnswerPokemonInput | PokedokuGameCellUpdateManyWithWhereWithoutAnswerPokemonInput[]
    deleteMany?: PokedokuGameCellScalarWhereInput | PokedokuGameCellScalarWhereInput[]
  }

  export type UserPokemonUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<UserPokemonCreateWithoutPokemonInput, UserPokemonUncheckedCreateWithoutPokemonInput> | UserPokemonCreateWithoutPokemonInput[] | UserPokemonUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: UserPokemonCreateOrConnectWithoutPokemonInput | UserPokemonCreateOrConnectWithoutPokemonInput[]
    upsert?: UserPokemonUpsertWithWhereUniqueWithoutPokemonInput | UserPokemonUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: UserPokemonCreateManyPokemonInputEnvelope
    set?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    disconnect?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    delete?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    connect?: UserPokemonWhereUniqueInput | UserPokemonWhereUniqueInput[]
    update?: UserPokemonUpdateWithWhereUniqueWithoutPokemonInput | UserPokemonUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: UserPokemonUpdateManyWithWhereWithoutPokemonInput | UserPokemonUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: UserPokemonScalarWhereInput | UserPokemonScalarWhereInput[]
  }

  export type PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput> | PokemonTypeCreateWithoutPokemonInput[] | PokemonTypeUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput | PokemonTypeCreateOrConnectWithoutPokemonInput[]
    upsert?: PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput | PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: PokemonTypeCreateManyPokemonInputEnvelope
    set?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    disconnect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    delete?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    update?: PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput | PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: PokemonTypeUpdateManyWithWhereWithoutPokemonInput | PokemonTypeUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
  }

  export type EvolutiveChainUncheckedUpdateManyWithoutFromPokemonNestedInput = {
    create?: XOR<EvolutiveChainCreateWithoutFromPokemonInput, EvolutiveChainUncheckedCreateWithoutFromPokemonInput> | EvolutiveChainCreateWithoutFromPokemonInput[] | EvolutiveChainUncheckedCreateWithoutFromPokemonInput[]
    connectOrCreate?: EvolutiveChainCreateOrConnectWithoutFromPokemonInput | EvolutiveChainCreateOrConnectWithoutFromPokemonInput[]
    upsert?: EvolutiveChainUpsertWithWhereUniqueWithoutFromPokemonInput | EvolutiveChainUpsertWithWhereUniqueWithoutFromPokemonInput[]
    createMany?: EvolutiveChainCreateManyFromPokemonInputEnvelope
    set?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    disconnect?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    delete?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    connect?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    update?: EvolutiveChainUpdateWithWhereUniqueWithoutFromPokemonInput | EvolutiveChainUpdateWithWhereUniqueWithoutFromPokemonInput[]
    updateMany?: EvolutiveChainUpdateManyWithWhereWithoutFromPokemonInput | EvolutiveChainUpdateManyWithWhereWithoutFromPokemonInput[]
    deleteMany?: EvolutiveChainScalarWhereInput | EvolutiveChainScalarWhereInput[]
  }

  export type EvolutiveChainUncheckedUpdateManyWithoutToPokemonNestedInput = {
    create?: XOR<EvolutiveChainCreateWithoutToPokemonInput, EvolutiveChainUncheckedCreateWithoutToPokemonInput> | EvolutiveChainCreateWithoutToPokemonInput[] | EvolutiveChainUncheckedCreateWithoutToPokemonInput[]
    connectOrCreate?: EvolutiveChainCreateOrConnectWithoutToPokemonInput | EvolutiveChainCreateOrConnectWithoutToPokemonInput[]
    upsert?: EvolutiveChainUpsertWithWhereUniqueWithoutToPokemonInput | EvolutiveChainUpsertWithWhereUniqueWithoutToPokemonInput[]
    createMany?: EvolutiveChainCreateManyToPokemonInputEnvelope
    set?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    disconnect?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    delete?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    connect?: EvolutiveChainWhereUniqueInput | EvolutiveChainWhereUniqueInput[]
    update?: EvolutiveChainUpdateWithWhereUniqueWithoutToPokemonInput | EvolutiveChainUpdateWithWhereUniqueWithoutToPokemonInput[]
    updateMany?: EvolutiveChainUpdateManyWithWhereWithoutToPokemonInput | EvolutiveChainUpdateManyWithWhereWithoutToPokemonInput[]
    deleteMany?: EvolutiveChainScalarWhereInput | EvolutiveChainScalarWhereInput[]
  }

  export type GuessPokemonGameUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<GuessPokemonGameCreateWithoutPokemonInput, GuessPokemonGameUncheckedCreateWithoutPokemonInput> | GuessPokemonGameCreateWithoutPokemonInput[] | GuessPokemonGameUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: GuessPokemonGameCreateOrConnectWithoutPokemonInput | GuessPokemonGameCreateOrConnectWithoutPokemonInput[]
    upsert?: GuessPokemonGameUpsertWithWhereUniqueWithoutPokemonInput | GuessPokemonGameUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: GuessPokemonGameCreateManyPokemonInputEnvelope
    set?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    disconnect?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    delete?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    connect?: GuessPokemonGameWhereUniqueInput | GuessPokemonGameWhereUniqueInput[]
    update?: GuessPokemonGameUpdateWithWhereUniqueWithoutPokemonInput | GuessPokemonGameUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: GuessPokemonGameUpdateManyWithWhereWithoutPokemonInput | GuessPokemonGameUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: GuessPokemonGameScalarWhereInput | GuessPokemonGameScalarWhereInput[]
  }

  export type GuessShinyGameUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<GuessShinyGameCreateWithoutPokemonInput, GuessShinyGameUncheckedCreateWithoutPokemonInput> | GuessShinyGameCreateWithoutPokemonInput[] | GuessShinyGameUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: GuessShinyGameCreateOrConnectWithoutPokemonInput | GuessShinyGameCreateOrConnectWithoutPokemonInput[]
    upsert?: GuessShinyGameUpsertWithWhereUniqueWithoutPokemonInput | GuessShinyGameUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: GuessShinyGameCreateManyPokemonInputEnvelope
    set?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    disconnect?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    delete?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    connect?: GuessShinyGameWhereUniqueInput | GuessShinyGameWhereUniqueInput[]
    update?: GuessShinyGameUpdateWithWhereUniqueWithoutPokemonInput | GuessShinyGameUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: GuessShinyGameUpdateManyWithWhereWithoutPokemonInput | GuessShinyGameUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: GuessShinyGameScalarWhereInput | GuessShinyGameScalarWhereInput[]
  }

  export type PokedokuGameCellUncheckedUpdateManyWithoutAnswerPokemonNestedInput = {
    create?: XOR<PokedokuGameCellCreateWithoutAnswerPokemonInput, PokedokuGameCellUncheckedCreateWithoutAnswerPokemonInput> | PokedokuGameCellCreateWithoutAnswerPokemonInput[] | PokedokuGameCellUncheckedCreateWithoutAnswerPokemonInput[]
    connectOrCreate?: PokedokuGameCellCreateOrConnectWithoutAnswerPokemonInput | PokedokuGameCellCreateOrConnectWithoutAnswerPokemonInput[]
    upsert?: PokedokuGameCellUpsertWithWhereUniqueWithoutAnswerPokemonInput | PokedokuGameCellUpsertWithWhereUniqueWithoutAnswerPokemonInput[]
    createMany?: PokedokuGameCellCreateManyAnswerPokemonInputEnvelope
    set?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    disconnect?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    delete?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    connect?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    update?: PokedokuGameCellUpdateWithWhereUniqueWithoutAnswerPokemonInput | PokedokuGameCellUpdateWithWhereUniqueWithoutAnswerPokemonInput[]
    updateMany?: PokedokuGameCellUpdateManyWithWhereWithoutAnswerPokemonInput | PokedokuGameCellUpdateManyWithWhereWithoutAnswerPokemonInput[]
    deleteMany?: PokedokuGameCellScalarWhereInput | PokedokuGameCellScalarWhereInput[]
  }

  export type PokemonTypeCreateNestedManyWithoutTypeInput = {
    create?: XOR<PokemonTypeCreateWithoutTypeInput, PokemonTypeUncheckedCreateWithoutTypeInput> | PokemonTypeCreateWithoutTypeInput[] | PokemonTypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutTypeInput | PokemonTypeCreateOrConnectWithoutTypeInput[]
    createMany?: PokemonTypeCreateManyTypeInputEnvelope
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
  }

  export type PokemonTypeUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<PokemonTypeCreateWithoutTypeInput, PokemonTypeUncheckedCreateWithoutTypeInput> | PokemonTypeCreateWithoutTypeInput[] | PokemonTypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutTypeInput | PokemonTypeCreateOrConnectWithoutTypeInput[]
    createMany?: PokemonTypeCreateManyTypeInputEnvelope
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
  }

  export type PokemonTypeUpdateManyWithoutTypeNestedInput = {
    create?: XOR<PokemonTypeCreateWithoutTypeInput, PokemonTypeUncheckedCreateWithoutTypeInput> | PokemonTypeCreateWithoutTypeInput[] | PokemonTypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutTypeInput | PokemonTypeCreateOrConnectWithoutTypeInput[]
    upsert?: PokemonTypeUpsertWithWhereUniqueWithoutTypeInput | PokemonTypeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: PokemonTypeCreateManyTypeInputEnvelope
    set?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    disconnect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    delete?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    update?: PokemonTypeUpdateWithWhereUniqueWithoutTypeInput | PokemonTypeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: PokemonTypeUpdateManyWithWhereWithoutTypeInput | PokemonTypeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
  }

  export type PokemonTypeUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<PokemonTypeCreateWithoutTypeInput, PokemonTypeUncheckedCreateWithoutTypeInput> | PokemonTypeCreateWithoutTypeInput[] | PokemonTypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutTypeInput | PokemonTypeCreateOrConnectWithoutTypeInput[]
    upsert?: PokemonTypeUpsertWithWhereUniqueWithoutTypeInput | PokemonTypeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: PokemonTypeCreateManyTypeInputEnvelope
    set?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    disconnect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    delete?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    update?: PokemonTypeUpdateWithWhereUniqueWithoutTypeInput | PokemonTypeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: PokemonTypeUpdateManyWithWhereWithoutTypeInput | PokemonTypeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPokemonsInput = {
    create?: XOR<UserCreateWithoutPokemonsInput, UserUncheckedCreateWithoutPokemonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPokemonsInput
    connect?: UserWhereUniqueInput
  }

  export type PokemonCreateNestedOneWithoutOwnersInput = {
    create?: XOR<PokemonCreateWithoutOwnersInput, PokemonUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutOwnersInput
    connect?: PokemonWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPokemonsNestedInput = {
    create?: XOR<UserCreateWithoutPokemonsInput, UserUncheckedCreateWithoutPokemonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPokemonsInput
    upsert?: UserUpsertWithoutPokemonsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPokemonsInput, UserUpdateWithoutPokemonsInput>, UserUncheckedUpdateWithoutPokemonsInput>
  }

  export type PokemonUpdateOneRequiredWithoutOwnersNestedInput = {
    create?: XOR<PokemonCreateWithoutOwnersInput, PokemonUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutOwnersInput
    upsert?: PokemonUpsertWithoutOwnersInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutOwnersInput, PokemonUpdateWithoutOwnersInput>, PokemonUncheckedUpdateWithoutOwnersInput>
  }

  export type PokemonCreateNestedOneWithoutTypesInput = {
    create?: XOR<PokemonCreateWithoutTypesInput, PokemonUncheckedCreateWithoutTypesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutTypesInput
    connect?: PokemonWhereUniqueInput
  }

  export type TypeCreateNestedOneWithoutPokemonInput = {
    create?: XOR<TypeCreateWithoutPokemonInput, TypeUncheckedCreateWithoutPokemonInput>
    connectOrCreate?: TypeCreateOrConnectWithoutPokemonInput
    connect?: TypeWhereUniqueInput
  }

  export type PokemonUpdateOneRequiredWithoutTypesNestedInput = {
    create?: XOR<PokemonCreateWithoutTypesInput, PokemonUncheckedCreateWithoutTypesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutTypesInput
    upsert?: PokemonUpsertWithoutTypesInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutTypesInput, PokemonUpdateWithoutTypesInput>, PokemonUncheckedUpdateWithoutTypesInput>
  }

  export type TypeUpdateOneRequiredWithoutPokemonNestedInput = {
    create?: XOR<TypeCreateWithoutPokemonInput, TypeUncheckedCreateWithoutPokemonInput>
    connectOrCreate?: TypeCreateOrConnectWithoutPokemonInput
    upsert?: TypeUpsertWithoutPokemonInput
    connect?: TypeWhereUniqueInput
    update?: XOR<XOR<TypeUpdateToOneWithWhereWithoutPokemonInput, TypeUpdateWithoutPokemonInput>, TypeUncheckedUpdateWithoutPokemonInput>
  }

  export type PokemonCreateNestedOneWithoutEvolutionsFromInput = {
    create?: XOR<PokemonCreateWithoutEvolutionsFromInput, PokemonUncheckedCreateWithoutEvolutionsFromInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutEvolutionsFromInput
    connect?: PokemonWhereUniqueInput
  }

  export type PokemonCreateNestedOneWithoutEvolutionsToInput = {
    create?: XOR<PokemonCreateWithoutEvolutionsToInput, PokemonUncheckedCreateWithoutEvolutionsToInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutEvolutionsToInput
    connect?: PokemonWhereUniqueInput
  }

  export type PokemonUpdateOneRequiredWithoutEvolutionsFromNestedInput = {
    create?: XOR<PokemonCreateWithoutEvolutionsFromInput, PokemonUncheckedCreateWithoutEvolutionsFromInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutEvolutionsFromInput
    upsert?: PokemonUpsertWithoutEvolutionsFromInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutEvolutionsFromInput, PokemonUpdateWithoutEvolutionsFromInput>, PokemonUncheckedUpdateWithoutEvolutionsFromInput>
  }

  export type PokemonUpdateOneRequiredWithoutEvolutionsToNestedInput = {
    create?: XOR<PokemonCreateWithoutEvolutionsToInput, PokemonUncheckedCreateWithoutEvolutionsToInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutEvolutionsToInput
    upsert?: PokemonUpsertWithoutEvolutionsToInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutEvolutionsToInput, PokemonUpdateWithoutEvolutionsToInput>, PokemonUncheckedUpdateWithoutEvolutionsToInput>
  }

  export type UserCreateNestedOneWithoutGuessPokemonGamesInput = {
    create?: XOR<UserCreateWithoutGuessPokemonGamesInput, UserUncheckedCreateWithoutGuessPokemonGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuessPokemonGamesInput
    connect?: UserWhereUniqueInput
  }

  export type PokemonCreateNestedOneWithoutGuessPokemonGamesInput = {
    create?: XOR<PokemonCreateWithoutGuessPokemonGamesInput, PokemonUncheckedCreateWithoutGuessPokemonGamesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutGuessPokemonGamesInput
    connect?: PokemonWhereUniqueInput
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGuessPokemonGamesNestedInput = {
    create?: XOR<UserCreateWithoutGuessPokemonGamesInput, UserUncheckedCreateWithoutGuessPokemonGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuessPokemonGamesInput
    upsert?: UserUpsertWithoutGuessPokemonGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuessPokemonGamesInput, UserUpdateWithoutGuessPokemonGamesInput>, UserUncheckedUpdateWithoutGuessPokemonGamesInput>
  }

  export type PokemonUpdateOneRequiredWithoutGuessPokemonGamesNestedInput = {
    create?: XOR<PokemonCreateWithoutGuessPokemonGamesInput, PokemonUncheckedCreateWithoutGuessPokemonGamesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutGuessPokemonGamesInput
    upsert?: PokemonUpsertWithoutGuessPokemonGamesInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutGuessPokemonGamesInput, PokemonUpdateWithoutGuessPokemonGamesInput>, PokemonUncheckedUpdateWithoutGuessPokemonGamesInput>
  }

  export type UserCreateNestedOneWithoutGuessShinyGamesInput = {
    create?: XOR<UserCreateWithoutGuessShinyGamesInput, UserUncheckedCreateWithoutGuessShinyGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuessShinyGamesInput
    connect?: UserWhereUniqueInput
  }

  export type PokemonCreateNestedOneWithoutGuessShinyGamesInput = {
    create?: XOR<PokemonCreateWithoutGuessShinyGamesInput, PokemonUncheckedCreateWithoutGuessShinyGamesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutGuessShinyGamesInput
    connect?: PokemonWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGuessShinyGamesNestedInput = {
    create?: XOR<UserCreateWithoutGuessShinyGamesInput, UserUncheckedCreateWithoutGuessShinyGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuessShinyGamesInput
    upsert?: UserUpsertWithoutGuessShinyGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuessShinyGamesInput, UserUpdateWithoutGuessShinyGamesInput>, UserUncheckedUpdateWithoutGuessShinyGamesInput>
  }

  export type PokemonUpdateOneRequiredWithoutGuessShinyGamesNestedInput = {
    create?: XOR<PokemonCreateWithoutGuessShinyGamesInput, PokemonUncheckedCreateWithoutGuessShinyGamesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutGuessShinyGamesInput
    upsert?: PokemonUpsertWithoutGuessShinyGamesInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutGuessShinyGamesInput, PokemonUpdateWithoutGuessShinyGamesInput>, PokemonUncheckedUpdateWithoutGuessShinyGamesInput>
  }

  export type UserCreateNestedOneWithoutPokedokuGamesInput = {
    create?: XOR<UserCreateWithoutPokedokuGamesInput, UserUncheckedCreateWithoutPokedokuGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPokedokuGamesInput
    connect?: UserWhereUniqueInput
  }

  export type PokedokuGameCellCreateNestedManyWithoutGameInput = {
    create?: XOR<PokedokuGameCellCreateWithoutGameInput, PokedokuGameCellUncheckedCreateWithoutGameInput> | PokedokuGameCellCreateWithoutGameInput[] | PokedokuGameCellUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PokedokuGameCellCreateOrConnectWithoutGameInput | PokedokuGameCellCreateOrConnectWithoutGameInput[]
    createMany?: PokedokuGameCellCreateManyGameInputEnvelope
    connect?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
  }

  export type PokedokuGameCellUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<PokedokuGameCellCreateWithoutGameInput, PokedokuGameCellUncheckedCreateWithoutGameInput> | PokedokuGameCellCreateWithoutGameInput[] | PokedokuGameCellUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PokedokuGameCellCreateOrConnectWithoutGameInput | PokedokuGameCellCreateOrConnectWithoutGameInput[]
    createMany?: PokedokuGameCellCreateManyGameInputEnvelope
    connect?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPokedokuGamesNestedInput = {
    create?: XOR<UserCreateWithoutPokedokuGamesInput, UserUncheckedCreateWithoutPokedokuGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPokedokuGamesInput
    upsert?: UserUpsertWithoutPokedokuGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPokedokuGamesInput, UserUpdateWithoutPokedokuGamesInput>, UserUncheckedUpdateWithoutPokedokuGamesInput>
  }

  export type PokedokuGameCellUpdateManyWithoutGameNestedInput = {
    create?: XOR<PokedokuGameCellCreateWithoutGameInput, PokedokuGameCellUncheckedCreateWithoutGameInput> | PokedokuGameCellCreateWithoutGameInput[] | PokedokuGameCellUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PokedokuGameCellCreateOrConnectWithoutGameInput | PokedokuGameCellCreateOrConnectWithoutGameInput[]
    upsert?: PokedokuGameCellUpsertWithWhereUniqueWithoutGameInput | PokedokuGameCellUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PokedokuGameCellCreateManyGameInputEnvelope
    set?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    disconnect?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    delete?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    connect?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    update?: PokedokuGameCellUpdateWithWhereUniqueWithoutGameInput | PokedokuGameCellUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PokedokuGameCellUpdateManyWithWhereWithoutGameInput | PokedokuGameCellUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PokedokuGameCellScalarWhereInput | PokedokuGameCellScalarWhereInput[]
  }

  export type PokedokuGameCellUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<PokedokuGameCellCreateWithoutGameInput, PokedokuGameCellUncheckedCreateWithoutGameInput> | PokedokuGameCellCreateWithoutGameInput[] | PokedokuGameCellUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PokedokuGameCellCreateOrConnectWithoutGameInput | PokedokuGameCellCreateOrConnectWithoutGameInput[]
    upsert?: PokedokuGameCellUpsertWithWhereUniqueWithoutGameInput | PokedokuGameCellUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PokedokuGameCellCreateManyGameInputEnvelope
    set?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    disconnect?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    delete?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    connect?: PokedokuGameCellWhereUniqueInput | PokedokuGameCellWhereUniqueInput[]
    update?: PokedokuGameCellUpdateWithWhereUniqueWithoutGameInput | PokedokuGameCellUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PokedokuGameCellUpdateManyWithWhereWithoutGameInput | PokedokuGameCellUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PokedokuGameCellScalarWhereInput | PokedokuGameCellScalarWhereInput[]
  }

  export type PokedokuGameCreateNestedOneWithoutCellsInput = {
    create?: XOR<PokedokuGameCreateWithoutCellsInput, PokedokuGameUncheckedCreateWithoutCellsInput>
    connectOrCreate?: PokedokuGameCreateOrConnectWithoutCellsInput
    connect?: PokedokuGameWhereUniqueInput
  }

  export type PokemonCreateNestedOneWithoutPokedokuAnswerCellsInput = {
    create?: XOR<PokemonCreateWithoutPokedokuAnswerCellsInput, PokemonUncheckedCreateWithoutPokedokuAnswerCellsInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutPokedokuAnswerCellsInput
    connect?: PokemonWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PokedokuGameUpdateOneRequiredWithoutCellsNestedInput = {
    create?: XOR<PokedokuGameCreateWithoutCellsInput, PokedokuGameUncheckedCreateWithoutCellsInput>
    connectOrCreate?: PokedokuGameCreateOrConnectWithoutCellsInput
    upsert?: PokedokuGameUpsertWithoutCellsInput
    connect?: PokedokuGameWhereUniqueInput
    update?: XOR<XOR<PokedokuGameUpdateToOneWithWhereWithoutCellsInput, PokedokuGameUpdateWithoutCellsInput>, PokedokuGameUncheckedUpdateWithoutCellsInput>
  }

  export type PokemonUpdateOneWithoutPokedokuAnswerCellsNestedInput = {
    create?: XOR<PokemonCreateWithoutPokedokuAnswerCellsInput, PokemonUncheckedCreateWithoutPokedokuAnswerCellsInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutPokedokuAnswerCellsInput
    upsert?: PokemonUpsertWithoutPokedokuAnswerCellsInput
    disconnect?: PokemonWhereInput | boolean
    delete?: PokemonWhereInput | boolean
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutPokedokuAnswerCellsInput, PokemonUpdateWithoutPokedokuAnswerCellsInput>, PokemonUncheckedUpdateWithoutPokedokuAnswerCellsInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetTokensInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    upsert?: UserUpsertWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetTokensInput, UserUpdateWithoutPasswordResetTokensInput>, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserPokemonCreateWithoutUserInput = {
    quantity?: number
    pokemon: PokemonCreateNestedOneWithoutOwnersInput
  }

  export type UserPokemonUncheckedCreateWithoutUserInput = {
    pokemonId: number
    quantity?: number
  }

  export type UserPokemonCreateOrConnectWithoutUserInput = {
    where: UserPokemonWhereUniqueInput
    create: XOR<UserPokemonCreateWithoutUserInput, UserPokemonUncheckedCreateWithoutUserInput>
  }

  export type UserPokemonCreateManyUserInputEnvelope = {
    data: UserPokemonCreateManyUserInput | UserPokemonCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GuessPokemonGameCreateWithoutUserInput = {
    gameId?: string
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
    pokemon: PokemonCreateNestedOneWithoutGuessPokemonGamesInput
  }

  export type GuessPokemonGameUncheckedCreateWithoutUserInput = {
    id?: number
    gameId?: string
    pokemonId: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type GuessPokemonGameCreateOrConnectWithoutUserInput = {
    where: GuessPokemonGameWhereUniqueInput
    create: XOR<GuessPokemonGameCreateWithoutUserInput, GuessPokemonGameUncheckedCreateWithoutUserInput>
  }

  export type GuessPokemonGameCreateManyUserInputEnvelope = {
    data: GuessPokemonGameCreateManyUserInput | GuessPokemonGameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GuessShinyGameCreateWithoutUserInput = {
    gameId?: string
    correctPosition?: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
    pokemon: PokemonCreateNestedOneWithoutGuessShinyGamesInput
  }

  export type GuessShinyGameUncheckedCreateWithoutUserInput = {
    id?: number
    gameId?: string
    pokemonId: number
    correctPosition?: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type GuessShinyGameCreateOrConnectWithoutUserInput = {
    where: GuessShinyGameWhereUniqueInput
    create: XOR<GuessShinyGameCreateWithoutUserInput, GuessShinyGameUncheckedCreateWithoutUserInput>
  }

  export type GuessShinyGameCreateManyUserInputEnvelope = {
    data: GuessShinyGameCreateManyUserInput | GuessShinyGameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PokedokuGameCreateWithoutUserInput = {
    gameId?: string
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
    cells?: PokedokuGameCellCreateNestedManyWithoutGameInput
  }

  export type PokedokuGameUncheckedCreateWithoutUserInput = {
    id?: number
    gameId?: string
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
    cells?: PokedokuGameCellUncheckedCreateNestedManyWithoutGameInput
  }

  export type PokedokuGameCreateOrConnectWithoutUserInput = {
    where: PokedokuGameWhereUniqueInput
    create: XOR<PokedokuGameCreateWithoutUserInput, PokedokuGameUncheckedCreateWithoutUserInput>
  }

  export type PokedokuGameCreateManyUserInputEnvelope = {
    data: PokedokuGameCreateManyUserInput | PokedokuGameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetTokenCreateWithoutUserInput = {
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: number
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenCreateManyUserInputEnvelope = {
    data: PasswordResetTokenCreateManyUserInput | PasswordResetTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPokemonUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPokemonWhereUniqueInput
    update: XOR<UserPokemonUpdateWithoutUserInput, UserPokemonUncheckedUpdateWithoutUserInput>
    create: XOR<UserPokemonCreateWithoutUserInput, UserPokemonUncheckedCreateWithoutUserInput>
  }

  export type UserPokemonUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPokemonWhereUniqueInput
    data: XOR<UserPokemonUpdateWithoutUserInput, UserPokemonUncheckedUpdateWithoutUserInput>
  }

  export type UserPokemonUpdateManyWithWhereWithoutUserInput = {
    where: UserPokemonScalarWhereInput
    data: XOR<UserPokemonUpdateManyMutationInput, UserPokemonUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPokemonScalarWhereInput = {
    AND?: UserPokemonScalarWhereInput | UserPokemonScalarWhereInput[]
    OR?: UserPokemonScalarWhereInput[]
    NOT?: UserPokemonScalarWhereInput | UserPokemonScalarWhereInput[]
    userId?: IntFilter<"UserPokemon"> | number
    pokemonId?: IntFilter<"UserPokemon"> | number
    quantity?: IntFilter<"UserPokemon"> | number
  }

  export type GuessPokemonGameUpsertWithWhereUniqueWithoutUserInput = {
    where: GuessPokemonGameWhereUniqueInput
    update: XOR<GuessPokemonGameUpdateWithoutUserInput, GuessPokemonGameUncheckedUpdateWithoutUserInput>
    create: XOR<GuessPokemonGameCreateWithoutUserInput, GuessPokemonGameUncheckedCreateWithoutUserInput>
  }

  export type GuessPokemonGameUpdateWithWhereUniqueWithoutUserInput = {
    where: GuessPokemonGameWhereUniqueInput
    data: XOR<GuessPokemonGameUpdateWithoutUserInput, GuessPokemonGameUncheckedUpdateWithoutUserInput>
  }

  export type GuessPokemonGameUpdateManyWithWhereWithoutUserInput = {
    where: GuessPokemonGameScalarWhereInput
    data: XOR<GuessPokemonGameUpdateManyMutationInput, GuessPokemonGameUncheckedUpdateManyWithoutUserInput>
  }

  export type GuessPokemonGameScalarWhereInput = {
    AND?: GuessPokemonGameScalarWhereInput | GuessPokemonGameScalarWhereInput[]
    OR?: GuessPokemonGameScalarWhereInput[]
    NOT?: GuessPokemonGameScalarWhereInput | GuessPokemonGameScalarWhereInput[]
    id?: IntFilter<"GuessPokemonGame"> | number
    gameId?: StringFilter<"GuessPokemonGame"> | string
    userId?: IntFilter<"GuessPokemonGame"> | number
    pokemonId?: IntFilter<"GuessPokemonGame"> | number
    maxAttempts?: IntFilter<"GuessPokemonGame"> | number
    remainingAttempts?: IntFilter<"GuessPokemonGame"> | number
    lastGuess?: StringNullableFilter<"GuessPokemonGame"> | string | null
    status?: EnumGameStatusFilter<"GuessPokemonGame"> | $Enums.GameStatus
    startedAt?: DateTimeFilter<"GuessPokemonGame"> | Date | string
    xpEarned?: IntNullableFilter<"GuessPokemonGame"> | number | null
  }

  export type GuessShinyGameUpsertWithWhereUniqueWithoutUserInput = {
    where: GuessShinyGameWhereUniqueInput
    update: XOR<GuessShinyGameUpdateWithoutUserInput, GuessShinyGameUncheckedUpdateWithoutUserInput>
    create: XOR<GuessShinyGameCreateWithoutUserInput, GuessShinyGameUncheckedCreateWithoutUserInput>
  }

  export type GuessShinyGameUpdateWithWhereUniqueWithoutUserInput = {
    where: GuessShinyGameWhereUniqueInput
    data: XOR<GuessShinyGameUpdateWithoutUserInput, GuessShinyGameUncheckedUpdateWithoutUserInput>
  }

  export type GuessShinyGameUpdateManyWithWhereWithoutUserInput = {
    where: GuessShinyGameScalarWhereInput
    data: XOR<GuessShinyGameUpdateManyMutationInput, GuessShinyGameUncheckedUpdateManyWithoutUserInput>
  }

  export type GuessShinyGameScalarWhereInput = {
    AND?: GuessShinyGameScalarWhereInput | GuessShinyGameScalarWhereInput[]
    OR?: GuessShinyGameScalarWhereInput[]
    NOT?: GuessShinyGameScalarWhereInput | GuessShinyGameScalarWhereInput[]
    id?: IntFilter<"GuessShinyGame"> | number
    gameId?: StringFilter<"GuessShinyGame"> | string
    userId?: IntFilter<"GuessShinyGame"> | number
    pokemonId?: IntFilter<"GuessShinyGame"> | number
    correctPosition?: IntFilter<"GuessShinyGame"> | number
    maxAttempts?: IntFilter<"GuessShinyGame"> | number
    remainingAttempts?: IntFilter<"GuessShinyGame"> | number
    lastGuess?: StringNullableFilter<"GuessShinyGame"> | string | null
    status?: EnumGameStatusFilter<"GuessShinyGame"> | $Enums.GameStatus
    startedAt?: DateTimeFilter<"GuessShinyGame"> | Date | string
    xpEarned?: IntNullableFilter<"GuessShinyGame"> | number | null
  }

  export type PokedokuGameUpsertWithWhereUniqueWithoutUserInput = {
    where: PokedokuGameWhereUniqueInput
    update: XOR<PokedokuGameUpdateWithoutUserInput, PokedokuGameUncheckedUpdateWithoutUserInput>
    create: XOR<PokedokuGameCreateWithoutUserInput, PokedokuGameUncheckedCreateWithoutUserInput>
  }

  export type PokedokuGameUpdateWithWhereUniqueWithoutUserInput = {
    where: PokedokuGameWhereUniqueInput
    data: XOR<PokedokuGameUpdateWithoutUserInput, PokedokuGameUncheckedUpdateWithoutUserInput>
  }

  export type PokedokuGameUpdateManyWithWhereWithoutUserInput = {
    where: PokedokuGameScalarWhereInput
    data: XOR<PokedokuGameUpdateManyMutationInput, PokedokuGameUncheckedUpdateManyWithoutUserInput>
  }

  export type PokedokuGameScalarWhereInput = {
    AND?: PokedokuGameScalarWhereInput | PokedokuGameScalarWhereInput[]
    OR?: PokedokuGameScalarWhereInput[]
    NOT?: PokedokuGameScalarWhereInput | PokedokuGameScalarWhereInput[]
    id?: IntFilter<"PokedokuGame"> | number
    gameId?: StringFilter<"PokedokuGame"> | string
    userId?: IntFilter<"PokedokuGame"> | number
    status?: EnumGameStatusFilter<"PokedokuGame"> | $Enums.GameStatus
    startedAt?: DateTimeFilter<"PokedokuGame"> | Date | string
    xpEarned?: IntNullableFilter<"PokedokuGame"> | number | null
  }

  export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    update: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    data: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokenScalarWhereInput
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetTokenScalarWhereInput = {
    AND?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    OR?: PasswordResetTokenScalarWhereInput[]
    NOT?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    id?: IntFilter<"PasswordResetToken"> | number
    userId?: IntFilter<"PasswordResetToken"> | number
    tokenHash?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type UserPokemonCreateWithoutPokemonInput = {
    quantity?: number
    user: UserCreateNestedOneWithoutPokemonsInput
  }

  export type UserPokemonUncheckedCreateWithoutPokemonInput = {
    userId: number
    quantity?: number
  }

  export type UserPokemonCreateOrConnectWithoutPokemonInput = {
    where: UserPokemonWhereUniqueInput
    create: XOR<UserPokemonCreateWithoutPokemonInput, UserPokemonUncheckedCreateWithoutPokemonInput>
  }

  export type UserPokemonCreateManyPokemonInputEnvelope = {
    data: UserPokemonCreateManyPokemonInput | UserPokemonCreateManyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type PokemonTypeCreateWithoutPokemonInput = {
    type: TypeCreateNestedOneWithoutPokemonInput
  }

  export type PokemonTypeUncheckedCreateWithoutPokemonInput = {
    typeId: number
  }

  export type PokemonTypeCreateOrConnectWithoutPokemonInput = {
    where: PokemonTypeWhereUniqueInput
    create: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput>
  }

  export type PokemonTypeCreateManyPokemonInputEnvelope = {
    data: PokemonTypeCreateManyPokemonInput | PokemonTypeCreateManyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type EvolutiveChainCreateWithoutFromPokemonInput = {
    evolutionChainId: number
    method?: string | null
    condition?: string | null
    toPokemon: PokemonCreateNestedOneWithoutEvolutionsToInput
  }

  export type EvolutiveChainUncheckedCreateWithoutFromPokemonInput = {
    evolutionChainId: number
    toPokemonId: number
    method?: string | null
    condition?: string | null
  }

  export type EvolutiveChainCreateOrConnectWithoutFromPokemonInput = {
    where: EvolutiveChainWhereUniqueInput
    create: XOR<EvolutiveChainCreateWithoutFromPokemonInput, EvolutiveChainUncheckedCreateWithoutFromPokemonInput>
  }

  export type EvolutiveChainCreateManyFromPokemonInputEnvelope = {
    data: EvolutiveChainCreateManyFromPokemonInput | EvolutiveChainCreateManyFromPokemonInput[]
    skipDuplicates?: boolean
  }

  export type EvolutiveChainCreateWithoutToPokemonInput = {
    evolutionChainId: number
    method?: string | null
    condition?: string | null
    fromPokemon: PokemonCreateNestedOneWithoutEvolutionsFromInput
  }

  export type EvolutiveChainUncheckedCreateWithoutToPokemonInput = {
    evolutionChainId: number
    fromPokemonId: number
    method?: string | null
    condition?: string | null
  }

  export type EvolutiveChainCreateOrConnectWithoutToPokemonInput = {
    where: EvolutiveChainWhereUniqueInput
    create: XOR<EvolutiveChainCreateWithoutToPokemonInput, EvolutiveChainUncheckedCreateWithoutToPokemonInput>
  }

  export type EvolutiveChainCreateManyToPokemonInputEnvelope = {
    data: EvolutiveChainCreateManyToPokemonInput | EvolutiveChainCreateManyToPokemonInput[]
    skipDuplicates?: boolean
  }

  export type GuessPokemonGameCreateWithoutPokemonInput = {
    gameId?: string
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
    user: UserCreateNestedOneWithoutGuessPokemonGamesInput
  }

  export type GuessPokemonGameUncheckedCreateWithoutPokemonInput = {
    id?: number
    gameId?: string
    userId: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type GuessPokemonGameCreateOrConnectWithoutPokemonInput = {
    where: GuessPokemonGameWhereUniqueInput
    create: XOR<GuessPokemonGameCreateWithoutPokemonInput, GuessPokemonGameUncheckedCreateWithoutPokemonInput>
  }

  export type GuessPokemonGameCreateManyPokemonInputEnvelope = {
    data: GuessPokemonGameCreateManyPokemonInput | GuessPokemonGameCreateManyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type GuessShinyGameCreateWithoutPokemonInput = {
    gameId?: string
    correctPosition?: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
    user: UserCreateNestedOneWithoutGuessShinyGamesInput
  }

  export type GuessShinyGameUncheckedCreateWithoutPokemonInput = {
    id?: number
    gameId?: string
    userId: number
    correctPosition?: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type GuessShinyGameCreateOrConnectWithoutPokemonInput = {
    where: GuessShinyGameWhereUniqueInput
    create: XOR<GuessShinyGameCreateWithoutPokemonInput, GuessShinyGameUncheckedCreateWithoutPokemonInput>
  }

  export type GuessShinyGameCreateManyPokemonInputEnvelope = {
    data: GuessShinyGameCreateManyPokemonInput | GuessShinyGameCreateManyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type PokedokuGameCellCreateWithoutAnswerPokemonInput = {
    position: number
    rowConditionType: string
    rowConditionValue: string
    columnConditionType: string
    columnConditionValue: string
    isCorrect?: boolean | null
    answeredAt?: Date | string | null
    game: PokedokuGameCreateNestedOneWithoutCellsInput
  }

  export type PokedokuGameCellUncheckedCreateWithoutAnswerPokemonInput = {
    id?: number
    gameInternalId: number
    position: number
    rowConditionType: string
    rowConditionValue: string
    columnConditionType: string
    columnConditionValue: string
    isCorrect?: boolean | null
    answeredAt?: Date | string | null
  }

  export type PokedokuGameCellCreateOrConnectWithoutAnswerPokemonInput = {
    where: PokedokuGameCellWhereUniqueInput
    create: XOR<PokedokuGameCellCreateWithoutAnswerPokemonInput, PokedokuGameCellUncheckedCreateWithoutAnswerPokemonInput>
  }

  export type PokedokuGameCellCreateManyAnswerPokemonInputEnvelope = {
    data: PokedokuGameCellCreateManyAnswerPokemonInput | PokedokuGameCellCreateManyAnswerPokemonInput[]
    skipDuplicates?: boolean
  }

  export type UserPokemonUpsertWithWhereUniqueWithoutPokemonInput = {
    where: UserPokemonWhereUniqueInput
    update: XOR<UserPokemonUpdateWithoutPokemonInput, UserPokemonUncheckedUpdateWithoutPokemonInput>
    create: XOR<UserPokemonCreateWithoutPokemonInput, UserPokemonUncheckedCreateWithoutPokemonInput>
  }

  export type UserPokemonUpdateWithWhereUniqueWithoutPokemonInput = {
    where: UserPokemonWhereUniqueInput
    data: XOR<UserPokemonUpdateWithoutPokemonInput, UserPokemonUncheckedUpdateWithoutPokemonInput>
  }

  export type UserPokemonUpdateManyWithWhereWithoutPokemonInput = {
    where: UserPokemonScalarWhereInput
    data: XOR<UserPokemonUpdateManyMutationInput, UserPokemonUncheckedUpdateManyWithoutPokemonInput>
  }

  export type PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput = {
    where: PokemonTypeWhereUniqueInput
    update: XOR<PokemonTypeUpdateWithoutPokemonInput, PokemonTypeUncheckedUpdateWithoutPokemonInput>
    create: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput>
  }

  export type PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput = {
    where: PokemonTypeWhereUniqueInput
    data: XOR<PokemonTypeUpdateWithoutPokemonInput, PokemonTypeUncheckedUpdateWithoutPokemonInput>
  }

  export type PokemonTypeUpdateManyWithWhereWithoutPokemonInput = {
    where: PokemonTypeScalarWhereInput
    data: XOR<PokemonTypeUpdateManyMutationInput, PokemonTypeUncheckedUpdateManyWithoutPokemonInput>
  }

  export type PokemonTypeScalarWhereInput = {
    AND?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
    OR?: PokemonTypeScalarWhereInput[]
    NOT?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
    pokemonId?: IntFilter<"PokemonType"> | number
    typeId?: IntFilter<"PokemonType"> | number
  }

  export type EvolutiveChainUpsertWithWhereUniqueWithoutFromPokemonInput = {
    where: EvolutiveChainWhereUniqueInput
    update: XOR<EvolutiveChainUpdateWithoutFromPokemonInput, EvolutiveChainUncheckedUpdateWithoutFromPokemonInput>
    create: XOR<EvolutiveChainCreateWithoutFromPokemonInput, EvolutiveChainUncheckedCreateWithoutFromPokemonInput>
  }

  export type EvolutiveChainUpdateWithWhereUniqueWithoutFromPokemonInput = {
    where: EvolutiveChainWhereUniqueInput
    data: XOR<EvolutiveChainUpdateWithoutFromPokemonInput, EvolutiveChainUncheckedUpdateWithoutFromPokemonInput>
  }

  export type EvolutiveChainUpdateManyWithWhereWithoutFromPokemonInput = {
    where: EvolutiveChainScalarWhereInput
    data: XOR<EvolutiveChainUpdateManyMutationInput, EvolutiveChainUncheckedUpdateManyWithoutFromPokemonInput>
  }

  export type EvolutiveChainScalarWhereInput = {
    AND?: EvolutiveChainScalarWhereInput | EvolutiveChainScalarWhereInput[]
    OR?: EvolutiveChainScalarWhereInput[]
    NOT?: EvolutiveChainScalarWhereInput | EvolutiveChainScalarWhereInput[]
    evolutionChainId?: IntFilter<"EvolutiveChain"> | number
    fromPokemonId?: IntFilter<"EvolutiveChain"> | number
    toPokemonId?: IntFilter<"EvolutiveChain"> | number
    method?: StringNullableFilter<"EvolutiveChain"> | string | null
    condition?: StringNullableFilter<"EvolutiveChain"> | string | null
  }

  export type EvolutiveChainUpsertWithWhereUniqueWithoutToPokemonInput = {
    where: EvolutiveChainWhereUniqueInput
    update: XOR<EvolutiveChainUpdateWithoutToPokemonInput, EvolutiveChainUncheckedUpdateWithoutToPokemonInput>
    create: XOR<EvolutiveChainCreateWithoutToPokemonInput, EvolutiveChainUncheckedCreateWithoutToPokemonInput>
  }

  export type EvolutiveChainUpdateWithWhereUniqueWithoutToPokemonInput = {
    where: EvolutiveChainWhereUniqueInput
    data: XOR<EvolutiveChainUpdateWithoutToPokemonInput, EvolutiveChainUncheckedUpdateWithoutToPokemonInput>
  }

  export type EvolutiveChainUpdateManyWithWhereWithoutToPokemonInput = {
    where: EvolutiveChainScalarWhereInput
    data: XOR<EvolutiveChainUpdateManyMutationInput, EvolutiveChainUncheckedUpdateManyWithoutToPokemonInput>
  }

  export type GuessPokemonGameUpsertWithWhereUniqueWithoutPokemonInput = {
    where: GuessPokemonGameWhereUniqueInput
    update: XOR<GuessPokemonGameUpdateWithoutPokemonInput, GuessPokemonGameUncheckedUpdateWithoutPokemonInput>
    create: XOR<GuessPokemonGameCreateWithoutPokemonInput, GuessPokemonGameUncheckedCreateWithoutPokemonInput>
  }

  export type GuessPokemonGameUpdateWithWhereUniqueWithoutPokemonInput = {
    where: GuessPokemonGameWhereUniqueInput
    data: XOR<GuessPokemonGameUpdateWithoutPokemonInput, GuessPokemonGameUncheckedUpdateWithoutPokemonInput>
  }

  export type GuessPokemonGameUpdateManyWithWhereWithoutPokemonInput = {
    where: GuessPokemonGameScalarWhereInput
    data: XOR<GuessPokemonGameUpdateManyMutationInput, GuessPokemonGameUncheckedUpdateManyWithoutPokemonInput>
  }

  export type GuessShinyGameUpsertWithWhereUniqueWithoutPokemonInput = {
    where: GuessShinyGameWhereUniqueInput
    update: XOR<GuessShinyGameUpdateWithoutPokemonInput, GuessShinyGameUncheckedUpdateWithoutPokemonInput>
    create: XOR<GuessShinyGameCreateWithoutPokemonInput, GuessShinyGameUncheckedCreateWithoutPokemonInput>
  }

  export type GuessShinyGameUpdateWithWhereUniqueWithoutPokemonInput = {
    where: GuessShinyGameWhereUniqueInput
    data: XOR<GuessShinyGameUpdateWithoutPokemonInput, GuessShinyGameUncheckedUpdateWithoutPokemonInput>
  }

  export type GuessShinyGameUpdateManyWithWhereWithoutPokemonInput = {
    where: GuessShinyGameScalarWhereInput
    data: XOR<GuessShinyGameUpdateManyMutationInput, GuessShinyGameUncheckedUpdateManyWithoutPokemonInput>
  }

  export type PokedokuGameCellUpsertWithWhereUniqueWithoutAnswerPokemonInput = {
    where: PokedokuGameCellWhereUniqueInput
    update: XOR<PokedokuGameCellUpdateWithoutAnswerPokemonInput, PokedokuGameCellUncheckedUpdateWithoutAnswerPokemonInput>
    create: XOR<PokedokuGameCellCreateWithoutAnswerPokemonInput, PokedokuGameCellUncheckedCreateWithoutAnswerPokemonInput>
  }

  export type PokedokuGameCellUpdateWithWhereUniqueWithoutAnswerPokemonInput = {
    where: PokedokuGameCellWhereUniqueInput
    data: XOR<PokedokuGameCellUpdateWithoutAnswerPokemonInput, PokedokuGameCellUncheckedUpdateWithoutAnswerPokemonInput>
  }

  export type PokedokuGameCellUpdateManyWithWhereWithoutAnswerPokemonInput = {
    where: PokedokuGameCellScalarWhereInput
    data: XOR<PokedokuGameCellUpdateManyMutationInput, PokedokuGameCellUncheckedUpdateManyWithoutAnswerPokemonInput>
  }

  export type PokedokuGameCellScalarWhereInput = {
    AND?: PokedokuGameCellScalarWhereInput | PokedokuGameCellScalarWhereInput[]
    OR?: PokedokuGameCellScalarWhereInput[]
    NOT?: PokedokuGameCellScalarWhereInput | PokedokuGameCellScalarWhereInput[]
    id?: IntFilter<"PokedokuGameCell"> | number
    gameInternalId?: IntFilter<"PokedokuGameCell"> | number
    position?: IntFilter<"PokedokuGameCell"> | number
    rowConditionType?: StringFilter<"PokedokuGameCell"> | string
    rowConditionValue?: StringFilter<"PokedokuGameCell"> | string
    columnConditionType?: StringFilter<"PokedokuGameCell"> | string
    columnConditionValue?: StringFilter<"PokedokuGameCell"> | string
    answerPokemonId?: IntNullableFilter<"PokedokuGameCell"> | number | null
    isCorrect?: BoolNullableFilter<"PokedokuGameCell"> | boolean | null
    answeredAt?: DateTimeNullableFilter<"PokedokuGameCell"> | Date | string | null
  }

  export type PokemonTypeCreateWithoutTypeInput = {
    pokemon: PokemonCreateNestedOneWithoutTypesInput
  }

  export type PokemonTypeUncheckedCreateWithoutTypeInput = {
    pokemonId: number
  }

  export type PokemonTypeCreateOrConnectWithoutTypeInput = {
    where: PokemonTypeWhereUniqueInput
    create: XOR<PokemonTypeCreateWithoutTypeInput, PokemonTypeUncheckedCreateWithoutTypeInput>
  }

  export type PokemonTypeCreateManyTypeInputEnvelope = {
    data: PokemonTypeCreateManyTypeInput | PokemonTypeCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type PokemonTypeUpsertWithWhereUniqueWithoutTypeInput = {
    where: PokemonTypeWhereUniqueInput
    update: XOR<PokemonTypeUpdateWithoutTypeInput, PokemonTypeUncheckedUpdateWithoutTypeInput>
    create: XOR<PokemonTypeCreateWithoutTypeInput, PokemonTypeUncheckedCreateWithoutTypeInput>
  }

  export type PokemonTypeUpdateWithWhereUniqueWithoutTypeInput = {
    where: PokemonTypeWhereUniqueInput
    data: XOR<PokemonTypeUpdateWithoutTypeInput, PokemonTypeUncheckedUpdateWithoutTypeInput>
  }

  export type PokemonTypeUpdateManyWithWhereWithoutTypeInput = {
    where: PokemonTypeScalarWhereInput
    data: XOR<PokemonTypeUpdateManyMutationInput, PokemonTypeUncheckedUpdateManyWithoutTypeInput>
  }

  export type UserCreateWithoutPokemonsInput = {
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
    guessPokemonGames?: GuessPokemonGameCreateNestedManyWithoutUserInput
    guessShinyGames?: GuessShinyGameCreateNestedManyWithoutUserInput
    pokedokuGames?: PokedokuGameCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPokemonsInput = {
    id?: number
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
    guessPokemonGames?: GuessPokemonGameUncheckedCreateNestedManyWithoutUserInput
    guessShinyGames?: GuessShinyGameUncheckedCreateNestedManyWithoutUserInput
    pokedokuGames?: PokedokuGameUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPokemonsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPokemonsInput, UserUncheckedCreateWithoutPokemonsInput>
  }

  export type PokemonCreateWithoutOwnersInput = {
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainCreateNestedManyWithoutFromPokemonInput
    evolutionsTo?: EvolutiveChainCreateNestedManyWithoutToPokemonInput
    guessPokemonGames?: GuessPokemonGameCreateNestedManyWithoutPokemonInput
    guessShinyGames?: GuessShinyGameCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonUncheckedCreateWithoutOwnersInput = {
    id?: number
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainUncheckedCreateNestedManyWithoutFromPokemonInput
    evolutionsTo?: EvolutiveChainUncheckedCreateNestedManyWithoutToPokemonInput
    guessPokemonGames?: GuessPokemonGameUncheckedCreateNestedManyWithoutPokemonInput
    guessShinyGames?: GuessShinyGameUncheckedCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonCreateOrConnectWithoutOwnersInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutOwnersInput, PokemonUncheckedCreateWithoutOwnersInput>
  }

  export type UserUpsertWithoutPokemonsInput = {
    update: XOR<UserUpdateWithoutPokemonsInput, UserUncheckedUpdateWithoutPokemonsInput>
    create: XOR<UserCreateWithoutPokemonsInput, UserUncheckedCreateWithoutPokemonsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPokemonsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPokemonsInput, UserUncheckedUpdateWithoutPokemonsInput>
  }

  export type UserUpdateWithoutPokemonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    guessPokemonGames?: GuessPokemonGameUpdateManyWithoutUserNestedInput
    guessShinyGames?: GuessShinyGameUpdateManyWithoutUserNestedInput
    pokedokuGames?: PokedokuGameUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    guessPokemonGames?: GuessPokemonGameUncheckedUpdateManyWithoutUserNestedInput
    guessShinyGames?: GuessShinyGameUncheckedUpdateManyWithoutUserNestedInput
    pokedokuGames?: PokedokuGameUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PokemonUpsertWithoutOwnersInput = {
    update: XOR<PokemonUpdateWithoutOwnersInput, PokemonUncheckedUpdateWithoutOwnersInput>
    create: XOR<PokemonCreateWithoutOwnersInput, PokemonUncheckedCreateWithoutOwnersInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutOwnersInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutOwnersInput, PokemonUncheckedUpdateWithoutOwnersInput>
  }

  export type PokemonUpdateWithoutOwnersInput = {
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUpdateManyWithoutFromPokemonNestedInput
    evolutionsTo?: EvolutiveChainUpdateManyWithoutToPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUpdateManyWithoutPokemonNestedInput
    guessShinyGames?: GuessShinyGameUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutOwnersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUncheckedUpdateManyWithoutFromPokemonNestedInput
    evolutionsTo?: EvolutiveChainUncheckedUpdateManyWithoutToPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUncheckedUpdateManyWithoutPokemonNestedInput
    guessShinyGames?: GuessShinyGameUncheckedUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type PokemonCreateWithoutTypesInput = {
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainCreateNestedManyWithoutFromPokemonInput
    evolutionsTo?: EvolutiveChainCreateNestedManyWithoutToPokemonInput
    guessPokemonGames?: GuessPokemonGameCreateNestedManyWithoutPokemonInput
    guessShinyGames?: GuessShinyGameCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonUncheckedCreateWithoutTypesInput = {
    id?: number
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonUncheckedCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainUncheckedCreateNestedManyWithoutFromPokemonInput
    evolutionsTo?: EvolutiveChainUncheckedCreateNestedManyWithoutToPokemonInput
    guessPokemonGames?: GuessPokemonGameUncheckedCreateNestedManyWithoutPokemonInput
    guessShinyGames?: GuessShinyGameUncheckedCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonCreateOrConnectWithoutTypesInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutTypesInput, PokemonUncheckedCreateWithoutTypesInput>
  }

  export type TypeCreateWithoutPokemonInput = {
    name: string
  }

  export type TypeUncheckedCreateWithoutPokemonInput = {
    id?: number
    name: string
  }

  export type TypeCreateOrConnectWithoutPokemonInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutPokemonInput, TypeUncheckedCreateWithoutPokemonInput>
  }

  export type PokemonUpsertWithoutTypesInput = {
    update: XOR<PokemonUpdateWithoutTypesInput, PokemonUncheckedUpdateWithoutTypesInput>
    create: XOR<PokemonCreateWithoutTypesInput, PokemonUncheckedCreateWithoutTypesInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutTypesInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutTypesInput, PokemonUncheckedUpdateWithoutTypesInput>
  }

  export type PokemonUpdateWithoutTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUpdateManyWithoutFromPokemonNestedInput
    evolutionsTo?: EvolutiveChainUpdateManyWithoutToPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUpdateManyWithoutPokemonNestedInput
    guessShinyGames?: GuessShinyGameUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUncheckedUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUncheckedUpdateManyWithoutFromPokemonNestedInput
    evolutionsTo?: EvolutiveChainUncheckedUpdateManyWithoutToPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUncheckedUpdateManyWithoutPokemonNestedInput
    guessShinyGames?: GuessShinyGameUncheckedUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type TypeUpsertWithoutPokemonInput = {
    update: XOR<TypeUpdateWithoutPokemonInput, TypeUncheckedUpdateWithoutPokemonInput>
    create: XOR<TypeCreateWithoutPokemonInput, TypeUncheckedCreateWithoutPokemonInput>
    where?: TypeWhereInput
  }

  export type TypeUpdateToOneWithWhereWithoutPokemonInput = {
    where?: TypeWhereInput
    data: XOR<TypeUpdateWithoutPokemonInput, TypeUncheckedUpdateWithoutPokemonInput>
  }

  export type TypeUpdateWithoutPokemonInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUncheckedUpdateWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonCreateWithoutEvolutionsFromInput = {
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonCreateNestedManyWithoutPokemonInput
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
    evolutionsTo?: EvolutiveChainCreateNestedManyWithoutToPokemonInput
    guessPokemonGames?: GuessPokemonGameCreateNestedManyWithoutPokemonInput
    guessShinyGames?: GuessShinyGameCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonUncheckedCreateWithoutEvolutionsFromInput = {
    id?: number
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonUncheckedCreateNestedManyWithoutPokemonInput
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
    evolutionsTo?: EvolutiveChainUncheckedCreateNestedManyWithoutToPokemonInput
    guessPokemonGames?: GuessPokemonGameUncheckedCreateNestedManyWithoutPokemonInput
    guessShinyGames?: GuessShinyGameUncheckedCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonCreateOrConnectWithoutEvolutionsFromInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutEvolutionsFromInput, PokemonUncheckedCreateWithoutEvolutionsFromInput>
  }

  export type PokemonCreateWithoutEvolutionsToInput = {
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonCreateNestedManyWithoutPokemonInput
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainCreateNestedManyWithoutFromPokemonInput
    guessPokemonGames?: GuessPokemonGameCreateNestedManyWithoutPokemonInput
    guessShinyGames?: GuessShinyGameCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonUncheckedCreateWithoutEvolutionsToInput = {
    id?: number
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonUncheckedCreateNestedManyWithoutPokemonInput
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainUncheckedCreateNestedManyWithoutFromPokemonInput
    guessPokemonGames?: GuessPokemonGameUncheckedCreateNestedManyWithoutPokemonInput
    guessShinyGames?: GuessShinyGameUncheckedCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonCreateOrConnectWithoutEvolutionsToInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutEvolutionsToInput, PokemonUncheckedCreateWithoutEvolutionsToInput>
  }

  export type PokemonUpsertWithoutEvolutionsFromInput = {
    update: XOR<PokemonUpdateWithoutEvolutionsFromInput, PokemonUncheckedUpdateWithoutEvolutionsFromInput>
    create: XOR<PokemonCreateWithoutEvolutionsFromInput, PokemonUncheckedCreateWithoutEvolutionsFromInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutEvolutionsFromInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutEvolutionsFromInput, PokemonUncheckedUpdateWithoutEvolutionsFromInput>
  }

  export type PokemonUpdateWithoutEvolutionsFromInput = {
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUpdateManyWithoutPokemonNestedInput
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
    evolutionsTo?: EvolutiveChainUpdateManyWithoutToPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUpdateManyWithoutPokemonNestedInput
    guessShinyGames?: GuessShinyGameUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutEvolutionsFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUncheckedUpdateManyWithoutPokemonNestedInput
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
    evolutionsTo?: EvolutiveChainUncheckedUpdateManyWithoutToPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUncheckedUpdateManyWithoutPokemonNestedInput
    guessShinyGames?: GuessShinyGameUncheckedUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type PokemonUpsertWithoutEvolutionsToInput = {
    update: XOR<PokemonUpdateWithoutEvolutionsToInput, PokemonUncheckedUpdateWithoutEvolutionsToInput>
    create: XOR<PokemonCreateWithoutEvolutionsToInput, PokemonUncheckedCreateWithoutEvolutionsToInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutEvolutionsToInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutEvolutionsToInput, PokemonUncheckedUpdateWithoutEvolutionsToInput>
  }

  export type PokemonUpdateWithoutEvolutionsToInput = {
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUpdateManyWithoutPokemonNestedInput
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUpdateManyWithoutFromPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUpdateManyWithoutPokemonNestedInput
    guessShinyGames?: GuessShinyGameUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutEvolutionsToInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUncheckedUpdateManyWithoutPokemonNestedInput
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUncheckedUpdateManyWithoutFromPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUncheckedUpdateManyWithoutPokemonNestedInput
    guessShinyGames?: GuessShinyGameUncheckedUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type UserCreateWithoutGuessPokemonGamesInput = {
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
    pokemons?: UserPokemonCreateNestedManyWithoutUserInput
    guessShinyGames?: GuessShinyGameCreateNestedManyWithoutUserInput
    pokedokuGames?: PokedokuGameCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGuessPokemonGamesInput = {
    id?: number
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
    pokemons?: UserPokemonUncheckedCreateNestedManyWithoutUserInput
    guessShinyGames?: GuessShinyGameUncheckedCreateNestedManyWithoutUserInput
    pokedokuGames?: PokedokuGameUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGuessPokemonGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGuessPokemonGamesInput, UserUncheckedCreateWithoutGuessPokemonGamesInput>
  }

  export type PokemonCreateWithoutGuessPokemonGamesInput = {
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonCreateNestedManyWithoutPokemonInput
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainCreateNestedManyWithoutFromPokemonInput
    evolutionsTo?: EvolutiveChainCreateNestedManyWithoutToPokemonInput
    guessShinyGames?: GuessShinyGameCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonUncheckedCreateWithoutGuessPokemonGamesInput = {
    id?: number
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonUncheckedCreateNestedManyWithoutPokemonInput
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainUncheckedCreateNestedManyWithoutFromPokemonInput
    evolutionsTo?: EvolutiveChainUncheckedCreateNestedManyWithoutToPokemonInput
    guessShinyGames?: GuessShinyGameUncheckedCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonCreateOrConnectWithoutGuessPokemonGamesInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutGuessPokemonGamesInput, PokemonUncheckedCreateWithoutGuessPokemonGamesInput>
  }

  export type UserUpsertWithoutGuessPokemonGamesInput = {
    update: XOR<UserUpdateWithoutGuessPokemonGamesInput, UserUncheckedUpdateWithoutGuessPokemonGamesInput>
    create: XOR<UserCreateWithoutGuessPokemonGamesInput, UserUncheckedCreateWithoutGuessPokemonGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGuessPokemonGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGuessPokemonGamesInput, UserUncheckedUpdateWithoutGuessPokemonGamesInput>
  }

  export type UserUpdateWithoutGuessPokemonGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    pokemons?: UserPokemonUpdateManyWithoutUserNestedInput
    guessShinyGames?: GuessShinyGameUpdateManyWithoutUserNestedInput
    pokedokuGames?: PokedokuGameUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGuessPokemonGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    pokemons?: UserPokemonUncheckedUpdateManyWithoutUserNestedInput
    guessShinyGames?: GuessShinyGameUncheckedUpdateManyWithoutUserNestedInput
    pokedokuGames?: PokedokuGameUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PokemonUpsertWithoutGuessPokemonGamesInput = {
    update: XOR<PokemonUpdateWithoutGuessPokemonGamesInput, PokemonUncheckedUpdateWithoutGuessPokemonGamesInput>
    create: XOR<PokemonCreateWithoutGuessPokemonGamesInput, PokemonUncheckedCreateWithoutGuessPokemonGamesInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutGuessPokemonGamesInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutGuessPokemonGamesInput, PokemonUncheckedUpdateWithoutGuessPokemonGamesInput>
  }

  export type PokemonUpdateWithoutGuessPokemonGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUpdateManyWithoutPokemonNestedInput
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUpdateManyWithoutFromPokemonNestedInput
    evolutionsTo?: EvolutiveChainUpdateManyWithoutToPokemonNestedInput
    guessShinyGames?: GuessShinyGameUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutGuessPokemonGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUncheckedUpdateManyWithoutPokemonNestedInput
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUncheckedUpdateManyWithoutFromPokemonNestedInput
    evolutionsTo?: EvolutiveChainUncheckedUpdateManyWithoutToPokemonNestedInput
    guessShinyGames?: GuessShinyGameUncheckedUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type UserCreateWithoutGuessShinyGamesInput = {
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
    pokemons?: UserPokemonCreateNestedManyWithoutUserInput
    guessPokemonGames?: GuessPokemonGameCreateNestedManyWithoutUserInput
    pokedokuGames?: PokedokuGameCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGuessShinyGamesInput = {
    id?: number
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
    pokemons?: UserPokemonUncheckedCreateNestedManyWithoutUserInput
    guessPokemonGames?: GuessPokemonGameUncheckedCreateNestedManyWithoutUserInput
    pokedokuGames?: PokedokuGameUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGuessShinyGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGuessShinyGamesInput, UserUncheckedCreateWithoutGuessShinyGamesInput>
  }

  export type PokemonCreateWithoutGuessShinyGamesInput = {
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonCreateNestedManyWithoutPokemonInput
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainCreateNestedManyWithoutFromPokemonInput
    evolutionsTo?: EvolutiveChainCreateNestedManyWithoutToPokemonInput
    guessPokemonGames?: GuessPokemonGameCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonUncheckedCreateWithoutGuessShinyGamesInput = {
    id?: number
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonUncheckedCreateNestedManyWithoutPokemonInput
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainUncheckedCreateNestedManyWithoutFromPokemonInput
    evolutionsTo?: EvolutiveChainUncheckedCreateNestedManyWithoutToPokemonInput
    guessPokemonGames?: GuessPokemonGameUncheckedCreateNestedManyWithoutPokemonInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedCreateNestedManyWithoutAnswerPokemonInput
  }

  export type PokemonCreateOrConnectWithoutGuessShinyGamesInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutGuessShinyGamesInput, PokemonUncheckedCreateWithoutGuessShinyGamesInput>
  }

  export type UserUpsertWithoutGuessShinyGamesInput = {
    update: XOR<UserUpdateWithoutGuessShinyGamesInput, UserUncheckedUpdateWithoutGuessShinyGamesInput>
    create: XOR<UserCreateWithoutGuessShinyGamesInput, UserUncheckedCreateWithoutGuessShinyGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGuessShinyGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGuessShinyGamesInput, UserUncheckedUpdateWithoutGuessShinyGamesInput>
  }

  export type UserUpdateWithoutGuessShinyGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    pokemons?: UserPokemonUpdateManyWithoutUserNestedInput
    guessPokemonGames?: GuessPokemonGameUpdateManyWithoutUserNestedInput
    pokedokuGames?: PokedokuGameUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGuessShinyGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    pokemons?: UserPokemonUncheckedUpdateManyWithoutUserNestedInput
    guessPokemonGames?: GuessPokemonGameUncheckedUpdateManyWithoutUserNestedInput
    pokedokuGames?: PokedokuGameUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PokemonUpsertWithoutGuessShinyGamesInput = {
    update: XOR<PokemonUpdateWithoutGuessShinyGamesInput, PokemonUncheckedUpdateWithoutGuessShinyGamesInput>
    create: XOR<PokemonCreateWithoutGuessShinyGamesInput, PokemonUncheckedCreateWithoutGuessShinyGamesInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutGuessShinyGamesInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutGuessShinyGamesInput, PokemonUncheckedUpdateWithoutGuessShinyGamesInput>
  }

  export type PokemonUpdateWithoutGuessShinyGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUpdateManyWithoutPokemonNestedInput
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUpdateManyWithoutFromPokemonNestedInput
    evolutionsTo?: EvolutiveChainUpdateManyWithoutToPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutGuessShinyGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUncheckedUpdateManyWithoutPokemonNestedInput
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUncheckedUpdateManyWithoutFromPokemonNestedInput
    evolutionsTo?: EvolutiveChainUncheckedUpdateManyWithoutToPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUncheckedUpdateManyWithoutPokemonNestedInput
    pokedokuAnswerCells?: PokedokuGameCellUncheckedUpdateManyWithoutAnswerPokemonNestedInput
  }

  export type UserCreateWithoutPokedokuGamesInput = {
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
    pokemons?: UserPokemonCreateNestedManyWithoutUserInput
    guessPokemonGames?: GuessPokemonGameCreateNestedManyWithoutUserInput
    guessShinyGames?: GuessShinyGameCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPokedokuGamesInput = {
    id?: number
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
    pokemons?: UserPokemonUncheckedCreateNestedManyWithoutUserInput
    guessPokemonGames?: GuessPokemonGameUncheckedCreateNestedManyWithoutUserInput
    guessShinyGames?: GuessShinyGameUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPokedokuGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPokedokuGamesInput, UserUncheckedCreateWithoutPokedokuGamesInput>
  }

  export type PokedokuGameCellCreateWithoutGameInput = {
    position: number
    rowConditionType: string
    rowConditionValue: string
    columnConditionType: string
    columnConditionValue: string
    isCorrect?: boolean | null
    answeredAt?: Date | string | null
    answerPokemon?: PokemonCreateNestedOneWithoutPokedokuAnswerCellsInput
  }

  export type PokedokuGameCellUncheckedCreateWithoutGameInput = {
    id?: number
    position: number
    rowConditionType: string
    rowConditionValue: string
    columnConditionType: string
    columnConditionValue: string
    answerPokemonId?: number | null
    isCorrect?: boolean | null
    answeredAt?: Date | string | null
  }

  export type PokedokuGameCellCreateOrConnectWithoutGameInput = {
    where: PokedokuGameCellWhereUniqueInput
    create: XOR<PokedokuGameCellCreateWithoutGameInput, PokedokuGameCellUncheckedCreateWithoutGameInput>
  }

  export type PokedokuGameCellCreateManyGameInputEnvelope = {
    data: PokedokuGameCellCreateManyGameInput | PokedokuGameCellCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPokedokuGamesInput = {
    update: XOR<UserUpdateWithoutPokedokuGamesInput, UserUncheckedUpdateWithoutPokedokuGamesInput>
    create: XOR<UserCreateWithoutPokedokuGamesInput, UserUncheckedCreateWithoutPokedokuGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPokedokuGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPokedokuGamesInput, UserUncheckedUpdateWithoutPokedokuGamesInput>
  }

  export type UserUpdateWithoutPokedokuGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    pokemons?: UserPokemonUpdateManyWithoutUserNestedInput
    guessPokemonGames?: GuessPokemonGameUpdateManyWithoutUserNestedInput
    guessShinyGames?: GuessShinyGameUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPokedokuGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    pokemons?: UserPokemonUncheckedUpdateManyWithoutUserNestedInput
    guessPokemonGames?: GuessPokemonGameUncheckedUpdateManyWithoutUserNestedInput
    guessShinyGames?: GuessShinyGameUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PokedokuGameCellUpsertWithWhereUniqueWithoutGameInput = {
    where: PokedokuGameCellWhereUniqueInput
    update: XOR<PokedokuGameCellUpdateWithoutGameInput, PokedokuGameCellUncheckedUpdateWithoutGameInput>
    create: XOR<PokedokuGameCellCreateWithoutGameInput, PokedokuGameCellUncheckedCreateWithoutGameInput>
  }

  export type PokedokuGameCellUpdateWithWhereUniqueWithoutGameInput = {
    where: PokedokuGameCellWhereUniqueInput
    data: XOR<PokedokuGameCellUpdateWithoutGameInput, PokedokuGameCellUncheckedUpdateWithoutGameInput>
  }

  export type PokedokuGameCellUpdateManyWithWhereWithoutGameInput = {
    where: PokedokuGameCellScalarWhereInput
    data: XOR<PokedokuGameCellUpdateManyMutationInput, PokedokuGameCellUncheckedUpdateManyWithoutGameInput>
  }

  export type PokedokuGameCreateWithoutCellsInput = {
    gameId?: string
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
    user: UserCreateNestedOneWithoutPokedokuGamesInput
  }

  export type PokedokuGameUncheckedCreateWithoutCellsInput = {
    id?: number
    gameId?: string
    userId: number
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type PokedokuGameCreateOrConnectWithoutCellsInput = {
    where: PokedokuGameWhereUniqueInput
    create: XOR<PokedokuGameCreateWithoutCellsInput, PokedokuGameUncheckedCreateWithoutCellsInput>
  }

  export type PokemonCreateWithoutPokedokuAnswerCellsInput = {
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonCreateNestedManyWithoutPokemonInput
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainCreateNestedManyWithoutFromPokemonInput
    evolutionsTo?: EvolutiveChainCreateNestedManyWithoutToPokemonInput
    guessPokemonGames?: GuessPokemonGameCreateNestedManyWithoutPokemonInput
    guessShinyGames?: GuessShinyGameCreateNestedManyWithoutPokemonInput
  }

  export type PokemonUncheckedCreateWithoutPokedokuAnswerCellsInput = {
    id?: number
    name: string
    generation: number
    urlImage?: string | null
    urlShinyImage?: string | null
    legendary?: boolean
    myth?: boolean
    hp: number
    atk: number
    def: number
    spAtk: number
    spDef: number
    speed: number
    owners?: UserPokemonUncheckedCreateNestedManyWithoutPokemonInput
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
    evolutionsFrom?: EvolutiveChainUncheckedCreateNestedManyWithoutFromPokemonInput
    evolutionsTo?: EvolutiveChainUncheckedCreateNestedManyWithoutToPokemonInput
    guessPokemonGames?: GuessPokemonGameUncheckedCreateNestedManyWithoutPokemonInput
    guessShinyGames?: GuessShinyGameUncheckedCreateNestedManyWithoutPokemonInput
  }

  export type PokemonCreateOrConnectWithoutPokedokuAnswerCellsInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutPokedokuAnswerCellsInput, PokemonUncheckedCreateWithoutPokedokuAnswerCellsInput>
  }

  export type PokedokuGameUpsertWithoutCellsInput = {
    update: XOR<PokedokuGameUpdateWithoutCellsInput, PokedokuGameUncheckedUpdateWithoutCellsInput>
    create: XOR<PokedokuGameCreateWithoutCellsInput, PokedokuGameUncheckedCreateWithoutCellsInput>
    where?: PokedokuGameWhereInput
  }

  export type PokedokuGameUpdateToOneWithWhereWithoutCellsInput = {
    where?: PokedokuGameWhereInput
    data: XOR<PokedokuGameUpdateWithoutCellsInput, PokedokuGameUncheckedUpdateWithoutCellsInput>
  }

  export type PokedokuGameUpdateWithoutCellsInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutPokedokuGamesNestedInput
  }

  export type PokedokuGameUncheckedUpdateWithoutCellsInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokemonUpsertWithoutPokedokuAnswerCellsInput = {
    update: XOR<PokemonUpdateWithoutPokedokuAnswerCellsInput, PokemonUncheckedUpdateWithoutPokedokuAnswerCellsInput>
    create: XOR<PokemonCreateWithoutPokedokuAnswerCellsInput, PokemonUncheckedCreateWithoutPokedokuAnswerCellsInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutPokedokuAnswerCellsInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutPokedokuAnswerCellsInput, PokemonUncheckedUpdateWithoutPokedokuAnswerCellsInput>
  }

  export type PokemonUpdateWithoutPokedokuAnswerCellsInput = {
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUpdateManyWithoutPokemonNestedInput
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUpdateManyWithoutFromPokemonNestedInput
    evolutionsTo?: EvolutiveChainUpdateManyWithoutToPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUpdateManyWithoutPokemonNestedInput
    guessShinyGames?: GuessShinyGameUpdateManyWithoutPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutPokedokuAnswerCellsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    generation?: IntFieldUpdateOperationsInput | number
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    urlShinyImage?: NullableStringFieldUpdateOperationsInput | string | null
    legendary?: BoolFieldUpdateOperationsInput | boolean
    myth?: BoolFieldUpdateOperationsInput | boolean
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    def?: IntFieldUpdateOperationsInput | number
    spAtk?: IntFieldUpdateOperationsInput | number
    spDef?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    owners?: UserPokemonUncheckedUpdateManyWithoutPokemonNestedInput
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
    evolutionsFrom?: EvolutiveChainUncheckedUpdateManyWithoutFromPokemonNestedInput
    evolutionsTo?: EvolutiveChainUncheckedUpdateManyWithoutToPokemonNestedInput
    guessPokemonGames?: GuessPokemonGameUncheckedUpdateManyWithoutPokemonNestedInput
    guessShinyGames?: GuessShinyGameUncheckedUpdateManyWithoutPokemonNestedInput
  }

  export type UserCreateWithoutPasswordResetTokensInput = {
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
    pokemons?: UserPokemonCreateNestedManyWithoutUserInput
    guessPokemonGames?: GuessPokemonGameCreateNestedManyWithoutUserInput
    guessShinyGames?: GuessShinyGameCreateNestedManyWithoutUserInput
    pokedokuGames?: PokedokuGameCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokensInput = {
    id?: number
    name: string
    email: string
    password: string
    level?: number
    xp?: number
    lootboxes?: number
    admin?: boolean
    refreshToken?: string | null
    pokemons?: UserPokemonUncheckedCreateNestedManyWithoutUserInput
    guessPokemonGames?: GuessPokemonGameUncheckedCreateNestedManyWithoutUserInput
    guessShinyGames?: GuessShinyGameUncheckedCreateNestedManyWithoutUserInput
    pokedokuGames?: PokedokuGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
  }

  export type UserUpsertWithoutPasswordResetTokensInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type UserUpdateWithoutPasswordResetTokensInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    pokemons?: UserPokemonUpdateManyWithoutUserNestedInput
    guessPokemonGames?: GuessPokemonGameUpdateManyWithoutUserNestedInput
    guessShinyGames?: GuessShinyGameUpdateManyWithoutUserNestedInput
    pokedokuGames?: PokedokuGameUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lootboxes?: IntFieldUpdateOperationsInput | number
    admin?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    pokemons?: UserPokemonUncheckedUpdateManyWithoutUserNestedInput
    guessPokemonGames?: GuessPokemonGameUncheckedUpdateManyWithoutUserNestedInput
    guessShinyGames?: GuessShinyGameUncheckedUpdateManyWithoutUserNestedInput
    pokedokuGames?: PokedokuGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserPokemonCreateManyUserInput = {
    pokemonId: number
    quantity?: number
  }

  export type GuessPokemonGameCreateManyUserInput = {
    id?: number
    gameId?: string
    pokemonId: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type GuessShinyGameCreateManyUserInput = {
    id?: number
    gameId?: string
    pokemonId: number
    correctPosition?: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type PokedokuGameCreateManyUserInput = {
    id?: number
    gameId?: string
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type PasswordResetTokenCreateManyUserInput = {
    id?: number
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserPokemonUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    pokemon?: PokemonUpdateOneRequiredWithoutOwnersNestedInput
  }

  export type UserPokemonUncheckedUpdateWithoutUserInput = {
    pokemonId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UserPokemonUncheckedUpdateManyWithoutUserInput = {
    pokemonId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type GuessPokemonGameUpdateWithoutUserInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon?: PokemonUpdateOneRequiredWithoutGuessPokemonGamesNestedInput
  }

  export type GuessPokemonGameUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GuessPokemonGameUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GuessShinyGameUpdateWithoutUserInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    correctPosition?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon?: PokemonUpdateOneRequiredWithoutGuessShinyGamesNestedInput
  }

  export type GuessShinyGameUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    correctPosition?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GuessShinyGameUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    correctPosition?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokedokuGameUpdateWithoutUserInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
    cells?: PokedokuGameCellUpdateManyWithoutGameNestedInput
  }

  export type PokedokuGameUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
    cells?: PokedokuGameCellUncheckedUpdateManyWithoutGameNestedInput
  }

  export type PokedokuGameUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PasswordResetTokenUpdateWithoutUserInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPokemonCreateManyPokemonInput = {
    userId: number
    quantity?: number
  }

  export type PokemonTypeCreateManyPokemonInput = {
    typeId: number
  }

  export type EvolutiveChainCreateManyFromPokemonInput = {
    evolutionChainId: number
    toPokemonId: number
    method?: string | null
    condition?: string | null
  }

  export type EvolutiveChainCreateManyToPokemonInput = {
    evolutionChainId: number
    fromPokemonId: number
    method?: string | null
    condition?: string | null
  }

  export type GuessPokemonGameCreateManyPokemonInput = {
    id?: number
    gameId?: string
    userId: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type GuessShinyGameCreateManyPokemonInput = {
    id?: number
    gameId?: string
    userId: number
    correctPosition?: number
    maxAttempts?: number
    remainingAttempts?: number
    lastGuess?: string | null
    status?: $Enums.GameStatus
    startedAt?: Date | string
    xpEarned?: number | null
  }

  export type PokedokuGameCellCreateManyAnswerPokemonInput = {
    id?: number
    gameInternalId: number
    position: number
    rowConditionType: string
    rowConditionValue: string
    columnConditionType: string
    columnConditionValue: string
    isCorrect?: boolean | null
    answeredAt?: Date | string | null
  }

  export type UserPokemonUpdateWithoutPokemonInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPokemonsNestedInput
  }

  export type UserPokemonUncheckedUpdateWithoutPokemonInput = {
    userId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UserPokemonUncheckedUpdateManyWithoutPokemonInput = {
    userId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonTypeUpdateWithoutPokemonInput = {
    type?: TypeUpdateOneRequiredWithoutPokemonNestedInput
  }

  export type PokemonTypeUncheckedUpdateWithoutPokemonInput = {
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonTypeUncheckedUpdateManyWithoutPokemonInput = {
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type EvolutiveChainUpdateWithoutFromPokemonInput = {
    evolutionChainId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    toPokemon?: PokemonUpdateOneRequiredWithoutEvolutionsToNestedInput
  }

  export type EvolutiveChainUncheckedUpdateWithoutFromPokemonInput = {
    evolutionChainId?: IntFieldUpdateOperationsInput | number
    toPokemonId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvolutiveChainUncheckedUpdateManyWithoutFromPokemonInput = {
    evolutionChainId?: IntFieldUpdateOperationsInput | number
    toPokemonId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvolutiveChainUpdateWithoutToPokemonInput = {
    evolutionChainId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    fromPokemon?: PokemonUpdateOneRequiredWithoutEvolutionsFromNestedInput
  }

  export type EvolutiveChainUncheckedUpdateWithoutToPokemonInput = {
    evolutionChainId?: IntFieldUpdateOperationsInput | number
    fromPokemonId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvolutiveChainUncheckedUpdateManyWithoutToPokemonInput = {
    evolutionChainId?: IntFieldUpdateOperationsInput | number
    fromPokemonId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuessPokemonGameUpdateWithoutPokemonInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutGuessPokemonGamesNestedInput
  }

  export type GuessPokemonGameUncheckedUpdateWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GuessPokemonGameUncheckedUpdateManyWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GuessShinyGameUpdateWithoutPokemonInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    correctPosition?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutGuessShinyGamesNestedInput
  }

  export type GuessShinyGameUncheckedUpdateWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    correctPosition?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GuessShinyGameUncheckedUpdateManyWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    correctPosition?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    remainingAttempts?: IntFieldUpdateOperationsInput | number
    lastGuess?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xpEarned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokedokuGameCellUpdateWithoutAnswerPokemonInput = {
    position?: IntFieldUpdateOperationsInput | number
    rowConditionType?: StringFieldUpdateOperationsInput | string
    rowConditionValue?: StringFieldUpdateOperationsInput | string
    columnConditionType?: StringFieldUpdateOperationsInput | string
    columnConditionValue?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game?: PokedokuGameUpdateOneRequiredWithoutCellsNestedInput
  }

  export type PokedokuGameCellUncheckedUpdateWithoutAnswerPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameInternalId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    rowConditionType?: StringFieldUpdateOperationsInput | string
    rowConditionValue?: StringFieldUpdateOperationsInput | string
    columnConditionType?: StringFieldUpdateOperationsInput | string
    columnConditionValue?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PokedokuGameCellUncheckedUpdateManyWithoutAnswerPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameInternalId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    rowConditionType?: StringFieldUpdateOperationsInput | string
    rowConditionValue?: StringFieldUpdateOperationsInput | string
    columnConditionType?: StringFieldUpdateOperationsInput | string
    columnConditionValue?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PokemonTypeCreateManyTypeInput = {
    pokemonId: number
  }

  export type PokemonTypeUpdateWithoutTypeInput = {
    pokemon?: PokemonUpdateOneRequiredWithoutTypesNestedInput
  }

  export type PokemonTypeUncheckedUpdateWithoutTypeInput = {
    pokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonTypeUncheckedUpdateManyWithoutTypeInput = {
    pokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type PokedokuGameCellCreateManyGameInput = {
    id?: number
    position: number
    rowConditionType: string
    rowConditionValue: string
    columnConditionType: string
    columnConditionValue: string
    answerPokemonId?: number | null
    isCorrect?: boolean | null
    answeredAt?: Date | string | null
  }

  export type PokedokuGameCellUpdateWithoutGameInput = {
    position?: IntFieldUpdateOperationsInput | number
    rowConditionType?: StringFieldUpdateOperationsInput | string
    rowConditionValue?: StringFieldUpdateOperationsInput | string
    columnConditionType?: StringFieldUpdateOperationsInput | string
    columnConditionValue?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answerPokemon?: PokemonUpdateOneWithoutPokedokuAnswerCellsNestedInput
  }

  export type PokedokuGameCellUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    rowConditionType?: StringFieldUpdateOperationsInput | string
    rowConditionValue?: StringFieldUpdateOperationsInput | string
    columnConditionType?: StringFieldUpdateOperationsInput | string
    columnConditionValue?: StringFieldUpdateOperationsInput | string
    answerPokemonId?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PokedokuGameCellUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    rowConditionType?: StringFieldUpdateOperationsInput | string
    rowConditionValue?: StringFieldUpdateOperationsInput | string
    columnConditionType?: StringFieldUpdateOperationsInput | string
    columnConditionValue?: StringFieldUpdateOperationsInput | string
    answerPokemonId?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}