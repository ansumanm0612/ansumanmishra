# Ansuman Mishra — GitHub Pages Site

A clean, minimal academic portfolio in the style of [pnadathur.github.io](https://pnadathur.github.io) and [nayana-raj.github.io](https://nayana-raj.github.io).

**Files in this folder:**

| File | Purpose |
|---|---|
| `index.html` | About / home page |
| `research.html` | Presentations, thesis, research experience |
| `contact.html` | Contact information |
| `style.css` | Shared stylesheet (warm paper tones, Fraunces + Source Serif 4) |

---

## Step-by-step deployment to GitHub Pages

### Step 1 — Create your GitHub account (skip if you already have one)
Go to [github.com](https://github.com) → Sign up → confirm your email.

---

### Step 2 — Create the repository

1. Click the **+** icon in the top-right → **New repository**.
2. Set the repository name to exactly:
   ```
   ansuman-mishra.github.io
   ```
   *(Replace `ansuman-mishra` with your actual GitHub username if different.)*
3. Make it **Public**.
4. Leave everything else as-is. Click **Create repository**.

> Your site will live at `https://ansuman-mishra.github.io` once deployed.

---

### Step 3 — Upload your files

**Option A — Browser upload (easiest, no Git needed)**

1. On your new repository page, click **Add file → Upload files**.
2. Drag and drop these four files:
   - `index.html`
   - `research.html`
   - `contact.html`
   - `style.css`
3. In the *Commit changes* box at the bottom, leave the default message or write something like `Initial site upload`.
4. Click **Commit changes**.

**Option B — Git command line**

```bash
# Clone the empty repo
git clone https://github.com/YOUR-USERNAME/ansuman-mishra.github.io
cd ansuman-mishra.github.io

# Copy the four files into this folder, then:
git add .
git commit -m "Initial site"
git push origin main
```

---

### Step 4 — Enable GitHub Pages

1. Go to your repository → **Settings** (tab near the top).
2. In the left sidebar, click **Pages**.
3. Under **Branch**, select `main` and `/ (root)`. Click **Save**.
4. Wait ~60 seconds, then refresh. A green banner will appear with your live URL.

---

### Step 5 — Check your site

Visit `https://ansuman-mishra.github.io` (swap in your username). You should see the site. Click through *about*, *research*, and *contact* to confirm all links work.

---

## Customising your content

### Adding a profile photo
1. Put your photo (e.g. `photo.jpg`) in the same folder as the HTML files.
2. In `index.html`, add inside the `<section class="intro">`:
   ```html
   <img src="photo.jpg" alt="Ansuman Mishra" class="profile-photo">
   ```
3. Add to `style.css`:
   ```css
   .profile-photo {
     width: 140px;
     height: 140px;
     object-fit: cover;
     border-radius: 50%;   /* circle — remove for square */
     float: right;
     margin: 0 0 1rem 2rem;
   }
   ```

### Adding your CV
1. Place your CV as `cv.pdf` in the folder.
2. Add a nav link in all three HTML files — find the `<nav>` block and add:
   ```html
   <a href="cv.pdf">cv</a>
   ```

### Updating research entries
All entries are plain HTML lists in `research.html`. Copy an existing `<li>` block,
paste it, and edit the text. For the award badge, add `<span class="award-inline">Award name</span>` after the conference name.

### Changing the colour accent
In `style.css`, change the value of `--accent` (line ~15). The current value is `#2a6049` (deep teal). The award tag background `--accent-tag` should be a very light tint of the same hue.

---

## Updating the site later

Any time you edit a file:

**Via browser:** Go to the file on GitHub → click the ✏️ pencil icon → edit → **Commit changes**.

**Via Git:**
```bash
git add .
git commit -m "Update research page"
git push origin main
```

Changes go live within ~30 seconds.

---

## Fonts

The site loads **Fraunces** (display) and **Source Serif 4** (body) from Google Fonts via a `<link>` tag. If you ever want to self-host the fonts for offline use or faster load times, download them from [fonts.google.com](https://fonts.google.com) and place the `.woff2` files in a `fonts/` subfolder, then update the `@font-face` declarations in `style.css`.
