# my-chrome-extension
Building custom chrome extension

# File structure 

Manifest.json 
+   The manifest.json file is required by every Chrome extension. It tells Chrome about the extension, including its name, version, permissions, etc.
+   manifest_version: Specifies the Chrome Extension Manifest version. We use version 3 (MV3) as it’s the latest.
+   name, description, and version: Basic metadata for your extension.
+   action: Defines a popup (popup.html) and the icons for your extension.
+   permissions: Lists permissions, such as storage or access to the current active tab.
+   background: Specifies the background service worker script (background.js), which can run tasks in the background.
