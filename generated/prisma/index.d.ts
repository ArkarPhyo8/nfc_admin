
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model cards
 * 
 */
export type cards = $Result.DefaultSelection<Prisma.$cardsPayload>
/**
 * Model reader_device
 * 
 */
export type reader_device = $Result.DefaultSelection<Prisma.$reader_devicePayload>
/**
 * Model reader_logs
 * 
 */
export type reader_logs = $Result.DefaultSelection<Prisma.$reader_logsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cards`: Exposes CRUD operations for the **cards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.cards.findMany()
    * ```
    */
  get cards(): Prisma.cardsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reader_device`: Exposes CRUD operations for the **reader_device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reader_devices
    * const reader_devices = await prisma.reader_device.findMany()
    * ```
    */
  get reader_device(): Prisma.reader_deviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reader_logs`: Exposes CRUD operations for the **reader_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reader_logs
    * const reader_logs = await prisma.reader_logs.findMany()
    * ```
    */
  get reader_logs(): Prisma.reader_logsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    admin: 'admin',
    users: 'users',
    cards: 'cards',
    reader_device: 'reader_device',
    reader_logs: 'reader_logs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "users" | "cards" | "reader_device" | "reader_logs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      cards: {
        payload: Prisma.$cardsPayload<ExtArgs>
        fields: Prisma.cardsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cardsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cardsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>
          }
          findFirst: {
            args: Prisma.cardsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cardsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>
          }
          findMany: {
            args: Prisma.cardsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>[]
          }
          create: {
            args: Prisma.cardsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>
          }
          createMany: {
            args: Prisma.cardsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cardsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>[]
          }
          delete: {
            args: Prisma.cardsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>
          }
          update: {
            args: Prisma.cardsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>
          }
          deleteMany: {
            args: Prisma.cardsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cardsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cardsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>[]
          }
          upsert: {
            args: Prisma.cardsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardsPayload>
          }
          aggregate: {
            args: Prisma.CardsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCards>
          }
          groupBy: {
            args: Prisma.cardsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cardsCountArgs<ExtArgs>
            result: $Utils.Optional<CardsCountAggregateOutputType> | number
          }
        }
      }
      reader_device: {
        payload: Prisma.$reader_devicePayload<ExtArgs>
        fields: Prisma.reader_deviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reader_deviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_devicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reader_deviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_devicePayload>
          }
          findFirst: {
            args: Prisma.reader_deviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_devicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reader_deviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_devicePayload>
          }
          findMany: {
            args: Prisma.reader_deviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_devicePayload>[]
          }
          create: {
            args: Prisma.reader_deviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_devicePayload>
          }
          createMany: {
            args: Prisma.reader_deviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reader_deviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_devicePayload>[]
          }
          delete: {
            args: Prisma.reader_deviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_devicePayload>
          }
          update: {
            args: Prisma.reader_deviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_devicePayload>
          }
          deleteMany: {
            args: Prisma.reader_deviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reader_deviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reader_deviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_devicePayload>[]
          }
          upsert: {
            args: Prisma.reader_deviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_devicePayload>
          }
          aggregate: {
            args: Prisma.Reader_deviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReader_device>
          }
          groupBy: {
            args: Prisma.reader_deviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reader_deviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.reader_deviceCountArgs<ExtArgs>
            result: $Utils.Optional<Reader_deviceCountAggregateOutputType> | number
          }
        }
      }
      reader_logs: {
        payload: Prisma.$reader_logsPayload<ExtArgs>
        fields: Prisma.reader_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reader_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reader_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_logsPayload>
          }
          findFirst: {
            args: Prisma.reader_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reader_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_logsPayload>
          }
          findMany: {
            args: Prisma.reader_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_logsPayload>[]
          }
          create: {
            args: Prisma.reader_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_logsPayload>
          }
          createMany: {
            args: Prisma.reader_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reader_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_logsPayload>[]
          }
          delete: {
            args: Prisma.reader_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_logsPayload>
          }
          update: {
            args: Prisma.reader_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_logsPayload>
          }
          deleteMany: {
            args: Prisma.reader_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reader_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reader_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_logsPayload>[]
          }
          upsert: {
            args: Prisma.reader_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reader_logsPayload>
          }
          aggregate: {
            args: Prisma.Reader_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReader_logs>
          }
          groupBy: {
            args: Prisma.reader_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reader_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reader_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Reader_logsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    admin?: adminOmit
    users?: usersOmit
    cards?: cardsOmit
    reader_device?: reader_deviceOmit
    reader_logs?: reader_logsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    cards: number
    reader_device: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | UsersCountOutputTypeCountCardsArgs
    reader_device?: boolean | UsersCountOutputTypeCountReader_deviceArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cardsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReader_deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reader_deviceWhereInput
  }


  /**
   * Count Type CardsCountOutputType
   */

  export type CardsCountOutputType = {
    reader_logs: number
  }

  export type CardsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reader_logs?: boolean | CardsCountOutputTypeCountReader_logsArgs
  }

  // Custom InputTypes
  /**
   * CardsCountOutputType without action
   */
  export type CardsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardsCountOutputType
     */
    select?: CardsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardsCountOutputType without action
   */
  export type CardsCountOutputTypeCountReader_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reader_logsWhereInput
  }


  /**
   * Count Type Reader_deviceCountOutputType
   */

  export type Reader_deviceCountOutputType = {
    reader_logs: number
  }

  export type Reader_deviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reader_logs?: boolean | Reader_deviceCountOutputTypeCountReader_logsArgs
  }

  // Custom InputTypes
  /**
   * Reader_deviceCountOutputType without action
   */
  export type Reader_deviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reader_deviceCountOutputType
     */
    select?: Reader_deviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Reader_deviceCountOutputType without action
   */
  export type Reader_deviceCountOutputTypeCountReader_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reader_logsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    role: $Enums.Role
    created_at: Date
    updated_at: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "created_at" | "updated_at", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: $Enums.Role
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminCreateManyAndReturnArgs>(args?: SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends adminUpdateManyAndReturnArgs>(args: SelectSubset<T, adminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly name: FieldRef<"admin", 'String'>
    readonly role: FieldRef<"admin", 'Role'>
    readonly created_at: FieldRef<"admin", 'DateTime'>
    readonly updated_at: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin createManyAndReturn
   */
  export type adminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin updateManyAndReturn
   */
  export type adminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    phoneNo: number | null
  }

  export type UsersSumAggregateOutputType = {
    phoneNo: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    WebUUID: string | null
    phoneNo: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    WebUUID: string | null
    phoneNo: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    WebUUID: number
    phoneNo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    phoneNo?: true
  }

  export type UsersSumAggregateInputType = {
    phoneNo?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    WebUUID?: true
    phoneNo?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    WebUUID?: true
    phoneNo?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    WebUUID?: true
    phoneNo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    WebUUID: string
    phoneNo: number
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    WebUUID?: boolean
    phoneNo?: boolean
    created_at?: boolean
    updated_at?: boolean
    cards?: boolean | users$cardsArgs<ExtArgs>
    reader_device?: boolean | users$reader_deviceArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    WebUUID?: boolean
    phoneNo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    WebUUID?: boolean
    phoneNo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    WebUUID?: boolean
    phoneNo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "WebUUID" | "phoneNo" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | users$cardsArgs<ExtArgs>
    reader_device?: boolean | users$reader_deviceArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      cards: Prisma.$cardsPayload<ExtArgs>[]
      reader_device: Prisma.$reader_devicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      WebUUID: string
      phoneNo: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cards<T extends users$cardsArgs<ExtArgs> = {}>(args?: Subset<T, users$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reader_device<T extends users$reader_deviceArgs<ExtArgs> = {}>(args?: Subset<T, users$reader_deviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly WebUUID: FieldRef<"users", 'String'>
    readonly phoneNo: FieldRef<"users", 'Int'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.cards
   */
  export type users$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsInclude<ExtArgs> | null
    where?: cardsWhereInput
    orderBy?: cardsOrderByWithRelationInput | cardsOrderByWithRelationInput[]
    cursor?: cardsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }

  /**
   * users.reader_device
   */
  export type users$reader_deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceInclude<ExtArgs> | null
    where?: reader_deviceWhereInput
    orderBy?: reader_deviceOrderByWithRelationInput | reader_deviceOrderByWithRelationInput[]
    cursor?: reader_deviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reader_deviceScalarFieldEnum | Reader_deviceScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model cards
   */

  export type AggregateCards = {
    _count: CardsCountAggregateOutputType | null
    _avg: CardsAvgAggregateOutputType | null
    _sum: CardsSumAggregateOutputType | null
    _min: CardsMinAggregateOutputType | null
    _max: CardsMaxAggregateOutputType | null
  }

  export type CardsAvgAggregateOutputType = {
    cardName: number | null
  }

  export type CardsSumAggregateOutputType = {
    cardName: number | null
  }

  export type CardsMinAggregateOutputType = {
    id: string | null
    userID: string | null
    cardName: number | null
    cardUUID: string | null
    cardType: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CardsMaxAggregateOutputType = {
    id: string | null
    userID: string | null
    cardName: number | null
    cardUUID: string | null
    cardType: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CardsCountAggregateOutputType = {
    id: number
    userID: number
    cardName: number
    cardUUID: number
    cardType: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CardsAvgAggregateInputType = {
    cardName?: true
  }

  export type CardsSumAggregateInputType = {
    cardName?: true
  }

  export type CardsMinAggregateInputType = {
    id?: true
    userID?: true
    cardName?: true
    cardUUID?: true
    cardType?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CardsMaxAggregateInputType = {
    id?: true
    userID?: true
    cardName?: true
    cardUUID?: true
    cardType?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CardsCountAggregateInputType = {
    id?: true
    userID?: true
    cardName?: true
    cardUUID?: true
    cardType?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CardsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cards to aggregate.
     */
    where?: cardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cards to fetch.
     */
    orderBy?: cardsOrderByWithRelationInput | cardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cards
    **/
    _count?: true | CardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardsMaxAggregateInputType
  }

  export type GetCardsAggregateType<T extends CardsAggregateArgs> = {
        [P in keyof T & keyof AggregateCards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCards[P]>
      : GetScalarType<T[P], AggregateCards[P]>
  }




  export type cardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cardsWhereInput
    orderBy?: cardsOrderByWithAggregationInput | cardsOrderByWithAggregationInput[]
    by: CardsScalarFieldEnum[] | CardsScalarFieldEnum
    having?: cardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardsCountAggregateInputType | true
    _avg?: CardsAvgAggregateInputType
    _sum?: CardsSumAggregateInputType
    _min?: CardsMinAggregateInputType
    _max?: CardsMaxAggregateInputType
  }

  export type CardsGroupByOutputType = {
    id: string
    userID: string
    cardName: number
    cardUUID: string
    cardType: string
    status: boolean
    created_at: Date
    updated_at: Date
    _count: CardsCountAggregateOutputType | null
    _avg: CardsAvgAggregateOutputType | null
    _sum: CardsSumAggregateOutputType | null
    _min: CardsMinAggregateOutputType | null
    _max: CardsMaxAggregateOutputType | null
  }

  type GetCardsGroupByPayload<T extends cardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardsGroupByOutputType[P]>
            : GetScalarType<T[P], CardsGroupByOutputType[P]>
        }
      >
    >


  export type cardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    cardName?: boolean
    cardUUID?: boolean
    cardType?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    reader_logs?: boolean | cards$reader_logsArgs<ExtArgs>
    _count?: boolean | CardsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cards"]>

  export type cardsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    cardName?: boolean
    cardUUID?: boolean
    cardType?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cards"]>

  export type cardsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    cardName?: boolean
    cardUUID?: boolean
    cardType?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cards"]>

  export type cardsSelectScalar = {
    id?: boolean
    userID?: boolean
    cardName?: boolean
    cardUUID?: boolean
    cardType?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type cardsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userID" | "cardName" | "cardUUID" | "cardType" | "status" | "created_at" | "updated_at", ExtArgs["result"]["cards"]>
  export type cardsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    reader_logs?: boolean | cards$reader_logsArgs<ExtArgs>
    _count?: boolean | CardsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cardsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type cardsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $cardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cards"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      reader_logs: Prisma.$reader_logsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userID: string
      cardName: number
      cardUUID: string
      cardType: string
      status: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cards"]>
    composites: {}
  }

  type cardsGetPayload<S extends boolean | null | undefined | cardsDefaultArgs> = $Result.GetResult<Prisma.$cardsPayload, S>

  type cardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardsCountAggregateInputType | true
    }

  export interface cardsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cards'], meta: { name: 'cards' } }
    /**
     * Find zero or one Cards that matches the filter.
     * @param {cardsFindUniqueArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cardsFindUniqueArgs>(args: SelectSubset<T, cardsFindUniqueArgs<ExtArgs>>): Prisma__cardsClient<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cards that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cardsFindUniqueOrThrowArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cardsFindUniqueOrThrowArgs>(args: SelectSubset<T, cardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cardsClient<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardsFindFirstArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cardsFindFirstArgs>(args?: SelectSubset<T, cardsFindFirstArgs<ExtArgs>>): Prisma__cardsClient<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardsFindFirstOrThrowArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cardsFindFirstOrThrowArgs>(args?: SelectSubset<T, cardsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cardsClient<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.cards.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.cards.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardsWithIdOnly = await prisma.cards.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cardsFindManyArgs>(args?: SelectSubset<T, cardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cards.
     * @param {cardsCreateArgs} args - Arguments to create a Cards.
     * @example
     * // Create one Cards
     * const Cards = await prisma.cards.create({
     *   data: {
     *     // ... data to create a Cards
     *   }
     * })
     * 
     */
    create<T extends cardsCreateArgs>(args: SelectSubset<T, cardsCreateArgs<ExtArgs>>): Prisma__cardsClient<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {cardsCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const cards = await prisma.cards.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cardsCreateManyArgs>(args?: SelectSubset<T, cardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {cardsCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const cards = await prisma.cards.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardsWithIdOnly = await prisma.cards.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cardsCreateManyAndReturnArgs>(args?: SelectSubset<T, cardsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cards.
     * @param {cardsDeleteArgs} args - Arguments to delete one Cards.
     * @example
     * // Delete one Cards
     * const Cards = await prisma.cards.delete({
     *   where: {
     *     // ... filter to delete one Cards
     *   }
     * })
     * 
     */
    delete<T extends cardsDeleteArgs>(args: SelectSubset<T, cardsDeleteArgs<ExtArgs>>): Prisma__cardsClient<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cards.
     * @param {cardsUpdateArgs} args - Arguments to update one Cards.
     * @example
     * // Update one Cards
     * const cards = await prisma.cards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cardsUpdateArgs>(args: SelectSubset<T, cardsUpdateArgs<ExtArgs>>): Prisma__cardsClient<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {cardsDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.cards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cardsDeleteManyArgs>(args?: SelectSubset<T, cardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const cards = await prisma.cards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cardsUpdateManyArgs>(args: SelectSubset<T, cardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {cardsUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const cards = await prisma.cards.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardsWithIdOnly = await prisma.cards.updateManyAndReturn({
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
    updateManyAndReturn<T extends cardsUpdateManyAndReturnArgs>(args: SelectSubset<T, cardsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cards.
     * @param {cardsUpsertArgs} args - Arguments to update or create a Cards.
     * @example
     * // Update or create a Cards
     * const cards = await prisma.cards.upsert({
     *   create: {
     *     // ... data to create a Cards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cards we want to update
     *   }
     * })
     */
    upsert<T extends cardsUpsertArgs>(args: SelectSubset<T, cardsUpsertArgs<ExtArgs>>): Prisma__cardsClient<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardsCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.cards.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends cardsCountArgs>(
      args?: Subset<T, cardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardsAggregateArgs>(args: Subset<T, CardsAggregateArgs>): Prisma.PrismaPromise<GetCardsAggregateType<T>>

    /**
     * Group by Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardsGroupByArgs} args - Group by arguments.
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
      T extends cardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cardsGroupByArgs['orderBy'] }
        : { orderBy?: cardsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cards model
   */
  readonly fields: cardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cardsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reader_logs<T extends cards$reader_logsArgs<ExtArgs> = {}>(args?: Subset<T, cards$reader_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cards model
   */
  interface cardsFieldRefs {
    readonly id: FieldRef<"cards", 'String'>
    readonly userID: FieldRef<"cards", 'String'>
    readonly cardName: FieldRef<"cards", 'Int'>
    readonly cardUUID: FieldRef<"cards", 'String'>
    readonly cardType: FieldRef<"cards", 'String'>
    readonly status: FieldRef<"cards", 'Boolean'>
    readonly created_at: FieldRef<"cards", 'DateTime'>
    readonly updated_at: FieldRef<"cards", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cards findUnique
   */
  export type cardsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsInclude<ExtArgs> | null
    /**
     * Filter, which cards to fetch.
     */
    where: cardsWhereUniqueInput
  }

  /**
   * cards findUniqueOrThrow
   */
  export type cardsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsInclude<ExtArgs> | null
    /**
     * Filter, which cards to fetch.
     */
    where: cardsWhereUniqueInput
  }

  /**
   * cards findFirst
   */
  export type cardsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsInclude<ExtArgs> | null
    /**
     * Filter, which cards to fetch.
     */
    where?: cardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cards to fetch.
     */
    orderBy?: cardsOrderByWithRelationInput | cardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cards.
     */
    cursor?: cardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cards.
     */
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }

  /**
   * cards findFirstOrThrow
   */
  export type cardsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsInclude<ExtArgs> | null
    /**
     * Filter, which cards to fetch.
     */
    where?: cardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cards to fetch.
     */
    orderBy?: cardsOrderByWithRelationInput | cardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cards.
     */
    cursor?: cardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cards.
     */
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }

  /**
   * cards findMany
   */
  export type cardsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsInclude<ExtArgs> | null
    /**
     * Filter, which cards to fetch.
     */
    where?: cardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cards to fetch.
     */
    orderBy?: cardsOrderByWithRelationInput | cardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cards.
     */
    cursor?: cardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cards.
     */
    skip?: number
    distinct?: CardsScalarFieldEnum | CardsScalarFieldEnum[]
  }

  /**
   * cards create
   */
  export type cardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsInclude<ExtArgs> | null
    /**
     * The data needed to create a cards.
     */
    data: XOR<cardsCreateInput, cardsUncheckedCreateInput>
  }

  /**
   * cards createMany
   */
  export type cardsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cards.
     */
    data: cardsCreateManyInput | cardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cards createManyAndReturn
   */
  export type cardsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * The data used to create many cards.
     */
    data: cardsCreateManyInput | cardsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cards update
   */
  export type cardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsInclude<ExtArgs> | null
    /**
     * The data needed to update a cards.
     */
    data: XOR<cardsUpdateInput, cardsUncheckedUpdateInput>
    /**
     * Choose, which cards to update.
     */
    where: cardsWhereUniqueInput
  }

  /**
   * cards updateMany
   */
  export type cardsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cards.
     */
    data: XOR<cardsUpdateManyMutationInput, cardsUncheckedUpdateManyInput>
    /**
     * Filter which cards to update
     */
    where?: cardsWhereInput
    /**
     * Limit how many cards to update.
     */
    limit?: number
  }

  /**
   * cards updateManyAndReturn
   */
  export type cardsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * The data used to update cards.
     */
    data: XOR<cardsUpdateManyMutationInput, cardsUncheckedUpdateManyInput>
    /**
     * Filter which cards to update
     */
    where?: cardsWhereInput
    /**
     * Limit how many cards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cards upsert
   */
  export type cardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsInclude<ExtArgs> | null
    /**
     * The filter to search for the cards to update in case it exists.
     */
    where: cardsWhereUniqueInput
    /**
     * In case the cards found by the `where` argument doesn't exist, create a new cards with this data.
     */
    create: XOR<cardsCreateInput, cardsUncheckedCreateInput>
    /**
     * In case the cards was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cardsUpdateInput, cardsUncheckedUpdateInput>
  }

  /**
   * cards delete
   */
  export type cardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsInclude<ExtArgs> | null
    /**
     * Filter which cards to delete.
     */
    where: cardsWhereUniqueInput
  }

  /**
   * cards deleteMany
   */
  export type cardsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cards to delete
     */
    where?: cardsWhereInput
    /**
     * Limit how many cards to delete.
     */
    limit?: number
  }

  /**
   * cards.reader_logs
   */
  export type cards$reader_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsInclude<ExtArgs> | null
    where?: reader_logsWhereInput
    orderBy?: reader_logsOrderByWithRelationInput | reader_logsOrderByWithRelationInput[]
    cursor?: reader_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reader_logsScalarFieldEnum | Reader_logsScalarFieldEnum[]
  }

  /**
   * cards without action
   */
  export type cardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards
     */
    select?: cardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards
     */
    omit?: cardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardsInclude<ExtArgs> | null
  }


  /**
   * Model reader_device
   */

  export type AggregateReader_device = {
    _count: Reader_deviceCountAggregateOutputType | null
    _min: Reader_deviceMinAggregateOutputType | null
    _max: Reader_deviceMaxAggregateOutputType | null
  }

  export type Reader_deviceMinAggregateOutputType = {
    id: string | null
    userID: string | null
    readerDeviceName: string | null
    DeviceUUID: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Reader_deviceMaxAggregateOutputType = {
    id: string | null
    userID: string | null
    readerDeviceName: string | null
    DeviceUUID: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Reader_deviceCountAggregateOutputType = {
    id: number
    userID: number
    readerDeviceName: number
    DeviceUUID: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Reader_deviceMinAggregateInputType = {
    id?: true
    userID?: true
    readerDeviceName?: true
    DeviceUUID?: true
    created_at?: true
    updated_at?: true
  }

  export type Reader_deviceMaxAggregateInputType = {
    id?: true
    userID?: true
    readerDeviceName?: true
    DeviceUUID?: true
    created_at?: true
    updated_at?: true
  }

  export type Reader_deviceCountAggregateInputType = {
    id?: true
    userID?: true
    readerDeviceName?: true
    DeviceUUID?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Reader_deviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reader_device to aggregate.
     */
    where?: reader_deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reader_devices to fetch.
     */
    orderBy?: reader_deviceOrderByWithRelationInput | reader_deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reader_deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reader_devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reader_devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reader_devices
    **/
    _count?: true | Reader_deviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reader_deviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reader_deviceMaxAggregateInputType
  }

  export type GetReader_deviceAggregateType<T extends Reader_deviceAggregateArgs> = {
        [P in keyof T & keyof AggregateReader_device]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReader_device[P]>
      : GetScalarType<T[P], AggregateReader_device[P]>
  }




  export type reader_deviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reader_deviceWhereInput
    orderBy?: reader_deviceOrderByWithAggregationInput | reader_deviceOrderByWithAggregationInput[]
    by: Reader_deviceScalarFieldEnum[] | Reader_deviceScalarFieldEnum
    having?: reader_deviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reader_deviceCountAggregateInputType | true
    _min?: Reader_deviceMinAggregateInputType
    _max?: Reader_deviceMaxAggregateInputType
  }

  export type Reader_deviceGroupByOutputType = {
    id: string
    userID: string
    readerDeviceName: string
    DeviceUUID: string
    created_at: Date
    updated_at: Date
    _count: Reader_deviceCountAggregateOutputType | null
    _min: Reader_deviceMinAggregateOutputType | null
    _max: Reader_deviceMaxAggregateOutputType | null
  }

  type GetReader_deviceGroupByPayload<T extends reader_deviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reader_deviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reader_deviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reader_deviceGroupByOutputType[P]>
            : GetScalarType<T[P], Reader_deviceGroupByOutputType[P]>
        }
      >
    >


  export type reader_deviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    readerDeviceName?: boolean
    DeviceUUID?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    reader_logs?: boolean | reader_device$reader_logsArgs<ExtArgs>
    _count?: boolean | Reader_deviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reader_device"]>

  export type reader_deviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    readerDeviceName?: boolean
    DeviceUUID?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reader_device"]>

  export type reader_deviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    readerDeviceName?: boolean
    DeviceUUID?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reader_device"]>

  export type reader_deviceSelectScalar = {
    id?: boolean
    userID?: boolean
    readerDeviceName?: boolean
    DeviceUUID?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type reader_deviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userID" | "readerDeviceName" | "DeviceUUID" | "created_at" | "updated_at", ExtArgs["result"]["reader_device"]>
  export type reader_deviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    reader_logs?: boolean | reader_device$reader_logsArgs<ExtArgs>
    _count?: boolean | Reader_deviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type reader_deviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type reader_deviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $reader_devicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reader_device"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      reader_logs: Prisma.$reader_logsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userID: string
      readerDeviceName: string
      DeviceUUID: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["reader_device"]>
    composites: {}
  }

  type reader_deviceGetPayload<S extends boolean | null | undefined | reader_deviceDefaultArgs> = $Result.GetResult<Prisma.$reader_devicePayload, S>

  type reader_deviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reader_deviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Reader_deviceCountAggregateInputType | true
    }

  export interface reader_deviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reader_device'], meta: { name: 'reader_device' } }
    /**
     * Find zero or one Reader_device that matches the filter.
     * @param {reader_deviceFindUniqueArgs} args - Arguments to find a Reader_device
     * @example
     * // Get one Reader_device
     * const reader_device = await prisma.reader_device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reader_deviceFindUniqueArgs>(args: SelectSubset<T, reader_deviceFindUniqueArgs<ExtArgs>>): Prisma__reader_deviceClient<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reader_device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reader_deviceFindUniqueOrThrowArgs} args - Arguments to find a Reader_device
     * @example
     * // Get one Reader_device
     * const reader_device = await prisma.reader_device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reader_deviceFindUniqueOrThrowArgs>(args: SelectSubset<T, reader_deviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reader_deviceClient<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reader_device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reader_deviceFindFirstArgs} args - Arguments to find a Reader_device
     * @example
     * // Get one Reader_device
     * const reader_device = await prisma.reader_device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reader_deviceFindFirstArgs>(args?: SelectSubset<T, reader_deviceFindFirstArgs<ExtArgs>>): Prisma__reader_deviceClient<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reader_device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reader_deviceFindFirstOrThrowArgs} args - Arguments to find a Reader_device
     * @example
     * // Get one Reader_device
     * const reader_device = await prisma.reader_device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reader_deviceFindFirstOrThrowArgs>(args?: SelectSubset<T, reader_deviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__reader_deviceClient<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reader_devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reader_deviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reader_devices
     * const reader_devices = await prisma.reader_device.findMany()
     * 
     * // Get first 10 Reader_devices
     * const reader_devices = await prisma.reader_device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reader_deviceWithIdOnly = await prisma.reader_device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reader_deviceFindManyArgs>(args?: SelectSubset<T, reader_deviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reader_device.
     * @param {reader_deviceCreateArgs} args - Arguments to create a Reader_device.
     * @example
     * // Create one Reader_device
     * const Reader_device = await prisma.reader_device.create({
     *   data: {
     *     // ... data to create a Reader_device
     *   }
     * })
     * 
     */
    create<T extends reader_deviceCreateArgs>(args: SelectSubset<T, reader_deviceCreateArgs<ExtArgs>>): Prisma__reader_deviceClient<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reader_devices.
     * @param {reader_deviceCreateManyArgs} args - Arguments to create many Reader_devices.
     * @example
     * // Create many Reader_devices
     * const reader_device = await prisma.reader_device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reader_deviceCreateManyArgs>(args?: SelectSubset<T, reader_deviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reader_devices and returns the data saved in the database.
     * @param {reader_deviceCreateManyAndReturnArgs} args - Arguments to create many Reader_devices.
     * @example
     * // Create many Reader_devices
     * const reader_device = await prisma.reader_device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reader_devices and only return the `id`
     * const reader_deviceWithIdOnly = await prisma.reader_device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reader_deviceCreateManyAndReturnArgs>(args?: SelectSubset<T, reader_deviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reader_device.
     * @param {reader_deviceDeleteArgs} args - Arguments to delete one Reader_device.
     * @example
     * // Delete one Reader_device
     * const Reader_device = await prisma.reader_device.delete({
     *   where: {
     *     // ... filter to delete one Reader_device
     *   }
     * })
     * 
     */
    delete<T extends reader_deviceDeleteArgs>(args: SelectSubset<T, reader_deviceDeleteArgs<ExtArgs>>): Prisma__reader_deviceClient<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reader_device.
     * @param {reader_deviceUpdateArgs} args - Arguments to update one Reader_device.
     * @example
     * // Update one Reader_device
     * const reader_device = await prisma.reader_device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reader_deviceUpdateArgs>(args: SelectSubset<T, reader_deviceUpdateArgs<ExtArgs>>): Prisma__reader_deviceClient<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reader_devices.
     * @param {reader_deviceDeleteManyArgs} args - Arguments to filter Reader_devices to delete.
     * @example
     * // Delete a few Reader_devices
     * const { count } = await prisma.reader_device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reader_deviceDeleteManyArgs>(args?: SelectSubset<T, reader_deviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reader_devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reader_deviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reader_devices
     * const reader_device = await prisma.reader_device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reader_deviceUpdateManyArgs>(args: SelectSubset<T, reader_deviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reader_devices and returns the data updated in the database.
     * @param {reader_deviceUpdateManyAndReturnArgs} args - Arguments to update many Reader_devices.
     * @example
     * // Update many Reader_devices
     * const reader_device = await prisma.reader_device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reader_devices and only return the `id`
     * const reader_deviceWithIdOnly = await prisma.reader_device.updateManyAndReturn({
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
    updateManyAndReturn<T extends reader_deviceUpdateManyAndReturnArgs>(args: SelectSubset<T, reader_deviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reader_device.
     * @param {reader_deviceUpsertArgs} args - Arguments to update or create a Reader_device.
     * @example
     * // Update or create a Reader_device
     * const reader_device = await prisma.reader_device.upsert({
     *   create: {
     *     // ... data to create a Reader_device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reader_device we want to update
     *   }
     * })
     */
    upsert<T extends reader_deviceUpsertArgs>(args: SelectSubset<T, reader_deviceUpsertArgs<ExtArgs>>): Prisma__reader_deviceClient<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reader_devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reader_deviceCountArgs} args - Arguments to filter Reader_devices to count.
     * @example
     * // Count the number of Reader_devices
     * const count = await prisma.reader_device.count({
     *   where: {
     *     // ... the filter for the Reader_devices we want to count
     *   }
     * })
    **/
    count<T extends reader_deviceCountArgs>(
      args?: Subset<T, reader_deviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reader_deviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reader_device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reader_deviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Reader_deviceAggregateArgs>(args: Subset<T, Reader_deviceAggregateArgs>): Prisma.PrismaPromise<GetReader_deviceAggregateType<T>>

    /**
     * Group by Reader_device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reader_deviceGroupByArgs} args - Group by arguments.
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
      T extends reader_deviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reader_deviceGroupByArgs['orderBy'] }
        : { orderBy?: reader_deviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reader_deviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReader_deviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reader_device model
   */
  readonly fields: reader_deviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reader_device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reader_deviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reader_logs<T extends reader_device$reader_logsArgs<ExtArgs> = {}>(args?: Subset<T, reader_device$reader_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the reader_device model
   */
  interface reader_deviceFieldRefs {
    readonly id: FieldRef<"reader_device", 'String'>
    readonly userID: FieldRef<"reader_device", 'String'>
    readonly readerDeviceName: FieldRef<"reader_device", 'String'>
    readonly DeviceUUID: FieldRef<"reader_device", 'String'>
    readonly created_at: FieldRef<"reader_device", 'DateTime'>
    readonly updated_at: FieldRef<"reader_device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reader_device findUnique
   */
  export type reader_deviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceInclude<ExtArgs> | null
    /**
     * Filter, which reader_device to fetch.
     */
    where: reader_deviceWhereUniqueInput
  }

  /**
   * reader_device findUniqueOrThrow
   */
  export type reader_deviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceInclude<ExtArgs> | null
    /**
     * Filter, which reader_device to fetch.
     */
    where: reader_deviceWhereUniqueInput
  }

  /**
   * reader_device findFirst
   */
  export type reader_deviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceInclude<ExtArgs> | null
    /**
     * Filter, which reader_device to fetch.
     */
    where?: reader_deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reader_devices to fetch.
     */
    orderBy?: reader_deviceOrderByWithRelationInput | reader_deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reader_devices.
     */
    cursor?: reader_deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reader_devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reader_devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reader_devices.
     */
    distinct?: Reader_deviceScalarFieldEnum | Reader_deviceScalarFieldEnum[]
  }

  /**
   * reader_device findFirstOrThrow
   */
  export type reader_deviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceInclude<ExtArgs> | null
    /**
     * Filter, which reader_device to fetch.
     */
    where?: reader_deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reader_devices to fetch.
     */
    orderBy?: reader_deviceOrderByWithRelationInput | reader_deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reader_devices.
     */
    cursor?: reader_deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reader_devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reader_devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reader_devices.
     */
    distinct?: Reader_deviceScalarFieldEnum | Reader_deviceScalarFieldEnum[]
  }

  /**
   * reader_device findMany
   */
  export type reader_deviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceInclude<ExtArgs> | null
    /**
     * Filter, which reader_devices to fetch.
     */
    where?: reader_deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reader_devices to fetch.
     */
    orderBy?: reader_deviceOrderByWithRelationInput | reader_deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reader_devices.
     */
    cursor?: reader_deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reader_devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reader_devices.
     */
    skip?: number
    distinct?: Reader_deviceScalarFieldEnum | Reader_deviceScalarFieldEnum[]
  }

  /**
   * reader_device create
   */
  export type reader_deviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceInclude<ExtArgs> | null
    /**
     * The data needed to create a reader_device.
     */
    data: XOR<reader_deviceCreateInput, reader_deviceUncheckedCreateInput>
  }

  /**
   * reader_device createMany
   */
  export type reader_deviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reader_devices.
     */
    data: reader_deviceCreateManyInput | reader_deviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reader_device createManyAndReturn
   */
  export type reader_deviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * The data used to create many reader_devices.
     */
    data: reader_deviceCreateManyInput | reader_deviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reader_device update
   */
  export type reader_deviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceInclude<ExtArgs> | null
    /**
     * The data needed to update a reader_device.
     */
    data: XOR<reader_deviceUpdateInput, reader_deviceUncheckedUpdateInput>
    /**
     * Choose, which reader_device to update.
     */
    where: reader_deviceWhereUniqueInput
  }

  /**
   * reader_device updateMany
   */
  export type reader_deviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reader_devices.
     */
    data: XOR<reader_deviceUpdateManyMutationInput, reader_deviceUncheckedUpdateManyInput>
    /**
     * Filter which reader_devices to update
     */
    where?: reader_deviceWhereInput
    /**
     * Limit how many reader_devices to update.
     */
    limit?: number
  }

  /**
   * reader_device updateManyAndReturn
   */
  export type reader_deviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * The data used to update reader_devices.
     */
    data: XOR<reader_deviceUpdateManyMutationInput, reader_deviceUncheckedUpdateManyInput>
    /**
     * Filter which reader_devices to update
     */
    where?: reader_deviceWhereInput
    /**
     * Limit how many reader_devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reader_device upsert
   */
  export type reader_deviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceInclude<ExtArgs> | null
    /**
     * The filter to search for the reader_device to update in case it exists.
     */
    where: reader_deviceWhereUniqueInput
    /**
     * In case the reader_device found by the `where` argument doesn't exist, create a new reader_device with this data.
     */
    create: XOR<reader_deviceCreateInput, reader_deviceUncheckedCreateInput>
    /**
     * In case the reader_device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reader_deviceUpdateInput, reader_deviceUncheckedUpdateInput>
  }

  /**
   * reader_device delete
   */
  export type reader_deviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceInclude<ExtArgs> | null
    /**
     * Filter which reader_device to delete.
     */
    where: reader_deviceWhereUniqueInput
  }

  /**
   * reader_device deleteMany
   */
  export type reader_deviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reader_devices to delete
     */
    where?: reader_deviceWhereInput
    /**
     * Limit how many reader_devices to delete.
     */
    limit?: number
  }

  /**
   * reader_device.reader_logs
   */
  export type reader_device$reader_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsInclude<ExtArgs> | null
    where?: reader_logsWhereInput
    orderBy?: reader_logsOrderByWithRelationInput | reader_logsOrderByWithRelationInput[]
    cursor?: reader_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reader_logsScalarFieldEnum | Reader_logsScalarFieldEnum[]
  }

  /**
   * reader_device without action
   */
  export type reader_deviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_device
     */
    select?: reader_deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_device
     */
    omit?: reader_deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_deviceInclude<ExtArgs> | null
  }


  /**
   * Model reader_logs
   */

  export type AggregateReader_logs = {
    _count: Reader_logsCountAggregateOutputType | null
    _min: Reader_logsMinAggregateOutputType | null
    _max: Reader_logsMaxAggregateOutputType | null
  }

  export type Reader_logsMinAggregateOutputType = {
    id: string | null
    cardID: string | null
    reader_deviceID: string | null
    status: boolean | null
    readDate: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Reader_logsMaxAggregateOutputType = {
    id: string | null
    cardID: string | null
    reader_deviceID: string | null
    status: boolean | null
    readDate: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Reader_logsCountAggregateOutputType = {
    id: number
    cardID: number
    reader_deviceID: number
    status: number
    readDate: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Reader_logsMinAggregateInputType = {
    id?: true
    cardID?: true
    reader_deviceID?: true
    status?: true
    readDate?: true
    created_at?: true
    updated_at?: true
  }

  export type Reader_logsMaxAggregateInputType = {
    id?: true
    cardID?: true
    reader_deviceID?: true
    status?: true
    readDate?: true
    created_at?: true
    updated_at?: true
  }

  export type Reader_logsCountAggregateInputType = {
    id?: true
    cardID?: true
    reader_deviceID?: true
    status?: true
    readDate?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Reader_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reader_logs to aggregate.
     */
    where?: reader_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reader_logs to fetch.
     */
    orderBy?: reader_logsOrderByWithRelationInput | reader_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reader_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reader_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reader_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reader_logs
    **/
    _count?: true | Reader_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reader_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reader_logsMaxAggregateInputType
  }

  export type GetReader_logsAggregateType<T extends Reader_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateReader_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReader_logs[P]>
      : GetScalarType<T[P], AggregateReader_logs[P]>
  }




  export type reader_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reader_logsWhereInput
    orderBy?: reader_logsOrderByWithAggregationInput | reader_logsOrderByWithAggregationInput[]
    by: Reader_logsScalarFieldEnum[] | Reader_logsScalarFieldEnum
    having?: reader_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reader_logsCountAggregateInputType | true
    _min?: Reader_logsMinAggregateInputType
    _max?: Reader_logsMaxAggregateInputType
  }

  export type Reader_logsGroupByOutputType = {
    id: string
    cardID: string
    reader_deviceID: string
    status: boolean
    readDate: Date
    created_at: Date
    updated_at: Date
    _count: Reader_logsCountAggregateOutputType | null
    _min: Reader_logsMinAggregateOutputType | null
    _max: Reader_logsMaxAggregateOutputType | null
  }

  type GetReader_logsGroupByPayload<T extends reader_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reader_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reader_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reader_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Reader_logsGroupByOutputType[P]>
        }
      >
    >


  export type reader_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardID?: boolean
    reader_deviceID?: boolean
    status?: boolean
    readDate?: boolean
    created_at?: boolean
    updated_at?: boolean
    cards?: boolean | cardsDefaultArgs<ExtArgs>
    reader_device?: boolean | reader_deviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reader_logs"]>

  export type reader_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardID?: boolean
    reader_deviceID?: boolean
    status?: boolean
    readDate?: boolean
    created_at?: boolean
    updated_at?: boolean
    cards?: boolean | cardsDefaultArgs<ExtArgs>
    reader_device?: boolean | reader_deviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reader_logs"]>

  export type reader_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardID?: boolean
    reader_deviceID?: boolean
    status?: boolean
    readDate?: boolean
    created_at?: boolean
    updated_at?: boolean
    cards?: boolean | cardsDefaultArgs<ExtArgs>
    reader_device?: boolean | reader_deviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reader_logs"]>

  export type reader_logsSelectScalar = {
    id?: boolean
    cardID?: boolean
    reader_deviceID?: boolean
    status?: boolean
    readDate?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type reader_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardID" | "reader_deviceID" | "status" | "readDate" | "created_at" | "updated_at", ExtArgs["result"]["reader_logs"]>
  export type reader_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | cardsDefaultArgs<ExtArgs>
    reader_device?: boolean | reader_deviceDefaultArgs<ExtArgs>
  }
  export type reader_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | cardsDefaultArgs<ExtArgs>
    reader_device?: boolean | reader_deviceDefaultArgs<ExtArgs>
  }
  export type reader_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | cardsDefaultArgs<ExtArgs>
    reader_device?: boolean | reader_deviceDefaultArgs<ExtArgs>
  }

  export type $reader_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reader_logs"
    objects: {
      cards: Prisma.$cardsPayload<ExtArgs>
      reader_device: Prisma.$reader_devicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardID: string
      reader_deviceID: string
      status: boolean
      readDate: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["reader_logs"]>
    composites: {}
  }

  type reader_logsGetPayload<S extends boolean | null | undefined | reader_logsDefaultArgs> = $Result.GetResult<Prisma.$reader_logsPayload, S>

  type reader_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reader_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Reader_logsCountAggregateInputType | true
    }

  export interface reader_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reader_logs'], meta: { name: 'reader_logs' } }
    /**
     * Find zero or one Reader_logs that matches the filter.
     * @param {reader_logsFindUniqueArgs} args - Arguments to find a Reader_logs
     * @example
     * // Get one Reader_logs
     * const reader_logs = await prisma.reader_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reader_logsFindUniqueArgs>(args: SelectSubset<T, reader_logsFindUniqueArgs<ExtArgs>>): Prisma__reader_logsClient<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reader_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reader_logsFindUniqueOrThrowArgs} args - Arguments to find a Reader_logs
     * @example
     * // Get one Reader_logs
     * const reader_logs = await prisma.reader_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reader_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, reader_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reader_logsClient<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reader_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reader_logsFindFirstArgs} args - Arguments to find a Reader_logs
     * @example
     * // Get one Reader_logs
     * const reader_logs = await prisma.reader_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reader_logsFindFirstArgs>(args?: SelectSubset<T, reader_logsFindFirstArgs<ExtArgs>>): Prisma__reader_logsClient<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reader_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reader_logsFindFirstOrThrowArgs} args - Arguments to find a Reader_logs
     * @example
     * // Get one Reader_logs
     * const reader_logs = await prisma.reader_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reader_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, reader_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reader_logsClient<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reader_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reader_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reader_logs
     * const reader_logs = await prisma.reader_logs.findMany()
     * 
     * // Get first 10 Reader_logs
     * const reader_logs = await prisma.reader_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reader_logsWithIdOnly = await prisma.reader_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reader_logsFindManyArgs>(args?: SelectSubset<T, reader_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reader_logs.
     * @param {reader_logsCreateArgs} args - Arguments to create a Reader_logs.
     * @example
     * // Create one Reader_logs
     * const Reader_logs = await prisma.reader_logs.create({
     *   data: {
     *     // ... data to create a Reader_logs
     *   }
     * })
     * 
     */
    create<T extends reader_logsCreateArgs>(args: SelectSubset<T, reader_logsCreateArgs<ExtArgs>>): Prisma__reader_logsClient<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reader_logs.
     * @param {reader_logsCreateManyArgs} args - Arguments to create many Reader_logs.
     * @example
     * // Create many Reader_logs
     * const reader_logs = await prisma.reader_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reader_logsCreateManyArgs>(args?: SelectSubset<T, reader_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reader_logs and returns the data saved in the database.
     * @param {reader_logsCreateManyAndReturnArgs} args - Arguments to create many Reader_logs.
     * @example
     * // Create many Reader_logs
     * const reader_logs = await prisma.reader_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reader_logs and only return the `id`
     * const reader_logsWithIdOnly = await prisma.reader_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reader_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, reader_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reader_logs.
     * @param {reader_logsDeleteArgs} args - Arguments to delete one Reader_logs.
     * @example
     * // Delete one Reader_logs
     * const Reader_logs = await prisma.reader_logs.delete({
     *   where: {
     *     // ... filter to delete one Reader_logs
     *   }
     * })
     * 
     */
    delete<T extends reader_logsDeleteArgs>(args: SelectSubset<T, reader_logsDeleteArgs<ExtArgs>>): Prisma__reader_logsClient<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reader_logs.
     * @param {reader_logsUpdateArgs} args - Arguments to update one Reader_logs.
     * @example
     * // Update one Reader_logs
     * const reader_logs = await prisma.reader_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reader_logsUpdateArgs>(args: SelectSubset<T, reader_logsUpdateArgs<ExtArgs>>): Prisma__reader_logsClient<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reader_logs.
     * @param {reader_logsDeleteManyArgs} args - Arguments to filter Reader_logs to delete.
     * @example
     * // Delete a few Reader_logs
     * const { count } = await prisma.reader_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reader_logsDeleteManyArgs>(args?: SelectSubset<T, reader_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reader_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reader_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reader_logs
     * const reader_logs = await prisma.reader_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reader_logsUpdateManyArgs>(args: SelectSubset<T, reader_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reader_logs and returns the data updated in the database.
     * @param {reader_logsUpdateManyAndReturnArgs} args - Arguments to update many Reader_logs.
     * @example
     * // Update many Reader_logs
     * const reader_logs = await prisma.reader_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reader_logs and only return the `id`
     * const reader_logsWithIdOnly = await prisma.reader_logs.updateManyAndReturn({
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
    updateManyAndReturn<T extends reader_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, reader_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reader_logs.
     * @param {reader_logsUpsertArgs} args - Arguments to update or create a Reader_logs.
     * @example
     * // Update or create a Reader_logs
     * const reader_logs = await prisma.reader_logs.upsert({
     *   create: {
     *     // ... data to create a Reader_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reader_logs we want to update
     *   }
     * })
     */
    upsert<T extends reader_logsUpsertArgs>(args: SelectSubset<T, reader_logsUpsertArgs<ExtArgs>>): Prisma__reader_logsClient<$Result.GetResult<Prisma.$reader_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reader_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reader_logsCountArgs} args - Arguments to filter Reader_logs to count.
     * @example
     * // Count the number of Reader_logs
     * const count = await prisma.reader_logs.count({
     *   where: {
     *     // ... the filter for the Reader_logs we want to count
     *   }
     * })
    **/
    count<T extends reader_logsCountArgs>(
      args?: Subset<T, reader_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reader_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reader_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reader_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Reader_logsAggregateArgs>(args: Subset<T, Reader_logsAggregateArgs>): Prisma.PrismaPromise<GetReader_logsAggregateType<T>>

    /**
     * Group by Reader_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reader_logsGroupByArgs} args - Group by arguments.
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
      T extends reader_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reader_logsGroupByArgs['orderBy'] }
        : { orderBy?: reader_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reader_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReader_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reader_logs model
   */
  readonly fields: reader_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reader_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reader_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cards<T extends cardsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cardsDefaultArgs<ExtArgs>>): Prisma__cardsClient<$Result.GetResult<Prisma.$cardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reader_device<T extends reader_deviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reader_deviceDefaultArgs<ExtArgs>>): Prisma__reader_deviceClient<$Result.GetResult<Prisma.$reader_devicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the reader_logs model
   */
  interface reader_logsFieldRefs {
    readonly id: FieldRef<"reader_logs", 'String'>
    readonly cardID: FieldRef<"reader_logs", 'String'>
    readonly reader_deviceID: FieldRef<"reader_logs", 'String'>
    readonly status: FieldRef<"reader_logs", 'Boolean'>
    readonly readDate: FieldRef<"reader_logs", 'DateTime'>
    readonly created_at: FieldRef<"reader_logs", 'DateTime'>
    readonly updated_at: FieldRef<"reader_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reader_logs findUnique
   */
  export type reader_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsInclude<ExtArgs> | null
    /**
     * Filter, which reader_logs to fetch.
     */
    where: reader_logsWhereUniqueInput
  }

  /**
   * reader_logs findUniqueOrThrow
   */
  export type reader_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsInclude<ExtArgs> | null
    /**
     * Filter, which reader_logs to fetch.
     */
    where: reader_logsWhereUniqueInput
  }

  /**
   * reader_logs findFirst
   */
  export type reader_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsInclude<ExtArgs> | null
    /**
     * Filter, which reader_logs to fetch.
     */
    where?: reader_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reader_logs to fetch.
     */
    orderBy?: reader_logsOrderByWithRelationInput | reader_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reader_logs.
     */
    cursor?: reader_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reader_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reader_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reader_logs.
     */
    distinct?: Reader_logsScalarFieldEnum | Reader_logsScalarFieldEnum[]
  }

  /**
   * reader_logs findFirstOrThrow
   */
  export type reader_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsInclude<ExtArgs> | null
    /**
     * Filter, which reader_logs to fetch.
     */
    where?: reader_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reader_logs to fetch.
     */
    orderBy?: reader_logsOrderByWithRelationInput | reader_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reader_logs.
     */
    cursor?: reader_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reader_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reader_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reader_logs.
     */
    distinct?: Reader_logsScalarFieldEnum | Reader_logsScalarFieldEnum[]
  }

  /**
   * reader_logs findMany
   */
  export type reader_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsInclude<ExtArgs> | null
    /**
     * Filter, which reader_logs to fetch.
     */
    where?: reader_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reader_logs to fetch.
     */
    orderBy?: reader_logsOrderByWithRelationInput | reader_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reader_logs.
     */
    cursor?: reader_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reader_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reader_logs.
     */
    skip?: number
    distinct?: Reader_logsScalarFieldEnum | Reader_logsScalarFieldEnum[]
  }

  /**
   * reader_logs create
   */
  export type reader_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a reader_logs.
     */
    data: XOR<reader_logsCreateInput, reader_logsUncheckedCreateInput>
  }

  /**
   * reader_logs createMany
   */
  export type reader_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reader_logs.
     */
    data: reader_logsCreateManyInput | reader_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reader_logs createManyAndReturn
   */
  export type reader_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * The data used to create many reader_logs.
     */
    data: reader_logsCreateManyInput | reader_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reader_logs update
   */
  export type reader_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a reader_logs.
     */
    data: XOR<reader_logsUpdateInput, reader_logsUncheckedUpdateInput>
    /**
     * Choose, which reader_logs to update.
     */
    where: reader_logsWhereUniqueInput
  }

  /**
   * reader_logs updateMany
   */
  export type reader_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reader_logs.
     */
    data: XOR<reader_logsUpdateManyMutationInput, reader_logsUncheckedUpdateManyInput>
    /**
     * Filter which reader_logs to update
     */
    where?: reader_logsWhereInput
    /**
     * Limit how many reader_logs to update.
     */
    limit?: number
  }

  /**
   * reader_logs updateManyAndReturn
   */
  export type reader_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * The data used to update reader_logs.
     */
    data: XOR<reader_logsUpdateManyMutationInput, reader_logsUncheckedUpdateManyInput>
    /**
     * Filter which reader_logs to update
     */
    where?: reader_logsWhereInput
    /**
     * Limit how many reader_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reader_logs upsert
   */
  export type reader_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the reader_logs to update in case it exists.
     */
    where: reader_logsWhereUniqueInput
    /**
     * In case the reader_logs found by the `where` argument doesn't exist, create a new reader_logs with this data.
     */
    create: XOR<reader_logsCreateInput, reader_logsUncheckedCreateInput>
    /**
     * In case the reader_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reader_logsUpdateInput, reader_logsUncheckedUpdateInput>
  }

  /**
   * reader_logs delete
   */
  export type reader_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsInclude<ExtArgs> | null
    /**
     * Filter which reader_logs to delete.
     */
    where: reader_logsWhereUniqueInput
  }

  /**
   * reader_logs deleteMany
   */
  export type reader_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reader_logs to delete
     */
    where?: reader_logsWhereInput
    /**
     * Limit how many reader_logs to delete.
     */
    limit?: number
  }

  /**
   * reader_logs without action
   */
  export type reader_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reader_logs
     */
    select?: reader_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reader_logs
     */
    omit?: reader_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reader_logsInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    WebUUID: 'WebUUID',
    phoneNo: 'phoneNo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CardsScalarFieldEnum: {
    id: 'id',
    userID: 'userID',
    cardName: 'cardName',
    cardUUID: 'cardUUID',
    cardType: 'cardType',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CardsScalarFieldEnum = (typeof CardsScalarFieldEnum)[keyof typeof CardsScalarFieldEnum]


  export const Reader_deviceScalarFieldEnum: {
    id: 'id',
    userID: 'userID',
    readerDeviceName: 'readerDeviceName',
    DeviceUUID: 'DeviceUUID',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Reader_deviceScalarFieldEnum = (typeof Reader_deviceScalarFieldEnum)[keyof typeof Reader_deviceScalarFieldEnum]


  export const Reader_logsScalarFieldEnum: {
    id: 'id',
    cardID: 'cardID',
    reader_deviceID: 'reader_deviceID',
    status: 'status',
    readDate: 'readDate',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Reader_logsScalarFieldEnum = (typeof Reader_logsScalarFieldEnum)[keyof typeof Reader_logsScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: UuidFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    name?: StringNullableFilter<"admin"> | string | null
    role?: EnumRoleFilter<"admin"> | $Enums.Role
    created_at?: DateTimeFilter<"admin"> | Date | string
    updated_at?: DateTimeFilter<"admin"> | Date | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    password?: StringFilter<"admin"> | string
    name?: StringNullableFilter<"admin"> | string | null
    role?: EnumRoleFilter<"admin"> | $Enums.Role
    created_at?: DateTimeFilter<"admin"> | Date | string
    updated_at?: DateTimeFilter<"admin"> | Date | string
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
    name?: StringNullableWithAggregatesFilter<"admin"> | string | null
    role?: EnumRoleWithAggregatesFilter<"admin"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"admin"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"admin"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    username?: StringFilter<"users"> | string
    WebUUID?: StringFilter<"users"> | string
    phoneNo?: IntFilter<"users"> | number
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    cards?: CardsListRelationFilter
    reader_device?: Reader_deviceListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    WebUUID?: SortOrder
    phoneNo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cards?: cardsOrderByRelationAggregateInput
    reader_device?: reader_deviceOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    WebUUID?: StringFilter<"users"> | string
    phoneNo?: IntFilter<"users"> | number
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    cards?: CardsListRelationFilter
    reader_device?: Reader_deviceListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    WebUUID?: SortOrder
    phoneNo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    WebUUID?: StringWithAggregatesFilter<"users"> | string
    phoneNo?: IntWithAggregatesFilter<"users"> | number
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type cardsWhereInput = {
    AND?: cardsWhereInput | cardsWhereInput[]
    OR?: cardsWhereInput[]
    NOT?: cardsWhereInput | cardsWhereInput[]
    id?: UuidFilter<"cards"> | string
    userID?: UuidFilter<"cards"> | string
    cardName?: IntFilter<"cards"> | number
    cardUUID?: StringFilter<"cards"> | string
    cardType?: StringFilter<"cards"> | string
    status?: BoolFilter<"cards"> | boolean
    created_at?: DateTimeFilter<"cards"> | Date | string
    updated_at?: DateTimeFilter<"cards"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    reader_logs?: Reader_logsListRelationFilter
  }

  export type cardsOrderByWithRelationInput = {
    id?: SortOrder
    userID?: SortOrder
    cardName?: SortOrder
    cardUUID?: SortOrder
    cardType?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: usersOrderByWithRelationInput
    reader_logs?: reader_logsOrderByRelationAggregateInput
  }

  export type cardsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cardsWhereInput | cardsWhereInput[]
    OR?: cardsWhereInput[]
    NOT?: cardsWhereInput | cardsWhereInput[]
    userID?: UuidFilter<"cards"> | string
    cardName?: IntFilter<"cards"> | number
    cardUUID?: StringFilter<"cards"> | string
    cardType?: StringFilter<"cards"> | string
    status?: BoolFilter<"cards"> | boolean
    created_at?: DateTimeFilter<"cards"> | Date | string
    updated_at?: DateTimeFilter<"cards"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    reader_logs?: Reader_logsListRelationFilter
  }, "id">

  export type cardsOrderByWithAggregationInput = {
    id?: SortOrder
    userID?: SortOrder
    cardName?: SortOrder
    cardUUID?: SortOrder
    cardType?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: cardsCountOrderByAggregateInput
    _avg?: cardsAvgOrderByAggregateInput
    _max?: cardsMaxOrderByAggregateInput
    _min?: cardsMinOrderByAggregateInput
    _sum?: cardsSumOrderByAggregateInput
  }

  export type cardsScalarWhereWithAggregatesInput = {
    AND?: cardsScalarWhereWithAggregatesInput | cardsScalarWhereWithAggregatesInput[]
    OR?: cardsScalarWhereWithAggregatesInput[]
    NOT?: cardsScalarWhereWithAggregatesInput | cardsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"cards"> | string
    userID?: UuidWithAggregatesFilter<"cards"> | string
    cardName?: IntWithAggregatesFilter<"cards"> | number
    cardUUID?: StringWithAggregatesFilter<"cards"> | string
    cardType?: StringWithAggregatesFilter<"cards"> | string
    status?: BoolWithAggregatesFilter<"cards"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"cards"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"cards"> | Date | string
  }

  export type reader_deviceWhereInput = {
    AND?: reader_deviceWhereInput | reader_deviceWhereInput[]
    OR?: reader_deviceWhereInput[]
    NOT?: reader_deviceWhereInput | reader_deviceWhereInput[]
    id?: UuidFilter<"reader_device"> | string
    userID?: UuidFilter<"reader_device"> | string
    readerDeviceName?: StringFilter<"reader_device"> | string
    DeviceUUID?: StringFilter<"reader_device"> | string
    created_at?: DateTimeFilter<"reader_device"> | Date | string
    updated_at?: DateTimeFilter<"reader_device"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    reader_logs?: Reader_logsListRelationFilter
  }

  export type reader_deviceOrderByWithRelationInput = {
    id?: SortOrder
    userID?: SortOrder
    readerDeviceName?: SortOrder
    DeviceUUID?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: usersOrderByWithRelationInput
    reader_logs?: reader_logsOrderByRelationAggregateInput
  }

  export type reader_deviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reader_deviceWhereInput | reader_deviceWhereInput[]
    OR?: reader_deviceWhereInput[]
    NOT?: reader_deviceWhereInput | reader_deviceWhereInput[]
    userID?: UuidFilter<"reader_device"> | string
    readerDeviceName?: StringFilter<"reader_device"> | string
    DeviceUUID?: StringFilter<"reader_device"> | string
    created_at?: DateTimeFilter<"reader_device"> | Date | string
    updated_at?: DateTimeFilter<"reader_device"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    reader_logs?: Reader_logsListRelationFilter
  }, "id">

  export type reader_deviceOrderByWithAggregationInput = {
    id?: SortOrder
    userID?: SortOrder
    readerDeviceName?: SortOrder
    DeviceUUID?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: reader_deviceCountOrderByAggregateInput
    _max?: reader_deviceMaxOrderByAggregateInput
    _min?: reader_deviceMinOrderByAggregateInput
  }

  export type reader_deviceScalarWhereWithAggregatesInput = {
    AND?: reader_deviceScalarWhereWithAggregatesInput | reader_deviceScalarWhereWithAggregatesInput[]
    OR?: reader_deviceScalarWhereWithAggregatesInput[]
    NOT?: reader_deviceScalarWhereWithAggregatesInput | reader_deviceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"reader_device"> | string
    userID?: UuidWithAggregatesFilter<"reader_device"> | string
    readerDeviceName?: StringWithAggregatesFilter<"reader_device"> | string
    DeviceUUID?: StringWithAggregatesFilter<"reader_device"> | string
    created_at?: DateTimeWithAggregatesFilter<"reader_device"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"reader_device"> | Date | string
  }

  export type reader_logsWhereInput = {
    AND?: reader_logsWhereInput | reader_logsWhereInput[]
    OR?: reader_logsWhereInput[]
    NOT?: reader_logsWhereInput | reader_logsWhereInput[]
    id?: UuidFilter<"reader_logs"> | string
    cardID?: UuidFilter<"reader_logs"> | string
    reader_deviceID?: UuidFilter<"reader_logs"> | string
    status?: BoolFilter<"reader_logs"> | boolean
    readDate?: DateTimeFilter<"reader_logs"> | Date | string
    created_at?: DateTimeFilter<"reader_logs"> | Date | string
    updated_at?: DateTimeFilter<"reader_logs"> | Date | string
    cards?: XOR<CardsScalarRelationFilter, cardsWhereInput>
    reader_device?: XOR<Reader_deviceScalarRelationFilter, reader_deviceWhereInput>
  }

  export type reader_logsOrderByWithRelationInput = {
    id?: SortOrder
    cardID?: SortOrder
    reader_deviceID?: SortOrder
    status?: SortOrder
    readDate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cards?: cardsOrderByWithRelationInput
    reader_device?: reader_deviceOrderByWithRelationInput
  }

  export type reader_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reader_logsWhereInput | reader_logsWhereInput[]
    OR?: reader_logsWhereInput[]
    NOT?: reader_logsWhereInput | reader_logsWhereInput[]
    cardID?: UuidFilter<"reader_logs"> | string
    reader_deviceID?: UuidFilter<"reader_logs"> | string
    status?: BoolFilter<"reader_logs"> | boolean
    readDate?: DateTimeFilter<"reader_logs"> | Date | string
    created_at?: DateTimeFilter<"reader_logs"> | Date | string
    updated_at?: DateTimeFilter<"reader_logs"> | Date | string
    cards?: XOR<CardsScalarRelationFilter, cardsWhereInput>
    reader_device?: XOR<Reader_deviceScalarRelationFilter, reader_deviceWhereInput>
  }, "id">

  export type reader_logsOrderByWithAggregationInput = {
    id?: SortOrder
    cardID?: SortOrder
    reader_deviceID?: SortOrder
    status?: SortOrder
    readDate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: reader_logsCountOrderByAggregateInput
    _max?: reader_logsMaxOrderByAggregateInput
    _min?: reader_logsMinOrderByAggregateInput
  }

  export type reader_logsScalarWhereWithAggregatesInput = {
    AND?: reader_logsScalarWhereWithAggregatesInput | reader_logsScalarWhereWithAggregatesInput[]
    OR?: reader_logsScalarWhereWithAggregatesInput[]
    NOT?: reader_logsScalarWhereWithAggregatesInput | reader_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"reader_logs"> | string
    cardID?: UuidWithAggregatesFilter<"reader_logs"> | string
    reader_deviceID?: UuidWithAggregatesFilter<"reader_logs"> | string
    status?: BoolWithAggregatesFilter<"reader_logs"> | boolean
    readDate?: DateTimeWithAggregatesFilter<"reader_logs"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"reader_logs"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"reader_logs"> | Date | string
  }

  export type adminCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type adminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type adminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type adminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id?: string
    username: string
    WebUUID: string
    phoneNo: number
    created_at?: Date | string
    updated_at?: Date | string
    cards?: cardsCreateNestedManyWithoutUsersInput
    reader_device?: reader_deviceCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    username: string
    WebUUID: string
    phoneNo: number
    created_at?: Date | string
    updated_at?: Date | string
    cards?: cardsUncheckedCreateNestedManyWithoutUsersInput
    reader_device?: reader_deviceUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    WebUUID?: StringFieldUpdateOperationsInput | string
    phoneNo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: cardsUpdateManyWithoutUsersNestedInput
    reader_device?: reader_deviceUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    WebUUID?: StringFieldUpdateOperationsInput | string
    phoneNo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: cardsUncheckedUpdateManyWithoutUsersNestedInput
    reader_device?: reader_deviceUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    username: string
    WebUUID: string
    phoneNo: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    WebUUID?: StringFieldUpdateOperationsInput | string
    phoneNo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    WebUUID?: StringFieldUpdateOperationsInput | string
    phoneNo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cardsCreateInput = {
    id?: string
    cardName: number
    cardUUID: string
    cardType: string
    status: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutCardsInput
    reader_logs?: reader_logsCreateNestedManyWithoutCardsInput
  }

  export type cardsUncheckedCreateInput = {
    id?: string
    userID: string
    cardName: number
    cardUUID: string
    cardType: string
    status: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reader_logs?: reader_logsUncheckedCreateNestedManyWithoutCardsInput
  }

  export type cardsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: IntFieldUpdateOperationsInput | number
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutCardsNestedInput
    reader_logs?: reader_logsUpdateManyWithoutCardsNestedInput
  }

  export type cardsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    cardName?: IntFieldUpdateOperationsInput | number
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reader_logs?: reader_logsUncheckedUpdateManyWithoutCardsNestedInput
  }

  export type cardsCreateManyInput = {
    id?: string
    userID: string
    cardName: number
    cardUUID: string
    cardType: string
    status: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cardsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: IntFieldUpdateOperationsInput | number
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cardsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    cardName?: IntFieldUpdateOperationsInput | number
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_deviceCreateInput = {
    id?: string
    readerDeviceName: string
    DeviceUUID: string
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutReader_deviceInput
    reader_logs?: reader_logsCreateNestedManyWithoutReader_deviceInput
  }

  export type reader_deviceUncheckedCreateInput = {
    id?: string
    userID: string
    readerDeviceName: string
    DeviceUUID: string
    created_at?: Date | string
    updated_at?: Date | string
    reader_logs?: reader_logsUncheckedCreateNestedManyWithoutReader_deviceInput
  }

  export type reader_deviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutReader_deviceNestedInput
    reader_logs?: reader_logsUpdateManyWithoutReader_deviceNestedInput
  }

  export type reader_deviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reader_logs?: reader_logsUncheckedUpdateManyWithoutReader_deviceNestedInput
  }

  export type reader_deviceCreateManyInput = {
    id?: string
    userID: string
    readerDeviceName: string
    DeviceUUID: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_deviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_deviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_logsCreateInput = {
    id?: string
    status: boolean
    readDate: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    cards: cardsCreateNestedOneWithoutReader_logsInput
    reader_device: reader_deviceCreateNestedOneWithoutReader_logsInput
  }

  export type reader_logsUncheckedCreateInput = {
    id?: string
    cardID: string
    reader_deviceID: string
    status: boolean
    readDate: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: cardsUpdateOneRequiredWithoutReader_logsNestedInput
    reader_device?: reader_deviceUpdateOneRequiredWithoutReader_logsNestedInput
  }

  export type reader_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: StringFieldUpdateOperationsInput | string
    reader_deviceID?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_logsCreateManyInput = {
    id?: string
    cardID: string
    reader_deviceID: string
    status: boolean
    readDate: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: StringFieldUpdateOperationsInput | string
    reader_deviceID?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type CardsListRelationFilter = {
    every?: cardsWhereInput
    some?: cardsWhereInput
    none?: cardsWhereInput
  }

  export type Reader_deviceListRelationFilter = {
    every?: reader_deviceWhereInput
    some?: reader_deviceWhereInput
    none?: reader_deviceWhereInput
  }

  export type cardsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reader_deviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    WebUUID?: SortOrder
    phoneNo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    phoneNo?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    WebUUID?: SortOrder
    phoneNo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    WebUUID?: SortOrder
    phoneNo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    phoneNo?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type Reader_logsListRelationFilter = {
    every?: reader_logsWhereInput
    some?: reader_logsWhereInput
    none?: reader_logsWhereInput
  }

  export type reader_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cardsCountOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    cardName?: SortOrder
    cardUUID?: SortOrder
    cardType?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cardsAvgOrderByAggregateInput = {
    cardName?: SortOrder
  }

  export type cardsMaxOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    cardName?: SortOrder
    cardUUID?: SortOrder
    cardType?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cardsMinOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    cardName?: SortOrder
    cardUUID?: SortOrder
    cardType?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cardsSumOrderByAggregateInput = {
    cardName?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type reader_deviceCountOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    readerDeviceName?: SortOrder
    DeviceUUID?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reader_deviceMaxOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    readerDeviceName?: SortOrder
    DeviceUUID?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reader_deviceMinOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    readerDeviceName?: SortOrder
    DeviceUUID?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CardsScalarRelationFilter = {
    is?: cardsWhereInput
    isNot?: cardsWhereInput
  }

  export type Reader_deviceScalarRelationFilter = {
    is?: reader_deviceWhereInput
    isNot?: reader_deviceWhereInput
  }

  export type reader_logsCountOrderByAggregateInput = {
    id?: SortOrder
    cardID?: SortOrder
    reader_deviceID?: SortOrder
    status?: SortOrder
    readDate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reader_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    cardID?: SortOrder
    reader_deviceID?: SortOrder
    status?: SortOrder
    readDate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reader_logsMinOrderByAggregateInput = {
    id?: SortOrder
    cardID?: SortOrder
    reader_deviceID?: SortOrder
    status?: SortOrder
    readDate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type cardsCreateNestedManyWithoutUsersInput = {
    create?: XOR<cardsCreateWithoutUsersInput, cardsUncheckedCreateWithoutUsersInput> | cardsCreateWithoutUsersInput[] | cardsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cardsCreateOrConnectWithoutUsersInput | cardsCreateOrConnectWithoutUsersInput[]
    createMany?: cardsCreateManyUsersInputEnvelope
    connect?: cardsWhereUniqueInput | cardsWhereUniqueInput[]
  }

  export type reader_deviceCreateNestedManyWithoutUsersInput = {
    create?: XOR<reader_deviceCreateWithoutUsersInput, reader_deviceUncheckedCreateWithoutUsersInput> | reader_deviceCreateWithoutUsersInput[] | reader_deviceUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reader_deviceCreateOrConnectWithoutUsersInput | reader_deviceCreateOrConnectWithoutUsersInput[]
    createMany?: reader_deviceCreateManyUsersInputEnvelope
    connect?: reader_deviceWhereUniqueInput | reader_deviceWhereUniqueInput[]
  }

  export type cardsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<cardsCreateWithoutUsersInput, cardsUncheckedCreateWithoutUsersInput> | cardsCreateWithoutUsersInput[] | cardsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cardsCreateOrConnectWithoutUsersInput | cardsCreateOrConnectWithoutUsersInput[]
    createMany?: cardsCreateManyUsersInputEnvelope
    connect?: cardsWhereUniqueInput | cardsWhereUniqueInput[]
  }

  export type reader_deviceUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<reader_deviceCreateWithoutUsersInput, reader_deviceUncheckedCreateWithoutUsersInput> | reader_deviceCreateWithoutUsersInput[] | reader_deviceUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reader_deviceCreateOrConnectWithoutUsersInput | reader_deviceCreateOrConnectWithoutUsersInput[]
    createMany?: reader_deviceCreateManyUsersInputEnvelope
    connect?: reader_deviceWhereUniqueInput | reader_deviceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cardsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<cardsCreateWithoutUsersInput, cardsUncheckedCreateWithoutUsersInput> | cardsCreateWithoutUsersInput[] | cardsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cardsCreateOrConnectWithoutUsersInput | cardsCreateOrConnectWithoutUsersInput[]
    upsert?: cardsUpsertWithWhereUniqueWithoutUsersInput | cardsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: cardsCreateManyUsersInputEnvelope
    set?: cardsWhereUniqueInput | cardsWhereUniqueInput[]
    disconnect?: cardsWhereUniqueInput | cardsWhereUniqueInput[]
    delete?: cardsWhereUniqueInput | cardsWhereUniqueInput[]
    connect?: cardsWhereUniqueInput | cardsWhereUniqueInput[]
    update?: cardsUpdateWithWhereUniqueWithoutUsersInput | cardsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: cardsUpdateManyWithWhereWithoutUsersInput | cardsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: cardsScalarWhereInput | cardsScalarWhereInput[]
  }

  export type reader_deviceUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reader_deviceCreateWithoutUsersInput, reader_deviceUncheckedCreateWithoutUsersInput> | reader_deviceCreateWithoutUsersInput[] | reader_deviceUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reader_deviceCreateOrConnectWithoutUsersInput | reader_deviceCreateOrConnectWithoutUsersInput[]
    upsert?: reader_deviceUpsertWithWhereUniqueWithoutUsersInput | reader_deviceUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reader_deviceCreateManyUsersInputEnvelope
    set?: reader_deviceWhereUniqueInput | reader_deviceWhereUniqueInput[]
    disconnect?: reader_deviceWhereUniqueInput | reader_deviceWhereUniqueInput[]
    delete?: reader_deviceWhereUniqueInput | reader_deviceWhereUniqueInput[]
    connect?: reader_deviceWhereUniqueInput | reader_deviceWhereUniqueInput[]
    update?: reader_deviceUpdateWithWhereUniqueWithoutUsersInput | reader_deviceUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reader_deviceUpdateManyWithWhereWithoutUsersInput | reader_deviceUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reader_deviceScalarWhereInput | reader_deviceScalarWhereInput[]
  }

  export type cardsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<cardsCreateWithoutUsersInput, cardsUncheckedCreateWithoutUsersInput> | cardsCreateWithoutUsersInput[] | cardsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cardsCreateOrConnectWithoutUsersInput | cardsCreateOrConnectWithoutUsersInput[]
    upsert?: cardsUpsertWithWhereUniqueWithoutUsersInput | cardsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: cardsCreateManyUsersInputEnvelope
    set?: cardsWhereUniqueInput | cardsWhereUniqueInput[]
    disconnect?: cardsWhereUniqueInput | cardsWhereUniqueInput[]
    delete?: cardsWhereUniqueInput | cardsWhereUniqueInput[]
    connect?: cardsWhereUniqueInput | cardsWhereUniqueInput[]
    update?: cardsUpdateWithWhereUniqueWithoutUsersInput | cardsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: cardsUpdateManyWithWhereWithoutUsersInput | cardsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: cardsScalarWhereInput | cardsScalarWhereInput[]
  }

  export type reader_deviceUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reader_deviceCreateWithoutUsersInput, reader_deviceUncheckedCreateWithoutUsersInput> | reader_deviceCreateWithoutUsersInput[] | reader_deviceUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reader_deviceCreateOrConnectWithoutUsersInput | reader_deviceCreateOrConnectWithoutUsersInput[]
    upsert?: reader_deviceUpsertWithWhereUniqueWithoutUsersInput | reader_deviceUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reader_deviceCreateManyUsersInputEnvelope
    set?: reader_deviceWhereUniqueInput | reader_deviceWhereUniqueInput[]
    disconnect?: reader_deviceWhereUniqueInput | reader_deviceWhereUniqueInput[]
    delete?: reader_deviceWhereUniqueInput | reader_deviceWhereUniqueInput[]
    connect?: reader_deviceWhereUniqueInput | reader_deviceWhereUniqueInput[]
    update?: reader_deviceUpdateWithWhereUniqueWithoutUsersInput | reader_deviceUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reader_deviceUpdateManyWithWhereWithoutUsersInput | reader_deviceUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reader_deviceScalarWhereInput | reader_deviceScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutCardsInput = {
    create?: XOR<usersCreateWithoutCardsInput, usersUncheckedCreateWithoutCardsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCardsInput
    connect?: usersWhereUniqueInput
  }

  export type reader_logsCreateNestedManyWithoutCardsInput = {
    create?: XOR<reader_logsCreateWithoutCardsInput, reader_logsUncheckedCreateWithoutCardsInput> | reader_logsCreateWithoutCardsInput[] | reader_logsUncheckedCreateWithoutCardsInput[]
    connectOrCreate?: reader_logsCreateOrConnectWithoutCardsInput | reader_logsCreateOrConnectWithoutCardsInput[]
    createMany?: reader_logsCreateManyCardsInputEnvelope
    connect?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
  }

  export type reader_logsUncheckedCreateNestedManyWithoutCardsInput = {
    create?: XOR<reader_logsCreateWithoutCardsInput, reader_logsUncheckedCreateWithoutCardsInput> | reader_logsCreateWithoutCardsInput[] | reader_logsUncheckedCreateWithoutCardsInput[]
    connectOrCreate?: reader_logsCreateOrConnectWithoutCardsInput | reader_logsCreateOrConnectWithoutCardsInput[]
    createMany?: reader_logsCreateManyCardsInputEnvelope
    connect?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<usersCreateWithoutCardsInput, usersUncheckedCreateWithoutCardsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCardsInput
    upsert?: usersUpsertWithoutCardsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCardsInput, usersUpdateWithoutCardsInput>, usersUncheckedUpdateWithoutCardsInput>
  }

  export type reader_logsUpdateManyWithoutCardsNestedInput = {
    create?: XOR<reader_logsCreateWithoutCardsInput, reader_logsUncheckedCreateWithoutCardsInput> | reader_logsCreateWithoutCardsInput[] | reader_logsUncheckedCreateWithoutCardsInput[]
    connectOrCreate?: reader_logsCreateOrConnectWithoutCardsInput | reader_logsCreateOrConnectWithoutCardsInput[]
    upsert?: reader_logsUpsertWithWhereUniqueWithoutCardsInput | reader_logsUpsertWithWhereUniqueWithoutCardsInput[]
    createMany?: reader_logsCreateManyCardsInputEnvelope
    set?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    disconnect?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    delete?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    connect?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    update?: reader_logsUpdateWithWhereUniqueWithoutCardsInput | reader_logsUpdateWithWhereUniqueWithoutCardsInput[]
    updateMany?: reader_logsUpdateManyWithWhereWithoutCardsInput | reader_logsUpdateManyWithWhereWithoutCardsInput[]
    deleteMany?: reader_logsScalarWhereInput | reader_logsScalarWhereInput[]
  }

  export type reader_logsUncheckedUpdateManyWithoutCardsNestedInput = {
    create?: XOR<reader_logsCreateWithoutCardsInput, reader_logsUncheckedCreateWithoutCardsInput> | reader_logsCreateWithoutCardsInput[] | reader_logsUncheckedCreateWithoutCardsInput[]
    connectOrCreate?: reader_logsCreateOrConnectWithoutCardsInput | reader_logsCreateOrConnectWithoutCardsInput[]
    upsert?: reader_logsUpsertWithWhereUniqueWithoutCardsInput | reader_logsUpsertWithWhereUniqueWithoutCardsInput[]
    createMany?: reader_logsCreateManyCardsInputEnvelope
    set?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    disconnect?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    delete?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    connect?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    update?: reader_logsUpdateWithWhereUniqueWithoutCardsInput | reader_logsUpdateWithWhereUniqueWithoutCardsInput[]
    updateMany?: reader_logsUpdateManyWithWhereWithoutCardsInput | reader_logsUpdateManyWithWhereWithoutCardsInput[]
    deleteMany?: reader_logsScalarWhereInput | reader_logsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutReader_deviceInput = {
    create?: XOR<usersCreateWithoutReader_deviceInput, usersUncheckedCreateWithoutReader_deviceInput>
    connectOrCreate?: usersCreateOrConnectWithoutReader_deviceInput
    connect?: usersWhereUniqueInput
  }

  export type reader_logsCreateNestedManyWithoutReader_deviceInput = {
    create?: XOR<reader_logsCreateWithoutReader_deviceInput, reader_logsUncheckedCreateWithoutReader_deviceInput> | reader_logsCreateWithoutReader_deviceInput[] | reader_logsUncheckedCreateWithoutReader_deviceInput[]
    connectOrCreate?: reader_logsCreateOrConnectWithoutReader_deviceInput | reader_logsCreateOrConnectWithoutReader_deviceInput[]
    createMany?: reader_logsCreateManyReader_deviceInputEnvelope
    connect?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
  }

  export type reader_logsUncheckedCreateNestedManyWithoutReader_deviceInput = {
    create?: XOR<reader_logsCreateWithoutReader_deviceInput, reader_logsUncheckedCreateWithoutReader_deviceInput> | reader_logsCreateWithoutReader_deviceInput[] | reader_logsUncheckedCreateWithoutReader_deviceInput[]
    connectOrCreate?: reader_logsCreateOrConnectWithoutReader_deviceInput | reader_logsCreateOrConnectWithoutReader_deviceInput[]
    createMany?: reader_logsCreateManyReader_deviceInputEnvelope
    connect?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutReader_deviceNestedInput = {
    create?: XOR<usersCreateWithoutReader_deviceInput, usersUncheckedCreateWithoutReader_deviceInput>
    connectOrCreate?: usersCreateOrConnectWithoutReader_deviceInput
    upsert?: usersUpsertWithoutReader_deviceInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReader_deviceInput, usersUpdateWithoutReader_deviceInput>, usersUncheckedUpdateWithoutReader_deviceInput>
  }

  export type reader_logsUpdateManyWithoutReader_deviceNestedInput = {
    create?: XOR<reader_logsCreateWithoutReader_deviceInput, reader_logsUncheckedCreateWithoutReader_deviceInput> | reader_logsCreateWithoutReader_deviceInput[] | reader_logsUncheckedCreateWithoutReader_deviceInput[]
    connectOrCreate?: reader_logsCreateOrConnectWithoutReader_deviceInput | reader_logsCreateOrConnectWithoutReader_deviceInput[]
    upsert?: reader_logsUpsertWithWhereUniqueWithoutReader_deviceInput | reader_logsUpsertWithWhereUniqueWithoutReader_deviceInput[]
    createMany?: reader_logsCreateManyReader_deviceInputEnvelope
    set?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    disconnect?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    delete?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    connect?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    update?: reader_logsUpdateWithWhereUniqueWithoutReader_deviceInput | reader_logsUpdateWithWhereUniqueWithoutReader_deviceInput[]
    updateMany?: reader_logsUpdateManyWithWhereWithoutReader_deviceInput | reader_logsUpdateManyWithWhereWithoutReader_deviceInput[]
    deleteMany?: reader_logsScalarWhereInput | reader_logsScalarWhereInput[]
  }

  export type reader_logsUncheckedUpdateManyWithoutReader_deviceNestedInput = {
    create?: XOR<reader_logsCreateWithoutReader_deviceInput, reader_logsUncheckedCreateWithoutReader_deviceInput> | reader_logsCreateWithoutReader_deviceInput[] | reader_logsUncheckedCreateWithoutReader_deviceInput[]
    connectOrCreate?: reader_logsCreateOrConnectWithoutReader_deviceInput | reader_logsCreateOrConnectWithoutReader_deviceInput[]
    upsert?: reader_logsUpsertWithWhereUniqueWithoutReader_deviceInput | reader_logsUpsertWithWhereUniqueWithoutReader_deviceInput[]
    createMany?: reader_logsCreateManyReader_deviceInputEnvelope
    set?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    disconnect?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    delete?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    connect?: reader_logsWhereUniqueInput | reader_logsWhereUniqueInput[]
    update?: reader_logsUpdateWithWhereUniqueWithoutReader_deviceInput | reader_logsUpdateWithWhereUniqueWithoutReader_deviceInput[]
    updateMany?: reader_logsUpdateManyWithWhereWithoutReader_deviceInput | reader_logsUpdateManyWithWhereWithoutReader_deviceInput[]
    deleteMany?: reader_logsScalarWhereInput | reader_logsScalarWhereInput[]
  }

  export type cardsCreateNestedOneWithoutReader_logsInput = {
    create?: XOR<cardsCreateWithoutReader_logsInput, cardsUncheckedCreateWithoutReader_logsInput>
    connectOrCreate?: cardsCreateOrConnectWithoutReader_logsInput
    connect?: cardsWhereUniqueInput
  }

  export type reader_deviceCreateNestedOneWithoutReader_logsInput = {
    create?: XOR<reader_deviceCreateWithoutReader_logsInput, reader_deviceUncheckedCreateWithoutReader_logsInput>
    connectOrCreate?: reader_deviceCreateOrConnectWithoutReader_logsInput
    connect?: reader_deviceWhereUniqueInput
  }

  export type cardsUpdateOneRequiredWithoutReader_logsNestedInput = {
    create?: XOR<cardsCreateWithoutReader_logsInput, cardsUncheckedCreateWithoutReader_logsInput>
    connectOrCreate?: cardsCreateOrConnectWithoutReader_logsInput
    upsert?: cardsUpsertWithoutReader_logsInput
    connect?: cardsWhereUniqueInput
    update?: XOR<XOR<cardsUpdateToOneWithWhereWithoutReader_logsInput, cardsUpdateWithoutReader_logsInput>, cardsUncheckedUpdateWithoutReader_logsInput>
  }

  export type reader_deviceUpdateOneRequiredWithoutReader_logsNestedInput = {
    create?: XOR<reader_deviceCreateWithoutReader_logsInput, reader_deviceUncheckedCreateWithoutReader_logsInput>
    connectOrCreate?: reader_deviceCreateOrConnectWithoutReader_logsInput
    upsert?: reader_deviceUpsertWithoutReader_logsInput
    connect?: reader_deviceWhereUniqueInput
    update?: XOR<XOR<reader_deviceUpdateToOneWithWhereWithoutReader_logsInput, reader_deviceUpdateWithoutReader_logsInput>, reader_deviceUncheckedUpdateWithoutReader_logsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type cardsCreateWithoutUsersInput = {
    id?: string
    cardName: number
    cardUUID: string
    cardType: string
    status: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reader_logs?: reader_logsCreateNestedManyWithoutCardsInput
  }

  export type cardsUncheckedCreateWithoutUsersInput = {
    id?: string
    cardName: number
    cardUUID: string
    cardType: string
    status: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reader_logs?: reader_logsUncheckedCreateNestedManyWithoutCardsInput
  }

  export type cardsCreateOrConnectWithoutUsersInput = {
    where: cardsWhereUniqueInput
    create: XOR<cardsCreateWithoutUsersInput, cardsUncheckedCreateWithoutUsersInput>
  }

  export type cardsCreateManyUsersInputEnvelope = {
    data: cardsCreateManyUsersInput | cardsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type reader_deviceCreateWithoutUsersInput = {
    id?: string
    readerDeviceName: string
    DeviceUUID: string
    created_at?: Date | string
    updated_at?: Date | string
    reader_logs?: reader_logsCreateNestedManyWithoutReader_deviceInput
  }

  export type reader_deviceUncheckedCreateWithoutUsersInput = {
    id?: string
    readerDeviceName: string
    DeviceUUID: string
    created_at?: Date | string
    updated_at?: Date | string
    reader_logs?: reader_logsUncheckedCreateNestedManyWithoutReader_deviceInput
  }

  export type reader_deviceCreateOrConnectWithoutUsersInput = {
    where: reader_deviceWhereUniqueInput
    create: XOR<reader_deviceCreateWithoutUsersInput, reader_deviceUncheckedCreateWithoutUsersInput>
  }

  export type reader_deviceCreateManyUsersInputEnvelope = {
    data: reader_deviceCreateManyUsersInput | reader_deviceCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type cardsUpsertWithWhereUniqueWithoutUsersInput = {
    where: cardsWhereUniqueInput
    update: XOR<cardsUpdateWithoutUsersInput, cardsUncheckedUpdateWithoutUsersInput>
    create: XOR<cardsCreateWithoutUsersInput, cardsUncheckedCreateWithoutUsersInput>
  }

  export type cardsUpdateWithWhereUniqueWithoutUsersInput = {
    where: cardsWhereUniqueInput
    data: XOR<cardsUpdateWithoutUsersInput, cardsUncheckedUpdateWithoutUsersInput>
  }

  export type cardsUpdateManyWithWhereWithoutUsersInput = {
    where: cardsScalarWhereInput
    data: XOR<cardsUpdateManyMutationInput, cardsUncheckedUpdateManyWithoutUsersInput>
  }

  export type cardsScalarWhereInput = {
    AND?: cardsScalarWhereInput | cardsScalarWhereInput[]
    OR?: cardsScalarWhereInput[]
    NOT?: cardsScalarWhereInput | cardsScalarWhereInput[]
    id?: UuidFilter<"cards"> | string
    userID?: UuidFilter<"cards"> | string
    cardName?: IntFilter<"cards"> | number
    cardUUID?: StringFilter<"cards"> | string
    cardType?: StringFilter<"cards"> | string
    status?: BoolFilter<"cards"> | boolean
    created_at?: DateTimeFilter<"cards"> | Date | string
    updated_at?: DateTimeFilter<"cards"> | Date | string
  }

  export type reader_deviceUpsertWithWhereUniqueWithoutUsersInput = {
    where: reader_deviceWhereUniqueInput
    update: XOR<reader_deviceUpdateWithoutUsersInput, reader_deviceUncheckedUpdateWithoutUsersInput>
    create: XOR<reader_deviceCreateWithoutUsersInput, reader_deviceUncheckedCreateWithoutUsersInput>
  }

  export type reader_deviceUpdateWithWhereUniqueWithoutUsersInput = {
    where: reader_deviceWhereUniqueInput
    data: XOR<reader_deviceUpdateWithoutUsersInput, reader_deviceUncheckedUpdateWithoutUsersInput>
  }

  export type reader_deviceUpdateManyWithWhereWithoutUsersInput = {
    where: reader_deviceScalarWhereInput
    data: XOR<reader_deviceUpdateManyMutationInput, reader_deviceUncheckedUpdateManyWithoutUsersInput>
  }

  export type reader_deviceScalarWhereInput = {
    AND?: reader_deviceScalarWhereInput | reader_deviceScalarWhereInput[]
    OR?: reader_deviceScalarWhereInput[]
    NOT?: reader_deviceScalarWhereInput | reader_deviceScalarWhereInput[]
    id?: UuidFilter<"reader_device"> | string
    userID?: UuidFilter<"reader_device"> | string
    readerDeviceName?: StringFilter<"reader_device"> | string
    DeviceUUID?: StringFilter<"reader_device"> | string
    created_at?: DateTimeFilter<"reader_device"> | Date | string
    updated_at?: DateTimeFilter<"reader_device"> | Date | string
  }

  export type usersCreateWithoutCardsInput = {
    id?: string
    username: string
    WebUUID: string
    phoneNo: number
    created_at?: Date | string
    updated_at?: Date | string
    reader_device?: reader_deviceCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCardsInput = {
    id?: string
    username: string
    WebUUID: string
    phoneNo: number
    created_at?: Date | string
    updated_at?: Date | string
    reader_device?: reader_deviceUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCardsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCardsInput, usersUncheckedCreateWithoutCardsInput>
  }

  export type reader_logsCreateWithoutCardsInput = {
    id?: string
    status: boolean
    readDate: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    reader_device: reader_deviceCreateNestedOneWithoutReader_logsInput
  }

  export type reader_logsUncheckedCreateWithoutCardsInput = {
    id?: string
    reader_deviceID: string
    status: boolean
    readDate: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_logsCreateOrConnectWithoutCardsInput = {
    where: reader_logsWhereUniqueInput
    create: XOR<reader_logsCreateWithoutCardsInput, reader_logsUncheckedCreateWithoutCardsInput>
  }

  export type reader_logsCreateManyCardsInputEnvelope = {
    data: reader_logsCreateManyCardsInput | reader_logsCreateManyCardsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCardsInput = {
    update: XOR<usersUpdateWithoutCardsInput, usersUncheckedUpdateWithoutCardsInput>
    create: XOR<usersCreateWithoutCardsInput, usersUncheckedCreateWithoutCardsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCardsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCardsInput, usersUncheckedUpdateWithoutCardsInput>
  }

  export type usersUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    WebUUID?: StringFieldUpdateOperationsInput | string
    phoneNo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reader_device?: reader_deviceUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    WebUUID?: StringFieldUpdateOperationsInput | string
    phoneNo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reader_device?: reader_deviceUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type reader_logsUpsertWithWhereUniqueWithoutCardsInput = {
    where: reader_logsWhereUniqueInput
    update: XOR<reader_logsUpdateWithoutCardsInput, reader_logsUncheckedUpdateWithoutCardsInput>
    create: XOR<reader_logsCreateWithoutCardsInput, reader_logsUncheckedCreateWithoutCardsInput>
  }

  export type reader_logsUpdateWithWhereUniqueWithoutCardsInput = {
    where: reader_logsWhereUniqueInput
    data: XOR<reader_logsUpdateWithoutCardsInput, reader_logsUncheckedUpdateWithoutCardsInput>
  }

  export type reader_logsUpdateManyWithWhereWithoutCardsInput = {
    where: reader_logsScalarWhereInput
    data: XOR<reader_logsUpdateManyMutationInput, reader_logsUncheckedUpdateManyWithoutCardsInput>
  }

  export type reader_logsScalarWhereInput = {
    AND?: reader_logsScalarWhereInput | reader_logsScalarWhereInput[]
    OR?: reader_logsScalarWhereInput[]
    NOT?: reader_logsScalarWhereInput | reader_logsScalarWhereInput[]
    id?: UuidFilter<"reader_logs"> | string
    cardID?: UuidFilter<"reader_logs"> | string
    reader_deviceID?: UuidFilter<"reader_logs"> | string
    status?: BoolFilter<"reader_logs"> | boolean
    readDate?: DateTimeFilter<"reader_logs"> | Date | string
    created_at?: DateTimeFilter<"reader_logs"> | Date | string
    updated_at?: DateTimeFilter<"reader_logs"> | Date | string
  }

  export type usersCreateWithoutReader_deviceInput = {
    id?: string
    username: string
    WebUUID: string
    phoneNo: number
    created_at?: Date | string
    updated_at?: Date | string
    cards?: cardsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutReader_deviceInput = {
    id?: string
    username: string
    WebUUID: string
    phoneNo: number
    created_at?: Date | string
    updated_at?: Date | string
    cards?: cardsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutReader_deviceInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReader_deviceInput, usersUncheckedCreateWithoutReader_deviceInput>
  }

  export type reader_logsCreateWithoutReader_deviceInput = {
    id?: string
    status: boolean
    readDate: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    cards: cardsCreateNestedOneWithoutReader_logsInput
  }

  export type reader_logsUncheckedCreateWithoutReader_deviceInput = {
    id?: string
    cardID: string
    status: boolean
    readDate: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_logsCreateOrConnectWithoutReader_deviceInput = {
    where: reader_logsWhereUniqueInput
    create: XOR<reader_logsCreateWithoutReader_deviceInput, reader_logsUncheckedCreateWithoutReader_deviceInput>
  }

  export type reader_logsCreateManyReader_deviceInputEnvelope = {
    data: reader_logsCreateManyReader_deviceInput | reader_logsCreateManyReader_deviceInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutReader_deviceInput = {
    update: XOR<usersUpdateWithoutReader_deviceInput, usersUncheckedUpdateWithoutReader_deviceInput>
    create: XOR<usersCreateWithoutReader_deviceInput, usersUncheckedCreateWithoutReader_deviceInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReader_deviceInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReader_deviceInput, usersUncheckedUpdateWithoutReader_deviceInput>
  }

  export type usersUpdateWithoutReader_deviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    WebUUID?: StringFieldUpdateOperationsInput | string
    phoneNo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: cardsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutReader_deviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    WebUUID?: StringFieldUpdateOperationsInput | string
    phoneNo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: cardsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type reader_logsUpsertWithWhereUniqueWithoutReader_deviceInput = {
    where: reader_logsWhereUniqueInput
    update: XOR<reader_logsUpdateWithoutReader_deviceInput, reader_logsUncheckedUpdateWithoutReader_deviceInput>
    create: XOR<reader_logsCreateWithoutReader_deviceInput, reader_logsUncheckedCreateWithoutReader_deviceInput>
  }

  export type reader_logsUpdateWithWhereUniqueWithoutReader_deviceInput = {
    where: reader_logsWhereUniqueInput
    data: XOR<reader_logsUpdateWithoutReader_deviceInput, reader_logsUncheckedUpdateWithoutReader_deviceInput>
  }

  export type reader_logsUpdateManyWithWhereWithoutReader_deviceInput = {
    where: reader_logsScalarWhereInput
    data: XOR<reader_logsUpdateManyMutationInput, reader_logsUncheckedUpdateManyWithoutReader_deviceInput>
  }

  export type cardsCreateWithoutReader_logsInput = {
    id?: string
    cardName: number
    cardUUID: string
    cardType: string
    status: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutCardsInput
  }

  export type cardsUncheckedCreateWithoutReader_logsInput = {
    id?: string
    userID: string
    cardName: number
    cardUUID: string
    cardType: string
    status: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cardsCreateOrConnectWithoutReader_logsInput = {
    where: cardsWhereUniqueInput
    create: XOR<cardsCreateWithoutReader_logsInput, cardsUncheckedCreateWithoutReader_logsInput>
  }

  export type reader_deviceCreateWithoutReader_logsInput = {
    id?: string
    readerDeviceName: string
    DeviceUUID: string
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutReader_deviceInput
  }

  export type reader_deviceUncheckedCreateWithoutReader_logsInput = {
    id?: string
    userID: string
    readerDeviceName: string
    DeviceUUID: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_deviceCreateOrConnectWithoutReader_logsInput = {
    where: reader_deviceWhereUniqueInput
    create: XOR<reader_deviceCreateWithoutReader_logsInput, reader_deviceUncheckedCreateWithoutReader_logsInput>
  }

  export type cardsUpsertWithoutReader_logsInput = {
    update: XOR<cardsUpdateWithoutReader_logsInput, cardsUncheckedUpdateWithoutReader_logsInput>
    create: XOR<cardsCreateWithoutReader_logsInput, cardsUncheckedCreateWithoutReader_logsInput>
    where?: cardsWhereInput
  }

  export type cardsUpdateToOneWithWhereWithoutReader_logsInput = {
    where?: cardsWhereInput
    data: XOR<cardsUpdateWithoutReader_logsInput, cardsUncheckedUpdateWithoutReader_logsInput>
  }

  export type cardsUpdateWithoutReader_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: IntFieldUpdateOperationsInput | number
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutCardsNestedInput
  }

  export type cardsUncheckedUpdateWithoutReader_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    cardName?: IntFieldUpdateOperationsInput | number
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_deviceUpsertWithoutReader_logsInput = {
    update: XOR<reader_deviceUpdateWithoutReader_logsInput, reader_deviceUncheckedUpdateWithoutReader_logsInput>
    create: XOR<reader_deviceCreateWithoutReader_logsInput, reader_deviceUncheckedCreateWithoutReader_logsInput>
    where?: reader_deviceWhereInput
  }

  export type reader_deviceUpdateToOneWithWhereWithoutReader_logsInput = {
    where?: reader_deviceWhereInput
    data: XOR<reader_deviceUpdateWithoutReader_logsInput, reader_deviceUncheckedUpdateWithoutReader_logsInput>
  }

  export type reader_deviceUpdateWithoutReader_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutReader_deviceNestedInput
  }

  export type reader_deviceUncheckedUpdateWithoutReader_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cardsCreateManyUsersInput = {
    id?: string
    cardName: number
    cardUUID: string
    cardType: string
    status: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_deviceCreateManyUsersInput = {
    id?: string
    readerDeviceName: string
    DeviceUUID: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cardsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: IntFieldUpdateOperationsInput | number
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reader_logs?: reader_logsUpdateManyWithoutCardsNestedInput
  }

  export type cardsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: IntFieldUpdateOperationsInput | number
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reader_logs?: reader_logsUncheckedUpdateManyWithoutCardsNestedInput
  }

  export type cardsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardName?: IntFieldUpdateOperationsInput | number
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_deviceUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reader_logs?: reader_logsUpdateManyWithoutReader_deviceNestedInput
  }

  export type reader_deviceUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reader_logs?: reader_logsUncheckedUpdateManyWithoutReader_deviceNestedInput
  }

  export type reader_deviceUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_logsCreateManyCardsInput = {
    id?: string
    reader_deviceID: string
    status: boolean
    readDate: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_logsUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reader_device?: reader_deviceUpdateOneRequiredWithoutReader_logsNestedInput
  }

  export type reader_logsUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reader_deviceID?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_logsUncheckedUpdateManyWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reader_deviceID?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_logsCreateManyReader_deviceInput = {
    id?: string
    cardID: string
    status: boolean
    readDate: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_logsUpdateWithoutReader_deviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: cardsUpdateOneRequiredWithoutReader_logsNestedInput
  }

  export type reader_logsUncheckedUpdateWithoutReader_deviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_logsUncheckedUpdateManyWithoutReader_deviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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