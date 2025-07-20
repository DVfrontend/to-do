# 📝 To-Do List App

A modern, responsive to-do list application built with Next.js, React, and Tailwind CSS. Features a beautiful dark/light theme design with smooth animations and local storage persistence.

## ✨ Features

- **Add Tasks**: Easily add new tasks with input validation
- **Delete Tasks**: Remove completed or unwanted tasks with a single click
- **Persistent Storage**: Tasks are automatically saved to browser's local storage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Beautiful transitions powered by Framer Motion
- **Modern UI**: Clean, gradient-based design with dark theme support
- **Input Validation**: Prevents adding empty tasks with user-friendly alerts

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.3.3](https://nextjs.org/) with App Router
- **Frontend**: [React 19](https://react.dev/) with TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Development**: ESLint, Prettier, Turbopack

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd to-do
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
to-do/
├── src/
│   └── app/
│       ├── components/
│       │   └── TodoList.tsx    # Main todo component
│       ├── globals.css         # Global styles
│       ├── layout.tsx          # Root layout
│       └── page.tsx           # Home page
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## 🎯 Usage

1. **Adding a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Deleting a Task**: Click the "🗑️ Delete" button next to any task
3. **Persistence**: Your tasks are automatically saved and will persist between browser sessions

## 🎨 Features in Detail

### Local Storage Persistence
Tasks are automatically saved to your browser's local storage, ensuring your to-do list persists between sessions.

### Responsive Design
The application adapts to different screen sizes, providing an optimal experience on both desktop and mobile devices.

### Smooth Animations
Powered by Framer Motion, tasks appear and disappear with smooth scale and opacity transitions.

### Input Validation
The app prevents adding empty tasks and provides user-friendly feedback.

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Deployment Options

- **Netlify**: Connect your Git repository and deploy
- **Railway**: Deploy with `railway up`
- **Self-hosted**: Build with `npm run build` and serve the `out` directory

For more deployment options, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js and React**
