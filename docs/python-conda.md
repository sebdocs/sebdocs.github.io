---
icon: simple/python
---

## Libraries

- polars
- pickle
  `.pkl` freeze python objects e.g. machine learning model

## Homebrew python

1. Install Xcode CLI `xcode-select --install`
2. Install Homebrew
3. Install python `brew install python`

### Managing environments

```bash
mkdir my-project && cd my-project
python3 -m venv .venv
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
