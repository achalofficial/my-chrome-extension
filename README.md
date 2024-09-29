# My Chrome Extension

## Description

This is a simple Chrome extension built using JavaScript, HTML, and CSS. It adds a popup that allows users to change the background color of the current tab to light blue. The extension also includes a background script that runs when the extension is installed.

## Features

- Displays a popup with a button to change the background color of the current web page.
- Utilizes Chrome's `tabs` and `scripting` APIs to manipulate the current tab's content.
- Runs a background service worker that logs a message upon installation.

## File Structure

```plaintext
my-chrome-extension/
│
├── manifest.json          # Chrome extension manifest file
├── background.js          # Background service worker
├── popup/
│   ├── popup.html         # HTML for the popup UI
│   ├── popup.js           # JavaScript for popup behavior
│   └── popup.css          # CSS for popup styling (optional)
└── icons/
    ├── icon16.png         # Icon for toolbar (16x16)
    ├── icon48.png         # Icon for Chrome Web Store (48x48)
    └── icon128.png        # Larger icon for display (128x128)
