---
icon: simple/espressif
---

# ESP32

## Setup

`git clone -b v6.0.2 --recursive https://github.com/espressif/esp-idf.git`

```
~/esp/
├── esp-idf/
├── project/
└── libraries/
```

- IDF shell `idf.py`

## Compiling

```bash
./install.sh esp32-c6 # from esp-idf

. ./export.sh

cd examples/openthread/ot_rcp
export LC_ALL=C.UTF-8 TERM=xterm
idf.py set-target esp32c6
idf.py menuconfig

```

- Switch back to IDF `source ~/.espressif/v6.0.2/esp-idf/export.sh` `echo $IDF_PATH`
