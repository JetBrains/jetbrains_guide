#!/bin/bash

# Ensure we are in the correct working directory
cd /jetbrains_guide

# Listen to all addresses by default but pass any other parameters to yarn
yarn "$@" -H 0.0.0.0