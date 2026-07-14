---
icon: lucide/square-terminal
---

## sample with shebang (automator)

```
#!/bin/zsh
for input in "$@"; do
  dir="$(dirname "$input")"
  filename="$(basename "$input")"
  ext="${filename##*.}"
  name="${filename%.*}"

  output="$dir/$name by3.$ext"

  /opt/homebrew/bin/magick "$input" \
    -gravity North -chop 0x297 \
    -crop 1x3@ +repage \
    +append \
    "$output"
done
```
