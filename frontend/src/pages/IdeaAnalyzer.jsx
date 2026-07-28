import { useState } from "react";


function IdeaAnalyzer(){

  const [idea,setIdea] = useState("");

    const [result,setResult] = useState("");

      const [loading,setLoading] = useState(false);



        async function analyze(){

            if(!idea){
                  return;
                      }


                          setLoading(true);


                              try{

                                    const response = await fetch(
                                            "http://localhost:5000/api/ai/analyze",
                                                    {

                                                              method:"POST",

                                                                        headers:{
                                                                                    "Content-Type":"application/json"
                                                                                              },

                                                                                                        body:JSON.stringify({
                                                                                                                    idea
                                                                                                                              })

                                                                                                                                      }
                                                                                                                                            );


                                                                                                                                                  const data = await response.json();


                                                                                                                                                        setResult(
                                                                                                                                                                JSON.stringify(data,null,2)
                                                                                                                                                                      );


                                                                                                                                                                          }catch(error){

                                                                                                                                                                                setResult(
                                                                                                                                                                                        "Server connection error"
                                                                                                                                                                                              );

                                                                                                                                                                                                  }


                                                                                                                                                                                                      setLoading(false);

                                                                                                                                                                                                        }




                                                                                                                                                                                                          return (

                                                                                                                                                                                                              <div className="auth-page">


                                                                                                                                                                                                                    <div className="auth-card">


                                                                                                                                                                                                                            <h1>
                                                                                                                                                                                                                                      🧠 Nova Idea Engine
                                                                                                                                                                                                                                              </h1>



                                                                                                                                                                                                                                                      <p>
                                                                                                                                                                                                                                                                اكتب فكرتك وسيقوم RiyadNova AI بتحليلها
                                                                                                                                                                                                                                                                        </p>



                                                                                                                                                                                                                                                                                <textarea

                                                                                                                                                                                                                                                                                          placeholder="اكتب فكرة مشروعك هنا..."

                                                                                                                                                                                                                                                                                                    value={idea}

                                                                                                                                                                                                                                                                                                              onChange={
                                                                                                                                                                                                                                                                                                                          (e)=>setIdea(e.target.value)
                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                              rows="6"

                                                                                                                                                                                                                                                                                                                                                      />



                                                                                                                                                                                                                                                                                                                                                              <button

                                                                                                                                                                                                                                                                                                                                                                        onClick={analyze}

                                                                                                                                                                                                                                                                                                                                                                                >

                                                                                                                                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                                                                                                                                                      loading
                                                                                                                                                                                                                                                                                                                                                                                                                  ?
                                                                                                                                                                                                                                                                                                                                                                                                                              "جاري التحليل..."
                                                                                                                                                                                                                                                                                                                                                                                                                                          :
                                                                                                                                                                                                                                                                                                                                                                                                                                                      "تحليل الفكرة"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </button>



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          result &&

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div className="result-box">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <pre>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              {result}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </pre>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        );

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        export default IdeaAnalyzer;