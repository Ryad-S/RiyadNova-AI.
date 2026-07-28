import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import db from "../database/db.js";


const JWT_SECRET = "riyadnova_secret_key";



export async function register(req,res){

  try {

      const {
            name,
                  email,
                        password
                            } = req.body;


                                const hashedPassword =
                                      await bcrypt.hash(password,10);



                                          db.run(
                                                `
                                                      INSERT INTO users
                                                            (name,email,password)
                                                                  VALUES (?,?,?)
                                                                        `,
                                                                              [
                                                                                      name,
                                                                                              email,
                                                                                                      hashedPassword
                                                                                                            ],
                                                                                                                  function(error){


                                                                                                                          if(error){

                                                                                                                                    return res.json({

                                                                                                                                                status:"error",

                                                                                                                                                            message:error.message

                                                                                                                                                                      });

                                                                                                                                                                              }



                                                                                                                                                                                      res.json({

                                                                                                                                                                                                status:"success",

                                                                                                                                                                                                          message:"User created successfully",

                                                                                                                                                                                                                    userId:this.lastID

                                                                                                                                                                                                                            });


                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                      );


                                                                                                                                                                                                                                        } catch(error){

                                                                                                                                                                                                                                            res.json({

                                                                                                                                                                                                                                                  status:"error",

                                                                                                                                                                                                                                                        message:error.message

                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                              }




                                                                                                                                                                                                                                                              export function login(req,res){


                                                                                                                                                                                                                                                                const {
                                                                                                                                                                                                                                                                    email,
                                                                                                                                                                                                                                                                        password
                                                                                                                                                                                                                                                                          } = req.body;



                                                                                                                                                                                                                                                                            db.get(
                                                                                                                                                                                                                                                                                `
                                                                                                                                                                                                                                                                                    SELECT *
                                                                                                                                                                                                                                                                                        FROM users
                                                                                                                                                                                                                                                                                            WHERE email = ?
                                                                                                                                                                                                                                                                                                `,
                                                                                                                                                                                                                                                                                                    [email],

                                                                                                                                                                                                                                                                                                        async (error,user)=>{


                                                                                                                                                                                                                                                                                                              if(error){

                                                                                                                                                                                                                                                                                                                      return res.json({

                                                                                                                                                                                                                                                                                                                                status:"error",

                                                                                                                                                                                                                                                                                                                                          message:error.message

                                                                                                                                                                                                                                                                                                                                                  });

                                                                                                                                                                                                                                                                                                                                                        }



                                                                                                                                                                                                                                                                                                                                                              if(!user){

                                                                                                                                                                                                                                                                                                                                                                      return res.json({

                                                                                                                                                                                                                                                                                                                                                                                status:"error",

                                                                                                                                                                                                                                                                                                                                                                                          message:"User not found"

                                                                                                                                                                                                                                                                                                                                                                                                  });

                                                                                                                                                                                                                                                                                                                                                                                                        }



                                                                                                                                                                                                                                                                                                                                                                                                              const match =
                                                                                                                                                                                                                                                                                                                                                                                                                      await bcrypt.compare(
                                                                                                                                                                                                                                                                                                                                                                                                                                password,
                                                                                                                                                                                                                                                                                                                                                                                                                                          user.password
                                                                                                                                                                                                                                                                                                                                                                                                                                                  );



                                                                                                                                                                                                                                                                                                                                                                                                                                                        if(!match){

                                                                                                                                                                                                                                                                                                                                                                                                                                                                return res.json({

                                                                                                                                                                                                                                                                                                                                                                                                                                                                          status:"error",

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    message:"Wrong password"

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        const token =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                jwt.sign(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      id:user.id,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  email:user.email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      JWT_SECRET,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            expiresIn:"7d"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              );



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    res.json({

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            status:"success",

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    token,

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            user:{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      id:user.id,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                name:user.name,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          email:user.email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        });



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              );


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }