# 📱 QR Code Subscription Form

## This is a Next.js project that allows users to subscribe by entering their phone number, generating a QR code, and confirming their subscription by entering a confirmation code. The project is built using Tailwind CSS and Shadcn/ui for a beautiful and responsive UI.

Features
Phone Number Input: Users can enter their phone number.

QR Code Generation: Generates a QR code containing a confirmation code.

Confirmation Code Input: Users can input the confirmation code after scanning the QR code.

Validation:

Validates the phone number format.

Checks if the confirmation code matches the generated code.

Success Message: Displays a success message if the confirmation code is correct.

Error Handling: Shows error messages for invalid phone numbers or incorrect confirmation codes.

Loading State: Displays a loading spinner while generating the QR code.

Technologies Used
React: A JavaScript library for building user interfaces.

Next.js: A React framework for server-side rendering and static site generation.

Tailwind CSS: A utility-first CSS framework for styling.

Shadcn/ui: A collection of reusable UI components.

QRCode.react: A library for generating QR codes in React.

Installation
Follow these steps to set up the project locally:

Clone the repository:

bash
Copy
## git clone https://github.com/hasansharif819/generate-qr-code.git
cd generate-qr-code
Install dependencies:

bash
Copy
npm install
# or
yarn install
Run the development server:

bash
Copy
npm run dev
# or
yarn dev
Open the project:
Visit http://localhost:3000 in your browser to view the project.

How to Use
Enter Phone Number:

Input your phone number in the provided field.

Generate QR Code:

Click the "Generate QR Code" button to create a QR code containing a confirmation code.

Scan QR Code:

Use a QR code scanner to scan the generated QR code and retrieve the confirmation code.

Enter Confirmation Code:

Input the confirmation code in the provided field.

Confirm Subscription:

Click the "Confirm" button to verify the code.

If the code is correct, a success message will be displayed.

If the code is incorrect, an error message will be shown.
