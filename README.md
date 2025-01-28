# Einnotec Website

![Einnotec](https://www.einnotec.com)  
Einnotec is a professional website designed to showcase engineering services, including System Engineering, Product Development, and Reverse Engineering. The website provides detailed insights into the company's offerings across industrial, residential, and farming domains.

## Live Website
You can explore the live project here: [https://www.einnotec.com](https://www.einnotec.com)

## GitHub Repository
The project is available on GitHub: [https://github.com/Prajwalbawane/eInnotec](https://github.com/Prajwalbawane/eInnotec)

---

## Features
- **Responsive Design**: Fully responsive layout using Bootstrap for a seamless experience across devices.
- **Email Functionality**: Integrated with EmailJS for sending inquiries through the contact form.
- **Interactive Alerts**: SweetAlert is used for modern and user-friendly feedback messages.
- **Clear Navigation**: Easy-to-navigate sections for services, products, and contact information.
- **Dynamic Content**: Engaging content highlighting the company’s expertise in technology solutions, product development, and reverse engineering.

---

## Technologies Used
- **HTML5**: For creating the structure of the web pages.
- **CSS3**: To style the pages with a clean and professional look.
- **Bootstrap**: For responsive design and prebuilt UI components.
- **JavaScript**: To add interactivity and functionality.
- **EmailJS**: For integrating the contact form and sending inquiries directly via email.
- **SweetAlert**: For enhanced alert messages and better user experience.

---

## Installation and Setup
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Prajwalbawane/eInnotec.git
Navigate to the project folder:

bash
Copy
Edit
cd eInnotec
Open the index.html file in your preferred browser:

bash
Copy
Edit
open index.html
(Optional) If you'd like to modify the code, you can use any code editor like VS Code.

EmailJS Integration
The contact form is powered by EmailJS, enabling users to send inquiries directly from the website without requiring a backend.

Steps to Configure EmailJS
Sign up for a free account at EmailJS.
Create a new service and get your service ID and template ID.
Replace the placeholders in your JavaScript code with the IDs from EmailJS:
javascript
Copy
Edit
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
Ensure the integration works by testing the contact form.
SweetAlert Integration
SweetAlert is used for displaying attractive and customizable alert messages. Here’s an example:

javascript
Copy
Edit
Swal.fire({
  title: 'Message Sent!',
  text: 'Thank you for contacting us. We will get back to you soon.',
  icon: 'success',
});
Directory Structure
plaintext
Copy
Edit
eInnotec/
│
├── css/
│   └── styles.css          # Custom CSS file
│
├── js/
│   ├── script.js           # JavaScript file for functionality
│   └── emailjs.min.js      # EmailJS library
│
├── index.html              # Main HTML file
├── about.html              # About Us page
├── services.html           # Services page
├── contact.html            # Contact Us page
└── README.md               # Project documentation
Contributions
Contributions are welcome! Feel free to fork the repository and submit a pull request.

Contact
For any questions or issues, please reach out via email: mail@einnotec.com

License
This project is licensed under the MIT License. See the LICENSE file for details.

Developed By
Prajwal Bawane

shell
Copy
Edit

### Let me know if you’d like any modifications or additional sections for the README!













