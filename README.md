# Blog Application

A dynamic blogging platform built with Express.js that allows users to create, edit, and manage blog posts with profile customization features.

🌐 Live Demo
   Experience the application live at: [PostHub](https://posthub-602d.onrender.com/)

## 🚀 Features

- User profile 
- Create and edit blog posts
- Responsive design with modern UI
- Real-time timestamp for posts
- Image upload support

## 🛠️ Tech Stack

- **Backend**: Express.js
- **Frontend**: EJS templating, CSS
- **File Handling**: Multer
- **Static Files**: Express static
- **Body Parsing**: body-parser

## 📂 Project Structure

```
project-root/
├── public/
│   ├── images/
│   ├── styles/
│   │   ├── main.css
│   │   ├── header.css
│   │   ├── signup.css
│   │   └── create_styles.css
│   └── uploads/
├── views/
│   ├── signup.ejs
│   ├── home.ejs
│   ├── create.ejs
│   ├── edit.ejs
│   ├── header.ejs
│   └── footer.ejs
└── index.js
```

## 💻 Usage

1. **Sign Up**
   - Visit the homepage (`/`)
   - Enter your name
   - Upload a profile picture
   - Submit to create your profile

2. **Create a Post**
   - Click the "Create" button on the home page
   - Write your content in the text area
   - Click "Create" to publish

3. **Edit Posts**
   - Find the post you want to edit
   - Click the "Edit" button
   - Modify the content
   - Save changes

## 🔒 Security Features

- File type validation for image uploads
- Secure file storage with unique filenames

## 🎨 Styling

The application uses multiple CSS files for different components:

- `main.css`: General styling and blog post layout
- `header.css`: Navigation and header styling
- `signup.css`: Sign-up form styling
- `create_styles.css`: Post creation page styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a Pull Request

## 🔍 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /        | Sign-up page |
| GET    | /home    | Home page with posts |
| POST   | /home    | Create new profile |
| GET    | /create  | Create post page |
| POST   | /post    | Submit new post |
| POST   | /edit    | Edit existing post |
| POST   | /submit  | Submit edited post |

## ✨ Future Enhancements

- User authentication
- Comments system
- Post categories
- Rich text editor
- Social sharing features
- Post search functionality

## 🐛 Known Issues

- No data persistence (posts are stored in memory)
- No user authentication
- Single user system

## 📞 Support

For support, please open an issue in the GitHub repository.

---

Made By ADHIKKESH S K 👨‍✈️
