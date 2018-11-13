window.addEventListener("load", () => {
  //start your code here

  //1. figure out how long our password should break
  document.addEventListener('submit', (event) => {
    //don't go to a new page or don't refresh
    event.preventDefault()
    const input = document.querySelector('input')
    const passwordLength = input.value
    console.log(passwordLength)
    let password = "" //start with empty password
    
    //we want to build our password up until it matches the password length
    for (let i =0; i < passowrdLength; i++) {
      const randomLowerCastLetter = Math.round(Math.random() * lowerCaseLetters.length)
    }
    
  })
  
  //2. we need to make a password from the ground up
  
  //3. we need to keep track of requirements
  
  
});
