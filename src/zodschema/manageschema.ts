import { z } from 'zod';

export const bookSchema = z.object({
  body: z.object({
    book: z.string({ required_error: 'book is required !' }),
    id: z.string({ required_error: 'id is required !' }).min(3),
    genere: z.string({ required_error: 'genere is required !' })
  }),
});

export const loanSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'id for the loan is required !' }),
    userid: z.string({ required_error: 'user id  is required !' }),
    bookid: z.string({ required_error: 'book id is required !' }),
  }),
});

export const userSchema = z.object({
    body: z.object({
      id: z.string({ required_error: 'id  is required !' }),
      username: z.string({ required_error: 'username  is required !' }),
      password: z.string({ required_error: 'password  is required !' }),
    }),
  });


export const paramSchema = z.object({
  params: z.object({
    userid: z.string(),
  }),
});

export type paramsschemaType = z.infer<typeof paramSchema>['params'];