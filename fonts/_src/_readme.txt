Converter recommended: https://onlinefontconverter.com/


Google maintains free software (MIT) command-line utilities to compress and decompress WOFF2 files. The repository contains instructions to build and run the utility; but for redundancy's sake...

Build:

git clone --recursive https://github.com/google/woff2.git
cd woff2
make clean all

Run:

woff2_compress myfont.ttf

If supporting IE is necessary, ttf2woff is a free software (MIT) legacy library available in NPM and is similarly easy to use:

$ npx ttf2woff myfont.ttf myfont.woff


https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization?hl=ru