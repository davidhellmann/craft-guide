---
title: Upgrading from Guide 2
description: 'Installing Guide'
position: 103
category: Getting started
version: 3.0.0
fullscreen: false
---

## Upgrading from Craft 3 to Craft 4

- Change any use of the `filter` tag (mostly in `{% filter markdown('gfm') %}`) to the `apply` tag.
  - All components have been updated to use the `filter` tag.

---

Templates built for Guide 2 will mostly be compatible, however, Guide 3 introduces some breaking changes. Here are some things that need to be updated to convert a Guide 2 template for Guide 3:

- All guides in Guide 3 are based in the Twig format. Markdown guides from Guide 2 should be wrapped in a `{% filter markdown('gfm') %}` twig tag, like this:
    ```twig
    {% apply markdown('gfm') %}
    
    ## Heading
    
    Content
    
    {% endapply %}
    ```
- There is currently no migration for Organizer data from Guide 2 to Guide 3. All guides will be available in the Organizer and can be dragged to the desired Craft CP area.
- Existing Guide UI elements, managed through the Craft Field Layout Designer, have been replaced with a new UI element class. Craft doesn’t automatically remove old UI elements, so existing Guide UI elements need to be replaced.
  <alert type="info">
  The new Guide UI elements no longer require you to select a guide in an environment that allows for admin changes 🎉
  </alert>
- Rebrand styles have been removed in Guide 3 and guide components have minimal styling so they fit in better with Craft’s default stylesheet. A subset of [Tailwind-based utility classes](https://tailwindcss.com) have been added and are discoverable through the Guide Editor so you can lay out your guide content.
- Per-guide permissions have been removed. Use [Craft’s user permission check](https://craftcms.com/docs/3.x/user-management.html#checking-permissions) to determine who should view sensitive guide information.