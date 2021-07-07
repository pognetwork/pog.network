# [pog.network](https://pog.network)

## Overview

The [pog.network](https://pog.network) website is setup using multiple git submodules. We have this main website repository which pulls in markdown and configuration files from other POG related projects, like the specification repo and our node implementation.

We're utilising mkdocs to create a static website from all of these files and cloudflare pages to publish them automatically and make the site available on [pog.network](https://pog.network).

## Requirements

- `Python 3`
- `$ pip install -r requirements.txt`

## Development

- Syncing Git Submodules (Updating the subpages):
  - `git submodule sync`
- Starting the development server:
  - `mkdocs server`

### Commiting new changes

- changes to sub-projects have to be committed to their repos, and then this main repo has to be updated (We might add automatic sub module syncing later on).\
  **Example:**
  - `$ cd projects/specification`
  - `$ code . # update some files`
  - `$ git add . && git commit -m "docs: updated some files"`
  - `$ git push`
  - `$ cd ../../ # go back to www`
  - `$ git add .`
  - `$ git commit -m "chore: update submodules"`
  - `$ git push`
