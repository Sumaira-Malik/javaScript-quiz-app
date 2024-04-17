const quizData = [
    //q1
    {
      question: "1.Which of the following methods can be used to display data in some form using Javascript?",
      options: ["(a) Document.write()", "(b) Console.log()", "(c) Window.alert()", "(d)All of above"],
      answer: "(d)All of above",
      explanation: "All of the above methods are used to display data in some form using Javascript."
    },
    //q2
    {
      question: "2.Which programming language is used to make websites interactive?",
      options: [" (a)HTML", "(b)CSS", "(c) JavaScript", "(d)Python"],
      answer: "(c) JavaScript",
      explanation: "JavaScript is used to make websites interactive by adding behavior to web pages. It allows for features like dynamic content, form validation, and user interaction."
    },
    //q3
    
    {
      question: "3.Which of the following methods is used to access HTML elements using Javascript?",
      options: ["(a)grtElementById()", "(b)getElementByClassName()", " (c)both A and B", "(d) None of above"],
      answer: " (c)both A and B",
      explanation: "Both the above methods are used to access HTML elements using Javascript."
    },
    //q4
    {
      question: "4.Upon encountering empty statements, what does the Javascript Interpreter do?",
      options: ["(a)Throws an error ", "(b) Ignores the statements", "(c) Gives a warning", "(d) None of the above"],
      answer:  "(b) Ignores the statements",
      explanation: "In Javascript, the interpreter will ignore the empty statements whenever it encounters them.."
    },
    //q5
    {
      question: "5.When the switch statement matches the expression with the given labels, how is the comparison done?",
      options: ["(a)both the datatype and the result of the expression are compared.", "(b) only the datatype of the expression compared.", "(c)only the value of the expression is compared.", "(d)none of the above."],
      answer: "(a)both the datatype and the result of the expression are compared.",
      explanation: "Switch performs an ' ===' based comparison, i.e both the value of the expression and its datatype is compared."
    },
    //q6
    {
      question: "6.What keyword is used to check whether a given property is valid or not?",
      options: ["(a)in", "(b)is in", "(c) exists", "(d)lies"],
      answer: "(a)in",
      explanation: "External CSS can be included in an HTML document using the <link> tag with the 'href' attribute specifying the path to the CSS file."
    },
    //q7
    {
      question: "7.When an operator’s value is NULL, the typeof returned by the unary operator is:",
      options: ["(a)Boolean", " (b)Undefined", "(c)Object", " (d)Integer"],
      answer: "(c)Object",
      explanation: "Any NULL value of operator will always return typeof object."
    },
    //q8
    {
      question: "8.How to stop an interval timer in Javascript?",
      options: [" (a)clearInterval ", "(b)clearTimer", "(c) intervalOver", "(d) None of the above"],
      answer: " (a)clearInterval ",
      explanation: "clearInterval is used to stop an interval timer in JS."
      },
    //q9
    {
      question: "9.Which of the following are closures in Javascript?",
      options: [" (a)Variables", "(b)Functions", "(c) Objects", " (d)All of the above"],
      answer: " (d)All of the above",
      explanation: "Every time a function is created in JS, a closure is created. So, all closures are functions and functions have a scope chain that is associated with them."
    },
    //q10
    {
      question: "10.What keyword is used to declare an asynchronous function in Javascript?",
      options: ["(a) async", "(b) await", "(c) setTimeout", "(d) None of the above"],
      answer: "(a) async",
      explanation: "The async keyword is used to declare an asynchronous function in Javascript."
    },
    //q11
    {
      question: "11.What does … operator do in JS?",
      options: ["(a)it is used to spread iterables to individual elements", "(b) it is used to describe a datatype of undefined size", "(c)No such operator exists", "(d) None of the above"],
      answer: "(a)it is used to spread iterables to individual elements",
      explanation: "The … operator is used to spread iterables to individual elements in Javascript and is also called the spread operator."
    },
        //q12
        {
          question: "12.Which of the following are not server-side Javascript objects?",
          options: ["(a)Data", "(b)FileUpload", "(c)Function", "(d) All of the above"],
          answer:  "(d) All of the above",
          explanation: "All of the above options are not server-side Javascript objects."
        },
    //q13
    {
      question: "13. Which of the following is not javascript data types?",
      options: ["(a)Null type", "(b) Undefined type", "(c)Number type", "(d)All of the mentioned"],
      answer:  "(d)All of the mentioned",
      explanation: "JavaScript is a dynamic, loosely typed language. Variables in JavaScript aren’t tied to any specific value type, and each variable can be assigned and reassigned to values of all the types."
    },
        //q14
        {
          question: "14. How do you declare a JavaScript variable?",
          options: ["(a)variable carName", "(b) var carName", "(c) v carName", "(c)None of the above"],
          answer:  "(b) var carName",
          explanation: "variable is declared with var."
        },
    //q15
    {
      question: "15.JavaScript ignores?",
      options: ["(a)newlines", "(b) tabs", "(c)spaces", "(d) All of the above"],
      answer:  "(d) All of the above",
      explanation: "JavaScript ignores spaces, tabs, and newlines written in the code, we can use them for the alignment and separate the sections to give a perfect look at our code."
    },
        //q16
        {
          question: "16. Can be redeclare a variable that is declared with let keyword?",
          options: ["(a)May be", "(b) No", "(c)Yes", " (d)All of the above"],
          answer:"(b) No",
          explanation: "No, we cannot redeclare variable that is declared with let keyword."
        },
    //q17
    {
      question: "17.What is the main difference between var and let keywords in JavaScript?",
      options: ["(a)var defines a variable while let defines a constant", "(b) var defined function scoped variable while let define block scoped variable", "(c)The value of a variable declared with var can be changed while the value of a variable declared with let cannot be changed", "(d)All of the above"],
      answer: "(b) var defined function scoped variable while let define block scoped variable",
      explanation: "The var and let keywords are both used for variable declaration in JavaScript. But, the main difference between them is that var defines function scoped variable while let defines block-scoped variable.."
    },
    //q18
    {
      question: "18.How many keywords are there in JavaScript to declare variables or constants?",
      options: [`(a)1`, `(b)2`, `(c)3`,`(d)4`],
      answer: `(c)3`,
      explanation: "There are 3 ways / keywords to declare variables or constants, those are: var let const."
    },
    //q19
    {
      question: "19.Which property is used to define the HTML content to an HTML element with a specific id?",
      options: ["(a)innerText", "(b)innerContent", "(c)elementText", "(d)innerHTML"],
      answer:  "(d)innerHTML",
      explanation: "The innerHTML is the property that defined HTML content."
    },
    //q20
    {
      question: "20. Which JavaScript method is used to access an HTML element by id?",
      options: ["(a)getElementById()", "(b) getElement(id)", "(c)getElementById(id)", "(d) elementById(id)"],
      answer: "(c)getElementById(id)",
      explanation: "The JavaScript method document.getElementById(id) is used to access an HTML document by id."
    },
    
  ];
  
  let currentQuestion = 0;
  let score = 0;
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const formElement = document.getElementById('quiz-form');
  const resultElement = document.getElementById('quiz-result'); // Added result element
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
      const optionElement = document.createElement('li');
      const inputElement = document.createElement('input');
      inputElement.type = 'radio';
      inputElement.name = 'option';
      inputElement.value = option;
      inputElement.id = option;
      optionElement.appendChild(inputElement);
      optionElement.innerHTML += `<label for="${option}">${option}</label>`;
      optionsElement.appendChild(optionElement);
    });
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked').value;
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
      score++;
      alert('Correct!\n' + currentQuizData.explanation);
    } else {
      alert('Wrong! The correct answer is ' + currentQuizData.answer + '.\n' + currentQuizData.explanation);
    }
  }
  
  function nextQuestion() {
    if (document.querySelector('input[name="option"]:checked')) {
      checkAnswer();
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        displayResult(); 
      }
    } else {
      alert('Please select an option.');
    }
  }
  
  function displayResult() {
    const resultMessage = document.createElement('div');
    resultMessage.textContent = ' Your score is: ' + score + ' out of ' + quizData.length;
    resultMessage.classList.add('quiz-result'); 
    resultElement.appendChild(resultMessage); 
  }
    
  loadQuestion();
  