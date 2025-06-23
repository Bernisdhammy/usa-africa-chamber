# USA Africa Chamber of Commerce & Unity First Event Platform

A comprehensive Next.js 14 full-stack application for the USA Africa Chamber of Commerce, featuring the Unity First Summit event management system.

## 🌟 Features

### Chamber Website
- **Leadership Profiles**: Showcase chamber leadership with awards and achievements
- **Service Directory**: Comprehensive listing of employment, financial, and business development services
- **Responsive Design**: Mobile-first approach with Tailwind CSS and shadcn/ui components
- **SEO Optimized**: Structured data and meta tags for better search visibility

### Unity First Summit
- **Event Management**: Complete event lifecycle management
- **Ticket Sales**: Multi-tier pricing with early bird discounts
- **Speaker Profiles**: Featured speakers with social media integration
- **Program Schedule**: Interactive daily schedules with session details
- **Sponsor Management**: Tiered sponsorship packages with benefits tracking

### Admin Dashboard
- **Real-time Analytics**: Ticket sales, attendance, and revenue tracking
- **Content Management**: Easy updates to events, speakers, and sponsors
- **Attendee Management**: Registration tracking and check-in systems
- **Automated Tools**: QR code generation and certificate creation

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Vercel Postgres with Prisma ORM
- **Styling**: Tailwind CSS + shadcn/ui components
- **Authentication**: NextAuth.js
- **Payments**: Stripe integration ready
- **Deployment**: Vercel platform

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-org/usa-africa-chamber.git
   cd usa-africa-chamber
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your database URL and other required environment variables.

4. **Set up the database**
   \`\`\`bash
   npx prisma generate
   npx prisma db push
   npm run db:seed
   \`\`\`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

## 🗄️ Database Schema

The application uses a comprehensive Prisma schema with the following main models:

- **Chamber**: Organization information and contact details
- **UnityFirstEvent**: Event management with dates, venues, and capacity
- **Session**: Individual event sessions with speakers and timing
- **Ticket**: Multi-tier ticket system with pricing and availability
- **Sponsor**: Sponsorship tiers with benefits and amounts
- **Leadership**: Chamber leadership profiles with awards
- **Service**: Chamber services categorized by type
- **User/Attendee**: User management and registration system

## 🎨 Design System

The application uses a custom design system based on the chamber's brand colors:

- **Primary**: Chamber Blue (#0A2463)
- **Secondary**: Gold Accent (#D4AF37)  
- **Accent**: Unity Green (#008753)

## 📱 Key Pages

- **Homepage** (`/`): Chamber overview with services and leadership
- **Unity First** (`/unity-first`): Complete summit information and registration
- **Services** (`/services`): Detailed service offerings
- **Leadership** (`/leadership`): Leadership team profiles
- **Admin Dashboard** (`/admin`): Administrative interface

## 🔧 Configuration

### Environment Variables

\`\`\`env
DATABASE_URL="your-postgres-connection-string"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
STRIPE_SECRET_KEY="your-stripe-secret-key"
STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
\`\`\`

### Deployment

The application is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 📊 Analytics & Monitoring

- Real-time registration tracking
- Revenue and attendance analytics
- Session popularity metrics
- Sponsor engagement tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary to the USA Africa Chamber of Commerce.

## 📞 Support

For technical support or questions:
- Email: tech@usaafricachamber.org
- Phone: 0708-473-6983

---

Built with ❤️ for the African diaspora community
