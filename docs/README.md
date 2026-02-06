# HyFy Agency Documentation

Welcome to the HyFy Agency documentation. This directory contains all technical documentation, implementation details, and setup guides.

## 📁 Directory Structure

```
docs/
├── implementation/          # Technical implementation documentation
│   ├── BLOG_IMPLEMENTATION.md    # Blog system architecture & features
│   ├── BLOG_SSR_FIX.md          # SSR styling fix documentation
│   └── guides/              # Step-by-step setup guides
│       ├── BLOG_SETUP.md         # Complete blog setup instructions
│       ├── BLOG_TESTING.md       # Testing checklist & procedures
│       └── NEWSLETTER_SETUP.md   # Newsletter subscription guide
└── README.md                # This file
```

## 📚 Documentation Index

### Implementation Documentation

Technical details about how systems are built and configured.

| Document | Description |
|----------|-------------|
| [BLOG_IMPLEMENTATION.md](./implementation/BLOG_IMPLEMENTATION.md) | Complete blog system implementation summary with features, architecture, and file structure |
| [BLOG_SSR_FIX.md](./implementation/BLOG_SSR_FIX.md) | How the SSR styling issue was resolved and important notes for future SSR pages |

### Setup Guides

Step-by-step instructions for setting up and using features.

| Guide | Purpose |
|-------|---------|
| [BLOG_SETUP.md](./implementation/guides/BLOG_SETUP.md) | Complete setup guide for the blog system from scratch |
| [BLOG_TESTING.md](./implementation/guides/BLOG_TESTING.md) | Comprehensive testing checklist for blog functionality |
| [NEWSLETTER_SETUP.md](./implementation/guides/NEWSLETTER_SETUP.md) | Newsletter subscription system setup and management |

## 🚀 Quick Start

**New to the project?** Start here:

1. Read [BLOG_SETUP.md](./implementation/guides/BLOG_SETUP.md) for initial setup
2. Follow the Strapi configuration steps
3. Create your first blog post
4. Run through [BLOG_TESTING.md](./implementation/guides/BLOG_TESTING.md) checklist

**Want to understand the architecture?** Read:

1. [BLOG_IMPLEMENTATION.md](./implementation/BLOG_IMPLEMENTATION.md) for technical details
2. [BLOG_SSR_FIX.md](./implementation/BLOG_SSR_FIX.md) for SSR-specific notes

**Setting up newsletter subscriptions?**

1. Follow [NEWSLETTER_SETUP.md](./implementation/guides/NEWSLETTER_SETUP.md)
2. Configure Strapi permissions
3. Test the subscription flow

## 🎯 Key Features Documented

- ✅ **Blog System** - Strapi CMS integration with SSR
- ✅ **Pagination** - 9 posts per page with smart navigation
- ✅ **SEO Optimization** - Structured data, meta tags, social sharing
- ✅ **Nexus-Glass Design** - Neo-futuristic glassmorphism theme
- ✅ **Newsletter Subscription** - Email collection and management
- ✅ **Bento Grid Layout** - Dynamic card sizing for visual interest

## 🔧 Tech Stack

- **Frontend:** Astro 4.x (hybrid SSR mode)
- **Backend:** Strapi 5.x (headless CMS)
- **Styling:** Tailwind CSS with custom design system
- **Typography:** Orbitron + Exo 2
- **Deployment:** Node.js SSR adapter

## 📝 Contributing to Docs

When adding new documentation:

- **Implementation docs** → `docs/implementation/`
- **Setup guides** → `docs/implementation/guides/`
- Use clear, descriptive filenames (UPPERCASE for visibility)
- Include table of contents for longer documents
- Add code examples where applicable
- Update this README when adding new docs

## 🐛 Troubleshooting

Common issues and their solutions:

| Issue | Solution |
|-------|----------|
| Blog posts not showing | See [BLOG_SETUP.md](./implementation/guides/BLOG_SETUP.md) → Troubleshooting section |
| SSR pages unstyled | See [BLOG_SSR_FIX.md](./implementation/BLOG_SSR_FIX.md) |
| Newsletter not working | See [NEWSLETTER_SETUP.md](./implementation/guides/NEWSLETTER_SETUP.md) → Troubleshooting |
| Tests failing | See [BLOG_TESTING.md](./implementation/guides/BLOG_TESTING.md) → Common Issues |

## 📞 Need Help?

1. Check the relevant guide in `docs/implementation/guides/`
2. Review the implementation docs in `docs/implementation/`
3. Search for similar issues in project history
4. Check CLAUDE.md for project-wide conventions

---

**Last Updated:** 2026-02-06
**Documentation Version:** 1.0.0
