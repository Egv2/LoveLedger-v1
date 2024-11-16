/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ProposalInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).proposal.createMany(input as any))),

        create: procedure.input($Schema.ProposalInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).proposal.create(input as any))),

        deleteMany: procedure.input($Schema.ProposalInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).proposal.deleteMany(input as any))),

        delete: procedure.input($Schema.ProposalInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).proposal.delete(input as any))),

        findFirst: procedure.input($Schema.ProposalInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).proposal.findFirst(input as any))),

        findMany: procedure.input($Schema.ProposalInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).proposal.findMany(input as any))),

        findUnique: procedure.input($Schema.ProposalInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).proposal.findUnique(input as any))),

        updateMany: procedure.input($Schema.ProposalInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).proposal.updateMany(input as any))),

        update: procedure.input($Schema.ProposalInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).proposal.update(input as any))),

        count: procedure.input($Schema.ProposalInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).proposal.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ProposalCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProposalCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProposalCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProposalCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ProposalCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProposalCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ProposalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ProposalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProposalCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProposalCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ProposalGetPayload<T>, Context>) => Promise<Prisma.ProposalGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ProposalDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProposalDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProposalDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProposalDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ProposalDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProposalDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ProposalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ProposalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProposalDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProposalDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ProposalGetPayload<T>, Context>) => Promise<Prisma.ProposalGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ProposalFindFirstArgs, TData = Prisma.ProposalGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ProposalFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ProposalGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ProposalFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ProposalFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ProposalGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ProposalGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ProposalFindManyArgs, TData = Array<Prisma.ProposalGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ProposalFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ProposalGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ProposalFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ProposalFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ProposalGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ProposalGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ProposalFindUniqueArgs, TData = Prisma.ProposalGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ProposalFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ProposalGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ProposalFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ProposalFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ProposalGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ProposalGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ProposalUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProposalUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProposalUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProposalUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ProposalUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProposalUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ProposalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ProposalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProposalUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProposalUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ProposalGetPayload<T>, Context>) => Promise<Prisma.ProposalGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ProposalCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ProposalCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ProposalCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ProposalCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ProposalCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ProposalCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ProposalCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ProposalCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
