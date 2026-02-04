# Enterprise Digital Workspace Platform

## Overview
A micro-frontend platform integrating **Angular 19 (Host)** and **React 19 (Remotes)** using **Webpack Module Federation** and **Vite**.

## Architecture
- **Host**: Angular 19 + Webpack 5 Module Federation (via `@angular-architects/module-federation`).
- **Remotes**:
  - `remote-react-hr`: React 19 + Vite (Module Federation).
  - `remote-react-finance`: React 19 + Vite (Module Federation).
  - `remote-angular-admin`: Angular 19 + Native Federation.
  - `remote-angular-reports`: Angular 19 + Native Federation.
- **Shared**:
  - `packages/shared-auth`: RBAC and Authentication.
  - `packages/shared-state`: Runtime state management.

## Setup
### Prerequisites
- Node.js > 20
- pnpm

### Usage
1. `pnpm install`
2. `pnpm run dev` (Starts all applications in parallel)

## Deployment
Each app is built independently and exposes a `remoteEntry.js`.
