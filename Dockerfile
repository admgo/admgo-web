FROM ubuntu:latest
LABEL authors="kenley"

ENTRYPOINT ["top", "-b"]