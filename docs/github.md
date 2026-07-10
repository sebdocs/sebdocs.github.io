---
icon: simple/github
---

## merge conflicts

- Prevention: good habit

```
git fetch
git pull --rebase --autostash
```

- show conflicted files `git status`

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
