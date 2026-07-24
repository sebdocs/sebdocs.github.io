---
icon: simple/espressif
---

# ESP32

## Setup

- ~/esp-idf-sdk/
  `git clone -b v6.0.2 --recursive https://github.com/espressif/esp-idf.git esp-idf-sdk`

```bash
./install.sh esp32s3 esp32c6 esp32h2 # from esp-idf-sdk

. ./export.sh
```

- IDF shell `idf.py` `alias get_idf='. "$HOME/.espressif/v6.0.2/esp-idf/export.sh"'`

## Project

```
cd examples/openthread/ot_rcp
get_idf
idf.py set-target esp32c6

export LC_ALL=C.UTF-8 TERM=xterm
idf.py menuconfig
idf.py build
```

- IDF from GUI installation `source ~/.espressif/v6.0.2/esp-idf/export.sh` `echo $IDF_PATH`
