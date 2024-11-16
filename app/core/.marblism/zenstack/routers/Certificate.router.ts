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
      .input($Schema.CertificateInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).certificate.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.CertificateInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).certificate.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.CertificateInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).certificate.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.CertificateInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).certificate.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.CertificateInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).certificate.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.CertificateInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).certificate.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.CertificateInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).certificate.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.CertificateInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).certificate.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.CertificateInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).certificate.update(input as any)),
      ),

    count: procedure
      .input($Schema.CertificateInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).certificate.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.CertificateCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CertificateCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CertificateCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CertificateCreateManyArgs>(
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
    useMutation: <T extends Prisma.CertificateCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CertificateCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.CertificateGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.CertificateGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CertificateCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CertificateCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.CertificateGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.CertificateGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.CertificateDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CertificateDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CertificateDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CertificateDeleteManyArgs>(
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
    useMutation: <T extends Prisma.CertificateDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CertificateDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.CertificateGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.CertificateGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CertificateDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CertificateDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.CertificateGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.CertificateGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.CertificateFindFirstArgs,
      TData = Prisma.CertificateGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.CertificateFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.CertificateGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CertificateFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.CertificateFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.CertificateGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.CertificateGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.CertificateFindManyArgs,
      TData = Array<Prisma.CertificateGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.CertificateFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.CertificateGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CertificateFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.CertificateFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.CertificateGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.CertificateGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.CertificateFindUniqueArgs,
      TData = Prisma.CertificateGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.CertificateFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.CertificateGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CertificateFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.CertificateFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.CertificateGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.CertificateGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.CertificateUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CertificateUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CertificateUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CertificateUpdateManyArgs>(
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
    useMutation: <T extends Prisma.CertificateUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CertificateUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.CertificateGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.CertificateGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CertificateUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CertificateUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.CertificateGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.CertificateGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.CertificateCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.CertificateCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.CertificateCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.CertificateCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CertificateCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.CertificateCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.CertificateCountAggregateOutputType
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
              Prisma.CertificateCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
