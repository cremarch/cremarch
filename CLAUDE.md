# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`cremarch` is a single-command npm package whose only purpose is to print a personal business card to the terminal when run via `npx cremarch`. The entire implementation lives in `bin/card.js`.

## Commands

- Run locally: `node bin/card.js`
- Run as installed CLI: `npx cremarch` (after publish) or `npm link && cremarch` (during development)
- Install deps: `npm install`
- Publish: `npm publish` (the `files` field restricts the published tarball to `bin/`)

There is no build step, no linter, no test suite.

## Architecture notes

- ESM-only (`"type": "module"` in `package.json`); use `import`, not `require`.
- The `bin` field maps the published command name `cremarch` to `./bin/card.js`. The shebang (`#!/usr/bin/env node`) on that file must be preserved or `npx` execution will break.
- Output is composed by joining colored strings (`chalk`) into a single block and wrapping it with `boxen`. When editing the card, keep the column-aligned spacing in the `GitHub:`/`X:`/`Email:` lines — alignment is done with literal spaces, not a formatter.
- `chalk` v5 and `boxen` v8 are both pure-ESM; downgrading either would force a CJS rewrite.
