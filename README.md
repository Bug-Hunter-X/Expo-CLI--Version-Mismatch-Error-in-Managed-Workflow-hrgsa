# Expo CLI Version Mismatch Error

This repository demonstrates a common error encountered when using Expo's managed workflow: a version mismatch between the globally installed Expo CLI and the Expo version specified in your project's `package.json` file.

## Problem

Attempting to start or build an Expo managed workflow project with an incompatible Expo CLI version results in errors.  The error messages can vary but often indicate that the CLI cannot resolve dependencies or handle project configurations correctly.

## Solution

The solution involves ensuring both the global Expo CLI version and the project's `package.json` `expo` version are synchronized. This usually requires updating either your global installation or your project's dependencies. 

This repo provides examples demonstrating the problematic and resolved states.
