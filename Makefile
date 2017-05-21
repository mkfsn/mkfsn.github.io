SRCS := ABOUTME.md
NODE_MODULES = node_modules
OUTPUT := src/app/app.html

.PHONY: all compile build

all: $(NODE_MODULES) compile build

node_modules:
	npm install

compile:
	pandoc $(SRCS) -f markdown -t html -s  | sed '1,10d' | sed -n -e :a -e '1,2!{P;N;D;};N;ba' > ${OUTPUT}

build:
	npm run build

clean:
	rm -rf $(NODE_MODULES)
