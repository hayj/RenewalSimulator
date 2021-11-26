// Dynamic Content variables and sample values
    Enabler.setProfileId(10464837);
    var devDynamicContent = {};

    devDynamicContent.Renault_Chantier_DCO_Feuille_1 = [{}];
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0]._id = 0;
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].Unique_ID = 1;
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].Reporting_Label = "Arkana_etech_offre1_Mars_Decouvrez_300x250";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].Start_Date = {};
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].Start_Date.RawValue = "05/01/2021";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].Start_Date.UtcValue = 1619852400000;
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].End_Date = {};
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].End_Date.RawValue = "05/31/2021";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].End_Date.UtcValue = 1622444400000;
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].Default = false;
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].Active = true;
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].piste = "loyer";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].logo = "Renault_Logo_Noir_2021.png";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].nouveau = "NOUVEAU";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].modele = "RENAULT ARKANA";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].imgModele = "Arkana_Noir.jpg";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].accrocheFirst = "E-TECH HYBRIDE";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].accrocheLast = "E-TECH HYBRIDE";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].CTAintro = true;
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].CTA = "d\u00E9couvrez-le";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].easypack = false;
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].imgEasypack = "easyPack300X250.png";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].txtEasypack = "4 ANS DE GARANTIE, ASSISTANCE 24\/24, ENTRETIEN ET PIECES D\'USURE INCLUS POUR 1 \u20AC \/ MOIS<sup>(2)<\/sup>";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].offre = false;
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].txtOffre = "hybride par nature";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].mention = "*voir conditions sur Renault.fr";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].txtMention = "&nbsp;";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].surOffre = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u00E0 partir de";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].prix = "239\u20AC";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].supPrix = "\/mois<sup>*<\/sup>";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].subPrix = "lld 49 mois<br>1er loyer de 3 200 \u20AC<sup>*<\/sup>";
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].Exit_URL = {};
    devDynamicContent.Renault_Chantier_DCO_Feuille_1[0].Exit_URL.Url = "https://www.renault.fr/vehicules-electriques/zoe/promotion-zoe.html";
    Enabler.setDevDynamicContent(devDynamicContent);



// Reference to the creative's various properties and elements.
var creative = {};


/**
 * Called on the window load event.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

/**
 * Set up references to DOM elements.
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('main-container');
  creative.dom.exit = document.getElementById('exit');
  creative.dom.image0 = document.getElementById('main-img-0');
}

/**
 * The Enabler is now initialized and any extra modules have been loaded.
 */
var isNouveau = false;
var accrocheFirst = false;
var accrocheLast = false;
var isCTAintro = false;

var easypack = false;
var offre = false;

function init() {
  // Use dynamicContent once Enabler is instanciated
  // document.querySelector('#main-img-0').style.backgroundImage = 'url("'+dynamicContent.Profile[0].image.Url+'")';\
  easyCheck = dynamicContent.Renault_Chantier_DCO_Feuille_1[0].easypack;

  if (!easyCheck) {
    $("#easyIMG").css("display", "none");
  }

  

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].logo)){  
    $('#logo').attr('src','https://s0.2mdn.net/ads/richmedia/studio/47334005/'+dynamicContent.Renault_Chantier_DCO_Feuille_1[0].logo);
  }else{
    $('#logo').attr('src','https://s0.2mdn.net/ads/richmedia/studio/47334005/logoRenault_FR.svg');
  }

  
  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].nouveau)){
    isNouveau = true;  
    $('#txtNouveau').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].nouveau);
  }else{
    isNouveau = false;
    $('#txtNouveau').html('');
  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].modele)){
    $('#txtModele').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].modele);
  }else{
    $('#txtModele').html('');
  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].imgModele)){
    $('#visuel').attr('src','https://s0.2mdn.net/ads/richmedia/studio/47334005/'+dynamicContent.Renault_Chantier_DCO_Feuille_1[0].imgModele);
  }else{
    $('#visuel').attr('src','');
  }
  
  
  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].accrocheFirst)){
    accrocheFirst = true;
    $('#txtAccroche').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].accrocheFirst);
  }else{
    accrocheFirst = false;
  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].accrocheLast)){
    accrocheLast = true;
    $('#txtAccroche').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].accrocheLast);
  }else{
    accrocheLast = false;
  }

  
  if(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].CTAintro){
    isCTAintro = true;
    // $('#visuel').css({width:'78%', bottom:'42px', right:'-28px'});
  }else{
    isCTAintro = false;
  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].CTA)){
    $('.txtCTA').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].CTA);
    if(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].CTA.length > 18){
      $('.txtCTA').addClass('CTA2');
    }
  }else{
    $('.txtCTA').html('');
  }

  if(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].easypack){
    easypack = true;
  }else{
    easypack = false;
  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].imgEasypack)){
    $('#easyIMG').attr('src','https://s0.2mdn.net/ads/richmedia/studio/47334005/'+dynamicContent.Renault_Chantier_DCO_Feuille_1[0].imgEasypack);
  }else{
    $('#easyIMG').attr('src', '');
  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].txtEasypack)){
    $('#subEasy').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].txtEasypack);
  }else{
    $('#subEasy').html('');
  }

  if(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].offre){
    offre = true;
  }else{
    offre = false;
  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].txtOffre)){
    $('#txtPromo').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].txtOffre);
  }else{
    $('#txtPromo').html('');
  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].mention)){
    $('#mention').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].mention);
    $('#mention').on('mouseenter',function(){

    });

  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].surOffre)){
    $('#surOffre').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].surOffre);
  }else{
    $('#surOffre').html('');
  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].prix)){
    $('#prix').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].prix);
  }else{
    $('#prix').html('');
  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].supPrix)){
    $('#supPrix').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].supPrix);
  }else{
    $('#supPrix').html('');
  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].subPrix)){
    $('#subPrix').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].subPrix);
  }else{
    $('#subPrix').html('');
  }

  if(checkFull(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].Exit_URL)){
    // $('.txtCTA').html(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].Exit_URL);
  }else{
    // $('.txtCTA').html('');
  }



  $('#main-container').animate({'background-color' : '#fff'});
  $('#contLoad').animate({'opacity' : '0'},function(){
    setTimeout(function(){
      $('#contLoad').css({display:'none'});
    },40);
  });
  
  addListeners();
  // Polite loading
  if (Enabler.isVisible()) {
    show();
    
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

/**
 * Add appropriate listeners after the creative's DOM has been set up.
 */
function addListeners() {
  // creative.dom.exit.addEventListener('click', exitClickHandler);
  document.getElementById('main-container').addEventListener('click', ctaHandler); 
}


function ctaHandler() { 
  var newUrl = addSuffix(dynamicContent.Renault_Chantier_DCO_Feuille_1[0].Exit_URL.Url);
  Enabler.exitOverride("click Exit", newUrl);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.exit.style.display = "block";
  animScreen01(isNouveau, isCTAintro, accrocheFirst);
  // creative.dom.image0.style.visibility  = 'visible';
}

function checkFull(elem){
  if(elem != ''){
    return true;
  }else{
    return false;
  }
}

function animScreen01(isNouveauFirst, isCTAFirst, isAccrocheFirst){
  var timer = 0;
  if(isNouveauFirst){
    $('#txtNouveau').animate({'left':'6px'},500, 'ease-out');
  }

  setTimeout(function(){
    $('#txtModele').animate({'left':'5px'},500, 'ease-out',function(){
      if(isAccrocheFirst){
        selectAccroche01(timer, isCTAFirst, offre, easypack, isNouveau);
      }else{
        if(isCTAFirst){
          selectCTA01(timer, isCTAFirst, offre, easypack, isNouveau);
        }else{
          selecFinal01(timer, isCTAFirst, offre, easypack, isNouveau);
        }
      }
    });
  },500);
}

function selectAccroche01(timer, isCTAFirst, offre, easypack, isNouveau){
  $('#txtAccroche').animate({'left':'5px'},500, 'ease-out',function(){
    if(isCTAFirst){
      selectCTA01(timer, isCTAFirst, offre, easypack, isNouveau)
    }else{
      selecFinal01(timer, isCTAFirst, offre, easypack, isNouveau);
    }
  });
}

function selectCTA01(timer, isCTAFirst, offre, easypack, isNouveau){
  setTimeout(function(){
    // $('#visuel').animate({width:'78%', bottom:'34px', right:'-28px'},300, 'ease-out');
    // $('#visuel').animate({'transform' :'translate3d(0px, 79px, 0px) scale(0.9)'},500, 'ease-out');
    $('#CTA').animate({'top':'33px'},500, 'ease-out',function(){
      selecFinal01(timer, isCTAFirst, offre, easypack, isNouveau);
    });
  },500);
}

function selecFinal01(timer, isCTAFirst, offre, easypack, isNouveau){
  setTimeout(function(){
    if(easypack){
      animEasyPack(isCTAFirst, offre);
    }

    if(!easypack && offre){
      animPromo(isCTAFirst, "screen01");
    }

    if(!easypack && !offre){
      animScreenFinal(isNouveau, accrocheLast, "screen01");
    }
  },2500);
}

function animEasyPack(isCTAFirst, isOffre){
  $('#screenEasyPack').animate({'top':'0'},500, 'ease-out');

  if(!isCTAFirst){
    setTimeout(function(){
      $('#CTA').animate({'top':'33px'},500, 'ease-out',function(){
        setTimeout(function(){
          if(isOffre){
            animPromo(true, "screenEasyPack");
          }else{
            animScreenFinal(isNouveau, accrocheLast, "screenEasyPack");
          }
        },2500);
      });
    },500);
  }else{
    setTimeout(function(){
      if(isOffre){
        animPromo(true, "screenEasyPack");
      }else{
        animScreenFinal(isNouveau, accrocheLast, "screenEasyPack");
      }
    },2500);
  }
}

function animPromo(isCTAFirst, prevScreen){
  var timer = 0;
  if(prevScreen==="screenEasyPack"){
    $('#screenEasyPack').animate({'top':'100%'},500, 'ease-out');
    $('#screenPromo').animate({'top':'0'},500, 'ease-out');
  }else{
    $('#screenPromo').animate({'top':'0'},500, 'ease-out');
  }

  setTimeout(function(){
    $('#CTA').animate({'top':'33px'},500, 'ease-out');
  },500);

  setTimeout(function(){
    $('#mention').animate({'top':'68px'},300, 'ease-out',function(){
      setTimeout(function(){
          animScreenFinal(isNouveau, accrocheLast, "screenPromo");
      },2500);
    });
  },1000);
}

function animScreenFinal(isNouveauLast, isAccrocheFinal, screenPrec){
  // if(!accrocheLast){
   if(!accrocheLast){
    $('#txtAccroche').html('');
  }
  // }

  if(screenPrec === "screen01"){

    // $('#visuel').animate({'transform' :'translate3d(0px, 79px, 0px) scale(0.9)'},500, 'ease-out');

    if(isNouveauLast){
      $('#txtNouveau').animate({'left':'6px'},500, 'ease-out');
    }
    
    $('#txtModele').animate({'left':'5px'},500, 'ease-out');

    // if(isAccrocheFinal){
    //   $('#txtAccroche').animate({'left':'10px'},500, 'ease-out');
    // }
    
    setTimeout(function(){
       $('#surOffre').animate({'top':'17px'},500, 'ease-out');
       $('#contPrix').animate({'top':'6px'},500, 'ease-out');
    },500);

    setTimeout(function(){
       $('#subPrix').animate({'left':'20px'},500, 'ease-out');
    },1000);

    setTimeout(function(){
      $('#CTA').animate({'top':'33px'},500, 'ease-out');
    },1500);

    setTimeout(function(){
      $('#mention').animate({'top':'68px'},500, 'ease-out');
    },2000);
    
  }else{
    // $('#visuel').animate({'transform' :'translate3d(0px, 79px, 0px) scale(0.9)'},500, 'ease-out',function(){
    $('#visuel').animate({'transform' :'translate3d(0px, 0px, 0px) scale(1)'},500, 'ease-out',function(){
      $('#'+screenPrec).animate({'top':'100%'},500, 'ease-out');

      // if(isNouveauLast){
      //   $('#txtNouveau').animate({'left':'10px'},500, 'ease-out');
      // }
      
      $('#txtModele').animate({'left':'5px'},500, 'ease-out');

      // if(isAccrocheFinal){
      //   $('#txtAccroche').animate({'left':'10px'},500, 'ease-out');
      // }

      setTimeout(function(){
        $('#surOffre').animate({'top':'17px'},500, 'ease-out');
        $('#contPrix').animate({'top':'6px'},500, 'ease-out');
        $('#mention').animate({'top':'68px'},500, 'ease-out');
      },500);

      setTimeout(function(){
        $('#subPrix').animate({'left':'20px'},500, 'ease-out');
      },1000);
    });
    
  }
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
  Enabler.exit('BackgroundExit');
}

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);

function addSuffix(url) {
  var urlSuffix = Enabler.getParameter('exit_suffix');
  var _url = '';
  _url = url;

  if (url) {
    var symbol = '?';
    if (url.indexOf('?') > -1) {
      symbol = '&';
    }
    _url = url + symbol + urlSuffix;
  }
  return _url;
}