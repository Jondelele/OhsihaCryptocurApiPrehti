// Yhdistaa kaikki routterit(autentikointi, tietokanta, julkiset resurssit jne)
// Api.js tiedosto ohjaa käyttäjän oikeaa reittiä pitkin sen mukaan mitä käyttäjä
// haluaa tehdä
const config = require('../config');
var express = require('express');
const path = require("path")
const api_authentication = require('./api_authentication');
const public = require('./public');
const private = require('./private');
const api_fingrid = require('./api_fingrid');

// express kirjastosta otetaan Routeri jonka avulla tehdään kaikki asiat oikeassa järjestyksessä
// Router.use rivien järjsestyksessä on suuri merkitys koska joitakin asioita saa tehdä vasta sitten
// kun on autentikoitu -> (router.use(api_authentication);)
const router = require('express').Router();

// Jos req objectia muutetaan niin muutokset pysyvät
router.use(public);
//TODO: esim tahan voi laittaa rekisteröitymis routen
router.use(api_authentication);
// router.use(private); rivi on autentikoinnin alapuolella koska se sisältää resursseja
// joihin saa päästä vasta autentikoinnin jälkeen käsiksi. Järjestys on tärkeä.
router.use(private);
router.use(api_fingrid);
//TODO: Authenticaten jälkeen uusi route jolla voidaan hallinnoida käyttäjiä joko adminin toimesta 
// tai käyttäjän itsensä toimesta


//Index page router oma filu
// router.use(express.static(path.join(__dirname, '../client')))

//TODO: api routers

module.exports = router;