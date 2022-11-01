import {cardList} from './cardsList.js';

/* MENU ANIMATION */

/* getting elements */
const openProfile = document.querySelector('.profile')
const profileSec = document.querySelector('.profileFull')
const closeProfile = document.querySelector('.closeProfile')
const headerCont = document.querySelector('.main-header')

/* */

/* add event on click */
openProfile.addEventListener('click', () => {
    profileSec.classList.remove('closeProfileAnimation')
    profileSec.classList.add('openProfile')
    headerCont.style.filter = 'blur(3px)'
})

closeProfile.addEventListener('click', () => {
    profileSec.classList.add('closeProfileAnimation')
    profileSec.classList.remove('openProfile')
    headerCont.style.filter = 'none'
})

/* */


/* CARDS RENDER */

/* getting elements */

const animesSec = document.querySelector('.m-cont-main')
const category = document.querySelectorAll('.card-btn')

const cards = cardList;

/* */


/* renderizing cards */

const renderCards = () => {
    animesSec.innerHTML = '';

        cards.forEach(({ name, genre, ranking, studio, linkCard, urlCard}) => {
            animesSec.innerHTML += `
            <div class="banner">
            <span class="ranking">${ranking}</span>

            <div class="b-info">
                <div class="save"></div>
                <a href="${linkCard}" class="play" target="_blank">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAABiUlEQVRYhe3XsUsbYRjH8e/7XoaOYp1eccjWQfCONwYCLvoXuByUIi7i7Owgbf+Duru5GSSzQqmDFOG4Qwh0EAk4ZXQUchyvk9AhDZL3vUuH5zMePD++BA4uIIQQQgghZlI+x3EcL0VRdAHsAI/ASZ7n/SBlM0Q+x8aY70qpfUADK0BqjFk1xvwcj8dlkMIptM+xUqo95fEhkCdJsuGzPYtX9AyftNZ31tqjOsbrigb4APyw1g56vd5yyOE6o9/sTiaTe2vtVqjBJqIB1oBfnU7nW5qmXi8/NBcN0HLOfR2NRtfdbvejz1CT0W92qqq6ieN4ad6BRUQDrGut03mPFxVdRVF0P+/xIqJLpdRelmXZvAOtkDXv8KS1/pJl2W+fkcainXOXZVkeDofDZ9+tJqJfgOOiKE5DDdYd/Qf4nOf5MORobS+ic+4c2AwdDP6/9GTKs2fn3EFRFAPP7X/y/Z4+A/7+2L8F4jqDwfPvFkCSJBtKqW2t9UO73b7q9/tViDAhhBBCiP/FKyrgYUGy5bTVAAAAAElFTkSuQmCC">
                </a>
                <div class="b-info-wrapper">
                    <span class="b-info-studio">${studio}</span>
                    <span class="b-info-genre">${genre}</span>
                    <div class="b-info-stars">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVQ4jcWUQUsbURCAv3nJ0qsehGYPoSappTkJFtqbPVZECwoiCPZnaKDGFy3Sc39BLS30L/Sk/gERFKqIMcGGBS8epJ7cN73UsNms2QUPDuxhZ7755s1bWHiM6KyVFztr5cUsbD4LJKIroAr8TGXTgD+2NGYcJwAY99K3reNBvEkTmlAWui9O5lP5NADRrlCIyO/DBxU7H0dfiJHeFV1Y9T+1fw8UBvXSZ0VK/WV9DozHkgcgp/0mPfMbzVoeQNFrYJ4sVwDjoPEhDtV694QAga28xekPRf0M0mhcglv2N1q/eoQAQa0yovnwGyLvMsp2vNtwaWSrHdwl+j6KWkzgRmsgG9x/BQ6V9ULubEssLlroaxCLC0Pva9KwKKaO7bgsUQhgcuFcmhDj3if2Jo/X2Vjq5v8TMUo24bl9NoQwGUkdGeUNxk0A+xHjZHu1OJwqfOJkBvAARfTL3yvz6ulm89C3reOCKb5WaAAh4Hlebjren/D7kingQpAPhUZzp6did28BG9TLe4puY2QK+J60ejcCW6kmrRKP9mpxOLCVahr34PgHLyyDPtXSl10AAAAASUVORK5CYII=">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVQ4jcWUQUsbURCAv3nJ0qsehGYPoSappTkJFtqbPVZECwoiCPZnaKDGFy3Sc39BLS30L/Sk/gERFKqIMcGGBS8epJ7cN73UsNms2QUPDuxhZ7755s1bWHiM6KyVFztr5cUsbD4LJKIroAr8TGXTgD+2NGYcJwAY99K3reNBvEkTmlAWui9O5lP5NADRrlCIyO/DBxU7H0dfiJHeFV1Y9T+1fw8UBvXSZ0VK/WV9DozHkgcgp/0mPfMbzVoeQNFrYJ4sVwDjoPEhDtV694QAga28xekPRf0M0mhcglv2N1q/eoQAQa0yovnwGyLvMsp2vNtwaWSrHdwl+j6KWkzgRmsgG9x/BQ6V9ULubEssLlroaxCLC0Pva9KwKKaO7bgsUQhgcuFcmhDj3if2Jo/X2Vjq5v8TMUo24bl9NoQwGUkdGeUNxk0A+xHjZHu1OJwqfOJkBvAARfTL3yvz6ulm89C3reOCKb5WaAAh4Hlebjren/D7kingQpAPhUZzp6did28BG9TLe4puY2QK+J60ejcCW6kmrRKP9mpxOLCVahr34PgHLyyDPtXSl10AAAAASUVORK5CYII=">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVQ4jcWUQUsbURCAv3nJ0qsehGYPoSappTkJFtqbPVZECwoiCPZnaKDGFy3Sc39BLS30L/Sk/gERFKqIMcGGBS8epJ7cN73UsNms2QUPDuxhZ7755s1bWHiM6KyVFztr5cUsbD4LJKIroAr8TGXTgD+2NGYcJwAY99K3reNBvEkTmlAWui9O5lP5NADRrlCIyO/DBxU7H0dfiJHeFV1Y9T+1fw8UBvXSZ0VK/WV9DozHkgcgp/0mPfMbzVoeQNFrYJ4sVwDjoPEhDtV694QAga28xekPRf0M0mhcglv2N1q/eoQAQa0yovnwGyLvMsp2vNtwaWSrHdwl+j6KWkzgRmsgG9x/BQ6V9ULubEssLlroaxCLC0Pva9KwKKaO7bgsUQhgcuFcmhDj3if2Jo/X2Vjq5v8TMUo24bl9NoQwGUkdGeUNxk0A+xHjZHu1OJwqfOJkBvAARfTL3yvz6ulm89C3reOCKb5WaAAh4Hlebjren/D7kingQpAPhUZzp6did28BG9TLe4puY2QK+J60ejcCW6kmrRKP9mpxOLCVahr34PgHLyyDPtXSl10AAAAASUVORK5CYII=">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVQ4jcWUQUsbURCAv3nJ0qsehGYPoSappTkJFtqbPVZECwoiCPZnaKDGFy3Sc39BLS30L/Sk/gERFKqIMcGGBS8epJ7cN73UsNms2QUPDuxhZ7755s1bWHiM6KyVFztr5cUsbD4LJKIroAr8TGXTgD+2NGYcJwAY99K3reNBvEkTmlAWui9O5lP5NADRrlCIyO/DBxU7H0dfiJHeFV1Y9T+1fw8UBvXSZ0VK/WV9DozHkgcgp/0mPfMbzVoeQNFrYJ4sVwDjoPEhDtV694QAga28xekPRf0M0mhcglv2N1q/eoQAQa0yovnwGyLvMsp2vNtwaWSrHdwl+j6KWkzgRmsgG9x/BQ6V9ULubEssLlroaxCLC0Pva9KwKKaO7bgsUQhgcuFcmhDj3if2Jo/X2Vjq5v8TMUo24bl9NoQwGUkdGeUNxk0A+xHjZHu1OJwqfOJkBvAARfTL3yvz6ulm89C3reOCKb5WaAAh4Hlebjren/D7kingQpAPhUZzp6did28BG9TLe4puY2QK+J60ejcCW6kmrRKP9mpxOLCVahr34PgHLyyDPtXSl10AAAAASUVORK5CYII=">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVQ4jcWUP2sUQRjGf+/+4VotbMZCEFRSmAgGki4WFoZDBYUQEPQObo7dTxACRk5QsLa44r3iUBT8ClaHX0AEUySI1RWCKQWrc8YiF5msu7dbCD4wxTzvM795ZwYG/oestdvW2u0m2aRJSER2AA+8q83WBay1l0XkcD5dUtWDRfmoDhhF0VYwvV+brwt470PgVmWwCTDP8yvA1cBa7vV6S4vWCIC19oWIXCypXwKuFbxPwJeS7FdV3U0AROQHx/dTewXzDYqbOODJnw4Bsiy74Zx7C5gG0FDfvfcPR6PR+1NAgG63ey5N09fArYawCfBAVb+dGKeOOB6Pj4wxbeDx/BhVciKyZ4y5GcL+6vBEWZadd85Nq+qAT5LkwnA4nBYLpY/gvb+3AAYgs9nsblmhCninYP2cj1DNgJ1O5wywEVj7wDpwHfgY+Bt5np+tBaZpehtIOf5dXrZarVVV/ayqB8aYNeAp8AtInXPt4vqy72sTmAKPVHUSFgaDwQwY9Pv9D8Ar7/0m8GZhh1EUPYvjeKUIC6WqkziOV0TkeVXmn+k31u9yotLaCb4AAAAASUVORK5CYII=" alt="">
                    </div>
                </div>
            </div>

            <div class="card-img"><img src="${urlCard}" alt=""></div>
            <span class="b-name">${name}</span>
        </div>
            `
        })   
};

renderCards()


/* */

/* filter cards */

const renderFiltered = (genreClick) => {
    animesSec.innerHTML = ''
    cards.forEach(({ name, genre, ranking, studio, linkCard, urlCard}) => {
        if(genre == genreClick){
        animesSec.innerHTML += `
        <div class="banner">
        <span class="ranking">${ranking}</span>

        <div class="b-info">
            <div class="save"></div>
            <a href="${linkCard}" class="play" target="_blank">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAABiUlEQVRYhe3XsUsbYRjH8e/7XoaOYp1eccjWQfCONwYCLvoXuByUIi7i7Owgbf+Duru5GSSzQqmDFOG4Qwh0EAk4ZXQUchyvk9AhDZL3vUuH5zMePD++BA4uIIQQQgghZlI+x3EcL0VRdAHsAI/ASZ7n/SBlM0Q+x8aY70qpfUADK0BqjFk1xvwcj8dlkMIptM+xUqo95fEhkCdJsuGzPYtX9AyftNZ31tqjOsbrigb4APyw1g56vd5yyOE6o9/sTiaTe2vtVqjBJqIB1oBfnU7nW5qmXi8/NBcN0HLOfR2NRtfdbvejz1CT0W92qqq6ieN4ad6BRUQDrGut03mPFxVdRVF0P+/xIqJLpdRelmXZvAOtkDXv8KS1/pJl2W+fkcainXOXZVkeDofDZ9+tJqJfgOOiKE5DDdYd/Qf4nOf5MORobS+ic+4c2AwdDP6/9GTKs2fn3EFRFAPP7X/y/Z4+A/7+2L8F4jqDwfPvFkCSJBtKqW2t9UO73b7q9/tViDAhhBBCiP/FKyrgYUGy5bTVAAAAAElFTkSuQmCC">
            </a>
            <div class="b-info-wrapper">
                <span class="b-info-studio">${studio}</span>
                <span class="b-info-genre">${genre}</span>
                <div class="b-info-stars">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVQ4jcWUQUsbURCAv3nJ0qsehGYPoSappTkJFtqbPVZECwoiCPZnaKDGFy3Sc39BLS30L/Sk/gERFKqIMcGGBS8epJ7cN73UsNms2QUPDuxhZ7755s1bWHiM6KyVFztr5cUsbD4LJKIroAr8TGXTgD+2NGYcJwAY99K3reNBvEkTmlAWui9O5lP5NADRrlCIyO/DBxU7H0dfiJHeFV1Y9T+1fw8UBvXSZ0VK/WV9DozHkgcgp/0mPfMbzVoeQNFrYJ4sVwDjoPEhDtV694QAga28xekPRf0M0mhcglv2N1q/eoQAQa0yovnwGyLvMsp2vNtwaWSrHdwl+j6KWkzgRmsgG9x/BQ6V9ULubEssLlroaxCLC0Pva9KwKKaO7bgsUQhgcuFcmhDj3if2Jo/X2Vjq5v8TMUo24bl9NoQwGUkdGeUNxk0A+xHjZHu1OJwqfOJkBvAARfTL3yvz6ulm89C3reOCKb5WaAAh4Hlebjren/D7kingQpAPhUZzp6did28BG9TLe4puY2QK+J60ejcCW6kmrRKP9mpxOLCVahr34PgHLyyDPtXSl10AAAAASUVORK5CYII=">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVQ4jcWUQUsbURCAv3nJ0qsehGYPoSappTkJFtqbPVZECwoiCPZnaKDGFy3Sc39BLS30L/Sk/gERFKqIMcGGBS8epJ7cN73UsNms2QUPDuxhZ7755s1bWHiM6KyVFztr5cUsbD4LJKIroAr8TGXTgD+2NGYcJwAY99K3reNBvEkTmlAWui9O5lP5NADRrlCIyO/DBxU7H0dfiJHeFV1Y9T+1fw8UBvXSZ0VK/WV9DozHkgcgp/0mPfMbzVoeQNFrYJ4sVwDjoPEhDtV694QAga28xekPRf0M0mhcglv2N1q/eoQAQa0yovnwGyLvMsp2vNtwaWSrHdwl+j6KWkzgRmsgG9x/BQ6V9ULubEssLlroaxCLC0Pva9KwKKaO7bgsUQhgcuFcmhDj3if2Jo/X2Vjq5v8TMUo24bl9NoQwGUkdGeUNxk0A+xHjZHu1OJwqfOJkBvAARfTL3yvz6ulm89C3reOCKb5WaAAh4Hlebjren/D7kingQpAPhUZzp6did28BG9TLe4puY2QK+J60ejcCW6kmrRKP9mpxOLCVahr34PgHLyyDPtXSl10AAAAASUVORK5CYII=">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVQ4jcWUQUsbURCAv3nJ0qsehGYPoSappTkJFtqbPVZECwoiCPZnaKDGFy3Sc39BLS30L/Sk/gERFKqIMcGGBS8epJ7cN73UsNms2QUPDuxhZ7755s1bWHiM6KyVFztr5cUsbD4LJKIroAr8TGXTgD+2NGYcJwAY99K3reNBvEkTmlAWui9O5lP5NADRrlCIyO/DBxU7H0dfiJHeFV1Y9T+1fw8UBvXSZ0VK/WV9DozHkgcgp/0mPfMbzVoeQNFrYJ4sVwDjoPEhDtV694QAga28xekPRf0M0mhcglv2N1q/eoQAQa0yovnwGyLvMsp2vNtwaWSrHdwl+j6KWkzgRmsgG9x/BQ6V9ULubEssLlroaxCLC0Pva9KwKKaO7bgsUQhgcuFcmhDj3if2Jo/X2Vjq5v8TMUo24bl9NoQwGUkdGeUNxk0A+xHjZHu1OJwqfOJkBvAARfTL3yvz6ulm89C3reOCKb5WaAAh4Hlebjren/D7kingQpAPhUZzp6did28BG9TLe4puY2QK+J60ejcCW6kmrRKP9mpxOLCVahr34PgHLyyDPtXSl10AAAAASUVORK5CYII=">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVQ4jcWUQUsbURCAv3nJ0qsehGYPoSappTkJFtqbPVZECwoiCPZnaKDGFy3Sc39BLS30L/Sk/gERFKqIMcGGBS8epJ7cN73UsNms2QUPDuxhZ7755s1bWHiM6KyVFztr5cUsbD4LJKIroAr8TGXTgD+2NGYcJwAY99K3reNBvEkTmlAWui9O5lP5NADRrlCIyO/DBxU7H0dfiJHeFV1Y9T+1fw8UBvXSZ0VK/WV9DozHkgcgp/0mPfMbzVoeQNFrYJ4sVwDjoPEhDtV694QAga28xekPRf0M0mhcglv2N1q/eoQAQa0yovnwGyLvMsp2vNtwaWSrHdwl+j6KWkzgRmsgG9x/BQ6V9ULubEssLlroaxCLC0Pva9KwKKaO7bgsUQhgcuFcmhDj3if2Jo/X2Vjq5v8TMUo24bl9NoQwGUkdGeUNxk0A+xHjZHu1OJwqfOJkBvAARfTL3yvz6ulm89C3reOCKb5WaAAh4Hlebjren/D7kingQpAPhUZzp6did28BG9TLe4puY2QK+J60ejcCW6kmrRKP9mpxOLCVahr34PgHLyyDPtXSl10AAAAASUVORK5CYII=">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVQ4jcWUP2sUQRjGf+/+4VotbMZCEFRSmAgGki4WFoZDBYUQEPQObo7dTxACRk5QsLa44r3iUBT8ClaHX0AEUySI1RWCKQWrc8YiF5msu7dbCD4wxTzvM795ZwYG/oestdvW2u0m2aRJSER2AA+8q83WBay1l0XkcD5dUtWDRfmoDhhF0VYwvV+brwt470PgVmWwCTDP8yvA1cBa7vV6S4vWCIC19oWIXCypXwKuFbxPwJeS7FdV3U0AROQHx/dTewXzDYqbOODJnw4Bsiy74Zx7C5gG0FDfvfcPR6PR+1NAgG63ey5N09fArYawCfBAVb+dGKeOOB6Pj4wxbeDx/BhVciKyZ4y5GcL+6vBEWZadd85Nq+qAT5LkwnA4nBYLpY/gvb+3AAYgs9nsblmhCninYP2cj1DNgJ1O5wywEVj7wDpwHfgY+Bt5np+tBaZpehtIOf5dXrZarVVV/ayqB8aYNeAp8AtInXPt4vqy72sTmAKPVHUSFgaDwQwY9Pv9D8Ar7/0m8GZhh1EUPYvjeKUIC6WqkziOV0TkeVXmn+k31u9yotLaCb4AAAAASUVORK5CYII=" alt="">
                </div>
            </div>
        </div>

        <div class="card-img"><img src="${urlCard}" alt=""></div>
        <span class="b-name">${name}</span>
    </div>
        `}
    }) 
}

//renderFiltered()

for(let i = 0; i < category.length; i++){
    category[i].addEventListener('click', ({target}) => {
        if(target.classList.contains('liActive')){
            target.classList.remove('liActive')
            renderCards()
            return
        }
        renderFiltered(target.textContent);
        target.classList.add('liActive')

        for(let i = 0; i < category.length; i++){
            if(category[i] != target){
                category[i].classList.remove('liActive')
            }
        }
    })
}

/* */

/* SAVE ANIME IN LIST */

/*getting elementr*/

const list = document.querySelector('#list')
const saveBtn = document.querySelectorAll('.save')

const myList = []

/* */

/* elements push */

saveBtn.forEach((element, i) => {
    element.addEventListener('click', () => {
    //    myList.forEach((item, itemI) => {
            
    //    }) 

       myList.push(cards.filter( (item, itemI) => {
        if(itemI === i){
            console.log(item);
            return item
        }
       }));

       console.log(myList);
    })
})

list.addEventListener('click', () => {
    animesSec.innerHTML = ''
    myList.forEach(({ name, genre, ranking, studio, linkCard, urlCard}) => {
  
        animesSec.innerHTML += `
        <div class="banner">
        <span class="ranking">${ranking}</span>

        <div class="b-info">
            <div class="save"></div>
            <div class="play">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAABiUlEQVRYhe3XsUsbYRjH8e/7XoaOYp1eccjWQfCONwYCLvoXuByUIi7i7Owgbf+Duru5GSSzQqmDFOG4Qwh0EAk4ZXQUchyvk9AhDZL3vUuH5zMePD++BA4uIIQQQgghZlI+x3EcL0VRdAHsAI/ASZ7n/SBlM0Q+x8aY70qpfUADK0BqjFk1xvwcj8dlkMIptM+xUqo95fEhkCdJsuGzPYtX9AyftNZ31tqjOsbrigb4APyw1g56vd5yyOE6o9/sTiaTe2vtVqjBJqIB1oBfnU7nW5qmXi8/NBcN0HLOfR2NRtfdbvejz1CT0W92qqq6ieN4ad6BRUQDrGut03mPFxVdRVF0P+/xIqJLpdRelmXZvAOtkDXv8KS1/pJl2W+fkcainXOXZVkeDofDZ9+tJqJfgOOiKE5DDdYd/Qf4nOf5MORobS+ic+4c2AwdDP6/9GTKs2fn3EFRFAPP7X/y/Z4+A/7+2L8F4jqDwfPvFkCSJBtKqW2t9UO73b7q9/tViDAhhBBCiP/FKyrgYUGy5bTVAAAAAElFTkSuQmCC">
            </div>
            <div class="b-info-wrapper">
                <span class="b-info-studio">${studio}</span>
                <span class="b-info-genre">${genre}</span>
                <div class="b-info-stars">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVQ4jcWUQUsbURCAv3nJ0qsehGYPoSappTkJFtqbPVZECwoiCPZnaKDGFy3Sc39BLS30L/Sk/gERFKqIMcGGBS8epJ7cN73UsNms2QUPDuxhZ7755s1bWHiM6KyVFztr5cUsbD4LJKIroAr8TGXTgD+2NGYcJwAY99K3reNBvEkTmlAWui9O5lP5NADRrlCIyO/DBxU7H0dfiJHeFV1Y9T+1fw8UBvXSZ0VK/WV9DozHkgcgp/0mPfMbzVoeQNFrYJ4sVwDjoPEhDtV694QAga28xekPRf0M0mhcglv2N1q/eoQAQa0yovnwGyLvMsp2vNtwaWSrHdwl+j6KWkzgRmsgG9x/BQ6V9ULubEssLlroaxCLC0Pva9KwKKaO7bgsUQhgcuFcmhDj3if2Jo/X2Vjq5v8TMUo24bl9NoQwGUkdGeUNxk0A+xHjZHu1OJwqfOJkBvAARfTL3yvz6ulm89C3reOCKb5WaAAh4Hlebjren/D7kingQpAPhUZzp6did28BG9TLe4puY2QK+J60ejcCW6kmrRKP9mpxOLCVahr34PgHLyyDPtXSl10AAAAASUVORK5CYII=">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVQ4jcWUQUsbURCAv3nJ0qsehGYPoSappTkJFtqbPVZECwoiCPZnaKDGFy3Sc39BLS30L/Sk/gERFKqIMcGGBS8epJ7cN73UsNms2QUPDuxhZ7755s1bWHiM6KyVFztr5cUsbD4LJKIroAr8TGXTgD+2NGYcJwAY99K3reNBvEkTmlAWui9O5lP5NADRrlCIyO/DBxU7H0dfiJHeFV1Y9T+1fw8UBvXSZ0VK/WV9DozHkgcgp/0mPfMbzVoeQNFrYJ4sVwDjoPEhDtV694QAga28xekPRf0M0mhcglv2N1q/eoQAQa0yovnwGyLvMsp2vNtwaWSrHdwl+j6KWkzgRmsgG9x/BQ6V9ULubEssLlroaxCLC0Pva9KwKKaO7bgsUQhgcuFcmhDj3if2Jo/X2Vjq5v8TMUo24bl9NoQwGUkdGeUNxk0A+xHjZHu1OJwqfOJkBvAARfTL3yvz6ulm89C3reOCKb5WaAAh4Hlebjren/D7kingQpAPhUZzp6did28BG9TLe4puY2QK+J60ejcCW6kmrRKP9mpxOLCVahr34PgHLyyDPtXSl10AAAAASUVORK5CYII=">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVQ4jcWUQUsbURCAv3nJ0qsehGYPoSappTkJFtqbPVZECwoiCPZnaKDGFy3Sc39BLS30L/Sk/gERFKqIMcGGBS8epJ7cN73UsNms2QUPDuxhZ7755s1bWHiM6KyVFztr5cUsbD4LJKIroAr8TGXTgD+2NGYcJwAY99K3reNBvEkTmlAWui9O5lP5NADRrlCIyO/DBxU7H0dfiJHeFV1Y9T+1fw8UBvXSZ0VK/WV9DozHkgcgp/0mPfMbzVoeQNFrYJ4sVwDjoPEhDtV694QAga28xekPRf0M0mhcglv2N1q/eoQAQa0yovnwGyLvMsp2vNtwaWSrHdwl+j6KWkzgRmsgG9x/BQ6V9ULubEssLlroaxCLC0Pva9KwKKaO7bgsUQhgcuFcmhDj3if2Jo/X2Vjq5v8TMUo24bl9NoQwGUkdGeUNxk0A+xHjZHu1OJwqfOJkBvAARfTL3yvz6ulm89C3reOCKb5WaAAh4Hlebjren/D7kingQpAPhUZzp6did28BG9TLe4puY2QK+J60ejcCW6kmrRKP9mpxOLCVahr34PgHLyyDPtXSl10AAAAASUVORK5CYII=">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVQ4jcWUQUsbURCAv3nJ0qsehGYPoSappTkJFtqbPVZECwoiCPZnaKDGFy3Sc39BLS30L/Sk/gERFKqIMcGGBS8epJ7cN73UsNms2QUPDuxhZ7755s1bWHiM6KyVFztr5cUsbD4LJKIroAr8TGXTgD+2NGYcJwAY99K3reNBvEkTmlAWui9O5lP5NADRrlCIyO/DBxU7H0dfiJHeFV1Y9T+1fw8UBvXSZ0VK/WV9DozHkgcgp/0mPfMbzVoeQNFrYJ4sVwDjoPEhDtV694QAga28xekPRf0M0mhcglv2N1q/eoQAQa0yovnwGyLvMsp2vNtwaWSrHdwl+j6KWkzgRmsgG9x/BQ6V9ULubEssLlroaxCLC0Pva9KwKKaO7bgsUQhgcuFcmhDj3if2Jo/X2Vjq5v8TMUo24bl9NoQwGUkdGeUNxk0A+xHjZHu1OJwqfOJkBvAARfTL3yvz6ulm89C3reOCKb5WaAAh4Hlebjren/D7kingQpAPhUZzp6did28BG9TLe4puY2QK+J60ejcCW6kmrRKP9mpxOLCVahr34PgHLyyDPtXSl10AAAAASUVORK5CYII=">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVQ4jcWUP2sUQRjGf+/+4VotbMZCEFRSmAgGki4WFoZDBYUQEPQObo7dTxACRk5QsLa44r3iUBT8ClaHX0AEUySI1RWCKQWrc8YiF5msu7dbCD4wxTzvM795ZwYG/oestdvW2u0m2aRJSER2AA+8q83WBay1l0XkcD5dUtWDRfmoDhhF0VYwvV+brwt470PgVmWwCTDP8yvA1cBa7vV6S4vWCIC19oWIXCypXwKuFbxPwJeS7FdV3U0AROQHx/dTewXzDYqbOODJnw4Bsiy74Zx7C5gG0FDfvfcPR6PR+1NAgG63ey5N09fArYawCfBAVb+dGKeOOB6Pj4wxbeDx/BhVciKyZ4y5GcL+6vBEWZadd85Nq+qAT5LkwnA4nBYLpY/gvb+3AAYgs9nsblmhCninYP2cj1DNgJ1O5wywEVj7wDpwHfgY+Bt5np+tBaZpehtIOf5dXrZarVVV/ayqB8aYNeAp8AtInXPt4vqy72sTmAKPVHUSFgaDwQwY9Pv9D8Ar7/0m8GZhh1EUPYvjeKUIC6WqkziOV0TkeVXmn+k31u9yotLaCb4AAAAASUVORK5CYII=" alt="">
                </div>
            </div>
        </div>

        <div class="card-img"><img src="${urlCard}" alt=""></div>
            <span class="b-name">${name}</span>
    </div>
        `
    }) 
})


/* */

