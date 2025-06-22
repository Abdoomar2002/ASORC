# ASORC

A modern Angular application built with Angular 18 and TypeScript.

## 🚀 Features

- **Angular 18**: Latest version with modern features
- **TypeScript**: Type-safe development
- **Server-Side Rendering (SSR)**: Built-in Angular SSR support
- **Responsive Design**: Modern UI components
- **Testing**: Jasmine and Karma testing framework

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Angular CLI** (install globally with `npm install -g @angular/cli`)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/asorc.git
   cd asorc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Application

### Development Server

Run the development server:
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Production Build

Build the project for production:
```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Server-Side Rendering

Run the SSR version:
```bash
npm run serve:ssr:ASORC
```

## 🧪 Testing

### Unit Tests

Run unit tests:
```bash
npm test
# or
ng test
```

### End-to-End Tests

Run end-to-end tests:
```bash
ng e2e
```

## 📁 Project Structure

```
src/
├── app/
│   ├── header/          # Header component
│   ├── main-content/    # Main content component
│   ├── footer/          # Footer component
│   └── app.component.*  # Root component
├── assets/              # Static assets
└── styles.scss          # Global styles
```

## 🛠️ Development

### Code Scaffolding

Generate new components, services, and more:
```bash
ng generate component component-name
ng generate service service-name
ng generate directive directive-name
```

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build with watch mode
- `npm test` - Run unit tests
- `npm run serve:ssr:ASORC` - Run SSR server

## 📦 Dependencies

### Core Dependencies
- Angular 18.1.0
- RxJS 7.8.0
- Express 4.18.2 (for SSR)

### Development Dependencies
- Angular CLI 18.1.2
- TypeScript 5.5.2
- Jasmine & Karma for testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For help and support:
- Check the [Angular documentation](https://angular.dev/)
- Open an issue in this repository
- Contact the maintainers

---

**Built with ❤️ using Angular 18**
