<div align="center">

# Ritesh Portfolio

<br/>

<div>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui">
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
</div>

<br/>

**A modern, responsive personal portfolio website showcasing projects, skills, and experience with a sleek user interface and interactive features.**

<p>
  <a href="#about-the-project">About</a> •
  <a href="#key-features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

[**Live Demo**](https://ritesh.codexly.xyz/) · [**Report a Bug**](https://github.com/neutron420/Ritesh-Portfolio/issues) · [**Request a Feature**](https://github.com/neutron420/Ritesh-Portfolio/issues)

</div>

## About The Project

A professionally designed portfolio website built with modern web technologies to showcase my work, skills, and professional journey. The site features a clean, responsive design with smooth animations and an intuitive user experience. Built with performance and accessibility in mind, it serves as a comprehensive representation of my capabilities as a developer.

### Built With

This portfolio leverages cutting-edge web technologies for optimal performance and developer experience.

* **Frontend Framework:** [React](https://react.dev/) 19
* **Build Tool:** [Vite](https://vitejs.dev/) 5.0
* **Language:** [TypeScript](https://www.typescriptlang.org/) 5.0
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) 3.4
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)
* **Backend/Database:** [Supabase](https://supabase.com/)
* **Package Manager:** [Bun](https://bun.sh/)
* **Linting:** [ESLint](https://eslint.org/)
* **Icons:** [Lucide React](https://lucide.dev/)

## Key Features

* **Responsive Design:** Fully responsive layout that works seamlessly across all devices
* **Modern UI/UX:** Clean and intuitive interface with smooth animations and transitions
* **Project Showcase:** Dynamic project gallery with detailed descriptions and live demos
* **Skills Section:** Comprehensive display of technical skills and competencies
* **Contact Form:** Interactive contact form with backend integration
* **Dark Mode Support:** Toggle between light and dark themes for comfortable viewing
* **Fast Performance:** Optimized build with Vite for lightning-fast load times
* **Type Safety:** Full TypeScript integration for robust code quality
* **Database Integration:** Connected with Supabase for dynamic content management

## Getting Started

To get a local copy up and running for development, follow these simple steps.

### Prerequisites

You will need Bun (or Node.js) installed on your system. Bun is recommended for optimal performance.

* Install Bun:
  ```sh
  curl -fsSL https://bun.sh/install | bash
  ```

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/neutron420/Ritesh-Portfolio.git
    cd Ritesh-Portfolio
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    # or
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your configuration:
    ```env
    VITE_SUPABASE_URL=your_supabase_project_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    # Add other environment variables as needed
    ```

4.  **Run the development server:**
    ```sh
    bun run dev
    # or
    npm run dev
    ```

5.  **Open your browser:**
    Navigate to [http://localhost:5173](http://localhost:5173) to see the portfolio in action.

## Project Structure

```
ritesh-portfolio/
├── public/            # Static assets
├── src/
│   ├── components/    # React components
│   ├── pages/         # Page components
│   ├── styles/        # CSS and styling files
│   ├── utils/         # Utility functions
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Third-party library configurations
├── supabase/          # Supabase configuration and migrations
├── dev-dist/          # Development build output
└── index.html         # Entry HTML file
```

## Build for Production

Build the project for production deployment:

```sh
bun run build
# or
npm run build
```

Preview the production build locally:

```sh
bun run preview
# or
npm run preview
```

## Deployment

The portfolio is deployed at [ritesh.codexly.xyz](https://ritesh.codexly.xyz/). You can deploy your own version to platforms like:

* **Vercel:** Connect your GitHub repository for automatic deployments
* **Netlify:** Deploy with continuous integration from Git
* **GitHub Pages:** Deploy static builds directly from your repository
* **Cloudflare Pages:** Fast global CDN deployment

## Technologies Deep Dive

### Frontend Architecture
Built with React 19 and Vite for optimal development experience and production performance. TypeScript ensures type safety throughout the application, reducing runtime errors and improving code maintainability.

### Styling Approach
Utilizes Tailwind CSS for utility-first styling combined with shadcn/ui components for consistent, accessible UI elements. The design system ensures visual consistency while maintaining flexibility.

### Backend Integration
Supabase provides authentication, database, and storage capabilities, enabling dynamic content management and real-time features without the need for a custom backend.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Ritesh - [@neutron420](https://github.com/neutron420)

Project Link: [https://github.com/neutron420/Ritesh-Portfolio](https://github.com/neutron420/Ritesh-Portfolio)

Live Site: [https://ritesh.codexly.xyz/](https://ritesh.codexly.xyz/)

## Acknowledgments

* [React Documentation](https://react.dev/)
* [Vite Documentation](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* [Supabase Documentation](https://supabase.com/docs)
* [Bun Documentation](https://bun.sh/docs)
