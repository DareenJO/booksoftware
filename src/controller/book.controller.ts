import { user,books,loan } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { paramsschemaType } from '../zodschema/manageschema';

import { prisma } from "../config/db";
import { Request, Response } from 'express';


export const getuser = async (req: Request, res: Response) => {
    try {
      console.log("im here ");
      
      const getusers = await prisma.user.findMany();
      return res.status(200).json(getusers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        mrssage: "server Error !",
      });
    }
  };
  
  export const addusers = async (req: Request, res: Response) => {
    try {
      const newUser = req.body as user;
  
      await prisma.user.create({
        data: newUser,
      });
      return res.status(200).json({
        message: "user has been added !",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        mrssage: "server Error !",
      });
    }
  };





  export const getbooks = async (req: Request, res: Response) => {
    try {
      const getBook = await prisma.books.findMany();
      return res.status(200).json(getBook);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        mrssage: "server Error !",
      });
    }
  };
  
  export const addbook = async (req: Request, res: Response) => {
    try {
      const bookadd = req.body as books;
      await prisma.books.create({ data: bookadd });
  
      return res.status(201).json({
        message: "book has been added !",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        mrssage: "server Error !",
      });
    }
  };





  export const getLoan = async (req: Request, res: Response) => {
    try {
      const allLoans = await prisma.loan.findMany();
      return res.status(200).json(allLoans);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };
  
 
  export const addloan = async (req: Request, res: Response) => {
    try {
      const loanadd = req.body as loan;
      await prisma.loan.create({ data: loanadd });
  
      return res.status(201).json({
        message: "loan has been  added",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };
  
 
  export const lendbook = async (req: Request, res: Response) => {
    try {
      const {id} = req.params as user;
  
      const getbookuser = await prisma.user.findUnique({
        
        where: {id},
        select: {
          username: true,
          loan: true,
        },
      });
  
      return res.status(200).json(getbookuser);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error!",
      });
    }
  };
  




 