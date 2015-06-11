CC = g++

CCFLAGS += -std=c++14 -Wall -Wextra -O2
LIBS =
LDFLAGS += -s

PREFIX ?= /usr/local
BINPREFIX = $(PREFIX)/bin

SRC = main.cc
OBJ = $(SRC:.cc=.o)
EXE = __$1

all: $(EXE)

$(OBJ) $(SRC): Makefile

.cc.o:
	$(CC) $(CCFLAGS) $(OPTFLAGS) -c -o $@ $<

$(EXE): $(OBJ)
	$(CC) -o $@ $(OBJ) $(LDFLAGS) $(LIBS)

install:
	install -d -m 0755 "$(DESTDIR)$(BINPREFIX)"
	install -m 0755 $(EXE) "$(DESTDIR)$(BINPREFIX)"

uninstall:
	rm -f "$(DESTDIR)$(BINPREFIX)"/$(EXE)

clean:
	rm -f $(OBJ) $(EXE)
