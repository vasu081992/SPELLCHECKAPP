import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  wokr:"work",  
  fot: "for",
  exampl: "example",
  ttt:"the",
  examp:"example",
  fto:"for"
};

const SpellCheckApp = () => {

  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

const [correctedText,setcorrectedText]= useState('')


console.log("typed text",inputText)

console.log("correctedText",correctedText)




const handleInputChange = (e)=>{

  const text = e.target.value;

  setInputText(text);

  const arrayofWordsTyped = text.split(' ');

  const correctedwordsArray = arrayofWordsTyped.map((word)=> {
    
     const correctedWord = customDictionary[word.toLowerCase()];

       return correctedWord || word;  

  })

     const correctedText = correctedwordsArray.join(" ");

     setcorrectedText(correctedText)

      let firstCorrection = correctedwordsArray.find((word,index)=>(
    
       word!==arrayofWordsTyped[index]

      ))


     setSuggestedText(firstCorrection)


}


  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={45}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
};

export default SpellCheckApp;