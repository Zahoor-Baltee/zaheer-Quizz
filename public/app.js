 var myQuestion = document.getElementById('question');
var myOption = document.getElementById('option');
var indexValue=0;
var marks = 0;
var questionsArray = [
        {
        question: "if x is a set contains an integer which is neither positive nor negative then the set x is ",
        answer: "set is both non-empty and finite ",
        options: [
            "set is empty ",
            "set is non empty ",
            "set is finite ",
            "set is both non-empty and finite ",
        ]
    },
    {
        question: "If x ∈ N and x is prime, then x is ____ set.",
        answer: 0,
        options: [
            "a.	Infinite set",
            "b.	Finite set",
            "c.	Empty set",
            "d.	Not a set",
        ]
    },
    {
        question: "If x is a set and the set contains the real number between 1 and 2, then the set is ____.",
        answer: 2,
        options: [
            "a.	Infinite set",
            "b.	Finite set",
            "c.	Empty set",
            "d.	Not mentioned",
        ]
    },
    {
        question: "Which of the following is a subset of set {1, 2, 3, 4}?",
        answer: 3,
        options: [
            "	{1, 2}",
            "	{1, 2, 3}",
            "	{1}",
            "	All of the mentioned",
        ]
    },
    {
        question: "Convert the set x in roster form if set x contains the positive prime number, which divides 72.",
        answer: 1,
        options: [
            "a.	{∅}",
            "b.	{2, 3}",
            "c.	{2, 3, 7}",
            "d.	{3, 5, 7}",
        ]
    },
  
]


function renderQuestion(){

    myQuestion.innerHTML = questionsArray[indexValue].question;
    
    for(var i=0;i<questionsArray[indexValue].options.length;i++){
        var obtainValue = questionsArray[indexValue].options[i];
        
        myOption.innerHTML = obtainValue;

        
    }
}
renderQuestion();
function next(){
    
    var correctValue = questionsArray[indexValue].answer;
    console.log(correctValue);
    // var selected = document.querySelector('input[type="radio"]:checked'); 
    // var ans=selected.parentNode.innerText;
    console.log(ans)
    var ansarr= questionsArray[indexValue].options;
    console.log(ansarr)
    var inans = ansarr.indexOf(ans);
    console.log(inans)
    // var a = "b.	{2, 3}";
    // var b = "b.	{2, 3}" ;
    option.innerHTML="";

    if(indexValue+1 == questionsArray.length){
        alert("Your Marks is "+ marks);
    }else if(ans == correctValue){
        marks++;
    }
    indexValue++;
    renderQuestion();
}




