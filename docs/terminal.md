---
icon: lucide/square-terminal
---

## Quick references

`gh auth status`

## Vim

- ~/.vimrc

```
# F2 to toggle line no.
nnoremap <F2> :set nonumber!<CR>

" Convert tabs to spaces
set expandtab

" Number of spaces that a <Tab> in the file counts for
set tabstop=4

" Number of spaces to use for each step of (auto)indent
set shiftwidth=4

" Number of spaces that a <Tab> counts for while performing editing operations
set softtabstop=4

```

## MacOS Terminal

- Profiles tab -> Text sub-tab -> Cursor select Vertical Bar
- Profiles -> Keyboard sub-tab -> Use Option as Meta key

## Ghostty

In `~/.config/ghostty/config` insert `macos-option-as-alt = true`

## Custom .zshrc

```bash
PROMPT='➡️  %~ %# '

HISTFILE=~/.zsh_history
HISTSIZE=100000
SAVEHIST=100000

setopt APPEND_HISTORY
setopt SHARE_HISTORY
setopt INC_APPEND_HISTORY
setopt HIST_IGNORE_DUPS
setopt HIST_IGNORE_ALL_DUPS
```

## Oh My Zsh

!!! note

    Alt: Skip the install & use plugins only
    ```
    source ~/zsh-autosuggestions/zsh-autosuggestions.zsh`
    source ~/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
    ```

- Install

```
git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh
```

- zsh-autosuggestions

```
git clone https://github.com/zsh-users/zsh-autosuggestions \
~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
```

- zsh-syntax-highlighting

```
git clone https://github.com/zsh-users/zsh-syntax-highlighting \
~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
```

??? info "ohmyzsh .zshrc"

    ``` bash
    # Path to your Oh My Zsh installation.
    export ZSH="$HOME/.oh-my-zsh"

    # Safer remote SSH behaviour
    if [[ -n "$SSH_CONNECTION" || -n "$SSH_TTY" ]]; then
    DISABLE_AUTO_TITLE="true"
    DISABLE_LS_COLORS="true"
    ZSH_THEME=""
    fi

    ZSH_THEME="robbyrussell"

    # Hyphen-insensitive, _ and - will be interchangeable.
    # Case-sensitive completion must be off.
    # CASE_SENSITIVE="true"
    HYPHEN_INSENSITIVE="true"

    COMPLETION_WAITING_DOTS="true"

    plugins=(
    git
    zsh-autosuggestions
    zsh-syntax-highlighting
    )

    source $ZSH/oh-my-zsh.sh

    # Right Arrow Key (→): Accepts the entire grayed-out suggestion
    # Option + Right Arrow = accept one word from autosuggestion
    bindkey '^[^[[C' forward-word

    # Preferred editor for local and remote sessions
    if [[ -n "$SSH_CONNECTION" || -n "$SSH_TTY" ]]; then
    export EDITOR="vim"
    else
    export EDITOR="nvim"
    fi
    ```

## App specific Terminal (ghostty)

```bash
if [[ "$TERM_PROGRAM" == "ghostty" ]] && [[ -f "$HOME/.config/ghostty/.zshrc.ghostty" ]]; then
  source "$HOME/.config/ghostty/.zshrc.ghostty"
fi
```

## display terminal message

```bash
display_terminal_message() {
    local message_file="$HOME/.terminal_message"
    [[ -f "$message_file" ]] || return

    local width max line preview len i=1

    width=$(tput cols 2>/dev/null || echo 80)
    max=$(( width - 8 ))   # room for "99. "

    while IFS= read -r line || [[ -n "$line" ]]; do
        preview="$line"
        len=${#${preview}}

        if (( len > max )); then
            preview="${preview[1,$((max - 3))]}..."
        fi

        printf "%*d. %s\n" 2 "$i" "$preview"
        ((i++))
    done < "$message_file"
}
display_terminal_message

# tm — show all full messages with numbers
# tm 2 (run) — show message 2 (and execute)
tm() {
    local file="$HOME/.terminal_message"
    [[ -f "$file" ]] || return

    if (( $# == 0 )); then
        nl -w2 -s'. ' "$file"
        return
    fi

    local cmd
    cmd=$(sed -n "${1}p" "$file") || return

    if [[ $2 == run ]]; then
        print -P "%F{yellow}> $cmd%f"
        eval "$cmd"
    else
        printf "%s\n" "$cmd"
    fi
}
```

## aliases

For a full list of active aliases, run `alias`.

```bash

alias tailscale='/Applications/Tailscale.app/Contents/MacOS/Tailscale'
alias tss='tailscale status'
alias finish='afplay /System/Library/PrivateFrameworks/ScreenReader.framework/Versions/A/Resources/Sounds/AnimationFlyToDownloads.aiff'

alias dps='docker ps -a --format "table {{.ID}}\t{{.Names}}\t{{.Status}}\t{{.Ports}}"'
alias lzd='lazydocker'
alias chx='chmod +x'
alias szsh='source .zshrc'
```

## github current user (execute on load)

```
bash -c 'gh auth status' | head -n 2
```

## change saved html webpage title to date

```bash
rename_html() {
    local f="$1"
    local target="$2"
    local d

    # If the second argument is empty, default to today's date
    if [ -z "$target" ]; then
        d=$(date '+%F %a')
    else
        # Otherwise, find the most recent past weekday requested
        target="$(echo "$target" | tr '[:upper:]' '[:lower:]')"

        case "$target" in
            sun) target_num=0 ;;
            mon) target_num=1 ;;
            tue) target_num=2 ;;
            wed) target_num=3 ;;
            thu) target_num=4 ;;
            fri) target_num=5 ;;
            sat) target_num=6 ;;
            *) echo "Invalid weekday: $target"; return 1 ;;
        esac

        local today_num=$(date +%w)
        local diff=$(( (today_num - target_num + 7) % 7 ))

        d=$(date -v-"$diff"d '+%F %a')
    fi

    # Update the file title and rename it
    sed -i '' "s|<title>.*</title>|<title>$d</title>|" "$f" &&
    mv "$f" "$(dirname "$f")/$d.html"
}
```

## Execute with delay s, m, h

```bash
countdown() {
  local input=$1
  shift

  # Convert to seconds
  local total
  total=$(echo "$input" | awk '
    {
      s=0
      while (match($0, /[0-9]+[smh]/)) {
        val = substr($0, RSTART, RLENGTH)
        num = val + 0
        unit = substr(val, length(val), 1)
        if (unit=="s") s+=num
        else if (unit=="m") s+=num*60
        else if (unit=="h") s+=num*3600
        $0 = substr($0, RSTART+RLENGTH)
      }
      print s
    }')

  for ((i=total; i>0; i--)); do
    printf "\rExecuting in %02dh:%02dm:%02ds" $((i/3600)) $((i%3600/60)) $((i%60))
    sleep 1
  done

  echo -e "\nRunning: $*"
  "$@"
}
```

## fzf

```
# Global macOS junk exclusions for fzf
export GLOBAL_EXCLUDES=(
  ".DS_Store"
  "._*"
  ".Spotlight-V100"
  ".Trashes"
  ".fseventsd"
  ".DocumentRevisions-V100"
  ".TemporaryItems"
)
```

## exportPATHs

```
export PATH="$HOME/.local/bin:$PATH"
export PATH="$PATH:$HOME/Library/Android/sdk/platform-tools"
export PATH="$HOME/.cargo/bin:$PATH"
```

## conda (miniforge)

```
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/sebh/miniforge3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/sebh/miniforge3/etc/profile.d/conda.sh" ]; then
        . "/Users/sebh/miniforge3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/sebh/miniforge3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

```

## sample with shebang (automator)

```bash
#!/bin/zsh
```

## save commands shortcut

??? info "work in progress"

    ```bash
    # Save current command into list (prepend with numbering)
    savecmd() {
    local file=~/.saved_cmds
    local cmd="$BUFFER"

        [[ -f $file ]] || touch $file

        # Increment all numbers
        awk '{print $1+1, substr($0, index($0,$2))}' $file > ${file}.tmp

        # Insert new command as #1
        echo "1 $cmd" | cat - ${file}.tmp > ${file}.new

        mv ${file}.new $file
        rm -f ${file}.tmp
    }

    zle -N savecmd
    bindkey '^]' savecmd     # Ctrl+] to save

    # ZLE widget: view mode
    # Paste saved command into BUFFER instead of executing it
    paste_saved_cmd() {
        local file=~/.saved_cmds
        local num="$1"

        # extract command by number
        local cmd=$(awk -v n=$num '$1==n { $1=""; print substr($0,2); exit }' "$file")

        if [[ -z "$cmd" ]]; then
            BUFFER=""       # clear buffer
            echo "Invalid selection: $num"
            return 1
        fi

        BUFFER="$cmd"       # paste into command line
        CURSOR=${#BUFFER}   # move cursor to end
    }

    # ZLE view mode
    view_saved_cmds() {
        local file=~/.saved_cmds

        echo
        cat "$file"
        echo -n "Select number: "

        local key
        read -k key          # read ONE key only
        echo "$key"

        if [[ "$key" =~ '^[1-9]$' ]]; then
            paste_saved_cmd "$key"
        else
            echo "Cancelled."
        fi
    }

    zle -N view_saved_cmds
    bindkey '^[' view_saved_cmds    # Ctrl+[ to view & execute
    ```
