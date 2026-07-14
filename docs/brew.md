---
icon: lucide/package
---

## use vcs to generate thumbnail previews

Workflow app: change to pass input as arguments!

```
brew install vcs
```

- ffmpeg
- ffprobe

??? info ".vcs.conf"

      ```
      footer=off

      bg_heading=White
      bg_sign=White
      bg_contact=White
      fg_sign=White
      fg_heading=Black

      format=jpg
      disable_shadows=1

      bottom_margin = 0
      padding=0

      user=U0
      verbosity=$V_ERROR
      height=240
      columns=3

      ```

- Automator workflow receives current: movie files -> Action

??? info "~/Library/Services/Generate VCS Sheet.workflow"

    ```bash
    #!/bin/zsh

    export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    exec </dev/null

    # ===== SETTINGS =====
    NUM_FRAMES=32
    COLUMNS=4
    THUMB_HEIGHT=240
    FONT_SIZE=24
    TS_MARGIN=6
    SOUND="/System/Library/Sounds/Glass.aiff"

    for input in "$@"; do
    dir="${input:h}"
    file="${input:t}"

    # Flexible filename handling:

    # Try to extract ID with regex; fallback to basename without extension

    id=$(echo "$file" | sed -E 's/^([A-Za-z]+-[0-9]+[A-Za-z]?)( |\.|$).*$/\1/')
    if [[-n "$id" && "$id" != "$file"]]; then
    out="$dir/${id}\_s.jpg"
    else
    base="${file%.*}"       # strip extension
        out="$dir/${base}\_s.jpg"
    fi

    tmpdir="$(mktemp -d)"

    # Ensure cleanup even if something fails

    trap 'rm -rf "$tmpdir"' EXIT

    # --- get duration ---

    duration=$(ffprobe -v error \
        -show_entries format=duration \
        -of csv=p=0 "$input")

    # --- seek-based frame extraction (FAST, vcs-style) ---

    for ((i=1; i<=NUM_FRAMES; i++)); do
    t=$(echo "$duration \* $i / ($NUM_FRAMES + 1)" | bc -l)

        ffmpeg -loglevel error -y \
        -hwaccel videotoolbox \
        -ss "$t" -i "$input" \
        -frames:v 1 \
        -vf "scale=-1:${THUMB_HEIGHT}:flags=fast_bilinear" \
        -an -sn \
        "$tmpdir/frame_$(printf "%03d" "$i").jpg"

    done

    # --- draw HH:MM:SS timestamps ---

    i=1
    for frame in "$tmpdir"/frame_*.jpg; do
        sec=$(printf "%.0f" "$(echo "$duration \* $i / ($NUM_FRAMES + 1)" | bc -l)")

        hh=$(printf "%02d" $((sec / 3600)))
        mm=$(printf "%02d" $(( (sec % 3600) / 60 )))
        ss=$(printf "%02d" $((sec % 60)))

        magick "$frame" \
        -gravity southeast \
        -fill white -stroke black -strokewidth 1 \
        -pointsize "$FONT_SIZE" \
        -annotate +"$TS_MARGIN"+"$TS_MARGIN" "${hh}:${mm}:${ss}" \
        "$frame"

        ((i++))

    done

    # --- assemble contact sheet ---

    montage "$tmpdir"/frame_*.jpg \
        -tile ${COLUMNS}x \
        -geometry +0+0 \
        "$out"

    rm -rf "$tmpdir"
    trap - EXIT

    done
    afplay "$SOUND"
    ```

## magick

??? info "magick to remove vcs quirks"

    ```bash
    export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    exec </dev/null # avoid waiting keyboard input Automator

    for input in "$@"; do
    dir="${input:h}"
    file="${input:t}"

    if [[ "$file" =~ ([A-Za-z]+-[0-9]+) ]]; then
        out="$dir/${match[1]}_s.jpg"
        vcs -n 30 --disable timestamps -o "$out" "$input"
    else
        osascript -e "display alert \"No ID found\" message \"Filename doesn't match pattern\""
    fi
    done

    magick "$out" -gravity south -chop 0x28 +repage "$out" # remove vcs footer artifacts

    afplay /System/Library/Sounds/Glass.aiff
    ```

??? info "magick to chop image then stitch in columns (general)"

    ```bash

    #!/bin/zsh
    for input in "$@"; do
    dir="$(dirname "$input")"
    filename="$(basename "$input")"
    ext="${filename##_.}"
    name="${filename%._}"

    output="$dir/$name by3.$ext"

    /opt/homebrew/bin/magick "$input" \
        -gravity North -chop 0x297 \
        -crop 1x3@ +repage \
        +append \
        "$output"
    done
    ```
