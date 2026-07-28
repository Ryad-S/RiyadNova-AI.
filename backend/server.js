import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";


dotenv.config();


const app = express();


/*
========================
 RiyadNova AI Core Server
 ========================
 */


 // Security
 app.use(
   helmet()
   );


   // Allow Frontend
   app.use(
     cors({
         origin:"http://localhost:5173",
             credentials:true
               })
               );


               // Logs
               app.use(
                 morgan("dev")
                 );


                 // JSON Engine
                 app.use(
                   express.json({
                       limit:"10mb"
                         })
                         );



                         // =====================
                         // API ROUTES
                         // =====================


                         app.use(
                           "/api/auth",
                             authRoutes
                             );



                             // AI Engine Placeholder

                             app.post(
                               "/api/ai/analyze",
                                 async(req,res)=>{

                                     try{

                                           const {
                                                   idea
                                                         } = req.body;


                                                               if(!idea){

                                                                       return res.status(400).json({

                                                                                 status:"error",

                                                                                           message:"Idea is required"

                                                                                                   });

                                                                                                         }



                                                                                                               /*
                                                                                                                       هنا سيتم ربط نموذج الذكاء الاصطناعي
                                                                                                                               الخاص بـ RiyadNova AI
                                                                                                                                     */


                                                                                                                                           res.json({

                                                                                                                                                   status:"success",

                                                                                                                                                           engine:"RiyadNova Intelligence Core",

                                                                                                                                                                   result:{

                                                                                                                                                                             idea,

                                                                                                                                                                                       analysis:
                                                                                                                                                                                                 "AI analysis system ready"

                                                                                                                                                                                                         }

                                                                                                                                                                                                               });


                                                                                                                                                                                                                   }catch(error){


                                                                                                                                                                                                                         res.status(500).json({

                                                                                                                                                                                                                                 status:"error",

                                                                                                                                                                                                                                         message:error.message

                                                                                                                                                                                                                                               });


                                                                                                                                                                                                                                                   }


                                                                                                                                                                                                                                                     }

                                                                                                                                                                                                                                                     );




                                                                                                                                                                                                                                                     // Health Check

                                                                                                                                                                                                                                                     app.get(
                                                                                                                                                                                                                                                     "/",
                                                                                                                                                                                                                                                     (req,res)=>{


                                                                                                                                                                                                                                                     res.json({

                                                                                                                                                                                                                                                     status:"online",

                                                                                                                                                                                                                                                     name:"RiyadNova AI",

                                                                                                                                                                                                                                                     version:"1.0.0",

                                                                                                                                                                                                                                                     message:
                                                                                                                                                                                                                                                     "Advanced AI Platform Backend Running"

                                                                                                                                                                                                                                                     });


                                                                                                                                                                                                                                                     });





                                                                                                                                                                                                                                                     // Error Handler

                                                                                                                                                                                                                                                     app.use(

                                                                                                                                                                                                                                                     (error,req,res,next)=>{


                                                                                                                                                                                                                                                     console.error(error);


                                                                                                                                                                                                                                                     res.status(500).json({

                                                                                                                                                                                                                                                     status:"error",

                                                                                                                                                                                                                                                     message:
                                                                                                                                                                                                                                                     "Internal Server Error"

                                                                                                                                                                                                                                                     });


                                                                                                                                                                                                                                                     }

                                                                                                                                                                                                                                                     );





                                                                                                                                                                                                                                                     const PORT =
                                                                                                                                                                                                                                                     process.env.PORT || 5000;



                                                                                                                                                                                                                                                     app.listen(
                                                                                                                                                                                                                                                     PORT,
                                                                                                                                                                                                                                                     ()=>{

                                                                                                                                                                                                                                                     console.log(`
                                                                                                                                                                                                                                                     ================================

                                                                                                                                                                                                                                                     🚀 RiyadNova AI Server Started

                                                                                                                                                                                                                                                     PORT: ${PORT}

                                                                                                                                                                                                                                                     STATUS: ONLINE

                                                                                                                                                                                                                                                     ================================
                                                                                                                                                                                                                                                     `);

                                                                                                                                                                                                                                                     }
                                                                                                                                                                                                                                                     );