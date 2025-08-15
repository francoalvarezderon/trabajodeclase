# Copilot Instructions for AI Agents

## Project Overview
This is a simple static web application for a registration form, built for educational purposes (Jóvenes a Programar). It uses HTML, Bootstrap 5, custom CSS, and JavaScript for client-side validation and UI feedback. No backend or persistent storage is present.

## Key Files & Structure
- `index.html`: Main entry point. Contains the registration form and links to all assets.
- `css/bootstrap.min.css`, `css/style.css`: Bootstrap and custom styles.
- `js/bootstrap.bundle.min.js`: Bootstrap JS bundle (no edits needed).
- `js/validacion.js`: Custom JavaScript for form validation and alert handling.

## Main Patterns & Conventions
- **Form Validation**: All validation logic and alert display are handled in `js/validacion.js`. Use `showAlertSuccess()` and `showAlertError()` to show feedback.
- **UI Feedback**: Success and error alerts are toggled by adding the `show` class to Bootstrap alert elements.
- **No Data Storage**: The app does not store or submit data; all logic is client-side only.
- **Language**: All UI and comments are in Spanish.
- **Styling**: Use Bootstrap classes for layout and components. Custom styles are in `css/style.css`.

## Developer Workflows
- **No build step**: Open `index.html` directly in a browser to test changes.
- **No tests**: There are no automated tests or test scripts.
- **No package management**: All dependencies are included as static files.

## Project-Specific Guidance
- Do not add backend logic or data storage.
- Keep all validation and UI logic in `js/validacion.js`.
- Maintain Spanish language for all user-facing text and comments.
- Reference Bootstrap documentation for UI patterns.

## Example: Adding a New Field
1. Add the field to the form in `index.html`.
2. Add corresponding validation logic in `js/validacion.js`.
3. Update styles in `css/style.css` if needed.

---
For more, see the comments in each file and the [Bootstrap 5 docs](https://getbootstrap.com/docs/5.0/getting-started/introduction/).
