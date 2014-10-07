OUTFILE=release

all: project

run: project
	./$(OUTFILE)

project:
	ant
	echo -e '#!/bin/sh\njava -jar *.jar' > $(OUTFILE)
	chmod +x $(OUTFILE)

clean:
	ant clean
	rm -f *.jar
	rm -rf ./dist
	rm -f $(OUTFILE)
