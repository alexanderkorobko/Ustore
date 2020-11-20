'use strict'
import './storage.js';
import generateOverlay from './generateOverlay.js';
import generateHeader from './renderHeader.js';
import genCat from './genCat.js';
import generateGoodsPage from './generateGoodsPage.js';
import generateCartPage from './generateCartPage.js';
import generateFooter from './generateFooter.js'; 
import generateItemPage from './generateItemPage.js'

generateOverlay();
generateHeader(); 
genCat();
generateGoodsPage();
generateFooter();
generateItemPage();
generateCartPage();