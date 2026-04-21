# SafeRoute Sri Lanka

## EmailJS Setup

1. Install dependencies:
	npm install
2. Create a `.env` file in the project root (you can copy from `.env.example`).
3. Add your EmailJS keys:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

4. In your EmailJS template, map these fields:
	- `from_name`
	- `from_email`
	- `message`
5. Restart the dev server after updating `.env`.
