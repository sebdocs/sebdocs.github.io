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
