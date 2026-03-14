#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

const name    = chalk.bold.white('cremarch');
const title   = chalk.cyan('Web Backend Engineer');

const github  = chalk.gray('GitHub:') + '  ' + chalk.green('https://github.com/cremarch');
const x       = chalk.gray('X:') + '       ' + chalk.green('https://x.com/cremarch123');
const email   = chalk.gray('Email:') + '   ' + chalk.green('info@cremarch.com');

const card = [
  name,
  title,
  '',
  github,
  x,
  email,
].join('\n');

console.log(
  boxen(card, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'cyan',
  })
);
