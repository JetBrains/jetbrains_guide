# This Dockerfile can be used by content creators.
#
# It comes with all tools pre-installed. Use the
# WebStorm run configurations to run it with the
# correct volume mounts.

FROM registry.jetbrains.team/p/jetbrains-guide/guide-containers/guide-content-creators
EXPOSE 8000
EXPOSE 33949

WORKDIR /jetbrains_guide/