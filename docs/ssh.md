---
icon: lucide/square-terminal
---

```
ssh-keygen -t ed25519 -C "HostName"
```

ssh id_ed25519 + id_ed25519.pub

cat id_ed25519.pub add to id_ed25519

## Migration / new machine

1. Give full control of the .ssh directory to you only
   `chmod 700 ~/.ssh`

2. Make the private key readable/writable ONLY by you
   `chmod 600 ~/.ssh/id_ed25519`

3. Make the public key readable by everyone, writable only by you
   `chmod 644 ~/.ssh/id_ed25519.pub`
