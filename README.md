# VIAHUB.DEV - Smart Farm Robotics DevOps Platform

## 1. Overview

**VIAHUB.DEV** is a DevOps platform designed to standardize and accelerate the development, deployment, and management of ROS2-based agricultural robots. It combines the collaborative power of a code management system like GitHub with the seamless deployment capabilities of a platform like Vercel, all tailored for the unique challenges of smart farming.

*   **Background & Purpose**: To provide a unified solution for the agricultural robotics industry, addressing the need for standardized ROS2 development, real-time field monitoring, and a collaborative ecosystem for sharing robotics solutions.
*   **Scope & Period**: This repository contains the Minimum Viable Product (MVP) prototype, developed between June 2025 and August 2025. It focuses on establishing the core user interface, page structure, and design system.
*   **Target Audience & Platform**: The platform is built for ROS2 developers, agricultural startups, and research institutions. It is delivered as a web-based SaaS application with considerations for a companion mobile interface.

## 2. Design System (Summary)

Our design philosophy is centered on clarity, efficiency, and accessibility, with a thematic palette inspired by agriculture.

*   **Theme**: Dark theme is the default, implemented with TailwindCSS.
*   **Colors**:
    *   **Primary (Golden)**: `#FFB800`
    *   **Accent (Cyan)**: `#00BCD4`
*   **Typography**:
    *   **UI Font**: Inter
    *   **Code Font**: JetBrains Mono
*   **Accessibility**: Designed to meet WCAG 2.1 AA standards.

## 3. MVP Pages

The MVP consists of 12 primary pages, navigable from a central index page.

| Module      | ID                    | Path                 | Description                                       |
|-------------|-----------------------|----------------------|---------------------------------------------------|
| **Core**    | `VIAHUB-UI-LANDING001`| `/landing`           | "GitHub for Agricultural Robotics" landing page.      |
| **Core**    | `VIAHUB-UI-AUTH002`   | `/auth`              | User onboarding, OAuth, and team setup.           |
| **Core**    | `VIAHUB-UI-DASHBOARD001`| `/dashboard`         | Main dashboard with stats, activity, and fleet overview. |
| **Core**    | `VIAHUB-UI-REPO003`   | `/repo`              | Code repository management with CI/CD integration. |
| **Core**    | `VIAHUB-UI-ROBOT001`  | `/robots`            | Robot fleet management and real-time monitoring.  |
| **Core**    | `VIAHUB-UI-ACTIONS001`| `/actions`           | CI/CD workflow status and log streaming.          |
| **Advanced**| `VIAHUB-UI-MOBILE001` | `/mobile`            | Mobile app preview and UX guide.                  |
| **Advanced**| `VIAHUB-UI-MARKET001` | `/market`            | Marketplace for ROS2 packages and robotics solutions. |
| **Advanced**| `VIAHUB-UI-DEPLOY001` | `/deploy`            | Deployment management and progressive rollouts.   |
| **Management**| `VIAHUB-UI-ORG001`    | `/org`               | Organization-level settings, RBAC, and audit logs.|
| **Management**| `VIAHUB-UI-SETTINGS001`| `/settings`          | User-specific settings, security, and notifications. |
| **Management**| `VIAHUB-UI-ANALYTICS001`| `/analytics`         | Analytics dashboard for farm and robot efficiency. |

## 4. Getting Started

This is a React application built with Vite and TypeScript.

*   **Prerequisites**: Node.js (v18+ recommended) and npm.
*   **Installation**:
    ```bash
    npm install
    ```
*   **Running the Development Server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).
*   **Running Tests**:
    ```bash
    npm run test
    ```
*   **Building for Production**:
    ```bash
    npm run build
    ```
*   **Tech Stack**:
    *   Vite
    *   React
    *   TypeScript
    *   React Router v6
    *   TailwindCSS
    *   Vitest & React Testing Library

## 5. Architecture & Conventions

*   **Folder Structure**:
    *   `src/components`: Reusable React components.
    *   `src/pages`: Top-level page components.
    *   `src/router`: Routing configuration.
    *   `src/test`: Test setup and configuration.
*   **i18n**: Internationalization is planned. Text is kept in simple elements to facilitate future extraction.

## 6. Roadmap & License

*   **Short-Term**:
    *   Refine UI/UX based on user feedback.
    *   Implement backend services and database infrastructure.
*   **Mid-Term**:
    *   Develop the mobile companion app.
    *   Launch the marketplace with initial partners.
*   **License**: The contents of this repository are proprietary. All rights reserved.
