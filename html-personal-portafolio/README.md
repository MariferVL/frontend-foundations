# 🌐 Personal Portfolio — Marifer VL

A semantic **HTML5 project** that showcases the personal portfolio of Marifer VL, Fullstack Developer with experience in **React, Python, and DevOps**. This project demonstrates how to build a modern, accessible portfolio using only HTML, applying best practices for 2025.

---

## 🎯 Purpose

This portfolio is designed to:
- Present professional experience, technical skills, and open source contributions.
- Apply semantic HTML5 for maximum accessibility and clarity.
- Integrate modern metadata for SEO and browser compatibility.
- Provide a functional and secure contact form.
- Serve as a foundation for future styling with CSS and interactivity with JavaScript.

---

## 🧱 Structure

The portfolio is organized with semantic HTML5 elements:

- **`<header>`** → Logo, title, and personal introduction.
- **`<nav>`** → Main navigation menu with `aria-label` for accessibility.
- **`<main>`** → Central content divided into sections:
  - **`<section id="about">`** → About me.
  - **`<section id="skills">`** → Technical skills table with `<caption>`.
  - **`<section id="experience">`** → Professional experience using `<article>` and `<time>`.
  - **`<section id="projects">`** → Open source contributions and projects.
  - **`<section id="education">`** → Education and certificates with `<details>` + `<summary>`.
  - **`<section id="hobbies">`** → Interests and hobbies using `<dl>`.
  - **`<section id="contact">`** → Contact form with `<fieldset>`, `<legend>`, `<datalist>`, and native validation.
- **`<footer>`** → Copyright, location, and social links.

---

## 📚 Example Section

```html
<section id="experience">
  <h2>Professional Experience</h2>
  <article>
    <h3>Frontend Web Developer</h3>
    <p>
      <strong>Cadetech S.A.</strong> | Remote/Chile
      (<time datetime="2023-11">NOV 2023</time> –
       <time datetime="2024-02">FEB 2024</time>)
    </p>
    <ul>
      <li>Developed and optimized features for internal analytics platforms (React, Next.js).</li>
      <li>Improved software quality by implementing unit and integration tests.</li>
      <li>Designed and built custom data editors that streamlined team workflows.</li>
    </ul>
  </article>
</section>
```

---

## 🔑 Key HTML Elements & Attributes

| Element / Attribute | Purpose | UX/UI Benefit |
|----------------------|---------|---------------|
| `<header>`, `<nav>`, `<main>`, `<footer>` | Semantic structure | Clear layout and accessibility |
| `<section>` + `<article>` | Content grouping | Modular organization |
| `<time datetime>` | Dates for experience | Semantic precision |
| `<details>` + `<summary>` | Expandable content | Native interaction without JS |
| `<table>` + `<caption>` | Technical skills | Context for screen readers |
| `<fieldset>` + `<legend>` | Contact form | Accessibility and clarity |
| `<datalist>` | Autocomplete in form | Modern UX |
| `aria-label` in `<nav>` | Accessibility improvement | Better navigation for assistive tech |
| `meta theme-color` and `color-scheme` | Browser integration | Dark mode support |

---

## 🔐 Accessibility & UX Features

- Semantic grouping ensures screen readers announce sections correctly.
- `<strong>` highlights achievements and technologies.
- Forms use native validation (`required`).
- `<details>` and `<summary>` allow expandable sections without JavaScript.
- `<caption>` and `<dl>` provide semantic context for lists and tables.

---

## 🚀 How to Use

1. Clone or download the project.
2. Open `index.html` in your browser.
3. Navigate through sections: About, Skills, Experience, Projects, Education, Interests, and Contact.
4. Complete the contact form to send a message (requires backend to process).

---

## 🧠 Author Notes

This portfolio is part of the **frontend-foundations** collection of projects, focused on applying semantic and accessible HTML5 as a solid base for modern applications. It demonstrates how, even without CSS or JavaScript, you can deliver a clear, professional, and scalable user experience.

