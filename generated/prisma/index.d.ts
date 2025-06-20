
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
 * Model card_types
 * 
 */
export type card_types = $Result.DefaultSelection<Prisma.$card_typesPayload>
/**
 * Model card_sale
 * 
 */
export type card_sale = $Result.DefaultSelection<Prisma.$card_salePayload>
/**
 * Model payment_types
 * 
 */
export type payment_types = $Result.DefaultSelection<Prisma.$payment_typesPayload>
/**
 * Model cards_loss
 * 
 */
export type cards_loss = $Result.DefaultSelection<Prisma.$cards_lossPayload>
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


export const LossStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type LossStatus = (typeof LossStatus)[keyof typeof LossStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type LossStatus = $Enums.LossStatus

export const LossStatus: typeof $Enums.LossStatus

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
   * `prisma.card_types`: Exposes CRUD operations for the **card_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Card_types
    * const card_types = await prisma.card_types.findMany()
    * ```
    */
  get card_types(): Prisma.card_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.card_sale`: Exposes CRUD operations for the **card_sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Card_sales
    * const card_sales = await prisma.card_sale.findMany()
    * ```
    */
  get card_sale(): Prisma.card_saleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment_types`: Exposes CRUD operations for the **payment_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_types
    * const payment_types = await prisma.payment_types.findMany()
    * ```
    */
  get payment_types(): Prisma.payment_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cards_loss`: Exposes CRUD operations for the **cards_loss** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards_losses
    * const cards_losses = await prisma.cards_loss.findMany()
    * ```
    */
  get cards_loss(): Prisma.cards_lossDelegate<ExtArgs, ClientOptions>;

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
    card_types: 'card_types',
    card_sale: 'card_sale',
    payment_types: 'payment_types',
    cards_loss: 'cards_loss',
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
      modelProps: "admin" | "users" | "cards" | "card_types" | "card_sale" | "payment_types" | "cards_loss" | "reader_device" | "reader_logs"
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
      card_types: {
        payload: Prisma.$card_typesPayload<ExtArgs>
        fields: Prisma.card_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.card_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.card_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_typesPayload>
          }
          findFirst: {
            args: Prisma.card_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.card_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_typesPayload>
          }
          findMany: {
            args: Prisma.card_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_typesPayload>[]
          }
          create: {
            args: Prisma.card_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_typesPayload>
          }
          createMany: {
            args: Prisma.card_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.card_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_typesPayload>[]
          }
          delete: {
            args: Prisma.card_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_typesPayload>
          }
          update: {
            args: Prisma.card_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_typesPayload>
          }
          deleteMany: {
            args: Prisma.card_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.card_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.card_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_typesPayload>[]
          }
          upsert: {
            args: Prisma.card_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_typesPayload>
          }
          aggregate: {
            args: Prisma.Card_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard_types>
          }
          groupBy: {
            args: Prisma.card_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Card_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.card_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Card_typesCountAggregateOutputType> | number
          }
        }
      }
      card_sale: {
        payload: Prisma.$card_salePayload<ExtArgs>
        fields: Prisma.card_saleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.card_saleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_salePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.card_saleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_salePayload>
          }
          findFirst: {
            args: Prisma.card_saleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_salePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.card_saleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_salePayload>
          }
          findMany: {
            args: Prisma.card_saleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_salePayload>[]
          }
          create: {
            args: Prisma.card_saleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_salePayload>
          }
          createMany: {
            args: Prisma.card_saleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.card_saleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_salePayload>[]
          }
          delete: {
            args: Prisma.card_saleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_salePayload>
          }
          update: {
            args: Prisma.card_saleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_salePayload>
          }
          deleteMany: {
            args: Prisma.card_saleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.card_saleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.card_saleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_salePayload>[]
          }
          upsert: {
            args: Prisma.card_saleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$card_salePayload>
          }
          aggregate: {
            args: Prisma.Card_saleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard_sale>
          }
          groupBy: {
            args: Prisma.card_saleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Card_saleGroupByOutputType>[]
          }
          count: {
            args: Prisma.card_saleCountArgs<ExtArgs>
            result: $Utils.Optional<Card_saleCountAggregateOutputType> | number
          }
        }
      }
      payment_types: {
        payload: Prisma.$payment_typesPayload<ExtArgs>
        fields: Prisma.payment_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_typesPayload>
          }
          findFirst: {
            args: Prisma.payment_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_typesPayload>
          }
          findMany: {
            args: Prisma.payment_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_typesPayload>[]
          }
          create: {
            args: Prisma.payment_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_typesPayload>
          }
          createMany: {
            args: Prisma.payment_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.payment_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_typesPayload>[]
          }
          delete: {
            args: Prisma.payment_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_typesPayload>
          }
          update: {
            args: Prisma.payment_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_typesPayload>
          }
          deleteMany: {
            args: Prisma.payment_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.payment_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.payment_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_typesPayload>[]
          }
          upsert: {
            args: Prisma.payment_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_typesPayload>
          }
          aggregate: {
            args: Prisma.Payment_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment_types>
          }
          groupBy: {
            args: Prisma.payment_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Payment_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Payment_typesCountAggregateOutputType> | number
          }
        }
      }
      cards_loss: {
        payload: Prisma.$cards_lossPayload<ExtArgs>
        fields: Prisma.cards_lossFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cards_lossFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cards_lossPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cards_lossFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cards_lossPayload>
          }
          findFirst: {
            args: Prisma.cards_lossFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cards_lossPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cards_lossFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cards_lossPayload>
          }
          findMany: {
            args: Prisma.cards_lossFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cards_lossPayload>[]
          }
          create: {
            args: Prisma.cards_lossCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cards_lossPayload>
          }
          createMany: {
            args: Prisma.cards_lossCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cards_lossCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cards_lossPayload>[]
          }
          delete: {
            args: Prisma.cards_lossDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cards_lossPayload>
          }
          update: {
            args: Prisma.cards_lossUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cards_lossPayload>
          }
          deleteMany: {
            args: Prisma.cards_lossDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cards_lossUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cards_lossUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cards_lossPayload>[]
          }
          upsert: {
            args: Prisma.cards_lossUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cards_lossPayload>
          }
          aggregate: {
            args: Prisma.Cards_lossAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCards_loss>
          }
          groupBy: {
            args: Prisma.cards_lossGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cards_lossGroupByOutputType>[]
          }
          count: {
            args: Prisma.cards_lossCountArgs<ExtArgs>
            result: $Utils.Optional<Cards_lossCountAggregateOutputType> | number
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
    card_types?: card_typesOmit
    card_sale?: card_saleOmit
    payment_types?: payment_typesOmit
    cards_loss?: cards_lossOmit
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
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    brandLogo: string | null
    brandName: string | null
    fb_link: string | null
    youtube_link: string | null
    instagram_link: string | null
    tiktok_link: string | null
    WebUUID: string | null
    phoneNo: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    brandLogo: string | null
    brandName: string | null
    fb_link: string | null
    youtube_link: string | null
    instagram_link: string | null
    tiktok_link: string | null
    WebUUID: string | null
    phoneNo: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    brandLogo: number
    brandName: number
    fb_link: number
    youtube_link: number
    instagram_link: number
    tiktok_link: number
    WebUUID: number
    phoneNo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    brandLogo?: true
    brandName?: true
    fb_link?: true
    youtube_link?: true
    instagram_link?: true
    tiktok_link?: true
    WebUUID?: true
    phoneNo?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    brandLogo?: true
    brandName?: true
    fb_link?: true
    youtube_link?: true
    instagram_link?: true
    tiktok_link?: true
    WebUUID?: true
    phoneNo?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    brandLogo?: true
    brandName?: true
    fb_link?: true
    youtube_link?: true
    instagram_link?: true
    tiktok_link?: true
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
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    brandLogo: string | null
    brandName: string | null
    fb_link: string | null
    youtube_link: string | null
    instagram_link: string | null
    tiktok_link: string | null
    WebUUID: string
    phoneNo: string
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
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
    brandLogo?: boolean
    brandName?: boolean
    fb_link?: boolean
    youtube_link?: boolean
    instagram_link?: boolean
    tiktok_link?: boolean
    WebUUID?: boolean
    phoneNo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    brandLogo?: boolean
    brandName?: boolean
    fb_link?: boolean
    youtube_link?: boolean
    instagram_link?: boolean
    tiktok_link?: boolean
    WebUUID?: boolean
    phoneNo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    brandLogo?: boolean
    brandName?: boolean
    fb_link?: boolean
    youtube_link?: boolean
    instagram_link?: boolean
    tiktok_link?: boolean
    WebUUID?: boolean
    phoneNo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    brandLogo?: boolean
    brandName?: boolean
    fb_link?: boolean
    youtube_link?: boolean
    instagram_link?: boolean
    tiktok_link?: boolean
    WebUUID?: boolean
    phoneNo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "brandLogo" | "brandName" | "fb_link" | "youtube_link" | "instagram_link" | "tiktok_link" | "WebUUID" | "phoneNo" | "created_at" | "updated_at", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      brandLogo: string | null
      brandName: string | null
      fb_link: string | null
      youtube_link: string | null
      instagram_link: string | null
      tiktok_link: string | null
      WebUUID: string
      phoneNo: string
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
    readonly brandLogo: FieldRef<"users", 'String'>
    readonly brandName: FieldRef<"users", 'String'>
    readonly fb_link: FieldRef<"users", 'String'>
    readonly youtube_link: FieldRef<"users", 'String'>
    readonly instagram_link: FieldRef<"users", 'String'>
    readonly tiktok_link: FieldRef<"users", 'String'>
    readonly WebUUID: FieldRef<"users", 'String'>
    readonly phoneNo: FieldRef<"users", 'String'>
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
  }


  /**
   * Model cards
   */

  export type AggregateCards = {
    _count: CardsCountAggregateOutputType | null
    _min: CardsMinAggregateOutputType | null
    _max: CardsMaxAggregateOutputType | null
  }

  export type CardsMinAggregateOutputType = {
    id: string | null
    userID: string | null
    cardName: string | null
    cardUUID: string | null
    cardType: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CardsMaxAggregateOutputType = {
    id: string | null
    userID: string | null
    cardName: string | null
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
    _min?: CardsMinAggregateInputType
    _max?: CardsMaxAggregateInputType
  }

  export type CardsGroupByOutputType = {
    id: string
    userID: string | null
    cardName: string
    cardUUID: string
    cardType: string
    status: boolean
    created_at: Date
    updated_at: Date
    _count: CardsCountAggregateOutputType | null
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

  export type $cardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cards"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userID: string | null
      cardName: string
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
    readonly cardName: FieldRef<"cards", 'String'>
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
  }


  /**
   * Model card_types
   */

  export type AggregateCard_types = {
    _count: Card_typesCountAggregateOutputType | null
    _min: Card_typesMinAggregateOutputType | null
    _max: Card_typesMaxAggregateOutputType | null
  }

  export type Card_typesMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Card_typesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Card_typesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Card_typesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Card_typesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Card_typesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Card_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which card_types to aggregate.
     */
    where?: card_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of card_types to fetch.
     */
    orderBy?: card_typesOrderByWithRelationInput | card_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: card_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` card_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` card_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned card_types
    **/
    _count?: true | Card_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Card_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Card_typesMaxAggregateInputType
  }

  export type GetCard_typesAggregateType<T extends Card_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateCard_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard_types[P]>
      : GetScalarType<T[P], AggregateCard_types[P]>
  }




  export type card_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: card_typesWhereInput
    orderBy?: card_typesOrderByWithAggregationInput | card_typesOrderByWithAggregationInput[]
    by: Card_typesScalarFieldEnum[] | Card_typesScalarFieldEnum
    having?: card_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Card_typesCountAggregateInputType | true
    _min?: Card_typesMinAggregateInputType
    _max?: Card_typesMaxAggregateInputType
  }

  export type Card_typesGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    _count: Card_typesCountAggregateOutputType | null
    _min: Card_typesMinAggregateOutputType | null
    _max: Card_typesMaxAggregateOutputType | null
  }

  type GetCard_typesGroupByPayload<T extends card_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Card_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Card_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Card_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Card_typesGroupByOutputType[P]>
        }
      >
    >


  export type card_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["card_types"]>

  export type card_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["card_types"]>

  export type card_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["card_types"]>

  export type card_typesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type card_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["card_types"]>

  export type $card_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "card_types"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["card_types"]>
    composites: {}
  }

  type card_typesGetPayload<S extends boolean | null | undefined | card_typesDefaultArgs> = $Result.GetResult<Prisma.$card_typesPayload, S>

  type card_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<card_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Card_typesCountAggregateInputType | true
    }

  export interface card_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['card_types'], meta: { name: 'card_types' } }
    /**
     * Find zero or one Card_types that matches the filter.
     * @param {card_typesFindUniqueArgs} args - Arguments to find a Card_types
     * @example
     * // Get one Card_types
     * const card_types = await prisma.card_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends card_typesFindUniqueArgs>(args: SelectSubset<T, card_typesFindUniqueArgs<ExtArgs>>): Prisma__card_typesClient<$Result.GetResult<Prisma.$card_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {card_typesFindUniqueOrThrowArgs} args - Arguments to find a Card_types
     * @example
     * // Get one Card_types
     * const card_types = await prisma.card_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends card_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, card_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__card_typesClient<$Result.GetResult<Prisma.$card_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_typesFindFirstArgs} args - Arguments to find a Card_types
     * @example
     * // Get one Card_types
     * const card_types = await prisma.card_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends card_typesFindFirstArgs>(args?: SelectSubset<T, card_typesFindFirstArgs<ExtArgs>>): Prisma__card_typesClient<$Result.GetResult<Prisma.$card_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_typesFindFirstOrThrowArgs} args - Arguments to find a Card_types
     * @example
     * // Get one Card_types
     * const card_types = await prisma.card_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends card_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, card_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__card_typesClient<$Result.GetResult<Prisma.$card_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Card_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Card_types
     * const card_types = await prisma.card_types.findMany()
     * 
     * // Get first 10 Card_types
     * const card_types = await prisma.card_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const card_typesWithIdOnly = await prisma.card_types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends card_typesFindManyArgs>(args?: SelectSubset<T, card_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$card_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card_types.
     * @param {card_typesCreateArgs} args - Arguments to create a Card_types.
     * @example
     * // Create one Card_types
     * const Card_types = await prisma.card_types.create({
     *   data: {
     *     // ... data to create a Card_types
     *   }
     * })
     * 
     */
    create<T extends card_typesCreateArgs>(args: SelectSubset<T, card_typesCreateArgs<ExtArgs>>): Prisma__card_typesClient<$Result.GetResult<Prisma.$card_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Card_types.
     * @param {card_typesCreateManyArgs} args - Arguments to create many Card_types.
     * @example
     * // Create many Card_types
     * const card_types = await prisma.card_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends card_typesCreateManyArgs>(args?: SelectSubset<T, card_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Card_types and returns the data saved in the database.
     * @param {card_typesCreateManyAndReturnArgs} args - Arguments to create many Card_types.
     * @example
     * // Create many Card_types
     * const card_types = await prisma.card_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Card_types and only return the `id`
     * const card_typesWithIdOnly = await prisma.card_types.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends card_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, card_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$card_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card_types.
     * @param {card_typesDeleteArgs} args - Arguments to delete one Card_types.
     * @example
     * // Delete one Card_types
     * const Card_types = await prisma.card_types.delete({
     *   where: {
     *     // ... filter to delete one Card_types
     *   }
     * })
     * 
     */
    delete<T extends card_typesDeleteArgs>(args: SelectSubset<T, card_typesDeleteArgs<ExtArgs>>): Prisma__card_typesClient<$Result.GetResult<Prisma.$card_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card_types.
     * @param {card_typesUpdateArgs} args - Arguments to update one Card_types.
     * @example
     * // Update one Card_types
     * const card_types = await prisma.card_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends card_typesUpdateArgs>(args: SelectSubset<T, card_typesUpdateArgs<ExtArgs>>): Prisma__card_typesClient<$Result.GetResult<Prisma.$card_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Card_types.
     * @param {card_typesDeleteManyArgs} args - Arguments to filter Card_types to delete.
     * @example
     * // Delete a few Card_types
     * const { count } = await prisma.card_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends card_typesDeleteManyArgs>(args?: SelectSubset<T, card_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Card_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Card_types
     * const card_types = await prisma.card_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends card_typesUpdateManyArgs>(args: SelectSubset<T, card_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Card_types and returns the data updated in the database.
     * @param {card_typesUpdateManyAndReturnArgs} args - Arguments to update many Card_types.
     * @example
     * // Update many Card_types
     * const card_types = await prisma.card_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Card_types and only return the `id`
     * const card_typesWithIdOnly = await prisma.card_types.updateManyAndReturn({
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
    updateManyAndReturn<T extends card_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, card_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$card_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card_types.
     * @param {card_typesUpsertArgs} args - Arguments to update or create a Card_types.
     * @example
     * // Update or create a Card_types
     * const card_types = await prisma.card_types.upsert({
     *   create: {
     *     // ... data to create a Card_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card_types we want to update
     *   }
     * })
     */
    upsert<T extends card_typesUpsertArgs>(args: SelectSubset<T, card_typesUpsertArgs<ExtArgs>>): Prisma__card_typesClient<$Result.GetResult<Prisma.$card_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Card_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_typesCountArgs} args - Arguments to filter Card_types to count.
     * @example
     * // Count the number of Card_types
     * const count = await prisma.card_types.count({
     *   where: {
     *     // ... the filter for the Card_types we want to count
     *   }
     * })
    **/
    count<T extends card_typesCountArgs>(
      args?: Subset<T, card_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Card_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Card_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Card_typesAggregateArgs>(args: Subset<T, Card_typesAggregateArgs>): Prisma.PrismaPromise<GetCard_typesAggregateType<T>>

    /**
     * Group by Card_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_typesGroupByArgs} args - Group by arguments.
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
      T extends card_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: card_typesGroupByArgs['orderBy'] }
        : { orderBy?: card_typesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, card_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCard_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the card_types model
   */
  readonly fields: card_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for card_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__card_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the card_types model
   */
  interface card_typesFieldRefs {
    readonly id: FieldRef<"card_types", 'String'>
    readonly name: FieldRef<"card_types", 'String'>
    readonly created_at: FieldRef<"card_types", 'DateTime'>
    readonly updated_at: FieldRef<"card_types", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * card_types findUnique
   */
  export type card_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_types
     */
    select?: card_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_types
     */
    omit?: card_typesOmit<ExtArgs> | null
    /**
     * Filter, which card_types to fetch.
     */
    where: card_typesWhereUniqueInput
  }

  /**
   * card_types findUniqueOrThrow
   */
  export type card_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_types
     */
    select?: card_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_types
     */
    omit?: card_typesOmit<ExtArgs> | null
    /**
     * Filter, which card_types to fetch.
     */
    where: card_typesWhereUniqueInput
  }

  /**
   * card_types findFirst
   */
  export type card_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_types
     */
    select?: card_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_types
     */
    omit?: card_typesOmit<ExtArgs> | null
    /**
     * Filter, which card_types to fetch.
     */
    where?: card_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of card_types to fetch.
     */
    orderBy?: card_typesOrderByWithRelationInput | card_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for card_types.
     */
    cursor?: card_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` card_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` card_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of card_types.
     */
    distinct?: Card_typesScalarFieldEnum | Card_typesScalarFieldEnum[]
  }

  /**
   * card_types findFirstOrThrow
   */
  export type card_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_types
     */
    select?: card_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_types
     */
    omit?: card_typesOmit<ExtArgs> | null
    /**
     * Filter, which card_types to fetch.
     */
    where?: card_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of card_types to fetch.
     */
    orderBy?: card_typesOrderByWithRelationInput | card_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for card_types.
     */
    cursor?: card_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` card_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` card_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of card_types.
     */
    distinct?: Card_typesScalarFieldEnum | Card_typesScalarFieldEnum[]
  }

  /**
   * card_types findMany
   */
  export type card_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_types
     */
    select?: card_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_types
     */
    omit?: card_typesOmit<ExtArgs> | null
    /**
     * Filter, which card_types to fetch.
     */
    where?: card_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of card_types to fetch.
     */
    orderBy?: card_typesOrderByWithRelationInput | card_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing card_types.
     */
    cursor?: card_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` card_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` card_types.
     */
    skip?: number
    distinct?: Card_typesScalarFieldEnum | Card_typesScalarFieldEnum[]
  }

  /**
   * card_types create
   */
  export type card_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_types
     */
    select?: card_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_types
     */
    omit?: card_typesOmit<ExtArgs> | null
    /**
     * The data needed to create a card_types.
     */
    data: XOR<card_typesCreateInput, card_typesUncheckedCreateInput>
  }

  /**
   * card_types createMany
   */
  export type card_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many card_types.
     */
    data: card_typesCreateManyInput | card_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * card_types createManyAndReturn
   */
  export type card_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_types
     */
    select?: card_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the card_types
     */
    omit?: card_typesOmit<ExtArgs> | null
    /**
     * The data used to create many card_types.
     */
    data: card_typesCreateManyInput | card_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * card_types update
   */
  export type card_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_types
     */
    select?: card_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_types
     */
    omit?: card_typesOmit<ExtArgs> | null
    /**
     * The data needed to update a card_types.
     */
    data: XOR<card_typesUpdateInput, card_typesUncheckedUpdateInput>
    /**
     * Choose, which card_types to update.
     */
    where: card_typesWhereUniqueInput
  }

  /**
   * card_types updateMany
   */
  export type card_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update card_types.
     */
    data: XOR<card_typesUpdateManyMutationInput, card_typesUncheckedUpdateManyInput>
    /**
     * Filter which card_types to update
     */
    where?: card_typesWhereInput
    /**
     * Limit how many card_types to update.
     */
    limit?: number
  }

  /**
   * card_types updateManyAndReturn
   */
  export type card_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_types
     */
    select?: card_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the card_types
     */
    omit?: card_typesOmit<ExtArgs> | null
    /**
     * The data used to update card_types.
     */
    data: XOR<card_typesUpdateManyMutationInput, card_typesUncheckedUpdateManyInput>
    /**
     * Filter which card_types to update
     */
    where?: card_typesWhereInput
    /**
     * Limit how many card_types to update.
     */
    limit?: number
  }

  /**
   * card_types upsert
   */
  export type card_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_types
     */
    select?: card_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_types
     */
    omit?: card_typesOmit<ExtArgs> | null
    /**
     * The filter to search for the card_types to update in case it exists.
     */
    where: card_typesWhereUniqueInput
    /**
     * In case the card_types found by the `where` argument doesn't exist, create a new card_types with this data.
     */
    create: XOR<card_typesCreateInput, card_typesUncheckedCreateInput>
    /**
     * In case the card_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<card_typesUpdateInput, card_typesUncheckedUpdateInput>
  }

  /**
   * card_types delete
   */
  export type card_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_types
     */
    select?: card_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_types
     */
    omit?: card_typesOmit<ExtArgs> | null
    /**
     * Filter which card_types to delete.
     */
    where: card_typesWhereUniqueInput
  }

  /**
   * card_types deleteMany
   */
  export type card_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which card_types to delete
     */
    where?: card_typesWhereInput
    /**
     * Limit how many card_types to delete.
     */
    limit?: number
  }

  /**
   * card_types without action
   */
  export type card_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_types
     */
    select?: card_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_types
     */
    omit?: card_typesOmit<ExtArgs> | null
  }


  /**
   * Model card_sale
   */

  export type AggregateCard_sale = {
    _count: Card_saleCountAggregateOutputType | null
    _avg: Card_saleAvgAggregateOutputType | null
    _sum: Card_saleSumAggregateOutputType | null
    _min: Card_saleMinAggregateOutputType | null
    _max: Card_saleMaxAggregateOutputType | null
  }

  export type Card_saleAvgAggregateOutputType = {
    price: Decimal | null
    quantity: number | null
  }

  export type Card_saleSumAggregateOutputType = {
    price: Decimal | null
    quantity: number | null
  }

  export type Card_saleMinAggregateOutputType = {
    id: string | null
    customer_name: string | null
    address: string | null
    phone: string | null
    sale_date: Date | null
    price: Decimal | null
    quantity: number | null
    payment_status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Card_saleMaxAggregateOutputType = {
    id: string | null
    customer_name: string | null
    address: string | null
    phone: string | null
    sale_date: Date | null
    price: Decimal | null
    quantity: number | null
    payment_status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Card_saleCountAggregateOutputType = {
    id: number
    cardID: number
    customer_name: number
    address: number
    phone: number
    sale_date: number
    price: number
    quantity: number
    payment_status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Card_saleAvgAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type Card_saleSumAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type Card_saleMinAggregateInputType = {
    id?: true
    customer_name?: true
    address?: true
    phone?: true
    sale_date?: true
    price?: true
    quantity?: true
    payment_status?: true
    created_at?: true
    updated_at?: true
  }

  export type Card_saleMaxAggregateInputType = {
    id?: true
    customer_name?: true
    address?: true
    phone?: true
    sale_date?: true
    price?: true
    quantity?: true
    payment_status?: true
    created_at?: true
    updated_at?: true
  }

  export type Card_saleCountAggregateInputType = {
    id?: true
    cardID?: true
    customer_name?: true
    address?: true
    phone?: true
    sale_date?: true
    price?: true
    quantity?: true
    payment_status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Card_saleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which card_sale to aggregate.
     */
    where?: card_saleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of card_sales to fetch.
     */
    orderBy?: card_saleOrderByWithRelationInput | card_saleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: card_saleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` card_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` card_sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned card_sales
    **/
    _count?: true | Card_saleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Card_saleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Card_saleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Card_saleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Card_saleMaxAggregateInputType
  }

  export type GetCard_saleAggregateType<T extends Card_saleAggregateArgs> = {
        [P in keyof T & keyof AggregateCard_sale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard_sale[P]>
      : GetScalarType<T[P], AggregateCard_sale[P]>
  }




  export type card_saleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: card_saleWhereInput
    orderBy?: card_saleOrderByWithAggregationInput | card_saleOrderByWithAggregationInput[]
    by: Card_saleScalarFieldEnum[] | Card_saleScalarFieldEnum
    having?: card_saleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Card_saleCountAggregateInputType | true
    _avg?: Card_saleAvgAggregateInputType
    _sum?: Card_saleSumAggregateInputType
    _min?: Card_saleMinAggregateInputType
    _max?: Card_saleMaxAggregateInputType
  }

  export type Card_saleGroupByOutputType = {
    id: string
    cardID: string[]
    customer_name: string
    address: string
    phone: string
    sale_date: Date
    price: Decimal
    quantity: number
    payment_status: string
    created_at: Date
    updated_at: Date
    _count: Card_saleCountAggregateOutputType | null
    _avg: Card_saleAvgAggregateOutputType | null
    _sum: Card_saleSumAggregateOutputType | null
    _min: Card_saleMinAggregateOutputType | null
    _max: Card_saleMaxAggregateOutputType | null
  }

  type GetCard_saleGroupByPayload<T extends card_saleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Card_saleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Card_saleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Card_saleGroupByOutputType[P]>
            : GetScalarType<T[P], Card_saleGroupByOutputType[P]>
        }
      >
    >


  export type card_saleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardID?: boolean
    customer_name?: boolean
    address?: boolean
    phone?: boolean
    sale_date?: boolean
    price?: boolean
    quantity?: boolean
    payment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["card_sale"]>

  export type card_saleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardID?: boolean
    customer_name?: boolean
    address?: boolean
    phone?: boolean
    sale_date?: boolean
    price?: boolean
    quantity?: boolean
    payment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["card_sale"]>

  export type card_saleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardID?: boolean
    customer_name?: boolean
    address?: boolean
    phone?: boolean
    sale_date?: boolean
    price?: boolean
    quantity?: boolean
    payment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["card_sale"]>

  export type card_saleSelectScalar = {
    id?: boolean
    cardID?: boolean
    customer_name?: boolean
    address?: boolean
    phone?: boolean
    sale_date?: boolean
    price?: boolean
    quantity?: boolean
    payment_status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type card_saleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardID" | "customer_name" | "address" | "phone" | "sale_date" | "price" | "quantity" | "payment_status" | "created_at" | "updated_at", ExtArgs["result"]["card_sale"]>

  export type $card_salePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "card_sale"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardID: string[]
      customer_name: string
      address: string
      phone: string
      sale_date: Date
      price: Prisma.Decimal
      quantity: number
      payment_status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["card_sale"]>
    composites: {}
  }

  type card_saleGetPayload<S extends boolean | null | undefined | card_saleDefaultArgs> = $Result.GetResult<Prisma.$card_salePayload, S>

  type card_saleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<card_saleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Card_saleCountAggregateInputType | true
    }

  export interface card_saleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['card_sale'], meta: { name: 'card_sale' } }
    /**
     * Find zero or one Card_sale that matches the filter.
     * @param {card_saleFindUniqueArgs} args - Arguments to find a Card_sale
     * @example
     * // Get one Card_sale
     * const card_sale = await prisma.card_sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends card_saleFindUniqueArgs>(args: SelectSubset<T, card_saleFindUniqueArgs<ExtArgs>>): Prisma__card_saleClient<$Result.GetResult<Prisma.$card_salePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card_sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {card_saleFindUniqueOrThrowArgs} args - Arguments to find a Card_sale
     * @example
     * // Get one Card_sale
     * const card_sale = await prisma.card_sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends card_saleFindUniqueOrThrowArgs>(args: SelectSubset<T, card_saleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__card_saleClient<$Result.GetResult<Prisma.$card_salePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card_sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_saleFindFirstArgs} args - Arguments to find a Card_sale
     * @example
     * // Get one Card_sale
     * const card_sale = await prisma.card_sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends card_saleFindFirstArgs>(args?: SelectSubset<T, card_saleFindFirstArgs<ExtArgs>>): Prisma__card_saleClient<$Result.GetResult<Prisma.$card_salePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card_sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_saleFindFirstOrThrowArgs} args - Arguments to find a Card_sale
     * @example
     * // Get one Card_sale
     * const card_sale = await prisma.card_sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends card_saleFindFirstOrThrowArgs>(args?: SelectSubset<T, card_saleFindFirstOrThrowArgs<ExtArgs>>): Prisma__card_saleClient<$Result.GetResult<Prisma.$card_salePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Card_sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_saleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Card_sales
     * const card_sales = await prisma.card_sale.findMany()
     * 
     * // Get first 10 Card_sales
     * const card_sales = await prisma.card_sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const card_saleWithIdOnly = await prisma.card_sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends card_saleFindManyArgs>(args?: SelectSubset<T, card_saleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$card_salePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card_sale.
     * @param {card_saleCreateArgs} args - Arguments to create a Card_sale.
     * @example
     * // Create one Card_sale
     * const Card_sale = await prisma.card_sale.create({
     *   data: {
     *     // ... data to create a Card_sale
     *   }
     * })
     * 
     */
    create<T extends card_saleCreateArgs>(args: SelectSubset<T, card_saleCreateArgs<ExtArgs>>): Prisma__card_saleClient<$Result.GetResult<Prisma.$card_salePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Card_sales.
     * @param {card_saleCreateManyArgs} args - Arguments to create many Card_sales.
     * @example
     * // Create many Card_sales
     * const card_sale = await prisma.card_sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends card_saleCreateManyArgs>(args?: SelectSubset<T, card_saleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Card_sales and returns the data saved in the database.
     * @param {card_saleCreateManyAndReturnArgs} args - Arguments to create many Card_sales.
     * @example
     * // Create many Card_sales
     * const card_sale = await prisma.card_sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Card_sales and only return the `id`
     * const card_saleWithIdOnly = await prisma.card_sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends card_saleCreateManyAndReturnArgs>(args?: SelectSubset<T, card_saleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$card_salePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card_sale.
     * @param {card_saleDeleteArgs} args - Arguments to delete one Card_sale.
     * @example
     * // Delete one Card_sale
     * const Card_sale = await prisma.card_sale.delete({
     *   where: {
     *     // ... filter to delete one Card_sale
     *   }
     * })
     * 
     */
    delete<T extends card_saleDeleteArgs>(args: SelectSubset<T, card_saleDeleteArgs<ExtArgs>>): Prisma__card_saleClient<$Result.GetResult<Prisma.$card_salePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card_sale.
     * @param {card_saleUpdateArgs} args - Arguments to update one Card_sale.
     * @example
     * // Update one Card_sale
     * const card_sale = await prisma.card_sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends card_saleUpdateArgs>(args: SelectSubset<T, card_saleUpdateArgs<ExtArgs>>): Prisma__card_saleClient<$Result.GetResult<Prisma.$card_salePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Card_sales.
     * @param {card_saleDeleteManyArgs} args - Arguments to filter Card_sales to delete.
     * @example
     * // Delete a few Card_sales
     * const { count } = await prisma.card_sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends card_saleDeleteManyArgs>(args?: SelectSubset<T, card_saleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Card_sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_saleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Card_sales
     * const card_sale = await prisma.card_sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends card_saleUpdateManyArgs>(args: SelectSubset<T, card_saleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Card_sales and returns the data updated in the database.
     * @param {card_saleUpdateManyAndReturnArgs} args - Arguments to update many Card_sales.
     * @example
     * // Update many Card_sales
     * const card_sale = await prisma.card_sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Card_sales and only return the `id`
     * const card_saleWithIdOnly = await prisma.card_sale.updateManyAndReturn({
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
    updateManyAndReturn<T extends card_saleUpdateManyAndReturnArgs>(args: SelectSubset<T, card_saleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$card_salePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card_sale.
     * @param {card_saleUpsertArgs} args - Arguments to update or create a Card_sale.
     * @example
     * // Update or create a Card_sale
     * const card_sale = await prisma.card_sale.upsert({
     *   create: {
     *     // ... data to create a Card_sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card_sale we want to update
     *   }
     * })
     */
    upsert<T extends card_saleUpsertArgs>(args: SelectSubset<T, card_saleUpsertArgs<ExtArgs>>): Prisma__card_saleClient<$Result.GetResult<Prisma.$card_salePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Card_sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_saleCountArgs} args - Arguments to filter Card_sales to count.
     * @example
     * // Count the number of Card_sales
     * const count = await prisma.card_sale.count({
     *   where: {
     *     // ... the filter for the Card_sales we want to count
     *   }
     * })
    **/
    count<T extends card_saleCountArgs>(
      args?: Subset<T, card_saleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Card_saleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card_sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Card_saleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Card_saleAggregateArgs>(args: Subset<T, Card_saleAggregateArgs>): Prisma.PrismaPromise<GetCard_saleAggregateType<T>>

    /**
     * Group by Card_sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_saleGroupByArgs} args - Group by arguments.
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
      T extends card_saleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: card_saleGroupByArgs['orderBy'] }
        : { orderBy?: card_saleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, card_saleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCard_saleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the card_sale model
   */
  readonly fields: card_saleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for card_sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__card_saleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the card_sale model
   */
  interface card_saleFieldRefs {
    readonly id: FieldRef<"card_sale", 'String'>
    readonly cardID: FieldRef<"card_sale", 'String[]'>
    readonly customer_name: FieldRef<"card_sale", 'String'>
    readonly address: FieldRef<"card_sale", 'String'>
    readonly phone: FieldRef<"card_sale", 'String'>
    readonly sale_date: FieldRef<"card_sale", 'DateTime'>
    readonly price: FieldRef<"card_sale", 'Decimal'>
    readonly quantity: FieldRef<"card_sale", 'Int'>
    readonly payment_status: FieldRef<"card_sale", 'String'>
    readonly created_at: FieldRef<"card_sale", 'DateTime'>
    readonly updated_at: FieldRef<"card_sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * card_sale findUnique
   */
  export type card_saleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sale
     */
    select?: card_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_sale
     */
    omit?: card_saleOmit<ExtArgs> | null
    /**
     * Filter, which card_sale to fetch.
     */
    where: card_saleWhereUniqueInput
  }

  /**
   * card_sale findUniqueOrThrow
   */
  export type card_saleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sale
     */
    select?: card_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_sale
     */
    omit?: card_saleOmit<ExtArgs> | null
    /**
     * Filter, which card_sale to fetch.
     */
    where: card_saleWhereUniqueInput
  }

  /**
   * card_sale findFirst
   */
  export type card_saleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sale
     */
    select?: card_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_sale
     */
    omit?: card_saleOmit<ExtArgs> | null
    /**
     * Filter, which card_sale to fetch.
     */
    where?: card_saleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of card_sales to fetch.
     */
    orderBy?: card_saleOrderByWithRelationInput | card_saleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for card_sales.
     */
    cursor?: card_saleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` card_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` card_sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of card_sales.
     */
    distinct?: Card_saleScalarFieldEnum | Card_saleScalarFieldEnum[]
  }

  /**
   * card_sale findFirstOrThrow
   */
  export type card_saleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sale
     */
    select?: card_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_sale
     */
    omit?: card_saleOmit<ExtArgs> | null
    /**
     * Filter, which card_sale to fetch.
     */
    where?: card_saleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of card_sales to fetch.
     */
    orderBy?: card_saleOrderByWithRelationInput | card_saleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for card_sales.
     */
    cursor?: card_saleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` card_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` card_sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of card_sales.
     */
    distinct?: Card_saleScalarFieldEnum | Card_saleScalarFieldEnum[]
  }

  /**
   * card_sale findMany
   */
  export type card_saleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sale
     */
    select?: card_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_sale
     */
    omit?: card_saleOmit<ExtArgs> | null
    /**
     * Filter, which card_sales to fetch.
     */
    where?: card_saleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of card_sales to fetch.
     */
    orderBy?: card_saleOrderByWithRelationInput | card_saleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing card_sales.
     */
    cursor?: card_saleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` card_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` card_sales.
     */
    skip?: number
    distinct?: Card_saleScalarFieldEnum | Card_saleScalarFieldEnum[]
  }

  /**
   * card_sale create
   */
  export type card_saleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sale
     */
    select?: card_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_sale
     */
    omit?: card_saleOmit<ExtArgs> | null
    /**
     * The data needed to create a card_sale.
     */
    data: XOR<card_saleCreateInput, card_saleUncheckedCreateInput>
  }

  /**
   * card_sale createMany
   */
  export type card_saleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many card_sales.
     */
    data: card_saleCreateManyInput | card_saleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * card_sale createManyAndReturn
   */
  export type card_saleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sale
     */
    select?: card_saleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the card_sale
     */
    omit?: card_saleOmit<ExtArgs> | null
    /**
     * The data used to create many card_sales.
     */
    data: card_saleCreateManyInput | card_saleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * card_sale update
   */
  export type card_saleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sale
     */
    select?: card_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_sale
     */
    omit?: card_saleOmit<ExtArgs> | null
    /**
     * The data needed to update a card_sale.
     */
    data: XOR<card_saleUpdateInput, card_saleUncheckedUpdateInput>
    /**
     * Choose, which card_sale to update.
     */
    where: card_saleWhereUniqueInput
  }

  /**
   * card_sale updateMany
   */
  export type card_saleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update card_sales.
     */
    data: XOR<card_saleUpdateManyMutationInput, card_saleUncheckedUpdateManyInput>
    /**
     * Filter which card_sales to update
     */
    where?: card_saleWhereInput
    /**
     * Limit how many card_sales to update.
     */
    limit?: number
  }

  /**
   * card_sale updateManyAndReturn
   */
  export type card_saleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sale
     */
    select?: card_saleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the card_sale
     */
    omit?: card_saleOmit<ExtArgs> | null
    /**
     * The data used to update card_sales.
     */
    data: XOR<card_saleUpdateManyMutationInput, card_saleUncheckedUpdateManyInput>
    /**
     * Filter which card_sales to update
     */
    where?: card_saleWhereInput
    /**
     * Limit how many card_sales to update.
     */
    limit?: number
  }

  /**
   * card_sale upsert
   */
  export type card_saleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sale
     */
    select?: card_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_sale
     */
    omit?: card_saleOmit<ExtArgs> | null
    /**
     * The filter to search for the card_sale to update in case it exists.
     */
    where: card_saleWhereUniqueInput
    /**
     * In case the card_sale found by the `where` argument doesn't exist, create a new card_sale with this data.
     */
    create: XOR<card_saleCreateInput, card_saleUncheckedCreateInput>
    /**
     * In case the card_sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<card_saleUpdateInput, card_saleUncheckedUpdateInput>
  }

  /**
   * card_sale delete
   */
  export type card_saleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sale
     */
    select?: card_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_sale
     */
    omit?: card_saleOmit<ExtArgs> | null
    /**
     * Filter which card_sale to delete.
     */
    where: card_saleWhereUniqueInput
  }

  /**
   * card_sale deleteMany
   */
  export type card_saleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which card_sales to delete
     */
    where?: card_saleWhereInput
    /**
     * Limit how many card_sales to delete.
     */
    limit?: number
  }

  /**
   * card_sale without action
   */
  export type card_saleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sale
     */
    select?: card_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card_sale
     */
    omit?: card_saleOmit<ExtArgs> | null
  }


  /**
   * Model payment_types
   */

  export type AggregatePayment_types = {
    _count: Payment_typesCountAggregateOutputType | null
    _min: Payment_typesMinAggregateOutputType | null
    _max: Payment_typesMaxAggregateOutputType | null
  }

  export type Payment_typesMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Payment_typesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Payment_typesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Payment_typesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Payment_typesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Payment_typesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Payment_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_types to aggregate.
     */
    where?: payment_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_types to fetch.
     */
    orderBy?: payment_typesOrderByWithRelationInput | payment_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_types
    **/
    _count?: true | Payment_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_typesMaxAggregateInputType
  }

  export type GetPayment_typesAggregateType<T extends Payment_typesAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_types[P]>
      : GetScalarType<T[P], AggregatePayment_types[P]>
  }




  export type payment_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_typesWhereInput
    orderBy?: payment_typesOrderByWithAggregationInput | payment_typesOrderByWithAggregationInput[]
    by: Payment_typesScalarFieldEnum[] | Payment_typesScalarFieldEnum
    having?: payment_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_typesCountAggregateInputType | true
    _min?: Payment_typesMinAggregateInputType
    _max?: Payment_typesMaxAggregateInputType
  }

  export type Payment_typesGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    _count: Payment_typesCountAggregateOutputType | null
    _min: Payment_typesMinAggregateOutputType | null
    _max: Payment_typesMaxAggregateOutputType | null
  }

  type GetPayment_typesGroupByPayload<T extends payment_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_typesGroupByOutputType[P]>
        }
      >
    >


  export type payment_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["payment_types"]>

  export type payment_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["payment_types"]>

  export type payment_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["payment_types"]>

  export type payment_typesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type payment_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["payment_types"]>

  export type $payment_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_types"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payment_types"]>
    composites: {}
  }

  type payment_typesGetPayload<S extends boolean | null | undefined | payment_typesDefaultArgs> = $Result.GetResult<Prisma.$payment_typesPayload, S>

  type payment_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<payment_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Payment_typesCountAggregateInputType | true
    }

  export interface payment_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_types'], meta: { name: 'payment_types' } }
    /**
     * Find zero or one Payment_types that matches the filter.
     * @param {payment_typesFindUniqueArgs} args - Arguments to find a Payment_types
     * @example
     * // Get one Payment_types
     * const payment_types = await prisma.payment_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends payment_typesFindUniqueArgs>(args: SelectSubset<T, payment_typesFindUniqueArgs<ExtArgs>>): Prisma__payment_typesClient<$Result.GetResult<Prisma.$payment_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {payment_typesFindUniqueOrThrowArgs} args - Arguments to find a Payment_types
     * @example
     * // Get one Payment_types
     * const payment_types = await prisma.payment_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends payment_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, payment_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__payment_typesClient<$Result.GetResult<Prisma.$payment_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_typesFindFirstArgs} args - Arguments to find a Payment_types
     * @example
     * // Get one Payment_types
     * const payment_types = await prisma.payment_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends payment_typesFindFirstArgs>(args?: SelectSubset<T, payment_typesFindFirstArgs<ExtArgs>>): Prisma__payment_typesClient<$Result.GetResult<Prisma.$payment_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_typesFindFirstOrThrowArgs} args - Arguments to find a Payment_types
     * @example
     * // Get one Payment_types
     * const payment_types = await prisma.payment_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends payment_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, payment_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__payment_typesClient<$Result.GetResult<Prisma.$payment_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payment_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_types
     * const payment_types = await prisma.payment_types.findMany()
     * 
     * // Get first 10 Payment_types
     * const payment_types = await prisma.payment_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_typesWithIdOnly = await prisma.payment_types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends payment_typesFindManyArgs>(args?: SelectSubset<T, payment_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment_types.
     * @param {payment_typesCreateArgs} args - Arguments to create a Payment_types.
     * @example
     * // Create one Payment_types
     * const Payment_types = await prisma.payment_types.create({
     *   data: {
     *     // ... data to create a Payment_types
     *   }
     * })
     * 
     */
    create<T extends payment_typesCreateArgs>(args: SelectSubset<T, payment_typesCreateArgs<ExtArgs>>): Prisma__payment_typesClient<$Result.GetResult<Prisma.$payment_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payment_types.
     * @param {payment_typesCreateManyArgs} args - Arguments to create many Payment_types.
     * @example
     * // Create many Payment_types
     * const payment_types = await prisma.payment_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends payment_typesCreateManyArgs>(args?: SelectSubset<T, payment_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payment_types and returns the data saved in the database.
     * @param {payment_typesCreateManyAndReturnArgs} args - Arguments to create many Payment_types.
     * @example
     * // Create many Payment_types
     * const payment_types = await prisma.payment_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payment_types and only return the `id`
     * const payment_typesWithIdOnly = await prisma.payment_types.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends payment_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, payment_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment_types.
     * @param {payment_typesDeleteArgs} args - Arguments to delete one Payment_types.
     * @example
     * // Delete one Payment_types
     * const Payment_types = await prisma.payment_types.delete({
     *   where: {
     *     // ... filter to delete one Payment_types
     *   }
     * })
     * 
     */
    delete<T extends payment_typesDeleteArgs>(args: SelectSubset<T, payment_typesDeleteArgs<ExtArgs>>): Prisma__payment_typesClient<$Result.GetResult<Prisma.$payment_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment_types.
     * @param {payment_typesUpdateArgs} args - Arguments to update one Payment_types.
     * @example
     * // Update one Payment_types
     * const payment_types = await prisma.payment_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends payment_typesUpdateArgs>(args: SelectSubset<T, payment_typesUpdateArgs<ExtArgs>>): Prisma__payment_typesClient<$Result.GetResult<Prisma.$payment_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payment_types.
     * @param {payment_typesDeleteManyArgs} args - Arguments to filter Payment_types to delete.
     * @example
     * // Delete a few Payment_types
     * const { count } = await prisma.payment_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends payment_typesDeleteManyArgs>(args?: SelectSubset<T, payment_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_types
     * const payment_types = await prisma.payment_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends payment_typesUpdateManyArgs>(args: SelectSubset<T, payment_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_types and returns the data updated in the database.
     * @param {payment_typesUpdateManyAndReturnArgs} args - Arguments to update many Payment_types.
     * @example
     * // Update many Payment_types
     * const payment_types = await prisma.payment_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payment_types and only return the `id`
     * const payment_typesWithIdOnly = await prisma.payment_types.updateManyAndReturn({
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
    updateManyAndReturn<T extends payment_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, payment_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment_types.
     * @param {payment_typesUpsertArgs} args - Arguments to update or create a Payment_types.
     * @example
     * // Update or create a Payment_types
     * const payment_types = await prisma.payment_types.upsert({
     *   create: {
     *     // ... data to create a Payment_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_types we want to update
     *   }
     * })
     */
    upsert<T extends payment_typesUpsertArgs>(args: SelectSubset<T, payment_typesUpsertArgs<ExtArgs>>): Prisma__payment_typesClient<$Result.GetResult<Prisma.$payment_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payment_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_typesCountArgs} args - Arguments to filter Payment_types to count.
     * @example
     * // Count the number of Payment_types
     * const count = await prisma.payment_types.count({
     *   where: {
     *     // ... the filter for the Payment_types we want to count
     *   }
     * })
    **/
    count<T extends payment_typesCountArgs>(
      args?: Subset<T, payment_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Payment_typesAggregateArgs>(args: Subset<T, Payment_typesAggregateArgs>): Prisma.PrismaPromise<GetPayment_typesAggregateType<T>>

    /**
     * Group by Payment_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_typesGroupByArgs} args - Group by arguments.
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
      T extends payment_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_typesGroupByArgs['orderBy'] }
        : { orderBy?: payment_typesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, payment_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_types model
   */
  readonly fields: payment_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the payment_types model
   */
  interface payment_typesFieldRefs {
    readonly id: FieldRef<"payment_types", 'String'>
    readonly name: FieldRef<"payment_types", 'String'>
    readonly created_at: FieldRef<"payment_types", 'DateTime'>
    readonly updated_at: FieldRef<"payment_types", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment_types findUnique
   */
  export type payment_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_types
     */
    select?: payment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_types
     */
    omit?: payment_typesOmit<ExtArgs> | null
    /**
     * Filter, which payment_types to fetch.
     */
    where: payment_typesWhereUniqueInput
  }

  /**
   * payment_types findUniqueOrThrow
   */
  export type payment_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_types
     */
    select?: payment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_types
     */
    omit?: payment_typesOmit<ExtArgs> | null
    /**
     * Filter, which payment_types to fetch.
     */
    where: payment_typesWhereUniqueInput
  }

  /**
   * payment_types findFirst
   */
  export type payment_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_types
     */
    select?: payment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_types
     */
    omit?: payment_typesOmit<ExtArgs> | null
    /**
     * Filter, which payment_types to fetch.
     */
    where?: payment_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_types to fetch.
     */
    orderBy?: payment_typesOrderByWithRelationInput | payment_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_types.
     */
    cursor?: payment_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_types.
     */
    distinct?: Payment_typesScalarFieldEnum | Payment_typesScalarFieldEnum[]
  }

  /**
   * payment_types findFirstOrThrow
   */
  export type payment_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_types
     */
    select?: payment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_types
     */
    omit?: payment_typesOmit<ExtArgs> | null
    /**
     * Filter, which payment_types to fetch.
     */
    where?: payment_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_types to fetch.
     */
    orderBy?: payment_typesOrderByWithRelationInput | payment_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_types.
     */
    cursor?: payment_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_types.
     */
    distinct?: Payment_typesScalarFieldEnum | Payment_typesScalarFieldEnum[]
  }

  /**
   * payment_types findMany
   */
  export type payment_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_types
     */
    select?: payment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_types
     */
    omit?: payment_typesOmit<ExtArgs> | null
    /**
     * Filter, which payment_types to fetch.
     */
    where?: payment_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_types to fetch.
     */
    orderBy?: payment_typesOrderByWithRelationInput | payment_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_types.
     */
    cursor?: payment_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_types.
     */
    skip?: number
    distinct?: Payment_typesScalarFieldEnum | Payment_typesScalarFieldEnum[]
  }

  /**
   * payment_types create
   */
  export type payment_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_types
     */
    select?: payment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_types
     */
    omit?: payment_typesOmit<ExtArgs> | null
    /**
     * The data needed to create a payment_types.
     */
    data: XOR<payment_typesCreateInput, payment_typesUncheckedCreateInput>
  }

  /**
   * payment_types createMany
   */
  export type payment_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_types.
     */
    data: payment_typesCreateManyInput | payment_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_types createManyAndReturn
   */
  export type payment_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_types
     */
    select?: payment_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_types
     */
    omit?: payment_typesOmit<ExtArgs> | null
    /**
     * The data used to create many payment_types.
     */
    data: payment_typesCreateManyInput | payment_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_types update
   */
  export type payment_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_types
     */
    select?: payment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_types
     */
    omit?: payment_typesOmit<ExtArgs> | null
    /**
     * The data needed to update a payment_types.
     */
    data: XOR<payment_typesUpdateInput, payment_typesUncheckedUpdateInput>
    /**
     * Choose, which payment_types to update.
     */
    where: payment_typesWhereUniqueInput
  }

  /**
   * payment_types updateMany
   */
  export type payment_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_types.
     */
    data: XOR<payment_typesUpdateManyMutationInput, payment_typesUncheckedUpdateManyInput>
    /**
     * Filter which payment_types to update
     */
    where?: payment_typesWhereInput
    /**
     * Limit how many payment_types to update.
     */
    limit?: number
  }

  /**
   * payment_types updateManyAndReturn
   */
  export type payment_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_types
     */
    select?: payment_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_types
     */
    omit?: payment_typesOmit<ExtArgs> | null
    /**
     * The data used to update payment_types.
     */
    data: XOR<payment_typesUpdateManyMutationInput, payment_typesUncheckedUpdateManyInput>
    /**
     * Filter which payment_types to update
     */
    where?: payment_typesWhereInput
    /**
     * Limit how many payment_types to update.
     */
    limit?: number
  }

  /**
   * payment_types upsert
   */
  export type payment_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_types
     */
    select?: payment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_types
     */
    omit?: payment_typesOmit<ExtArgs> | null
    /**
     * The filter to search for the payment_types to update in case it exists.
     */
    where: payment_typesWhereUniqueInput
    /**
     * In case the payment_types found by the `where` argument doesn't exist, create a new payment_types with this data.
     */
    create: XOR<payment_typesCreateInput, payment_typesUncheckedCreateInput>
    /**
     * In case the payment_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_typesUpdateInput, payment_typesUncheckedUpdateInput>
  }

  /**
   * payment_types delete
   */
  export type payment_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_types
     */
    select?: payment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_types
     */
    omit?: payment_typesOmit<ExtArgs> | null
    /**
     * Filter which payment_types to delete.
     */
    where: payment_typesWhereUniqueInput
  }

  /**
   * payment_types deleteMany
   */
  export type payment_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_types to delete
     */
    where?: payment_typesWhereInput
    /**
     * Limit how many payment_types to delete.
     */
    limit?: number
  }

  /**
   * payment_types without action
   */
  export type payment_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_types
     */
    select?: payment_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_types
     */
    omit?: payment_typesOmit<ExtArgs> | null
  }


  /**
   * Model cards_loss
   */

  export type AggregateCards_loss = {
    _count: Cards_lossCountAggregateOutputType | null
    _min: Cards_lossMinAggregateOutputType | null
    _max: Cards_lossMaxAggregateOutputType | null
  }

  export type Cards_lossMinAggregateOutputType = {
    id: string | null
    cardID: string | null
    userID: string | null
    description: string | null
    status: $Enums.LossStatus | null
    applyDate: Date | null
    issueDate: Date | null
  }

  export type Cards_lossMaxAggregateOutputType = {
    id: string | null
    cardID: string | null
    userID: string | null
    description: string | null
    status: $Enums.LossStatus | null
    applyDate: Date | null
    issueDate: Date | null
  }

  export type Cards_lossCountAggregateOutputType = {
    id: number
    cardID: number
    userID: number
    description: number
    status: number
    applyDate: number
    issueDate: number
    _all: number
  }


  export type Cards_lossMinAggregateInputType = {
    id?: true
    cardID?: true
    userID?: true
    description?: true
    status?: true
    applyDate?: true
    issueDate?: true
  }

  export type Cards_lossMaxAggregateInputType = {
    id?: true
    cardID?: true
    userID?: true
    description?: true
    status?: true
    applyDate?: true
    issueDate?: true
  }

  export type Cards_lossCountAggregateInputType = {
    id?: true
    cardID?: true
    userID?: true
    description?: true
    status?: true
    applyDate?: true
    issueDate?: true
    _all?: true
  }

  export type Cards_lossAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cards_loss to aggregate.
     */
    where?: cards_lossWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cards_losses to fetch.
     */
    orderBy?: cards_lossOrderByWithRelationInput | cards_lossOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cards_lossWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cards_losses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cards_losses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cards_losses
    **/
    _count?: true | Cards_lossCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cards_lossMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cards_lossMaxAggregateInputType
  }

  export type GetCards_lossAggregateType<T extends Cards_lossAggregateArgs> = {
        [P in keyof T & keyof AggregateCards_loss]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCards_loss[P]>
      : GetScalarType<T[P], AggregateCards_loss[P]>
  }




  export type cards_lossGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cards_lossWhereInput
    orderBy?: cards_lossOrderByWithAggregationInput | cards_lossOrderByWithAggregationInput[]
    by: Cards_lossScalarFieldEnum[] | Cards_lossScalarFieldEnum
    having?: cards_lossScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cards_lossCountAggregateInputType | true
    _min?: Cards_lossMinAggregateInputType
    _max?: Cards_lossMaxAggregateInputType
  }

  export type Cards_lossGroupByOutputType = {
    id: string
    cardID: string
    userID: string
    description: string
    status: $Enums.LossStatus
    applyDate: Date
    issueDate: Date
    _count: Cards_lossCountAggregateOutputType | null
    _min: Cards_lossMinAggregateOutputType | null
    _max: Cards_lossMaxAggregateOutputType | null
  }

  type GetCards_lossGroupByPayload<T extends cards_lossGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cards_lossGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cards_lossGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cards_lossGroupByOutputType[P]>
            : GetScalarType<T[P], Cards_lossGroupByOutputType[P]>
        }
      >
    >


  export type cards_lossSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardID?: boolean
    userID?: boolean
    description?: boolean
    status?: boolean
    applyDate?: boolean
    issueDate?: boolean
  }, ExtArgs["result"]["cards_loss"]>

  export type cards_lossSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardID?: boolean
    userID?: boolean
    description?: boolean
    status?: boolean
    applyDate?: boolean
    issueDate?: boolean
  }, ExtArgs["result"]["cards_loss"]>

  export type cards_lossSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardID?: boolean
    userID?: boolean
    description?: boolean
    status?: boolean
    applyDate?: boolean
    issueDate?: boolean
  }, ExtArgs["result"]["cards_loss"]>

  export type cards_lossSelectScalar = {
    id?: boolean
    cardID?: boolean
    userID?: boolean
    description?: boolean
    status?: boolean
    applyDate?: boolean
    issueDate?: boolean
  }

  export type cards_lossOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardID" | "userID" | "description" | "status" | "applyDate" | "issueDate", ExtArgs["result"]["cards_loss"]>

  export type $cards_lossPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cards_loss"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardID: string
      userID: string
      description: string
      status: $Enums.LossStatus
      applyDate: Date
      issueDate: Date
    }, ExtArgs["result"]["cards_loss"]>
    composites: {}
  }

  type cards_lossGetPayload<S extends boolean | null | undefined | cards_lossDefaultArgs> = $Result.GetResult<Prisma.$cards_lossPayload, S>

  type cards_lossCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cards_lossFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cards_lossCountAggregateInputType | true
    }

  export interface cards_lossDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cards_loss'], meta: { name: 'cards_loss' } }
    /**
     * Find zero or one Cards_loss that matches the filter.
     * @param {cards_lossFindUniqueArgs} args - Arguments to find a Cards_loss
     * @example
     * // Get one Cards_loss
     * const cards_loss = await prisma.cards_loss.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cards_lossFindUniqueArgs>(args: SelectSubset<T, cards_lossFindUniqueArgs<ExtArgs>>): Prisma__cards_lossClient<$Result.GetResult<Prisma.$cards_lossPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cards_loss that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cards_lossFindUniqueOrThrowArgs} args - Arguments to find a Cards_loss
     * @example
     * // Get one Cards_loss
     * const cards_loss = await prisma.cards_loss.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cards_lossFindUniqueOrThrowArgs>(args: SelectSubset<T, cards_lossFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cards_lossClient<$Result.GetResult<Prisma.$cards_lossPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cards_loss that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cards_lossFindFirstArgs} args - Arguments to find a Cards_loss
     * @example
     * // Get one Cards_loss
     * const cards_loss = await prisma.cards_loss.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cards_lossFindFirstArgs>(args?: SelectSubset<T, cards_lossFindFirstArgs<ExtArgs>>): Prisma__cards_lossClient<$Result.GetResult<Prisma.$cards_lossPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cards_loss that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cards_lossFindFirstOrThrowArgs} args - Arguments to find a Cards_loss
     * @example
     * // Get one Cards_loss
     * const cards_loss = await prisma.cards_loss.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cards_lossFindFirstOrThrowArgs>(args?: SelectSubset<T, cards_lossFindFirstOrThrowArgs<ExtArgs>>): Prisma__cards_lossClient<$Result.GetResult<Prisma.$cards_lossPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards_losses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cards_lossFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards_losses
     * const cards_losses = await prisma.cards_loss.findMany()
     * 
     * // Get first 10 Cards_losses
     * const cards_losses = await prisma.cards_loss.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cards_lossWithIdOnly = await prisma.cards_loss.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cards_lossFindManyArgs>(args?: SelectSubset<T, cards_lossFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cards_lossPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cards_loss.
     * @param {cards_lossCreateArgs} args - Arguments to create a Cards_loss.
     * @example
     * // Create one Cards_loss
     * const Cards_loss = await prisma.cards_loss.create({
     *   data: {
     *     // ... data to create a Cards_loss
     *   }
     * })
     * 
     */
    create<T extends cards_lossCreateArgs>(args: SelectSubset<T, cards_lossCreateArgs<ExtArgs>>): Prisma__cards_lossClient<$Result.GetResult<Prisma.$cards_lossPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards_losses.
     * @param {cards_lossCreateManyArgs} args - Arguments to create many Cards_losses.
     * @example
     * // Create many Cards_losses
     * const cards_loss = await prisma.cards_loss.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cards_lossCreateManyArgs>(args?: SelectSubset<T, cards_lossCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards_losses and returns the data saved in the database.
     * @param {cards_lossCreateManyAndReturnArgs} args - Arguments to create many Cards_losses.
     * @example
     * // Create many Cards_losses
     * const cards_loss = await prisma.cards_loss.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards_losses and only return the `id`
     * const cards_lossWithIdOnly = await prisma.cards_loss.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cards_lossCreateManyAndReturnArgs>(args?: SelectSubset<T, cards_lossCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cards_lossPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cards_loss.
     * @param {cards_lossDeleteArgs} args - Arguments to delete one Cards_loss.
     * @example
     * // Delete one Cards_loss
     * const Cards_loss = await prisma.cards_loss.delete({
     *   where: {
     *     // ... filter to delete one Cards_loss
     *   }
     * })
     * 
     */
    delete<T extends cards_lossDeleteArgs>(args: SelectSubset<T, cards_lossDeleteArgs<ExtArgs>>): Prisma__cards_lossClient<$Result.GetResult<Prisma.$cards_lossPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cards_loss.
     * @param {cards_lossUpdateArgs} args - Arguments to update one Cards_loss.
     * @example
     * // Update one Cards_loss
     * const cards_loss = await prisma.cards_loss.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cards_lossUpdateArgs>(args: SelectSubset<T, cards_lossUpdateArgs<ExtArgs>>): Prisma__cards_lossClient<$Result.GetResult<Prisma.$cards_lossPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards_losses.
     * @param {cards_lossDeleteManyArgs} args - Arguments to filter Cards_losses to delete.
     * @example
     * // Delete a few Cards_losses
     * const { count } = await prisma.cards_loss.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cards_lossDeleteManyArgs>(args?: SelectSubset<T, cards_lossDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards_losses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cards_lossUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards_losses
     * const cards_loss = await prisma.cards_loss.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cards_lossUpdateManyArgs>(args: SelectSubset<T, cards_lossUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards_losses and returns the data updated in the database.
     * @param {cards_lossUpdateManyAndReturnArgs} args - Arguments to update many Cards_losses.
     * @example
     * // Update many Cards_losses
     * const cards_loss = await prisma.cards_loss.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards_losses and only return the `id`
     * const cards_lossWithIdOnly = await prisma.cards_loss.updateManyAndReturn({
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
    updateManyAndReturn<T extends cards_lossUpdateManyAndReturnArgs>(args: SelectSubset<T, cards_lossUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cards_lossPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cards_loss.
     * @param {cards_lossUpsertArgs} args - Arguments to update or create a Cards_loss.
     * @example
     * // Update or create a Cards_loss
     * const cards_loss = await prisma.cards_loss.upsert({
     *   create: {
     *     // ... data to create a Cards_loss
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cards_loss we want to update
     *   }
     * })
     */
    upsert<T extends cards_lossUpsertArgs>(args: SelectSubset<T, cards_lossUpsertArgs<ExtArgs>>): Prisma__cards_lossClient<$Result.GetResult<Prisma.$cards_lossPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards_losses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cards_lossCountArgs} args - Arguments to filter Cards_losses to count.
     * @example
     * // Count the number of Cards_losses
     * const count = await prisma.cards_loss.count({
     *   where: {
     *     // ... the filter for the Cards_losses we want to count
     *   }
     * })
    **/
    count<T extends cards_lossCountArgs>(
      args?: Subset<T, cards_lossCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cards_lossCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cards_loss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cards_lossAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cards_lossAggregateArgs>(args: Subset<T, Cards_lossAggregateArgs>): Prisma.PrismaPromise<GetCards_lossAggregateType<T>>

    /**
     * Group by Cards_loss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cards_lossGroupByArgs} args - Group by arguments.
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
      T extends cards_lossGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cards_lossGroupByArgs['orderBy'] }
        : { orderBy?: cards_lossGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cards_lossGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCards_lossGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cards_loss model
   */
  readonly fields: cards_lossFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cards_loss.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cards_lossClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the cards_loss model
   */
  interface cards_lossFieldRefs {
    readonly id: FieldRef<"cards_loss", 'String'>
    readonly cardID: FieldRef<"cards_loss", 'String'>
    readonly userID: FieldRef<"cards_loss", 'String'>
    readonly description: FieldRef<"cards_loss", 'String'>
    readonly status: FieldRef<"cards_loss", 'LossStatus'>
    readonly applyDate: FieldRef<"cards_loss", 'DateTime'>
    readonly issueDate: FieldRef<"cards_loss", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cards_loss findUnique
   */
  export type cards_lossFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards_loss
     */
    select?: cards_lossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards_loss
     */
    omit?: cards_lossOmit<ExtArgs> | null
    /**
     * Filter, which cards_loss to fetch.
     */
    where: cards_lossWhereUniqueInput
  }

  /**
   * cards_loss findUniqueOrThrow
   */
  export type cards_lossFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards_loss
     */
    select?: cards_lossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards_loss
     */
    omit?: cards_lossOmit<ExtArgs> | null
    /**
     * Filter, which cards_loss to fetch.
     */
    where: cards_lossWhereUniqueInput
  }

  /**
   * cards_loss findFirst
   */
  export type cards_lossFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards_loss
     */
    select?: cards_lossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards_loss
     */
    omit?: cards_lossOmit<ExtArgs> | null
    /**
     * Filter, which cards_loss to fetch.
     */
    where?: cards_lossWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cards_losses to fetch.
     */
    orderBy?: cards_lossOrderByWithRelationInput | cards_lossOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cards_losses.
     */
    cursor?: cards_lossWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cards_losses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cards_losses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cards_losses.
     */
    distinct?: Cards_lossScalarFieldEnum | Cards_lossScalarFieldEnum[]
  }

  /**
   * cards_loss findFirstOrThrow
   */
  export type cards_lossFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards_loss
     */
    select?: cards_lossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards_loss
     */
    omit?: cards_lossOmit<ExtArgs> | null
    /**
     * Filter, which cards_loss to fetch.
     */
    where?: cards_lossWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cards_losses to fetch.
     */
    orderBy?: cards_lossOrderByWithRelationInput | cards_lossOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cards_losses.
     */
    cursor?: cards_lossWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cards_losses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cards_losses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cards_losses.
     */
    distinct?: Cards_lossScalarFieldEnum | Cards_lossScalarFieldEnum[]
  }

  /**
   * cards_loss findMany
   */
  export type cards_lossFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards_loss
     */
    select?: cards_lossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards_loss
     */
    omit?: cards_lossOmit<ExtArgs> | null
    /**
     * Filter, which cards_losses to fetch.
     */
    where?: cards_lossWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cards_losses to fetch.
     */
    orderBy?: cards_lossOrderByWithRelationInput | cards_lossOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cards_losses.
     */
    cursor?: cards_lossWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cards_losses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cards_losses.
     */
    skip?: number
    distinct?: Cards_lossScalarFieldEnum | Cards_lossScalarFieldEnum[]
  }

  /**
   * cards_loss create
   */
  export type cards_lossCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards_loss
     */
    select?: cards_lossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards_loss
     */
    omit?: cards_lossOmit<ExtArgs> | null
    /**
     * The data needed to create a cards_loss.
     */
    data: XOR<cards_lossCreateInput, cards_lossUncheckedCreateInput>
  }

  /**
   * cards_loss createMany
   */
  export type cards_lossCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cards_losses.
     */
    data: cards_lossCreateManyInput | cards_lossCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cards_loss createManyAndReturn
   */
  export type cards_lossCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards_loss
     */
    select?: cards_lossSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cards_loss
     */
    omit?: cards_lossOmit<ExtArgs> | null
    /**
     * The data used to create many cards_losses.
     */
    data: cards_lossCreateManyInput | cards_lossCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cards_loss update
   */
  export type cards_lossUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards_loss
     */
    select?: cards_lossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards_loss
     */
    omit?: cards_lossOmit<ExtArgs> | null
    /**
     * The data needed to update a cards_loss.
     */
    data: XOR<cards_lossUpdateInput, cards_lossUncheckedUpdateInput>
    /**
     * Choose, which cards_loss to update.
     */
    where: cards_lossWhereUniqueInput
  }

  /**
   * cards_loss updateMany
   */
  export type cards_lossUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cards_losses.
     */
    data: XOR<cards_lossUpdateManyMutationInput, cards_lossUncheckedUpdateManyInput>
    /**
     * Filter which cards_losses to update
     */
    where?: cards_lossWhereInput
    /**
     * Limit how many cards_losses to update.
     */
    limit?: number
  }

  /**
   * cards_loss updateManyAndReturn
   */
  export type cards_lossUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards_loss
     */
    select?: cards_lossSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cards_loss
     */
    omit?: cards_lossOmit<ExtArgs> | null
    /**
     * The data used to update cards_losses.
     */
    data: XOR<cards_lossUpdateManyMutationInput, cards_lossUncheckedUpdateManyInput>
    /**
     * Filter which cards_losses to update
     */
    where?: cards_lossWhereInput
    /**
     * Limit how many cards_losses to update.
     */
    limit?: number
  }

  /**
   * cards_loss upsert
   */
  export type cards_lossUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards_loss
     */
    select?: cards_lossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards_loss
     */
    omit?: cards_lossOmit<ExtArgs> | null
    /**
     * The filter to search for the cards_loss to update in case it exists.
     */
    where: cards_lossWhereUniqueInput
    /**
     * In case the cards_loss found by the `where` argument doesn't exist, create a new cards_loss with this data.
     */
    create: XOR<cards_lossCreateInput, cards_lossUncheckedCreateInput>
    /**
     * In case the cards_loss was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cards_lossUpdateInput, cards_lossUncheckedUpdateInput>
  }

  /**
   * cards_loss delete
   */
  export type cards_lossDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards_loss
     */
    select?: cards_lossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards_loss
     */
    omit?: cards_lossOmit<ExtArgs> | null
    /**
     * Filter which cards_loss to delete.
     */
    where: cards_lossWhereUniqueInput
  }

  /**
   * cards_loss deleteMany
   */
  export type cards_lossDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cards_losses to delete
     */
    where?: cards_lossWhereInput
    /**
     * Limit how many cards_losses to delete.
     */
    limit?: number
  }

  /**
   * cards_loss without action
   */
  export type cards_lossDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cards_loss
     */
    select?: cards_lossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cards_loss
     */
    omit?: cards_lossOmit<ExtArgs> | null
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
    userID: string | null
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
  }, ExtArgs["result"]["reader_device"]>

  export type reader_deviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    readerDeviceName?: boolean
    DeviceUUID?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["reader_device"]>

  export type reader_deviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    readerDeviceName?: boolean
    DeviceUUID?: boolean
    created_at?: boolean
    updated_at?: boolean
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

  export type $reader_devicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reader_device"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userID: string | null
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
    cardID: string | null
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
  }, ExtArgs["result"]["reader_logs"]>

  export type reader_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardID?: boolean
    reader_deviceID?: boolean
    status?: boolean
    readDate?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["reader_logs"]>

  export type reader_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardID?: boolean
    reader_deviceID?: boolean
    status?: boolean
    readDate?: boolean
    created_at?: boolean
    updated_at?: boolean
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

  export type $reader_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reader_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardID: string | null
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
    brandLogo: 'brandLogo',
    brandName: 'brandName',
    fb_link: 'fb_link',
    youtube_link: 'youtube_link',
    instagram_link: 'instagram_link',
    tiktok_link: 'tiktok_link',
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


  export const Card_typesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Card_typesScalarFieldEnum = (typeof Card_typesScalarFieldEnum)[keyof typeof Card_typesScalarFieldEnum]


  export const Card_saleScalarFieldEnum: {
    id: 'id',
    cardID: 'cardID',
    customer_name: 'customer_name',
    address: 'address',
    phone: 'phone',
    sale_date: 'sale_date',
    price: 'price',
    quantity: 'quantity',
    payment_status: 'payment_status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Card_saleScalarFieldEnum = (typeof Card_saleScalarFieldEnum)[keyof typeof Card_saleScalarFieldEnum]


  export const Payment_typesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Payment_typesScalarFieldEnum = (typeof Payment_typesScalarFieldEnum)[keyof typeof Payment_typesScalarFieldEnum]


  export const Cards_lossScalarFieldEnum: {
    id: 'id',
    cardID: 'cardID',
    userID: 'userID',
    description: 'description',
    status: 'status',
    applyDate: 'applyDate',
    issueDate: 'issueDate'
  };

  export type Cards_lossScalarFieldEnum = (typeof Cards_lossScalarFieldEnum)[keyof typeof Cards_lossScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LossStatus'
   */
  export type EnumLossStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LossStatus'>
    


  /**
   * Reference to a field of type 'LossStatus[]'
   */
  export type ListEnumLossStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LossStatus[]'>
    


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
    brandLogo?: StringNullableFilter<"users"> | string | null
    brandName?: StringNullableFilter<"users"> | string | null
    fb_link?: StringNullableFilter<"users"> | string | null
    youtube_link?: StringNullableFilter<"users"> | string | null
    instagram_link?: StringNullableFilter<"users"> | string | null
    tiktok_link?: StringNullableFilter<"users"> | string | null
    WebUUID?: StringFilter<"users"> | string
    phoneNo?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    brandLogo?: SortOrderInput | SortOrder
    brandName?: SortOrderInput | SortOrder
    fb_link?: SortOrderInput | SortOrder
    youtube_link?: SortOrderInput | SortOrder
    instagram_link?: SortOrderInput | SortOrder
    tiktok_link?: SortOrderInput | SortOrder
    WebUUID?: SortOrder
    phoneNo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    WebUUID?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    brandLogo?: StringNullableFilter<"users"> | string | null
    brandName?: StringNullableFilter<"users"> | string | null
    fb_link?: StringNullableFilter<"users"> | string | null
    youtube_link?: StringNullableFilter<"users"> | string | null
    instagram_link?: StringNullableFilter<"users"> | string | null
    tiktok_link?: StringNullableFilter<"users"> | string | null
    phoneNo?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }, "id" | "WebUUID">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    brandLogo?: SortOrderInput | SortOrder
    brandName?: SortOrderInput | SortOrder
    fb_link?: SortOrderInput | SortOrder
    youtube_link?: SortOrderInput | SortOrder
    instagram_link?: SortOrderInput | SortOrder
    tiktok_link?: SortOrderInput | SortOrder
    WebUUID?: SortOrder
    phoneNo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    brandLogo?: StringNullableWithAggregatesFilter<"users"> | string | null
    brandName?: StringNullableWithAggregatesFilter<"users"> | string | null
    fb_link?: StringNullableWithAggregatesFilter<"users"> | string | null
    youtube_link?: StringNullableWithAggregatesFilter<"users"> | string | null
    instagram_link?: StringNullableWithAggregatesFilter<"users"> | string | null
    tiktok_link?: StringNullableWithAggregatesFilter<"users"> | string | null
    WebUUID?: StringWithAggregatesFilter<"users"> | string
    phoneNo?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type cardsWhereInput = {
    AND?: cardsWhereInput | cardsWhereInput[]
    OR?: cardsWhereInput[]
    NOT?: cardsWhereInput | cardsWhereInput[]
    id?: UuidFilter<"cards"> | string
    userID?: UuidNullableFilter<"cards"> | string | null
    cardName?: StringFilter<"cards"> | string
    cardUUID?: StringFilter<"cards"> | string
    cardType?: UuidFilter<"cards"> | string
    status?: BoolFilter<"cards"> | boolean
    created_at?: DateTimeFilter<"cards"> | Date | string
    updated_at?: DateTimeFilter<"cards"> | Date | string
  }

  export type cardsOrderByWithRelationInput = {
    id?: SortOrder
    userID?: SortOrderInput | SortOrder
    cardName?: SortOrder
    cardUUID?: SortOrder
    cardType?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cardsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cardUUID?: string
    AND?: cardsWhereInput | cardsWhereInput[]
    OR?: cardsWhereInput[]
    NOT?: cardsWhereInput | cardsWhereInput[]
    userID?: UuidNullableFilter<"cards"> | string | null
    cardName?: StringFilter<"cards"> | string
    cardType?: UuidFilter<"cards"> | string
    status?: BoolFilter<"cards"> | boolean
    created_at?: DateTimeFilter<"cards"> | Date | string
    updated_at?: DateTimeFilter<"cards"> | Date | string
  }, "id" | "cardUUID">

  export type cardsOrderByWithAggregationInput = {
    id?: SortOrder
    userID?: SortOrderInput | SortOrder
    cardName?: SortOrder
    cardUUID?: SortOrder
    cardType?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: cardsCountOrderByAggregateInput
    _max?: cardsMaxOrderByAggregateInput
    _min?: cardsMinOrderByAggregateInput
  }

  export type cardsScalarWhereWithAggregatesInput = {
    AND?: cardsScalarWhereWithAggregatesInput | cardsScalarWhereWithAggregatesInput[]
    OR?: cardsScalarWhereWithAggregatesInput[]
    NOT?: cardsScalarWhereWithAggregatesInput | cardsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"cards"> | string
    userID?: UuidNullableWithAggregatesFilter<"cards"> | string | null
    cardName?: StringWithAggregatesFilter<"cards"> | string
    cardUUID?: StringWithAggregatesFilter<"cards"> | string
    cardType?: UuidWithAggregatesFilter<"cards"> | string
    status?: BoolWithAggregatesFilter<"cards"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"cards"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"cards"> | Date | string
  }

  export type card_typesWhereInput = {
    AND?: card_typesWhereInput | card_typesWhereInput[]
    OR?: card_typesWhereInput[]
    NOT?: card_typesWhereInput | card_typesWhereInput[]
    id?: UuidFilter<"card_types"> | string
    name?: StringFilter<"card_types"> | string
    created_at?: DateTimeFilter<"card_types"> | Date | string
    updated_at?: DateTimeFilter<"card_types"> | Date | string
  }

  export type card_typesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type card_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: card_typesWhereInput | card_typesWhereInput[]
    OR?: card_typesWhereInput[]
    NOT?: card_typesWhereInput | card_typesWhereInput[]
    created_at?: DateTimeFilter<"card_types"> | Date | string
    updated_at?: DateTimeFilter<"card_types"> | Date | string
  }, "id" | "name">

  export type card_typesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: card_typesCountOrderByAggregateInput
    _max?: card_typesMaxOrderByAggregateInput
    _min?: card_typesMinOrderByAggregateInput
  }

  export type card_typesScalarWhereWithAggregatesInput = {
    AND?: card_typesScalarWhereWithAggregatesInput | card_typesScalarWhereWithAggregatesInput[]
    OR?: card_typesScalarWhereWithAggregatesInput[]
    NOT?: card_typesScalarWhereWithAggregatesInput | card_typesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"card_types"> | string
    name?: StringWithAggregatesFilter<"card_types"> | string
    created_at?: DateTimeWithAggregatesFilter<"card_types"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"card_types"> | Date | string
  }

  export type card_saleWhereInput = {
    AND?: card_saleWhereInput | card_saleWhereInput[]
    OR?: card_saleWhereInput[]
    NOT?: card_saleWhereInput | card_saleWhereInput[]
    id?: UuidFilter<"card_sale"> | string
    cardID?: StringNullableListFilter<"card_sale">
    customer_name?: StringFilter<"card_sale"> | string
    address?: StringFilter<"card_sale"> | string
    phone?: StringFilter<"card_sale"> | string
    sale_date?: DateTimeFilter<"card_sale"> | Date | string
    price?: DecimalFilter<"card_sale"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"card_sale"> | number
    payment_status?: UuidFilter<"card_sale"> | string
    created_at?: DateTimeFilter<"card_sale"> | Date | string
    updated_at?: DateTimeFilter<"card_sale"> | Date | string
  }

  export type card_saleOrderByWithRelationInput = {
    id?: SortOrder
    cardID?: SortOrder
    customer_name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    sale_date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type card_saleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: card_saleWhereInput | card_saleWhereInput[]
    OR?: card_saleWhereInput[]
    NOT?: card_saleWhereInput | card_saleWhereInput[]
    cardID?: StringNullableListFilter<"card_sale">
    customer_name?: StringFilter<"card_sale"> | string
    address?: StringFilter<"card_sale"> | string
    phone?: StringFilter<"card_sale"> | string
    sale_date?: DateTimeFilter<"card_sale"> | Date | string
    price?: DecimalFilter<"card_sale"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"card_sale"> | number
    payment_status?: UuidFilter<"card_sale"> | string
    created_at?: DateTimeFilter<"card_sale"> | Date | string
    updated_at?: DateTimeFilter<"card_sale"> | Date | string
  }, "id">

  export type card_saleOrderByWithAggregationInput = {
    id?: SortOrder
    cardID?: SortOrder
    customer_name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    sale_date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: card_saleCountOrderByAggregateInput
    _avg?: card_saleAvgOrderByAggregateInput
    _max?: card_saleMaxOrderByAggregateInput
    _min?: card_saleMinOrderByAggregateInput
    _sum?: card_saleSumOrderByAggregateInput
  }

  export type card_saleScalarWhereWithAggregatesInput = {
    AND?: card_saleScalarWhereWithAggregatesInput | card_saleScalarWhereWithAggregatesInput[]
    OR?: card_saleScalarWhereWithAggregatesInput[]
    NOT?: card_saleScalarWhereWithAggregatesInput | card_saleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"card_sale"> | string
    cardID?: StringNullableListFilter<"card_sale">
    customer_name?: StringWithAggregatesFilter<"card_sale"> | string
    address?: StringWithAggregatesFilter<"card_sale"> | string
    phone?: StringWithAggregatesFilter<"card_sale"> | string
    sale_date?: DateTimeWithAggregatesFilter<"card_sale"> | Date | string
    price?: DecimalWithAggregatesFilter<"card_sale"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"card_sale"> | number
    payment_status?: UuidWithAggregatesFilter<"card_sale"> | string
    created_at?: DateTimeWithAggregatesFilter<"card_sale"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"card_sale"> | Date | string
  }

  export type payment_typesWhereInput = {
    AND?: payment_typesWhereInput | payment_typesWhereInput[]
    OR?: payment_typesWhereInput[]
    NOT?: payment_typesWhereInput | payment_typesWhereInput[]
    id?: UuidFilter<"payment_types"> | string
    name?: StringFilter<"payment_types"> | string
    created_at?: DateTimeFilter<"payment_types"> | Date | string
    updated_at?: DateTimeFilter<"payment_types"> | Date | string
  }

  export type payment_typesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: payment_typesWhereInput | payment_typesWhereInput[]
    OR?: payment_typesWhereInput[]
    NOT?: payment_typesWhereInput | payment_typesWhereInput[]
    created_at?: DateTimeFilter<"payment_types"> | Date | string
    updated_at?: DateTimeFilter<"payment_types"> | Date | string
  }, "id" | "name">

  export type payment_typesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: payment_typesCountOrderByAggregateInput
    _max?: payment_typesMaxOrderByAggregateInput
    _min?: payment_typesMinOrderByAggregateInput
  }

  export type payment_typesScalarWhereWithAggregatesInput = {
    AND?: payment_typesScalarWhereWithAggregatesInput | payment_typesScalarWhereWithAggregatesInput[]
    OR?: payment_typesScalarWhereWithAggregatesInput[]
    NOT?: payment_typesScalarWhereWithAggregatesInput | payment_typesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"payment_types"> | string
    name?: StringWithAggregatesFilter<"payment_types"> | string
    created_at?: DateTimeWithAggregatesFilter<"payment_types"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"payment_types"> | Date | string
  }

  export type cards_lossWhereInput = {
    AND?: cards_lossWhereInput | cards_lossWhereInput[]
    OR?: cards_lossWhereInput[]
    NOT?: cards_lossWhereInput | cards_lossWhereInput[]
    id?: UuidFilter<"cards_loss"> | string
    cardID?: StringFilter<"cards_loss"> | string
    userID?: StringFilter<"cards_loss"> | string
    description?: StringFilter<"cards_loss"> | string
    status?: EnumLossStatusFilter<"cards_loss"> | $Enums.LossStatus
    applyDate?: DateTimeFilter<"cards_loss"> | Date | string
    issueDate?: DateTimeFilter<"cards_loss"> | Date | string
  }

  export type cards_lossOrderByWithRelationInput = {
    id?: SortOrder
    cardID?: SortOrder
    userID?: SortOrder
    description?: SortOrder
    status?: SortOrder
    applyDate?: SortOrder
    issueDate?: SortOrder
  }

  export type cards_lossWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cards_lossWhereInput | cards_lossWhereInput[]
    OR?: cards_lossWhereInput[]
    NOT?: cards_lossWhereInput | cards_lossWhereInput[]
    cardID?: StringFilter<"cards_loss"> | string
    userID?: StringFilter<"cards_loss"> | string
    description?: StringFilter<"cards_loss"> | string
    status?: EnumLossStatusFilter<"cards_loss"> | $Enums.LossStatus
    applyDate?: DateTimeFilter<"cards_loss"> | Date | string
    issueDate?: DateTimeFilter<"cards_loss"> | Date | string
  }, "id">

  export type cards_lossOrderByWithAggregationInput = {
    id?: SortOrder
    cardID?: SortOrder
    userID?: SortOrder
    description?: SortOrder
    status?: SortOrder
    applyDate?: SortOrder
    issueDate?: SortOrder
    _count?: cards_lossCountOrderByAggregateInput
    _max?: cards_lossMaxOrderByAggregateInput
    _min?: cards_lossMinOrderByAggregateInput
  }

  export type cards_lossScalarWhereWithAggregatesInput = {
    AND?: cards_lossScalarWhereWithAggregatesInput | cards_lossScalarWhereWithAggregatesInput[]
    OR?: cards_lossScalarWhereWithAggregatesInput[]
    NOT?: cards_lossScalarWhereWithAggregatesInput | cards_lossScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"cards_loss"> | string
    cardID?: StringWithAggregatesFilter<"cards_loss"> | string
    userID?: StringWithAggregatesFilter<"cards_loss"> | string
    description?: StringWithAggregatesFilter<"cards_loss"> | string
    status?: EnumLossStatusWithAggregatesFilter<"cards_loss"> | $Enums.LossStatus
    applyDate?: DateTimeWithAggregatesFilter<"cards_loss"> | Date | string
    issueDate?: DateTimeWithAggregatesFilter<"cards_loss"> | Date | string
  }

  export type reader_deviceWhereInput = {
    AND?: reader_deviceWhereInput | reader_deviceWhereInput[]
    OR?: reader_deviceWhereInput[]
    NOT?: reader_deviceWhereInput | reader_deviceWhereInput[]
    id?: UuidFilter<"reader_device"> | string
    userID?: StringNullableFilter<"reader_device"> | string | null
    readerDeviceName?: StringFilter<"reader_device"> | string
    DeviceUUID?: StringFilter<"reader_device"> | string
    created_at?: DateTimeFilter<"reader_device"> | Date | string
    updated_at?: DateTimeFilter<"reader_device"> | Date | string
  }

  export type reader_deviceOrderByWithRelationInput = {
    id?: SortOrder
    userID?: SortOrderInput | SortOrder
    readerDeviceName?: SortOrder
    DeviceUUID?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reader_deviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reader_deviceWhereInput | reader_deviceWhereInput[]
    OR?: reader_deviceWhereInput[]
    NOT?: reader_deviceWhereInput | reader_deviceWhereInput[]
    userID?: StringNullableFilter<"reader_device"> | string | null
    readerDeviceName?: StringFilter<"reader_device"> | string
    DeviceUUID?: StringFilter<"reader_device"> | string
    created_at?: DateTimeFilter<"reader_device"> | Date | string
    updated_at?: DateTimeFilter<"reader_device"> | Date | string
  }, "id">

  export type reader_deviceOrderByWithAggregationInput = {
    id?: SortOrder
    userID?: SortOrderInput | SortOrder
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
    userID?: StringNullableWithAggregatesFilter<"reader_device"> | string | null
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
    cardID?: StringNullableFilter<"reader_logs"> | string | null
    reader_deviceID?: UuidFilter<"reader_logs"> | string
    status?: BoolFilter<"reader_logs"> | boolean
    readDate?: DateTimeFilter<"reader_logs"> | Date | string
    created_at?: DateTimeFilter<"reader_logs"> | Date | string
    updated_at?: DateTimeFilter<"reader_logs"> | Date | string
  }

  export type reader_logsOrderByWithRelationInput = {
    id?: SortOrder
    cardID?: SortOrderInput | SortOrder
    reader_deviceID?: SortOrder
    status?: SortOrder
    readDate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reader_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reader_logsWhereInput | reader_logsWhereInput[]
    OR?: reader_logsWhereInput[]
    NOT?: reader_logsWhereInput | reader_logsWhereInput[]
    cardID?: StringNullableFilter<"reader_logs"> | string | null
    reader_deviceID?: UuidFilter<"reader_logs"> | string
    status?: BoolFilter<"reader_logs"> | boolean
    readDate?: DateTimeFilter<"reader_logs"> | Date | string
    created_at?: DateTimeFilter<"reader_logs"> | Date | string
    updated_at?: DateTimeFilter<"reader_logs"> | Date | string
  }, "id">

  export type reader_logsOrderByWithAggregationInput = {
    id?: SortOrder
    cardID?: SortOrderInput | SortOrder
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
    cardID?: StringNullableWithAggregatesFilter<"reader_logs"> | string | null
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
    brandLogo?: string | null
    brandName?: string | null
    fb_link?: string | null
    youtube_link?: string | null
    instagram_link?: string | null
    tiktok_link?: string | null
    WebUUID?: string
    phoneNo: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUncheckedCreateInput = {
    id?: string
    username: string
    brandLogo?: string | null
    brandName?: string | null
    fb_link?: string | null
    youtube_link?: string | null
    instagram_link?: string | null
    tiktok_link?: string | null
    WebUUID?: string
    phoneNo: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    brandLogo?: NullableStringFieldUpdateOperationsInput | string | null
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    fb_link?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_link?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_link?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link?: NullableStringFieldUpdateOperationsInput | string | null
    WebUUID?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    brandLogo?: NullableStringFieldUpdateOperationsInput | string | null
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    fb_link?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_link?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_link?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link?: NullableStringFieldUpdateOperationsInput | string | null
    WebUUID?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    id?: string
    username: string
    brandLogo?: string | null
    brandName?: string | null
    fb_link?: string | null
    youtube_link?: string | null
    instagram_link?: string | null
    tiktok_link?: string | null
    WebUUID?: string
    phoneNo: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    brandLogo?: NullableStringFieldUpdateOperationsInput | string | null
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    fb_link?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_link?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_link?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link?: NullableStringFieldUpdateOperationsInput | string | null
    WebUUID?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    brandLogo?: NullableStringFieldUpdateOperationsInput | string | null
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    fb_link?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_link?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_link?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_link?: NullableStringFieldUpdateOperationsInput | string | null
    WebUUID?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cardsCreateInput = {
    id?: string
    userID?: string | null
    cardName: string
    cardUUID?: string
    cardType: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cardsUncheckedCreateInput = {
    id?: string
    userID?: string | null
    cardName: string
    cardUUID?: string
    cardType: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cardsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    cardName?: StringFieldUpdateOperationsInput | string
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cardsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    cardName?: StringFieldUpdateOperationsInput | string
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cardsCreateManyInput = {
    id?: string
    userID?: string | null
    cardName: string
    cardUUID?: string
    cardType: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cardsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    cardName?: StringFieldUpdateOperationsInput | string
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cardsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    cardName?: StringFieldUpdateOperationsInput | string
    cardUUID?: StringFieldUpdateOperationsInput | string
    cardType?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type card_typesCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type card_typesUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type card_typesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type card_typesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type card_typesCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type card_typesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type card_typesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type card_saleCreateInput = {
    id?: string
    cardID?: card_saleCreatecardIDInput | string[]
    customer_name: string
    address: string
    phone: string
    sale_date?: Date | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    payment_status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type card_saleUncheckedCreateInput = {
    id?: string
    cardID?: card_saleCreatecardIDInput | string[]
    customer_name: string
    address: string
    phone: string
    sale_date?: Date | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    payment_status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type card_saleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: card_saleUpdatecardIDInput | string[]
    customer_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type card_saleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: card_saleUpdatecardIDInput | string[]
    customer_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type card_saleCreateManyInput = {
    id?: string
    cardID?: card_saleCreatecardIDInput | string[]
    customer_name: string
    address: string
    phone: string
    sale_date?: Date | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    payment_status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type card_saleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: card_saleUpdatecardIDInput | string[]
    customer_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type card_saleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: card_saleUpdatecardIDInput | string[]
    customer_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_typesCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type payment_typesUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type payment_typesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_typesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_typesCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type payment_typesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_typesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cards_lossCreateInput = {
    id?: string
    cardID: string
    userID: string
    description: string
    status?: $Enums.LossStatus
    applyDate?: Date | string
    issueDate?: Date | string
  }

  export type cards_lossUncheckedCreateInput = {
    id?: string
    cardID: string
    userID: string
    description: string
    status?: $Enums.LossStatus
    applyDate?: Date | string
    issueDate?: Date | string
  }

  export type cards_lossUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumLossStatusFieldUpdateOperationsInput | $Enums.LossStatus
    applyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cards_lossUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumLossStatusFieldUpdateOperationsInput | $Enums.LossStatus
    applyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cards_lossCreateManyInput = {
    id?: string
    cardID: string
    userID: string
    description: string
    status?: $Enums.LossStatus
    applyDate?: Date | string
    issueDate?: Date | string
  }

  export type cards_lossUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumLossStatusFieldUpdateOperationsInput | $Enums.LossStatus
    applyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cards_lossUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumLossStatusFieldUpdateOperationsInput | $Enums.LossStatus
    applyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_deviceCreateInput = {
    id?: string
    userID?: string | null
    readerDeviceName: string
    DeviceUUID: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_deviceUncheckedCreateInput = {
    id?: string
    userID?: string | null
    readerDeviceName: string
    DeviceUUID: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_deviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_deviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_deviceCreateManyInput = {
    id?: string
    userID?: string | null
    readerDeviceName: string
    DeviceUUID: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_deviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_deviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    readerDeviceName?: StringFieldUpdateOperationsInput | string
    DeviceUUID?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_logsCreateInput = {
    id?: string
    cardID?: string | null
    reader_deviceID: string
    status: boolean
    readDate: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_logsUncheckedCreateInput = {
    id?: string
    cardID?: string | null
    reader_deviceID: string
    status: boolean
    readDate: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: NullableStringFieldUpdateOperationsInput | string | null
    reader_deviceID?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: NullableStringFieldUpdateOperationsInput | string | null
    reader_deviceID?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_logsCreateManyInput = {
    id?: string
    cardID?: string | null
    reader_deviceID: string
    status: boolean
    readDate: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reader_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: NullableStringFieldUpdateOperationsInput | string | null
    reader_deviceID?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    readDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reader_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardID?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    brandLogo?: SortOrder
    brandName?: SortOrder
    fb_link?: SortOrder
    youtube_link?: SortOrder
    instagram_link?: SortOrder
    tiktok_link?: SortOrder
    WebUUID?: SortOrder
    phoneNo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    brandLogo?: SortOrder
    brandName?: SortOrder
    fb_link?: SortOrder
    youtube_link?: SortOrder
    instagram_link?: SortOrder
    tiktok_link?: SortOrder
    WebUUID?: SortOrder
    phoneNo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    brandLogo?: SortOrder
    brandName?: SortOrder
    fb_link?: SortOrder
    youtube_link?: SortOrder
    instagram_link?: SortOrder
    tiktok_link?: SortOrder
    WebUUID?: SortOrder
    phoneNo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type card_typesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type card_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type card_typesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type card_saleCountOrderByAggregateInput = {
    id?: SortOrder
    cardID?: SortOrder
    customer_name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    sale_date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type card_saleAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type card_saleMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    sale_date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type card_saleMinOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    sale_date?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type card_saleSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type payment_typesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_typesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumLossStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LossStatus | EnumLossStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LossStatus[] | ListEnumLossStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LossStatus[] | ListEnumLossStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLossStatusFilter<$PrismaModel> | $Enums.LossStatus
  }

  export type cards_lossCountOrderByAggregateInput = {
    id?: SortOrder
    cardID?: SortOrder
    userID?: SortOrder
    description?: SortOrder
    status?: SortOrder
    applyDate?: SortOrder
    issueDate?: SortOrder
  }

  export type cards_lossMaxOrderByAggregateInput = {
    id?: SortOrder
    cardID?: SortOrder
    userID?: SortOrder
    description?: SortOrder
    status?: SortOrder
    applyDate?: SortOrder
    issueDate?: SortOrder
  }

  export type cards_lossMinOrderByAggregateInput = {
    id?: SortOrder
    cardID?: SortOrder
    userID?: SortOrder
    description?: SortOrder
    status?: SortOrder
    applyDate?: SortOrder
    issueDate?: SortOrder
  }

  export type EnumLossStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LossStatus | EnumLossStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LossStatus[] | ListEnumLossStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LossStatus[] | ListEnumLossStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLossStatusWithAggregatesFilter<$PrismaModel> | $Enums.LossStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLossStatusFilter<$PrismaModel>
    _max?: NestedEnumLossStatusFilter<$PrismaModel>
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type card_saleCreatecardIDInput = {
    set: string[]
  }

  export type card_saleUpdatecardIDInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumLossStatusFieldUpdateOperationsInput = {
    set?: $Enums.LossStatus
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumLossStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LossStatus | EnumLossStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LossStatus[] | ListEnumLossStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LossStatus[] | ListEnumLossStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLossStatusFilter<$PrismaModel> | $Enums.LossStatus
  }

  export type NestedEnumLossStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LossStatus | EnumLossStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LossStatus[] | ListEnumLossStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LossStatus[] | ListEnumLossStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLossStatusWithAggregatesFilter<$PrismaModel> | $Enums.LossStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLossStatusFilter<$PrismaModel>
    _max?: NestedEnumLossStatusFilter<$PrismaModel>
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