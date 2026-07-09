---
icon: lucide/monitor-cloud
---

## Generate key pair

```
cd ~/.ssh
ssh-keygen -t ed25519 -C "HostName"
```

1. Private key `id_ed25519` & Public `id_ed25519.pub`

2. cat id_ed25519.pub add to string to `~/.ssh/authorized_keys` on host machine

## Migration / new machine

1. Give full control of the .ssh directory to you only
   `chmod 700 ~/.ssh`

2. Make the private key readable/writable ONLY by you
   `chmod 600 ~/.ssh/id_ed25519`

3. Make the public key readable by everyone, writable only by you
   `chmod 644 ~/.ssh/id_ed25519.pub`

- using tmux for persistent session

1. `tmux new -s mysession`
2. Detach from the session by pressing Ctrl + B, releasing, and then pressing D
3. check on it later: `tmux attach -t mysession'

- alternatively nohup

## github multi accounts set up

`~/.ssh/config`

```
# sebdocs

Host github-sebdocs
HostName github.com
User git
IdentityFile ~/.ssh/github-sebdocs
IdentitiesOnly yes
```
