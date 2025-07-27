## 📦 NPM Packages: Dev vs Normal Dependencies

There are two main types of packages we can install:

### 1. **Dev Dependencies**
- These are used **only during development** (e.g., testing tools, bundlers like Parcel, linters).
- Installed using:
  ```bash
  npm install <package-name> --save-dev
  ```
- Not included in the production build.

### 2. **Normal Dependencies**
- These are needed **in production** (e.g., `react`, `react-dom`).
- Installed using:
  ```bash
  npm install <package-name>
  ```

---

## 🎯 Version Prefixes in `package.json`

- **Caret (`^`)**: Updates to **minor** and **patch** versions.
  - Example: `"^2.15.0"` → could install `2.16.0`, `2.15.5`, etc.
- **Tilde (`~`)**: Updates to **patch** versions only.
  - Example: `"~2.15.0"` → could install `2.15.1`, `2.15.5`, but **not** `2.16.0`.

🚫 Updating to major versions automatically can **break your app**, so it’s safer to lock minor/patch updates.

---

## 🛠 `package.json` and `node_modules`

- `package.json` is the **configuration file** for your project dependencies.
- `node_modules/` contains all installed dependencies.
- You **don’t push `node_modules/` to GitHub** because:
  - It's huge.
  - It can be **regenerated** using:
    ```bash
    npm install
    ```
  - Instead, you should push:
    - `package.json`
    - `package-lock.json`

---

## 🔁 Transitive Dependencies

- Your project depends on Parcel.
- Parcel depends on other packages.
- Those packages might also depend on others.
- This **chain of dependencies** is called **transitive dependencies**.

---

## 📁 `package-lock.json`

- This file **locks the exact versions** of all your dependencies and their transitive dependencies.
- Ensures your app behaves the **same across machines**.
- Should always be **pushed to Git**.

---

## ⚙️ npm vs npx

| Command | Description |
|--------|-------------|
| `npm`  | Runs **npm commands** (e.g., install packages). |
| `npx`  | Executes **any package** (without installing it globally). |

Example:
```bash
npx parcel index.html
```

---

## 🚫 Why Not Use CDN Links?

- **CDNs** can work for quick demos.
- But they’re **not preferred** for real projects because:
  - You lose control over versions.
  - Hard to manage dependencies.
  - No bundling or optimization.

---

✅ **Best Practice**: Use `npm` to install React and other libraries locally.

```bash
npm install react react-dom
```
