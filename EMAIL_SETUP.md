# EmailJS Setup for Contact Form

The contact form uses EmailJS to send emails directly from the frontend. This approach doesn't require a backend API and is perfect for static sites.

## EmailJS Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. You get 200 free emails per month

### 2. Create Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission from your website:

Name: {{from_name}}
Company: {{company_name}}
Phone: {{phone_number}}
City: {{city}}
Message: {{message}}

Best regards,
QuadB Tech Website
```

4. Copy your **Template ID**

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### 5. Configure Environment Variables
Add these to your `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_CONTACT_EMAIL=your-email@domain.com
```

## Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Contact person's name
- `{{company_name}}` - Company name
- `{{phone_number}}` - Phone number
- `{{city}}` - City
- `{{message}}` - Message content
- `{{to_email}}` - Your email (where messages are sent)

## Testing

1. Set up your environment variables
2. Start the development server: `npm run dev`
3. Navigate to `/contact`
4. Fill out and submit the form
5. Check your email inbox

## Benefits of EmailJS

- ✅ No backend required
- ✅ Works with static hosting
- ✅ Free tier available
- ✅ Multiple email providers supported
- ✅ Template customization
- ✅ Delivery tracking

## Troubleshooting

- **Template not found**: Check your template ID
- **Service not found**: Check your service ID
- **Emails not sending**: Verify your email service connection
- **Rate limiting**: EmailJS has usage limits on free tier

## Alternative Services

If you prefer other services:
- **Formspree**: Simple form handling
- **Netlify Forms**: If hosting on Netlify
- **Vercel Forms**: If hosting on Vercel
- **Web3Forms**: Privacy-focused forms