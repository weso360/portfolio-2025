# EmailJS Setup Instructions

To enable the contact form to send emails to wesleysiwela@icloud.com:

## 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account

## 2. Create Email Service
- Add a new service (Gmail, Outlook, etc.)
- Connect your email account

## 3. Create Email Template
- Create a new template with these variables:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{message}}` - Message content
  - `{{to_email}}` - Your email (wesleysiwela@icloud.com)

## 4. Update Environment Variables
Replace the values in `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 5. Template Example
```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
To: wesleysiwela@icloud.com

Message:
{{message}}
```

The contact form will now send emails directly to wesleysiwela@icloud.com when submitted.