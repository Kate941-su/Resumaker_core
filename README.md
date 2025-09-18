# PDF Resume Generator

A professional React application for generating PDF resumes using the latest technologies. Built with TypeScript, Tailwind CSS, and react-pdf.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Professional PDF Generation**: Using react-pdf for high-quality PDF output
- **Beautiful UI**: shadcn/ui components with Tailwind CSS
- **Responsive Design**: Works perfectly on all devices
- **Type Safety**: Full TypeScript support
- **Form Management**: Dynamic form handling for resume data
- **Real-time Preview**: See changes as you type

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **PDF Generation**: @react-pdf/renderer
- **Icons**: Lucide React
- **Form Handling**: React state management

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd pdf-generator

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Production
npm run build        # Create optimized build
```

## 🎯 Usage

1. **Fill out the form** with your personal information
2. **Add experience** entries with achievements
3. **Include education** details
4. **List your skills** organized by category
5. **Add projects** with descriptions and links
6. **Generate PDF** with one click

## 📁 Project Structure

```
pdf-generator/
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── ResumeForm.tsx      # Main form component
│   │   └── ResumePDF.tsx       # PDF template component
│   ├── hooks/
│   │   └── usePDFGenerator.ts  # PDF generation hook
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── types/
│   │   └── resume.ts           # TypeScript interfaces
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Customization

### Styling

- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Customize shadcn/ui components in `src/components/ui/`

### PDF Template

- Edit `src/components/ResumePDF.tsx` for PDF layout changes
- Modify styles in the `StyleSheet.create()` object
- Add new sections or fields as needed

### Form Fields

- Update `src/types/resume.ts` for data structure changes
- Modify `src/components/ResumeForm.tsx` for form layout
- Add validation rules as needed

## 🔧 Development

### Adding New Fields

1. Update the `ResumeData` interface in `src/types/resume.ts`
2. Add form fields in `src/components/ResumeForm.tsx`
3. Update the PDF template in `src/components/ResumePDF.tsx`
4. Add styling as needed

### Custom Components

- Create new components in `src/components/`
- Use shadcn/ui for consistent styling
- Follow TypeScript best practices

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🎯 Features in Detail

### PDF Generation

- **High Quality**: Vector-based PDF output
- **Professional Layout**: Clean, A4-optimized design
- **Customizable**: Easy to modify templates
- **Fast Generation**: Optimized for performance

### Form Management

- **Dynamic Fields**: Add/remove experience, education, skills, projects
- **Validation**: Required field validation
- **Real-time Updates**: Instant form feedback
- **Data Persistence**: Form data maintained during session

### UI/UX

- **Modern Design**: Clean, professional interface
- **Accessibility**: WCAG compliant components
- **Responsive**: Works on all screen sizes
- **Intuitive**: Easy-to-use form interface

## 🔍 Troubleshooting

### Common Issues

1. **PDF Generation Fails**

   - Check browser console for errors
   - Ensure all required fields are filled
   - Try refreshing the page

2. **Styling Issues**

   - Clear browser cache
   - Check Tailwind CSS configuration
   - Verify component imports

3. **TypeScript Errors**
   - Run `npm run lint` to check for issues
   - Ensure all types are properly defined
   - Check import statements

### Performance Optimization

- **Bundle Size**: Optimized with Vite
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Minification**: Production builds are minified

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section
2. Review the documentation
3. Search existing issues
4. Create a new issue with detailed information

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
