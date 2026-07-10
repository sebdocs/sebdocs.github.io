---
icon: simple/github
---

## Git commands

```
git fetch
git pull --rebase --autostash
```

```
git status # show modified / conflicted files
git add .
git commit -m "message"
git push origin main
```

- working night shift hand-off

```bash
# 1. Create and switch to a feature branch (only do this the first day)
git checkout -b feature/my-new-task

# 2. Stage and commit everything, even if it's broken or half-written
git add .
git commit -m "WIP: saving progress for tonight"

# 3. Push it to GitHub
git push origin feature/my-new-task

```

- start of night

```
git fetch origin
git checkout feature/my-new-task
```

- cleaning up wip (squash)

```bash
git checkout main
git pull
# Merge the feature branch and compress all intermediate commits into one
git merge --squash feature/my-new-task
git commit -m "Feat: completely finished the new task"
git push origin main
```

## git global

```bash
git config --global pull.rebase true
git config --global rebase.autoStash true
git config --global fetch.prune true
```

## github multi accounts

classic token for all access

## check for current git login

`git config --show-origin --get user.name`

- Inside `~/.gitconfig`

```
[alias]
	whoami = !echo \"Author: $(git config user.name) <$(git config user.email)>\" && echo \"Remote: $(git remote get-url origin)\"
	work = !git config user.name \"work-user\" && git config user.email \"ID+USERNAME@users.noreply.github.com\" && echo \"✓ Switched to WORK\"
```
