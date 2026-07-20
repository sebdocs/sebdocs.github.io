---
icon: simple/python
---

## Libraries

- polars
- pickle
  `.pkl` freeze python objects e.g. machine learning model

## Homebrew python

- Managing venvs

```bash
mkdir my-project && cd my-project
python -m venv .venv
source .venv/bin/activate
pip install uv fastapi uvicorn polars
```

```
uv venv
source .venv/bin/activate
uv pip install fastapi
```

## Jupyter Notebook

- Don't use !pip `%pip install pandas`!!

## Conda (don't install until absolutely necessary)

1. Install Xcode CLI `xcode-select --install`
2. Install Homebrew
3. Install python `brew install python`

```
conda env list
```

- Make new environment

```
python3 -m venv new_env_name
source new_env_name/bin/activate
```

- Go back default base

```
conda activate base
```

## VS Code

```
Run selection — Shf + Enter
Clearn output — Cmd + K
```

- Code Runner (always run entire file) `"code-runner.ignoreSelection": true`

```
To run — Ctrl + Opt + N
```
