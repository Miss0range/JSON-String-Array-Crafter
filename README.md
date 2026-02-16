# JSON Text Converter

A simple tool for JSON formatting. Converts comma-separated text into JSON arrays and escapes special characters (quotes, newlines, backslashes) for copy-paste ready JSON strings.

**🔗 Live Demo:** https://moccasin-ibex-871441.hostingersite.com/

![JSON Text Converter Screenshot](https://github.com/user-attachments/assets/23324ff3-7eb5-4210-9c1e-2d4e231584d2)

## ✨ Features

- **Array Formatter**: Convert comma-separated text into JSON arrays
- **Special Character Escaping**: Automatically escapes quotes, newlines, tabs, and control characters per JSON spec
- **Custom Separator**: Choose your own delimiter (comma, semicolon, etc.)
- **Bracket Control**: Toggle array brackets on/off
- **Copy to Clipboard**: One-click copy with visual feedback
- **Keyboard Shortcut**: `Ctrl + Enter` to copy latest result
- **Dark Mode**: Spotify-inspired dark theme
- **Real-time Processing**: Debounced input for smooth performance

## 🛠️ Tech Stack

- **Angular 20** - Standalone components, signals
- **TypeScript** - Type-safe development
- **CSS3** - Gradient design with dark mode support

## 🚀 Run Locally

1. **Clone the repository**
```bash
   git clone https://github.com/Miss0range/JSON-String-Array-Crafter.git
   cd JSON-String-Array-Crafter
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start development server**
```bash
   ng serve
```

4. **Open in browser**
   Navigate to `http://localhost:4200`

## 📦 Build for Production
```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.
