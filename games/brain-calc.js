#!/usr/bin/env node

import { threeRoundsGame, calcThisHuman, playerName } from '../src/index.js';

threeRoundsGame(calcThisHuman, playerName);