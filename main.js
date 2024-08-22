document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  // creat element
  const signupContainer = document.createElement('div');
  signupContainer.className = 'signup';
  const signupImage = document.createElement('div');
  signupImage.className = 'signup--image';
  const img = document.createElement('img');
  img.src = '../image.png'; 
  img.alt = 'Sign Up Image';
  signupImage.appendChild(img);
  
  const signupForm = document.createElement('div');
  signupForm.className = 'signup--form';
  const form = document.createElement('form');
  const title = document.createElement('h2');
  title.textContent = 'Sign Up';
  form.appendChild(title);
  
  const fields = [
    { label: 'First Name', type: 'text', placeholder: 'Enter your first name', id: 'firstName' },
    { label: 'Last Name', type: 'text', placeholder: 'Enter your last name', id: 'lastName' },
    { label: 'Email Address', type: 'email', placeholder: 'Email Address', id: 'email' },
    { label: 'Password', type: 'password', placeholder: 'Enter Password', id: 'password' }
  ];
  
  fields.forEach(field => {
    const label = document.createElement('label');
    label.setAttribute('for', field.id);
    label.textContent = field.label;
    form.appendChild(label);
    const input = document.createElement('input');
    input.type = field.type;
    input.id = field.id;
    input.placeholder = field.placeholder;
    input.required = true;
    form.appendChild(input);
  });
  
  const loginLink = document.createElement('p');
  loginLink.innerHTML = 'Already have an account? <a href="#">Log in</a>';
  form.appendChild(loginLink);
  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Sign Up';
  form.appendChild(button);
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const data = {
      firstName,
      lastName,
      email,
      password
    };
    
    // add api
    fetch('https://dummyjson.com/users/add', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
  
  signupForm.appendChild(form);
  signupContainer.appendChild(signupImage);
  signupContainer.appendChild(signupForm);
  root.appendChild(signupContainer);
});