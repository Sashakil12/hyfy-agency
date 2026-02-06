# Newsletter Subscription Setup

## Overview

The HyFy Blog now includes a fully functional newsletter subscription system integrated with Strapi CMS. Subscribers are stored in Strapi and can be managed through the admin panel.

## Features

✅ **Email validation** - Ensures valid email addresses
✅ **Duplicate prevention** - Checks for existing subscribers
✅ **Resubscription** - Allows unsubscribed users to resubscribe
✅ **Loading states** - Visual feedback during submission
✅ **Success/Error messages** - Clear user feedback
✅ **IP tracking** - Records subscriber IP address
✅ **Source tracking** - Tracks where subscription came from

## Backend (Strapi)

### Content Type: Newsletter Subscriber

**Location:** `/apps/strapi/src/api/newsletter-subscriber/`

**Fields:**
- `email` (email, required, unique) - Subscriber's email address
- `status` (enum: subscribed/unsubscribed) - Subscription status
- `subscribedFrom` (string, default: "blog") - Source of subscription
- `ipAddress` (string) - Subscriber's IP address
- `createdAt` (datetime, auto) - Subscription date
- `updatedAt` (datetime, auto) - Last update date

### API Endpoint

**POST** `/api/newsletter-subscribe`

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Success Response (200):**
```json
{
  "message": "Thank you for subscribing! Check your inbox for updates.",
  "data": {
    "email": "user@example.com"
  }
}
```

**Already Subscribed (200):**
```json
{
  "message": "You are already subscribed to our newsletter!",
  "data": {
    "email": "user@example.com"
  }
}
```

**Resubscribed (200):**
```json
{
  "message": "Welcome back! You have been resubscribed to our newsletter.",
  "data": {
    "email": "user@example.com"
  }
}
```

**Error Response (400/500):**
```json
{
  "error": {
    "message": "Please provide a valid email address"
  }
}
```

## Frontend Integration

### Subscribe Form

The subscribe form is located in the CTA section of `/blog`:

**Features:**
- Email input with validation
- Submit button with loading state
- Success/error message display
- Automatic form reset on success

**Visual States:**
1. **Default**: "Subscribe" button in electric lime
2. **Loading**: "Subscribing..." with disabled button
3. **Success**: Green message below form
4. **Error**: Amber message below form

## Setup Instructions

### 1. Strapi Configuration

After creating the content type (already done), configure permissions:

1. Start Strapi: `cd apps/strapi && pnpm develop`
2. Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
3. Under **Newsletter-subscriber**, enable:
   - ✅ `subscribe` (custom route)
4. Click **Save**

### 2. View Subscribers

In Strapi admin:
1. Go to **Content Manager**
2. Click **Newsletter Subscriber**
3. View all subscribers with:
   - Email address
   - Status (subscribed/unsubscribed)
   - Subscribed from (source)
   - IP address
   - Subscription date

### 3. Manage Subscribers

**Export Subscribers:**
```bash
# In Strapi admin, you can export to CSV
# Content Manager > Newsletter Subscriber > Export
```

**Manually Add Subscriber:**
1. Content Manager → Newsletter Subscriber → Create new entry
2. Fill in email and other details
3. Save and Publish

**Unsubscribe User:**
1. Find subscriber in Content Manager
2. Change `status` from "subscribed" to "unsubscribed"
3. Save

## Email Integration (Future Enhancement)

To send actual newsletter emails, integrate with:

### Option 1: Strapi Email Plugin
```bash
cd apps/strapi
pnpm add @strapi/provider-email-sendgrid
# or
pnpm add @strapi/provider-email-nodemailer
```

Configure in `apps/strapi/config/plugins.ts`:
```typescript
export default {
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'newsletter@hyfy.com',
        defaultReplyTo: 'newsletter@hyfy.com',
      },
    },
  },
};
```

### Option 2: External Service (Recommended)

Export subscribers and import to:
- **Mailchimp** - Popular, feature-rich
- **ConvertKit** - Creator-focused
- **Buttondown** - Simple, markdown-based
- **SendGrid** - Developer-friendly
- **Brevo (Sendinblue)** - Good free tier

**Export Process:**
1. Content Manager → Newsletter Subscriber
2. Select all subscribers
3. Export to CSV
4. Import CSV to your email service

## Testing

### Test Subscription Flow

1. Navigate to `http://localhost:4321/blog`
2. Scroll to "Stay Connected" section
3. Enter email: `test@example.com`
4. Click "Subscribe"
5. Verify success message appears
6. Check Strapi admin for new subscriber

### Test Duplicate Prevention

1. Try subscribing with the same email again
2. Should see: "You are already subscribed to our newsletter!"

### Test Invalid Email

1. Try submitting without `@` symbol
2. Browser validation should prevent submission
3. Or try with invalid format - API will return error

### Test Unsubscribe/Resubscribe

1. In Strapi admin, change subscriber status to "unsubscribed"
2. Try subscribing again with the same email
3. Should see: "Welcome back! You have been resubscribed to our newsletter."

## Security Considerations

### Rate Limiting (Recommended)

Add rate limiting to prevent spam:

**Install middleware:**
```bash
cd apps/strapi
pnpm add koa-ratelimit
```

**Configure in controller:**
```typescript
// Add to newsletter-subscriber controller
const rateLimit = require('koa-ratelimit');

// Apply to subscribe route
{
  method: 'POST',
  path: '/newsletter-subscribe',
  handler: 'newsletter-subscriber.subscribe',
  config: {
    middlewares: [
      {
        name: 'global::rate-limit',
        config: {
          interval: { min: 15 },
          max: 5,
        },
      },
    ],
  },
}
```

### Email Verification (Future Enhancement)

1. Send verification email on signup
2. Add `verified` boolean field
3. Only send newsletters to verified subscribers
4. Include unsubscribe link in emails

## Monitoring

### View Subscription Stats

In Strapi admin, you can:
- Filter by status (subscribed/unsubscribed)
- Search by email
- Sort by date
- View total count

### Export Analytics

Export subscriber data to analyze:
- Growth over time
- Subscription sources
- Churn rate (unsubscribes)

## Troubleshooting

### Subscribers Not Appearing

1. Check Strapi is running: `http://localhost:1337/admin`
2. Verify Public role permissions are enabled
3. Check browser console for errors
4. Test API directly:
```bash
curl -X POST http://localhost:1337/api/newsletter-subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

### Form Not Submitting

1. Check browser console for JavaScript errors
2. Verify `STRAPI_URL` in `.env.local`
3. Ensure CORS is enabled in Strapi

### Error Messages

**"Please provide a valid email address"**
- Email format is invalid
- Missing @ symbol

**"An error occurred while processing your subscription"**
- Strapi server error
- Database connection issue
- Check Strapi logs

## Production Deployment

### Environment Variables

**Strapi (`.env`):**
```env
# Already configured
DATABASE_CLIENT=postgres
DATABASE_URL=your_database_url
```

**Astro (`.env.local` / production):**
```env
STRAPI_URL=https://your-strapi-domain.com
PUBLIC_SITE_URL=https://your-site.com
```

### CORS Configuration

Ensure Strapi allows requests from your domain:

**`apps/strapi/config/middlewares.ts`:**
```typescript
export default [
  // ...
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://your-site.com', 'http://localhost:4321'],
      credentials: true,
    },
  },
];
```

## Next Steps

### Recommended Enhancements

1. **Double Opt-In**
   - Send verification email
   - Add email verification field
   - Only accept verified subscribers

2. **Welcome Email**
   - Automatically send welcome email on signup
   - Include unsubscribe link

3. **Email Preferences**
   - Allow subscribers to choose frequency
   - Topic preferences

4. **Analytics Dashboard**
   - Track subscriber growth
   - Monitor engagement
   - A/B test signup forms

5. **Unsubscribe Page**
   - Create `/unsubscribe` route
   - Allow one-click unsubscribe via token

6. **GDPR Compliance**
   - Add privacy policy link
   - Data export functionality
   - Right to be forgotten

## Files Modified/Created

### Strapi Backend
- ✅ `/apps/strapi/src/api/newsletter-subscriber/content-types/newsletter-subscriber/schema.json`
- ✅ `/apps/strapi/src/api/newsletter-subscriber/controllers/newsletter-subscriber.ts`
- ✅ `/apps/strapi/src/api/newsletter-subscriber/routes/newsletter-subscriber.ts`
- ✅ `/apps/strapi/src/api/newsletter-subscriber/services/newsletter-subscriber.ts`

### Astro Frontend
- ✅ `/apps/web/src/pages/blog/index.astro` (updated subscribe form + JavaScript)

### Documentation
- ✅ `NEWSLETTER_SETUP.md` (this file)

---

**Status:** ✅ Fully functional newsletter subscription system
**Ready for:** Production use (with recommended security enhancements)
