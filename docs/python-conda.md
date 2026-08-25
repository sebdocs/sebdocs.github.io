---
icon: simple/python
---

## Libraries

- [marimo](https://docs.marimo.io/#quickstart) `marimo edit`
- polars
- pickle
  `.pkl` freeze python objects e.g. machine learning model

## Homebrew python

1. Install Xcode CLI `xcode-select --install`
2. Install Homebrew
3. Install python `brew install python`
4. Ensure brew in PATH:

```
# ~/.zshrc
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### Managing environments

- pyenv

```bash
brew install pyenv
# ~/.zshrc (first to run)
eval "$(pyenv init - zsh)"
pyenv global system
```

- direnv

```bash
brew install direnv
echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc # last to run

# inside particular project
echo "layout python python3" > .envrc
direnv allow
# auto-activate environment (back to brew at $HOME)
```

- new project python version

```
pyenv install 3.12.10
cd project; pyenv local 3.12.10
# OR
pyenv global 3.13.5
```

- built-in venv module

```bash
mkdir my-project && cd my-project
python3 -m venv .venv # DOUBLE CHECK if path is MacOS outdated version
source .venv/bin/activate
pip install uv fastapi uvicorn polars
deactivate # not necessary with direnv
```

- uv

```
uv venv
source .venv/bin/activate
uv pip install fastapi
```

## Jupyter Notebook

- Don't use !pip `%pip install pandas`!!

## Conda (hard links packages - save disk space)

```
conda env list
```

- Make new environment

```
conda create -n myenv python=3.10 numpy pandas
conda activate myenv
```

- Go back default base

```
conda activate base
```

## VS Code

```
Run selection — Shf + Enter
Clear output — Cmd + K
```

- Code Runner (always run entire file) `"code-runner.ignoreSelection": true`

```
To run — Ctrl + Opt + N
```
