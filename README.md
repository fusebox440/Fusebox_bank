# Fusebox Banking App

A modern banking application built with Next.js, React, and TypeScript.

## Features

- **User Authentication**: Secure sign-up and login functionality
- **Bank Account Management**: Connect and manage multiple bank accounts
- **Payment Transfers**: Send payments securely between accounts
- **Transaction History**: View detailed transaction history
- **Dashboard**: Real-time account overview with balance tracking
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI Components**: Shadcn/UI with Radix UI
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Charts**: Chart.js with React Chart.js 2
- **Backend Services**: 
  - Appwrite for authentication and data management
  - Plaid for bank account connectivity
  - Dwolla for payment transfers
- **Monitoring**: Sentry for error tracking
- **State Management**: Query String for URL-based state

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fusebox440/Fusebox_bank.git
cd Fusebox_bank
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure the following services:
   - Appwrite (Backend)
   - Plaid (Bank Integration)
   - Dwolla (Payment Processing)
   - Sentry (Error Tracking)

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (root)/            # Main application routes
│   └── api/               # API routes
├── components/            # React components
│   └── ui/               # Shadcn UI components
├── lib/                   # Utility functions and actions
│   └── actions/          # Server actions
├── types/                # TypeScript type definitions
├── constants/            # App constants
└── public/              # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file based on `.env.example` with the following:

- Appwrite credentials
- Plaid API keys
- Dwolla credentials
- Sentry DSN

## Contributing

Feel free to open issues and submit pull requests.

## Author

**Lakshya Khetan**
- Email: lakshyakhetan00@gmail.com

## License

This project is licensed under the MIT License.
