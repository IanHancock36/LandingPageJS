const name = document.getElementById('name');
const email = document.getElementById('email');
const businessName = document.getElementById('business');
const phoneNumber = document.getElementById('phonenumber')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (event)=>{
    let messages =[] // this means empty array.
    //below if no one passes in anything in the input box it will send a message
    if (name.value === '' || name.value == null){
        messages.push('Name is required') // this pushes this to the empty array of the variable messages
    }
    // the messages. push is pushing whats in the '' back into the empty array
    if (email.length <= 5){
        messages.push ('Password must be longer than that.')
    }
    if(messages.length > 0){
        event.preventDefault()
        errorElement.innerText = messages.join(',')
    }
    
    
})


// notes
// selecting get elementById selects the elements Id on the html side

// the add event listener is listing for the event of submit 

// the event.preventDefault preventDefault() method cancels the event if it is cancelable,
// meaning that the default action that belongs to the event will not occur.


