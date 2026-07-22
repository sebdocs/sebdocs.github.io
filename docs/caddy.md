---
icon: simple/caddy
---

## caddyfile

```
# /opt/homebrew/etc/Caddyfile
brew services start caddy
```

```
:8080 {
    root * /Users/sebh/homepage
    file_server
}

http://zensical.localhost {
    reverse_proxy localhost:8000
}

device.tailnet.ts.net:8081 {
    reverse_proxy localhost:2283

    tls {
        get_certificate tailscale
    }
}
```
