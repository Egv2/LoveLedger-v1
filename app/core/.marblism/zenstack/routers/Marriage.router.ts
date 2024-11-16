/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.'
import * as _Schema from '@zenstackhq/runtime/zod/input'
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema
import { checkRead, checkMutate } from '../helper'
import type { Prisma } from '@zenstackhq/runtime/models'
import type {
  UseTRPCMutationOptions,
  UseTRPCMutationResult,
  UseTRPCQueryOptions,
  UseTRPCQueryResult,
  UseTRPCInfiniteQueryOptions,
  UseTRPCInfiniteQueryResult,
} from '@trpc/react-query/shared'
import type { TRPCClientErrorLike } from '@trpc/client'
import type { AnyRouter } from '@trpc/server'

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    createMany: procedure
      .input($Schema.MarriageInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).marriage.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.MarriageInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).marriage.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.MarriageInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).marriage.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.MarriageInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).marriage.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.MarriageInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).marriage.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.MarriageInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).marriage.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.MarriageInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).marriage.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.MarriageInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).marriage.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.MarriageInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).marriage.update(input as any)),
      ),

    count: procedure
      .input($Schema.MarriageInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).marriage.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.MarriageCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.MarriageCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.MarriageCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.MarriageCreateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  create: {
    useMutation: <T extends Prisma.MarriageCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.MarriageCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.MarriageGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.MarriageGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.MarriageCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.MarriageCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.MarriageGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.MarriageGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.MarriageDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.MarriageDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.MarriageDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.MarriageDeleteManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  delete: {
    useMutation: <T extends Prisma.MarriageDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.MarriageDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.MarriageGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.MarriageGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.MarriageDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.MarriageDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.MarriageGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.MarriageGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.MarriageFindFirstArgs,
      TData = Prisma.MarriageGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.MarriageFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.MarriageGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.MarriageFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.MarriageFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.MarriageGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.MarriageGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.MarriageFindManyArgs,
      TData = Array<Prisma.MarriageGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.MarriageFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.MarriageGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.MarriageFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.MarriageFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.MarriageGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.MarriageGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.MarriageFindUniqueArgs,
      TData = Prisma.MarriageGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.MarriageFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.MarriageGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.MarriageFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.MarriageFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.MarriageGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.MarriageGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.MarriageUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.MarriageUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.MarriageUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.MarriageUpdateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  update: {
    useMutation: <T extends Prisma.MarriageUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.MarriageUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.MarriageGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.MarriageGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.MarriageUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.MarriageUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.MarriageGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.MarriageGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.MarriageCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.MarriageCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.MarriageCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.MarriageCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.MarriageCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.MarriageCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.MarriageCountAggregateOutputType
              >
          : number,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.MarriageCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
