CLASS=class
APP=application
MAIN=Main

all: compile bundle

run: compile
	java -cp $(CLASS) $(MAIN)

bundle:
	jar cfe $(APP).jar $(MAIN) -C $(CLASS) .

compile:
	mkdir -p $(CLASS)
	rm -f $(CLASS)/*
	javac -d $(CLASS) src/*.java

clean:
	rm -f *.jar
