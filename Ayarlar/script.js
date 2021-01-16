//Javascript Document
$(document).ready(function(){
	/* UFAK CİHAZLAR İÇİN MENU ACMA BUTONUNUN İŞLEMELERİ >>>>>>>>>> */
	$("#HeaderMenuAcmaButonuAlani").on("click", function(){
		$("#HeaderMenuAcmaButonuMenuSinirlamaAlani").slideToggle("slow");
	});
	/* UFAK CİHAZLAR İÇİN MENU ACMA BUTONUNUN İŞLEMELERİ <<<<<<<<<< */

	/* MAIN VE FOOTER ALANI İÇ ÜSTTEN BOŞLUK HESAPLAMA >>>>>>>>>> */

	var DokumanGenisligi		=		$(window).outerWidth();

		if(!$("#HeaderMesajAlani").length){
			if(DokumanGenisligi>=1200){/* XL */
				var OsfetDegeri		=	108;
			}else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){/* M */
				var OsfetDegeri		=	98;
			}else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){/* M */
				var OsfetDegeri		=	88;
			}else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){/* S */
				var OsfetDegeri		=	78;
			}else if(DokumanGenisligi<=574){/* XS */
				var OsfetDegeri		=	78;
			}
		}else{
			if(DokumanGenisligi>=1200){/* XL */
				var OsfetDegeri		=	148;
			}else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){/* M */
				var OsfetDegeri		=	138;
			}else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){/* M */
				var OsfetDegeri		=	118;
			}else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){/* S */
				var OsfetDegeri		=	108;
			}else if(DokumanGenisligi<=574){/* XS */
				var OsfetDegeri		=	103;
			}	
		}
		$("main").css("top", OsfetDegeri);
		$("footer").css("top", OsfetDegeri);

		$(window).resize(function(){
			var DokumanGenisligi		=		$(window).outerWidth();

			if(!$("#HeaderMesajAlani").length){
				if(DokumanGenisligi>=1200){/* XL */
					var OsfetDegeri		=	108;
				}else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){/* M */
					var OsfetDegeri		=	98;
				}else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){/* M */
					var OsfetDegeri		=	88;
				}else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){/* S */
					var OsfetDegeri		=	78;
				}else if(DokumanGenisligi<=574){/* XS */
					var OsfetDegeri		=	78;
				}
			}else{
				if(DokumanGenisligi>=1200){/* XL */
					var OsfetDegeri		=	148;
				}else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){/* M */
					var OsfetDegeri		=	138;
				}else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){/* M */
					var OsfetDegeri		=	118;
				}else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){/* S */
					var OsfetDegeri		=	108;
				}else if(DokumanGenisligi<=574){/* XS */
					var OsfetDegeri		=	103;
				}	
			}
			$("main").css("top", OsfetDegeri);
			$("footer").css("top", OsfetDegeri);
		});
		/* MAIN VE FOOTER ALANI İÇ ÜSTTEN BOŞLUK HESAPLAMA <<<<<<<<<< */

		/* SSS İCERİK GÖSTER / GİZLE >>>>>>>>>> */
		$.SSSIceriginiGoster	=	function(ElemanID){
			var SoruIDsi			=	ElemanID; 
			var IslenecekAlan		=	"#" + SoruIDsi;

			$(".TamSayfaCerceveAlaniIciSSSSoruIcerigiAlani").slideUp();
			$(IslenecekAlan).parent().find(".TamSayfaCerceveAlaniIciSSSSoruIcerigiAlani").slideToggle();
		}
		/* SSS İCERİK GÖSTER / GİZLE <<<<<<<<<< */

		/* ALIŞVERİŞ SEPETİ FATURA VE TESLİMAT ADRESLERİ FORMU GÖNDER İŞLEMİ >>>>>>>>>> */
		$.AlisverisSepetiFormGonder	=	function(){
			$("#AlisverisSepetiFormu").submit();
		}
		/* ALIŞVERİŞ SEPETİ FATURA VE TESLİMAT ADRESLERİ FORMU GÖNDER İŞLEMİ <<<<<<<<<< */


		/* ALIŞVERİŞ SEPETİ ÖDEME SİSTEMLERİ ALANLARI AÇMA/ KAPATMA İŞLEMİ >>>>>>>>>> */
		$.AlisverisSepetiOdemeSayfasiIcinKrediKartiSistemiSecildi		=	function(){
			$("#KrediKartiIleOdemeAlani").css("display","block");
			$("#MobilOdemeiIleOdemeAlani").css("display","none");
			$("#BankaHavalesiIleOdemeAlani").css("display","none");
		}

		$.AlisverisSepetiOdemeSayfasiIcinMobilOdemeSistemiSecildi		=	function(){
			$("#KrediKartiIleOdemeAlani").css("display","none");
			$("#MobilOdemeiIleOdemeAlani").css("display","block");
			$("#BankaHavalesiIleOdemeAlani").css("display","none");
		}

		$.AlisverisSepetiOdemeSayfasiIcinBankaHavalesiSistemiSecildi	=	function(){
			$("#KrediKartiIleOdemeAlani").css("display","none");
			$("#MobilOdemeiIleOdemeAlani").css("display","none");
			$("#BankaHavalesiIleOdemeAlani").css("display","block");
		}
		/* ALIŞVERİŞ SEPETİ ÖDEME SİSTEMLERİ ALANLARI AÇMA/ KAPATMA İŞLEMİ <<<<<<<<<< */

		/* >>>>>>>>>>  URUN DETAY SAYFASİ RESİM DEĞİTRİME İŞLEMİ >>>>>>>>>>  */
		$.UrunDetaySayfasiIcinResimDegistir		=	function(ResimDegeri){
			var DegisecekResimDoyasiYolu	=	"Resimler/UrunResimleri/Erkek/";
			var ResimOlustur				=	DegisecekResimDoyasiYolu + ResimDegeri;


			$("#BuyukResim").attr("src",ResimOlustur);
			
		}
		/* <<<<<<<<<< URUN DETAY SAYFASİ RESİM DEĞİTRİME İŞLEMİ <<<<<<<<<< */


		/* >>>>>>>>>> SLAYT ALANİ >>>>>>>>>> */
		$(function(){
			var SlaytElementi					=	$(".SlaytAlaniKapsayicisi");
			var SlaytListeOlusturmaElementi		=	SlaytElementi.find(".SlaytAlaniResimler");
			var SlaytListesiUzunlugu			=	SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
			var SlaytIcinDokumanGenisligi		=	SlaytElementi.outerWidth();
			var ToplamGenislik					=	SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;
			var ResimSirasi						=	0;
			var KayacakAlan						=	0;

			SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik);

			$(window).resize(function(){
				SlaytElementi					=	$(".SlaytAlaniKapsayicisi");
				SlaytListeOlusturmaElementi		=	SlaytElementi.find(".SlaytAlaniResimler");
				SlaytListesiUzunlugu			=	SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
				SlaytIcinDokumanGenisligi		=	SlaytElementi.outerWidth();
				ToplamGenislik					=	SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;

				SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik).css("margin-left","-" + (ResimSirasi * SlaytIcinDokumanGenisligi) +"px");
			});

			$.OtomatikDegistir			=	function(){
				if(ResimSirasi < SlaytListesiUzunlugu - 1){
					ResimSirasi++;
					KayacakAlan			=	"-" + (ResimSirasi * SlaytIcinDokumanGenisligi) +"px";
				}else{
					ResimSirasi			=	0;
					KayacakAlan			=	0;
				}


				SlaytListeOlusturmaElementi.stop().animate({
					marginLeft:KayacakAlan
				}, 500, function(){
					SlaytElementi					=	$(".SlaytAlaniKapsayicisi");
					SlaytListeOlusturmaElementi		=	SlaytElementi.find(".SlaytAlaniResimler");
					SlaytListesiUzunlugu			=	SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
					SlaytIcinDokumanGenisligi		=	SlaytElementi.outerWidth();
					ToplamGenislik					=	SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;

					SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik).css("margin-left","-" + (ResimSirasi * SlaytIcinDokumanGenisligi) +"px");
				});

			}

			var SlaytOynat		= setInterval("$.OtomatikDegistir()",3000);
		});
		/* <<<<<<<<<< SLAYT ALANİ <<<<<<<<<< */


});


