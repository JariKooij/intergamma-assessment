# 🛠️ Intergamma Frontend Developer Assessment

This is my submission for the **Frontend Developer Assessment** at Intergamma.

## 📦 Project Overview

The goal of this project was to build a **Product Listing Page** with a **wishlist feature**, based on the assignment provided. The application is built using **Next.js**, **React**, and **Tailwind CSS**, and deployed via **Vercel**.

### ✨ Features

- ✅ Product Listing Page using mock data from a local JSON file
- ✅ Wishlist functionality:
  - Add/remove products
  - Update quantity
  - Persist wishlist across sessions using `localStorage`
- ✅ Header with:
  - Company logo
  - Favorites icon with badge showing wishlist count
- ✅ Wishlist side panel:
  - Opens on clicking the favorites icon
  - Overlays the product listing page

## 🧪 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React hooks + localStorage
- **Testing**: Jest + Testing Library
- **Linting & Formatting**: ESLint, Prettier, Tailwind Prettier Plugin

## 🚀 Getting Started

### 1. Clone the repository

```
$ git clone https://github.com/JariKooij/intergamma-assessment.git
$ cd intergamma-assessment
```

### 2. Install dependencies

```
$ npm install
```

### 3. Run the development server

```
$ npm run dev
```

### 4. Build for production

```
$ npm run build
```

## 🧪 Run Tests

```
$ npm run tests
```

## 🌐 Live Demo

You can view the deployed version on Vercel here:<br/>👉 https://intergamma-assessment.vercel.app

## 📝 Notes

- The wishlist state is stored in localStorage to persist between sessions.
- The badge on the favorites icon reflects the <b>total quantity</b> of items in the wishlist.
- The UI is responsive and optimized for modern browsers.
